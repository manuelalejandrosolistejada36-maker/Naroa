"use client";

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categoriasWoman = [
  { id: 'chompas', nombre: 'Chompas' },
  { id: 'sudaderas', nombre: 'Sudaderas' },
  { id: 'camisas', nombre: 'Camisas' },
  { id: 'polos', nombre: 'Polos' },
  { id: 'casacas', nombre: 'Casacas' },
  { id: 'zapatos', nombre: 'Zapatos' },
  { id: 'sandalias', nombre: 'Sandalias' },
  { id: 'zapatillas', nombre: 'Zapatillas' },
];

export default function WomanSection() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 200;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-stone-200 min-h-screen pt-32 pb-20 px-6 md:px-12">
      {/* Encabezado de Sección */}
      <header className="max-w-7xl mx-auto mb-16">
        <h1 className="text-5xl font-light tracking-tighter text-stone-900 mb-4">
          MUJERES
        </h1>
        <p className="text-stone-500 max-w-md font-light italic">
          Elegancia sutil y cortes impecables. Descubre piezas diseñadas para perdurar en tu armario.
        </p>
      </header>

      {/* Barra de Categorías */}
      <div className="max-w-7xl mx-auto mb-12 relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 z-10 bg-white shadow-lg rounded-full p-2 text-stone-600 hover:text-black transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-4 pb-4 px-1">
            <button
              onClick={() => setCategoriaActiva('todos')}
              className={`px-8 py-3 rounded-full text-sm tracking-widest transition-all duration-300 border shrink-0 ${
                categoriaActiva === 'todos' 
                ? 'bg-stone-900 text-white border-stone-900 shadow-md' 
                : 'bg-transparent text-stone-500 border-stone-100 hover:border-stone-300'
              }`}
            >
              TODOS
            </button>
            
            {categoriasWoman.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className={`px-8 py-3 rounded-full text-sm tracking-widest whitespace-nowrap transition-all duration-300 border shrink-0 ${
                  categoriaActiva === cat.id 
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md' 
                  : 'bg-transparent text-stone-500 border-stone-100 hover:border-stone-300'
                }`}
              >
                {cat.nombre.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 z-10 bg-white shadow-lg rounded-full p-2 text-stone-600 hover:text-black transition-opacity opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Grid de Productos (Placeholder) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Espacio para los productos de mujer */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="aspect-3/4 bg-stone-100 rounded-[30px] overflow-hidden relative mb-4">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              {/* <Image src="..." fill className="object-cover" /> */}
            </div>
            <h3 className="text-stone-800 font-medium text-sm tracking-wide">COLECCIÓN MUJER</h3>
            <p className="text-stone-400 text-sm italic">$00.00</p>
          </div>
        ))}
      </section>
    </div>
  );
}