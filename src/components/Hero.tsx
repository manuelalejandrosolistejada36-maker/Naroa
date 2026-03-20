import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:h-screen flex items-end md:items-center justify-center bg-gray-100 overflow-hidden pt-36 pb-16 md:py-0">
      <div className="absolute inset-0 z-0">
         {/* Placeholder for background image or video */}
         <div className="w-full h-full bg-stone-200"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-4 text-stone-600">Nueva Colección</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-stone-900 tracking-tight">Naroa</h1>
        <p className="text-lg md:text-xl text-stone-700 mb-10 max-w-2xl mx-auto">
          Más de 50 años creando piezas en madera que perduran en el tiempo. Descubre la esencia de nuestro legado.
        </p>
      </div>
    </section>
  );
};

export default Hero;
