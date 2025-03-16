import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/signin");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <Link
                href="/admin/dashboard"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800">
                Usuários
              </Link>
            </li>
            <li>
              <Link
                href="/auth/signout"
                className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
              >
                Sair
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
