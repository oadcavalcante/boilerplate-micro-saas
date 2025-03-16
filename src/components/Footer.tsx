import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p>&copy; 2025 Meu SaaS. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <Link href="/terms" className="hover:underline">
            Termos
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacidade
          </Link>
          <Link href="/contact" className="hover:underline">
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
