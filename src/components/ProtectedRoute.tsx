import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
  requiredRole?: "USER" | "ADMIN";
};

export default async function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  if (requiredRole && session.user.role !== requiredRole) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
