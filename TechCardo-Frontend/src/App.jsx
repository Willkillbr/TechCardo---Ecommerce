import { useState, useEffect } from 'react'
import destaques from './data/destaques.jsx'

{/* Componentes */}
import ProductCard from './components/main/ProductCard.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/main/Hero.jsx'
import Features from './components/main/Features.jsx'
import Newsletter from './components/main/NewsLetter.jsx'
import Divisor from './components/main/Divisor.jsx'
import QuemSomos from './components/main/QuemSomos.jsx'

const itemsPerPage = 5

export default function App() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(destaques.length / itemsPerPage)
  const paginatedProducts = destaques.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prev => (prev + 1) % totalPages)
    }, 10000)
    return () => clearInterval(interval)
  }, [totalPages])

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Divisor />

      <section className="container mx-auto py-6" name="destaques" id="destaques">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {paginatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {[...Array(totalPages).keys()].map(dotIndex => (
            <button
              key={dotIndex}
              onClick={() => setPage(dotIndex)}
              className={`w-3 h-3 rounded-full transition ${
                dotIndex === page ? 'bg-blue-700' : 'bg-gray-800 hover:bg-gray-400'
              }`}
              aria-label={`Página ${dotIndex + 1}`}
            />
          ))}
        </div>
        <div className='flex justify-center mt-6'>
          <button className="bg-gray-700 p-3 rounded-md">Ver mais Produtos</button>           
        </div>
        <div className="flex justify-center mt-6">
          <div className="mt-4 w-8 h-1 bg-gray-700 mx-auto rounded m-6 p-[3px]"></div> 
        </div>          
      </section>

      <QuemSomos />   
      <Newsletter />
      <Footer />
    </div>
  )
}
