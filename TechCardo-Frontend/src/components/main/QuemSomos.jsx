import about from "../../data/about";

export default function QuemSomos() {
  return (
  <section className="bg-black text-white relative overflow-hidden" id="quem-somos">    
    <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full z-0 pointer-events-none">
      <svg
        className="absolute left-1/2 -translate-x-1/2 z-0 top-16"
        width="1700"
        height="2155"
        viewBox="0 0 200 1600"
        preserveAspectRatio="none"
      >
        <path
          d="M100 0
             C200 200, 0 400, 100 600
             C200 800, 0 1000, 100 1200
             C200 1400, 0 1600, 100 2570"
          stroke="#1d4ed8"
          strokeWidth="8"
          fill="none"
        />
      </svg>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <h2 className="text-3xl font-bold text-center mb-4">Sobre Nós</h2>
      <div className="w-28 h-[5px] bg-blue-800 mx-auto rounded-full mt-10 relative bottom-8"></div>
      <div className="w-[80px] h-[5px] bg-blue-800 mx-auto rounded-full mt-10 relative bottom-[59px]"></div>

      {about.map(({ id, titulo, descricao, imagem, imgLeft }) => (
        <div
          key={id}
          className={`flex flex-col md:flex-row items-center gap-8 mb-24 ${
            imgLeft ? "" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img src={imagem} alt={titulo} className="w-full max-w-[600px] rounded-lg shadow" />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">{titulo}</h3>
            <p className="text-gray-300 text-lg">{descricao}</p>
          </div>
        </div>
      ))}
      <div className="w-[80px] h-[5px] bg-blue-800 mx-auto rounded-full mt-10"></div>
      <div className="w-28 h-[5px] bg-blue-800 mx-auto rounded-full mt-10 relative bottom-5"></div>
    </div>
  </section>
  );
}
