import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Contato - Micro SaaS",
  description: "Entre em contato conosco para suporte ou dúvidas.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contato</h1>
          <section className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-gray-600 mb-6">Tem alguma dúvida ou precisa de suporte? Entre em contato conosco!</p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Email</h2>
                <p className="text-gray-600">
                  <Link href="mailto:suporte@microsaas.com" className="text-blue-600 hover:underline">
                    suporte@microsaas.com
                  </Link>
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Telefone</h2>
                <p className="text-gray-600">+55 (11) 1234-5678</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Endereço</h2>
                <p className="text-gray-600">Rua Exemplo, 123 - São Paulo, SP</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Voltar à Home
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
