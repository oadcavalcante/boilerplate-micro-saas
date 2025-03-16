import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Transforme Suas Ideias em Realidade</h1>
            <p className="text-xl md:text-2xl mb-8">Um SaaS poderoso para criar, gerenciar e crescer seu negócio.</p>
            <Link href="/auth/signin">
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                Comece Agora - É Grátis!
              </button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Por que escolher nosso SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Gerenciamento Fácil</h3>
                <p className="text-gray-600">Dashboards intuitivos para controlar usuários e assinaturas.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Pagamentos Integrados</h3>
                <p className="text-gray-600">Integração com Stripe para assinaturas simples e seguras.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Escalabilidade</h3>
                <p className="text-gray-600">Cresça sem limites com uma infraestrutura robusta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Planos para Todos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Básico</h3>
                <p className="text-3xl font-bold text-gray-800 mb-6">R$ 19/mês</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>1 usuário</li>
                  <li>Suporte básico</li>
                  <li>10GB de armazenamento</li>
                </ul>
                <Link href="/auth/signin">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Escolher Plano
                  </button>
                </Link>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-indigo-500 scale-105">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pro</h3>
                <p className="text-3xl font-bold text-gray-800 mb-6">R$ 49/mês</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>5 usuários</li>
                  <li>Suporte prioritário</li>
                  <li>50GB de armazenamento</li>
                </ul>
                <Link href="/auth/signin">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                    Escolher Plano
                  </button>
                </Link>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Enterprise</h3>
                <p className="text-3xl font-bold text-gray-800 mb-6">R$ 99/mês</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>Usuários ilimitados</li>
                  <li>Suporte 24/7</li>
                  <li>Armazenamento ilimitado</li>
                </ul>
                <Link href="/auth/signin">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                    Escolher Plano
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-xl mb-8">Experimente grátis por 14 dias, sem compromisso.</p>
            <Link href="/auth/signin">
              <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                Teste Grátis Agora
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
