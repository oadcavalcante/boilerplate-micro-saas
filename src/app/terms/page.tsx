import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos de Uso - Micro SaaS",
  description: "Leia os termos de uso do nosso serviço.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Termos de Uso</h1>
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao usar o Micro SaaS, você concorda com estes Termos de Uso. Se não concordar, por favor, não utilize
              nossos serviços.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Uso do Serviço</h2>
            <p className="text-gray-600 mb-4">
              Você é responsável por manter a confidencialidade de sua conta e senha. Não compartilhe suas credenciais
              com terceiros.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Limitação de Responsabilidade</h2>
            <p className="text-gray-600">
              O Micro SaaS não se responsabiliza por danos indiretos ou interrupções do serviço devido a falhas
              técnicas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
