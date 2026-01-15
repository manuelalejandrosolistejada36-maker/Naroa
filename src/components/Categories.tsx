const categories = [
  { name: 'Sudaderas', slug: 'sudaderas' },
  { name: 'Casacas', slug: 'casacas' },
  { name: 'Chompas', slug: 'chompas' },
  { name: 'Zapatillas', slug: 'zapatillas' },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="flex-1 h-100 bg-stone-100 rounded-[30px] flex items-center justify-center relative overflow-hidden group">
          <span className="text-3xl font-light z-10">MUJERES</span>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500" />
        </div>
        <div className="flex-1 h-100 bg-stone-200 rounded-[30px] flex items-center justify-center relative overflow-hidden group">
          <span className="text-3xl font-light z-10">HOMBRES</span>
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button key={cat.slug} className="border border-stone-200 py-4 rounded-2xl hover:bg-stone-50 transition text-sm uppercase tracking-widest">
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
}