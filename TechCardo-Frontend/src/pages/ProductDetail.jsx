import { useParams, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  const pid = Number(id);
  const product = products.find(p => p.id === pid);
  const defaultColor = product.haveColor ? product.types.color.options[0] : null;
  const [selectedTypeOption, setSelectedTypeOption] = useState(defaultColor);
  const recommended = products.filter(p => p.id !== pid).slice(0, 5);

  const wrapper = children => (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      {children}
    </div>
  );
   
  if (!product) {
    return wrapper(
      <div className="text-center">
        <p className="text-xl mb-4">Produto não encontrado.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition"
        >
          ← Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-800 rounded hover:bg-gray-700 transition text-sm"
        >
          ← Voltar
        </button>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-6 py-10">
        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            src={selectedTypeOption.image}
            alt={product.name}
            className="w-[440px] h-[440px] rounded-xl shadow-2xl object-cover"
          />
          
          {product.haveType && (
          <div className="mt-8 w-full max-w-md space-y-6">
                    
            {product.haveSize && (
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-300">{product.types.size.title}</h3>
                <div className="grid grid-cols-5 gap-3">
                  {product.types.size.options.map(option => (
                    <button
                      key={option.value}
                      className="py-2 rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-800 transition font-bold text-white"
                    >
                      {option.value}
                    </button>
                  ))}
                </div>
              </div>
            )}

           
          {Object.entries(product.types).map(([typeKey, typeData]) => {
          if (typeKey === 'size') return null;
            
            return (
            <div key={typeKey}>
              <h3 className="mb-2 text-sm font-medium text-gray-300">{typeData.title}</h3>
              <div className="grid grid-cols-5 gap-3">
              {typeData.options.map(option => (
              <button
              key={option.value}
              onClick={() => setSelectedTypeOption(option)}
              className={`border-[5px] rounded-lg overflow-hidden transition 
                ${selectedTypeOption?.value === option.value ? 'border-blue-700' : 'border-gray-700 hover:border-gray-500'}`}
              >
                <img
                  src={option.image}
                  alt={option.value}
                  className="w-full h-14 object-cover"
                />
              </button>
              ))}
              </div>
            </div>
            );
            })}
          </div>)}

          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Outros produtos recomendados</h2>
            <div className="grid grid-cols-1 gap-4">
              {recommended.map(item => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="flex gap-4 bg-gray-900 p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-green-700 font-bold">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detalhes do produto */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold">{product.name}</h1>

          { product.HaveOffer ? (
          <div>  
            <p className="text-1xl text-gray-500 font-bold line-through">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            </p>
            <p className="text-2xl text-green-700 font-bold">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price * (100 - product.offer) / 100)}  
            </p>
          </div>
          ) : (
          <p className="text-2xl text-green-700 font-bold">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </p>  
          )}

          <ul className="space-y-2 text-gray-300">
            <li>✅ Qualidade garantida</li>
            <li>🚚 Envio rápido para todo o Brasil</li>
            <li>🔒 Compra 100% segura</li>
            <li>📦 Devolução grátis em até 7 dias</li>
          </ul>

          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-3">Fretes disponíveis</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>PAC - R$ 20,00 (5 a 8 dias úteis)</li>
              <li>SEDEX - R$ 40,00 (2 a 4 dias úteis)</li>
              <li>Retirada na loja - Grátis</li>
            </ul>
          </div>

          <p className="text-gray-400">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-700 px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">
              Comprar Agora
            </button>
            <div className="relative inline-block group overflow-visible">
              <button
                onClick={() => {
                  setClicked(true);
                  setTimeout(() => setClicked(false), 1000); 
                }}
                className="relative z-10 border border-white bg-black px-6 py-3 rounded font-semibold transition"
              >
                Adicionar ao Carrinho
              </button>
              
              <img
                src="/assets/carrinho.png"
                alt="Carrinho"
                className={`absolute top-1/2 left-[80%] w-10 h-10 z-0
                  transform -translate-x-1/2 -translate-y-1/2
                  transition-transform
                  ${clicked ? 'duration-1000 translate-x-[2300%]' : 'duration-500 group-hover:translate-x-[150%]'}
                `}
              />
            </div>

          </div>

          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold mb-4">Comentários</h3>
            <div className="space-y-6 max-h-64 overflow-y-auto">
              {product.comments?.length > 0 ? (
                product.comments.map((c, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-300"><strong>{c.user}:</strong> {c.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Sem comentários.</p>
              )}
            </div>
            <form className="mt-6 flex flex-col gap-3">
              <textarea
                className="bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none"
                rows={3}
                placeholder="Deixe seu comentário (simulado)"                
              />
              <button
                type="button"
                className="bg-blue-700 px-6 py-2 rounded font-semibold hover:bg-blue-800 transition"                  
              >
                Enviar Comentário
              </button>
            </form>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-500">
            Produto código #{product.id} | Estoque disponível | Garantia de 12 meses
          </div>
        </div>
      </div>
    </div>
  );
}
