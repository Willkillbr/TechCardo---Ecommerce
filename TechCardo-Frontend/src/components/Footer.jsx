export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12 text-gray-400">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2 text-white">ShopCenter</h4>
          <p className="text-gray-400">Sua loja online de confiança desde 2025.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Links Úteis</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Suporte</h4>
          <ul className="space-y-1">
            <li>suporte@shopcenter.com</li>
            <li>+55 (11) 1234-5678</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4">
        &copy; 2025 ShopCenter. Todos os direitos reservados.
      </div>
    </footer>
  );
}