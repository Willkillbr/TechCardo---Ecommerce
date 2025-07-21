import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../data/products';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FreteSimulado from '../components/Detail/FreteSimulado.jsx';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const images = product.imagens; 
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const cores = product.variacoes?.cores || [];
  const tamanhos = product.variacoes?.tamanhos || [];
  const [selectedCor, setSelectedCor] = useState(cores[0] || null);
  const [selectedTamanho, setSelectedTamanho] = useState(tamanhos[0] || null);
  const recommended = products.filter(p => p.slug !== slug).slice(0, 5);
  const [tamanhoStartIndex, setTamanhoStartIndex] = useState(0);
  const maxVisible = 5;
  const tamanhosVisiveis = tamanhos.slice(tamanhoStartIndex, tamanhoStartIndex + maxVisible);

  const coresMap = {
        vermelho: '#FF0000',
        azul:     '#03abff',
        verde:    '#008000',
        amarelo:  '#FFFF00',
        preto:    '#000000', 
        branco:   '#FFFFFF',
        laranja:  '#FFA500',
        rosa:     '#FFC0CB',
        roxo:     '#800080',
        cinza:    '#808080',
        marrom:   '#A52A2A',
        bege:     '#F5F5DC',
        turquesa: '#40E0D0',
        vinho:    '#800000',
        dourado:  '#FFD700',
        prata:    '#C0C0C0',
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-xl mb-4">Produto não encontrado.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition"
          >
            ← Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <div className="p-4 py-20 pb-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-800 rounded hover:bg-gray-700 transition text-sm"
        >
          ← Voltar
        </button>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-6 flex-1">
        {/* Imagens e variações */}
        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            src={selectedImage}
            alt={product.nome}
            className="w-[440px] h-[440px] rounded-xl shadow-2xl object-cover"
          />

          {cores.length > 0 && (
            <div className="mt-8 w-full max-w-md space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-300">Cor</h3>
                <div className="flex gap-3">
                  {cores.map(cor => (
                    <div
                      key={cor}
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        setSelectedCor(cor);
                        const idx = cores.indexOf(cor);
                        setSelectedImage(images[idx] || images[0]);
                      }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border-4 transition ${
                          selectedCor === cor ? 'border-blue-700' : 'border-gray-700 hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: coresMap[cor.toLowerCase()] || cor }}
                      />                      
                    </div>
                  ))}

                </div>
              </div>

               {tamanhos.length > 0 && (
               <div>
                 <h3 className="mb-2 text-sm font-medium text-gray-300">Tamanho</h3>
                 <div className="flex items-center gap-2">
                   <button
                     disabled={tamanhoStartIndex === 0}
                     onClick={() => setTamanhoStartIndex(tamanhoStartIndex - 1)}
                     className={`px-2 py-1 rounded border border-gray-700 hover:bg-gray-700 disabled:opacity-50 text-lg `}
                   >
                     &lt;
                   </button>
                          
                    <div className="flex gap-3">
                     {tamanhosVisiveis.map(tam => (
                       <button
                         key={tam}
                         onClick={() => setSelectedTamanho(tam)}
                         className={`py-2 px-5 rounded-lg border-2 font-bold text-white transition-colors duration-300 ease-in-out
                         ${selectedTamanho === tam ? 'border-blue-700 bg-gray-800' : 'border-gray-700 bg-gray-900 hover:bg-gray-800'}`}
                       >
                         {tam}
                       </button>
                     ))}
                   </div>
                  
                    <button
                     disabled={tamanhoStartIndex + maxVisible >= tamanhos.length}
                     onClick={() => setTamanhoStartIndex(tamanhoStartIndex + 1)}
                     className={`px-2 py-1 rounded border border-gray-700 hover:bg-gray-700 disabled:opacity-50 text-lg`}
                    >
                      &gt;
                   </button>
                 </div>
               </div>
            )} 

            </div>
          )}

          {/* Recomendações */}
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Outros produtos recomendados</h2>
            <div className="grid grid-cols-1 gap-4">
              {recommended.map(item => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/produto/${item.slug}`)}
                  className="flex gap-4 bg-gray-900 p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition"
                >
                  <img
                    src={item.imagens[0]}
                    alt={item.nome}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold">{item.nome}</p>
                    <p className="text-green-700 font-bold">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                        item.desconto_percentual > 0
                          ? item.preco_promocional
                          : item.preco_original
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detalhes do produto */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold">{product.nome}</h1>

          {product.desconto_percentual > 0 ? (
            <div>
              <p className="text-xl text-gray-500 font-bold line-through">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                  product.preco_original
                )}
              </p>
              <p className="text-2xl text-green-700 font-bold">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                  product.preco_promocional
                )}
              </p>
            </div>
          ) : (
            <p className="text-2xl text-green-700 font-bold">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                product.preco_original
              )}
            </p>
          )}    
          <h2 className="text-xl font-extrabold">⭐ {product.nota_media}</h2>


          <ul className="space-y-2 text-gray-300">
            <li>✅ Qualidade garantida</li>
            <li>🚚 Envio rápido para todo o Brasil</li>
            <li>🔒 Compra 100% segura</li>
            <li>📦 Devolução grátis em até 7 dias</li>
          </ul>

          <p className="text-gray-400">{product.descricao}</p>
          <div className="flex gap-4">
            <button className="bg-blue-700 px-6 py-3 rounded font-semibold hover:bg-blue-800 transition">
              Comprar Agora
            </button>

            <div className="relative inline-block group overflow-visible">
              <button
                onClick={() => {
                  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
                  const newItem = {
                    id: product.id,
                    nome: product.nome,
                    preco: product.desconto_percentual > 0 ? product.preco_promocional : product.preco_original,
                    cor: selectedCor,
                    tamanho: selectedTamanho,
                    image: selectedImage,
                    LocalCity: product.LocalCity
                  };
                  localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
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
                className={`absolute top-1/2 left-[80%] w-10 h-10 z-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform ${
                  clicked ? 'duration-1000 translate-x-[2300%]' : 'duration-500 group-hover:translate-x-[150%]'
                }`}
              />
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-3">Origem: {product.LocalCity}</h2>
            <FreteSimulado originCep={product.LocalCep} />
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold mb-4">Comentários</h3>
            <div className="space-y-6 max-h-64 overflow-y-auto">
              {product.comentarios?.length > 0 ? (
                product.comentarios.map((c, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-300"><strong>{c.usuario}:</strong> {c.comentario}</p>
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
      <Footer />
    </div>
  );
}