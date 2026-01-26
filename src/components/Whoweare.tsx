import Image from 'next/image';

export default function About() {
  return (
    <section id="whoweare" className="bg-stone-200 py-24 w-full">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Izquierdo: Imagen con bordes redondeados */}
        <div className="relative h-125 w-full bg-stone-100 rounded-[40px] overflow-hidden shadow-sm">
          {/* Aquí puedes poner una imagen de tu marca */}
          <div className="absolute inset-0 flex items-center justify-center text-black italic">
            [ Imagen de Marca Naroa ]
          </div>
          {/* Cuando tengas la imagen real, usa:
            <Image 
              src="/images/about-naroa.jpg" 
              alt="Sobre Naroa" 
              fill 
              className="object-cover"
            /> 
          */}
        </div>

        {/* Lado Derecho: Contenido Textual */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.3em] text-stone-500 font-medium">
              Nuestra Esencia
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
              Diseño consciente para el <span className="italic">estilo moderno.</span>
            </h3>
          </div>

          <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
            <p>
              En <strong className="font-medium text-stone-900">Naroa</strong>, creemos que la moda no solo se trata de vestir, sino de expresar una identidad clara y minimalista. Nos alejamos del ruido visual para centrarnos en lo que realmente importa: la calidad, la forma y la comodidad.
            </p>
            <p>
              Nuestra colección nace de la necesidad de ofrecer prendas versátiles que trasciendan las temporadas. Cada costura y cada tejido son seleccionados para garantizar una experiencia táctil y visual excepcional, tanto para hombres como para mujeres.
            </p>
          </div>

          {/* Valores rápidos */}
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h4 className="text-stone-900 font-medium mb-2 text-sm uppercase tracking-wider">Calidad</h4>
              <p className="text-stone-500 text-sm">Materiales premium seleccionados cuidadosamente.</p>
            </div>
            <div>
              <h4 className="text-stone-900 font-medium mb-2 text-sm uppercase tracking-wider">Sostenibilidad</h4>
              <p className="text-stone-500 text-sm">Producción ética y respeto por el medio ambiente.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}