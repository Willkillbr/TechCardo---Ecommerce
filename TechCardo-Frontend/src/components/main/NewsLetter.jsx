export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4 text-center text-white">
        <h3 className="text-2xl font-semibold mb-4">Assine nossa Newsletter</h3>
        <p className="mb-6 text-gray-400">Receba ofertas exclusivas e novidades em primeira mão</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="p-3 rounded-xl text-gray-800 flex-1"
          />
          <button className="bg-green-500 text-black py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition">
            Assinar
          </button>
        </form>
      </div>
    </section>
  );
}
