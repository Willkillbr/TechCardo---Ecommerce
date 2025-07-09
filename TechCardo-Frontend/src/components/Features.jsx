const features = [
  { id: 1, title: 'Frete Grátis', desc: 'Em compras acima de R$ 199,90', icon: '🚚' },
  { id: 2, title: 'Suporte 24/7', desc: 'Estamos sempre disponíveis', icon: '📞' },
  { id: 3, title: 'Pagamento Seguro', desc: 'Criptografado', icon: '🔒' },
];

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {features.map(f => (
          <div key={f.id} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4 text-white">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
      <div id="top"></div>
    </section>
  );
} 