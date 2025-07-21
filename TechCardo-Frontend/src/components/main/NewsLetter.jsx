import news from '../../data/news.jsx';

export default function News() {
  return (
    <section className="bg-gray-900 py-4" name="news" id="news">
      <div
        className="bg-gray-200 py-3 px-4 container mx-auto rounded-md"
        style={{ maxHeight: 700, overflowY: "auto" }}
      >
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {news.map(({ id, titulo, descricao, imagem, slug }, index) => (
            <a
              key={id}
              href={`/${slug}`}
              className="flex flex-col bg-white rounded shadow-sm text-gray-800"
              style={{
                gridColumn: index === 0 ? "span 2" : "span 1",
                maxWidth: "100%",
                height: 320,
                overflow: "hidden",
              }}
            >
              <img
                src={imagem}
                alt={titulo}
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}
              />
              <div className="p-3 flex flex-col flex-grow">
                <h3
                  className={`font-semibold mb-1 ${index === 0 ? "text-sm" : "text-xs"}`}
                  style={{ lineHeight: 1.2 }}
                >
                  {titulo}
                </h3>
                <p
                  className={`text-gray-600 ${index === 0 ? "text-xs" : "text-[10px]"}`}
                  style={{
                    flexGrow: 1,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {descricao}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
