"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se activa el efecto tras bajar 20px
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4">
      <div
        className={`mx-auto flex justify-between items-center transition-all duration-500 ease-in-out ${
          scrolled
            ? 'backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-full px-8 py-3 max-w-5xl mt-2'
            : 'px-8 max-w-7xl'
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <h1 className={`text-2xl font-bold tracking-tighter transition-colors duration-500 ${
            scrolled ? 'text-black' : 'text-stone-800'
          }`}>
            NAROA
          </h1>
        </Link>

        {/* Links Centrales */}
        <div className={`hidden md:flex gap-8 text-sm font-medium transition-colors duration-500 ${
          scrolled ? 'text-black/90' : 'text-stone-600'
        }`}>
            <Link href="/#whoweare" className="hover:opacity-70 transition">Quienes Somos</Link>
          <Link href="/hombres" className="hover:opacity-70 transition">Hombres</Link>
          <Link href="/mujeres" className="hover:opacity-70 transition">Mujeres</Link>
          <Link href="/#contacto" className="hover:opacity-70 transition">Contacto</Link>
        </div>

        {/* Iconos Derecha */}
        <div className={`flex items-center gap-5 transition-colors duration-500 ${
          scrolled ? 'text-black' : 'text-stone-800'
        }`}>
          <button title="Favoritos" className="hover:scale-110 transition-transform hidden sm:block">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <button title="Carrito" className="relative hover:scale-110 transition-transform">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className={`absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${
              scrolled ? 'bg-white text-black' : 'bg-black text-white'
            }`}>
              0
            </span>
          </button>
          <button 
            title="Menu" 
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen py-8 opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-6 text-stone-800 font-medium text-lg">
          <Link href="/#whoweare" className="hover:opacity-70 transition" onClick={() => setIsMobileMenuOpen(false)}>Quienes Somos</Link>
          <Link href="/hombres" className="hover:opacity-70 transition" onClick={() => setIsMobileMenuOpen(false)}>Hombres</Link>
          <Link href="/mujeres" className="hover:opacity-70 transition" onClick={() => setIsMobileMenuOpen(false)}>Mujeres</Link>
          <Link href="/#contacto" className="hover:opacity-70 transition" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;