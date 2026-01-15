import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
         {/* Placeholder for background image or video */}
         <div className="w-full h-full bg-stone-200"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-4 text-stone-600">Nueva Colección</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-stone-900 tracking-tight">Estilo Arequipeño</h1>
        <p className="text-lg md:text-xl text-stone-700 mb-10 max-w-2xl mx-auto">
          Descubre nuestra selección exclusiva de prendas diseñadas para destacar tu esencia única.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/mujeres" 
            className="px-8 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
          >
            Ver Mujeres
          </Link>
          <Link 
            href="/hombres" 
            className="px-8 py-3 border border-stone-900 text-stone-900 font-medium hover:bg-stone-50 transition-colors"
          >
            Ver Hombres
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
