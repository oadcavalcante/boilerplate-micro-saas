import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "ADMIN") {
    return <div>Acesso Negado</div>;
  }

  const users = await prisma.user.findMany({
    include: { subscription: true },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <p>Email: {user.email}</p>
            <p>Plano: {user.subscription?.plan || "Nenhum"}</p>
            <p>Status: {user.subscription?.status || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
