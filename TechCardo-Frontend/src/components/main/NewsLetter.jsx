import { useRef } from 'react';
import news from '../../data/news.jsx';

export default function News() {
  return (
    <section className="bg-gray-900 py-4" name="news" id="news">  
      <h2 className="text-center text-2xl font-bold text-white mb-4">Assine nossa NewsLetter</h2>   
      <p className="text-center text-gray-400 mb-6">Fique por dentro das últimas novidades e ofertas exclusivas!</p>
      <div className="flex justify-center mb-6">
        <form className="flex items-center space-x-2">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="p-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            aria-label="Enviar Newsletter"
          >
            Inscrever-se
          </button>
        </form>
      </div>         

      <div className="bg-gray-200 py-3 px-4 container mx-auto rounded-md overflow-y-auto">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {news.map(({ id, titulo, descricao, imagem, slug }, index) => {
            const cardRef = useRef(null);

            const isOriginal = index === 0;
            const isTall = index > 0 && index <= 3;

            return (
              <a
                key={id}
                href={`/${slug}`}
                ref={cardRef}
                className="relative flex flex-col bg-white rounded shadow-sm text-gray-800 overflow-hidden"
                style={{
                  gridColumn: isOriginal ? "span 2" : "span 1",
                  width: "100%",
                  height: isOriginal ? "auto" : isTall ? "450px" : "300px",
                  maxWidth: isOriginal ? undefined : "100%",
                }}
              >
                <img
                  src={imagem}
                  alt={titulo}
                  className="w-full h-full object-cover"
                  style={{
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-full text-white px-3 py-2"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    height: "70px",
                  }}
                >
                  <h3
                    className={`font-semibold mb-1 ${index === 0 ? "text-sm" : "text-xs"}`}
                    style={{ lineHeight: 1.2 }}
                  >
                    {titulo}
                  </h3>
                  <p
                    className={`text-white ${index === 0 ? "text-xs" : "text-[10px]"}`}
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {descricao}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
