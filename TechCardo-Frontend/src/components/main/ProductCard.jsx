import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const hasOffer = product.preco_promocional !== null;
  const precoOriginal = product.preco_original;
  const precoPromocional = product.preco_promocional;

  return (
    <Link to={`/produto/${product.slug}`}>
      <motion.div
        className="bg-white text-black rounded-lg overflow-hidden hover:shadow-md hover:shadow-blue-700 transition"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <img src={product.imagens?.[0]} alt={product.nome} className="w-full h-56 object-cover"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.nome}</h3>

          {hasOffer ? (
            <div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex flex-col items-start leading-tight">
                  <p className="text-gray-500 line-through text-sm">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(precoOriginal)}
                  </p>
                  <p className="text-green-800 text-base font-semibold">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(precoPromocional)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <b>{product.comprados}</b> Já foram Comprados
                  </p>
                </div>
                <div className="flex flex-col items-end gap-y-[2px]">
                  <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full my-1">
                    {Math.round((1 - precoPromocional / precoOriginal) * 100)}% OFF
                  </span>
                  <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full m-1">
                    ⭐ {product.avaliacao_media}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mt-1 text-sm py-[2px]">
                <p className="text-green-800 text-base font-semibold">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(precoOriginal)}
                </p>
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <p className="text-xs text-gray-500 mt-1">
                  <b>{product.comprados}</b> Já foram Comprados
                </p>
                <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full m-[7px]">
                  ⭐ {product.avaliacao_media}
                </span>
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </Link>
  );
}
