import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import type { Session } from "next-auth";

export default async function SubscribePage() {
  const session = (await getServerSession(authOptions)) as Session | null;
  if (!session) redirect("/auth/signin");

  const plans = [
    { name: "Básico", price: "R$ 19/mês", priceId: "price_1xxxxx" },
    { name: "Pro", price: "R$ 49/mês", priceId: "price_1yyyyy" },
    { name: "Enterprise", price: "R$ 99/mês", priceId: "price_1zzzzz" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Escolha seu plano</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{plan.name}</h2>
              <p className="text-3xl font-bold text-gray-800 mb-6">{plan.price}</p>
              <form
                action={async () => {
                  "use server";
                  const session = (await getServerSession(authOptions)) as Session | null;
                  if (!session) throw new Error("Sessão não encontrada");

                  const checkoutSession = await stripe.checkout.sessions.create({
                    mode: "subscription",
                    payment_method_types: ["card"],
                    customer_email: session.user.email ?? undefined,
                    line_items: [{ price: plan.priceId, quantity: 1 }],
                    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
                    cancel_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?canceled=true`,
                    metadata: { userId: session.user.id },
                  });
                  redirect(checkoutSession.url!);
                }}
              >
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Assinar {plan.name}
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
