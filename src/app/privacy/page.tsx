import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade - Micro SaaS",
  description: "Saiba como protegemos seus dados.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Política de Privacidade</h1>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Coleta de Dados</h2>
            <p className="text-gray-600 mb-4">
              Coletamos informações como nome, email e dados de pagamento para fornecer nossos serviços.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Uso dos Dados</h2>
            <p className="text-gray-600 mb-4">
              Seus dados são usados para gerenciar sua conta, processar pagamentos e enviar comunicações importantes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Segurança</h2>
            <p className="text-gray-600">
              Implementamos medidas de segurança para proteger suas informações, mas nenhum sistema é 100% seguro.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
