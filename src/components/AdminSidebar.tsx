import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin/dashboard"
              className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users" // Crie esta rota se necessário
              className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              Usuários
            </Link>
          </li>
          <li>
            <Link
              href="/admin/subscriptions" // Crie esta rota se necessário
              className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              Assinaturas
            </Link>
          </li>
          <li>
            <Link href="/auth/signout" className="block px-6 py-3 text-gray-600 hover:bg-gray-200 hover:text-gray-800">
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
