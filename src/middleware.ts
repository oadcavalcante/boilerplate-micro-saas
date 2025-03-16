import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const role = req.nextauth.token?.role;

        if (pathname.startsWith("/admin") && role !== "ADMIN") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"],
};