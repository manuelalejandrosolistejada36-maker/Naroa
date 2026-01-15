import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react'; // Instalar lucide-react

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-full px-8 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold tracking-tighter text-stone-800">NAROA</h1>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link href="/nosotros" className="hover:text-black transition">Quienes Somos</Link>
          <Link href="/hombres" className="hover:text-black transition">Hombres</Link>
          <Link href="/mujeres" className="hover:text-black transition">Mujeres</Link>
          <Link href="/contacto" className="hover:text-black transition">Contacto</Link>
        </div>

        <div className="flex items-center gap-5">
          <button title="Favoritos"><Heart size={20} strokeWidth={1.5} /></button>
          <button title="Carrito" className="relative">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}