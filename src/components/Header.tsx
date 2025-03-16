import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Meu SaaS
        </Link>
        <nav className="flex space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
                Dashboard
              </Link>
              {session.user.role === "ADMIN" && (
                <Link href="/admin/dashboard" className="text-gray-600 hover:text-gray-800">
                  Admin
                </Link>
              )}
              <Link href="/auth/signout" className="text-gray-600 hover:text-gray-800">
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="text-gray-600 hover:text-gray-800">
                Login
              </Link>
              <Link
                href="/auth/signup" // Crie esta rota se necessário
                className="text-gray-600 hover:text-gray-800"
              >
                Registrar
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
