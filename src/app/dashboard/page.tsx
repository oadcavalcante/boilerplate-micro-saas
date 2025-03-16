import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { subscription: true },
  });

  let subscriptionDetails = null;
  if (user?.subscription?.stripeId) {
    subscriptionDetails = await stripe.subscriptions.retrieve(user.subscription.stripeId);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo, {user?.name || user?.email}!</h1>

        {/* Informações do usuário */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Suas Informações</h2>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Role:</span> {session.user.role}
          </p>
        </section>

        {/* Informações da assinatura */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Sua Assinatura</h2>
          {user?.subscription ? (
            <div>
              <p className="text-gray-600">
                <span className="font-medium">Plano:</span> {user.subscription.plan}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Status:</span> {subscriptionDetails?.status || user.subscription.status}
              </p>
              {subscriptionDetails?.cancel_at_period_end ? (
                <p className="text-red-600">
                  Sua assinatura será cancelada em{" "}
                  {new Date(subscriptionDetails.current_period_end * 1000).toLocaleDateString()}.
                </p>
              ) : (
                <p className="text-gray-600">
                  Próxima renovação: {new Date(subscriptionDetails?.current_period_end! * 1000).toLocaleDateString()}
                </p>
              )}
            </div>
          ) : (
            <div>
              <p className="text-gray-600">Você não tem uma assinatura ativa.</p>
              <a
                href="/subscribe" // Crie esta rota se quiser
                className="inline-block mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Assinar agora
              </a>
            </div>
          )}
        </section>

        {/* Botão de logout */}
        <section>
          <a href="/auth/signout" className="inline-block bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
            Sair
          </a>
        </section>
      </div>
    </div>
  );
}
