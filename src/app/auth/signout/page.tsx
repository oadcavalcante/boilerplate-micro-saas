import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";

export default async function SignOutPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/signin");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sair</h1>
        <p className="text-center text-gray-600 mb-6">Tem certeza que deseja sair?</p>
        <SignOutButton />
        <p className="mt-4 text-center text-sm text-gray-600">
          Mudou de ideia?{" "}
          <a href="/dashboard" className="text-blue-600 hover:underline">
            Voltar ao dashboard
          </a>
        </p>
      </div>
    </div>
  );
}
