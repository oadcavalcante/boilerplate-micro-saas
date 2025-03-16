import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import type { DefaultSession, NextAuthOptions } from "next-auth";

declare module "next-auth" {
    interface User {
        role?: string;
    }
    interface Session {
        user: {
            id: string;
            role?: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role?: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });
                if (!user || !user.password || !await bcrypt.compare(credentials.password, user.password)) return null;
                return { id: user.id, email: user.email, name: user.name, role: user.role };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            async profile(profile) {
                const user = await prisma.user.upsert({
                    where: { email: profile.email },
                    update: {},
                    create: {
                        email: profile.email,
                        name: profile.name,
                        role: "USER",
                    },
                });
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role || "USER",
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
};

export default NextAuth(authOptions);