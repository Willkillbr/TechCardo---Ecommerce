import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ProductCard from './components/ProductCard.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import Divisor from './components/Divisor.jsx';
import { AnimatePresence } from 'framer-motion';
import products from './data/products';

export default function App() {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 20;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Divisor />

      <section className="container mx-auto px-4 py-6" name="products" id='products'>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.length > 0 ? (
            <AnimatePresence mode="wait">
              {paginatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          ) : (
            <p className="text-center col-span-full text-gray-400 text-lg">
              Nenhum produto encontrado.
            </p>
          )}
        </div>

        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(pageCount)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => setPage(index + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border text-sm font-medium transition ${
                      page === index + 1 ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                    >
                    {index + 1}                                
                </button>
            ))}            
          </div>
        )}
      </section>

      <Newsletter />
      <Footer />
      
    </div>
  );
}
