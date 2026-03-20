"use client"; // Necesario para usar useState

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', consulta: '' });
  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    // Configuración del número y mensaje
    const telefono = "51967617047";
    const mensajeTexto = `Hola Naroa, mi nombre es ${formData.nombre}. Mi consulta es: ${formData.consulta}`;
    
    // Codificar el mensaje para URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeTexto)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');

    // Cambiar a estado de agradecimiento
    setEnviado(true);
  };

  return (
    <section id="contacto" className="bg-stone-200 py-24 w-full flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto px-4">
        
        {/* Contenedor estilo Tarjeta iOS */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 overflow-hidden relative">
          
          {!enviado ? (
            <div className="space-y-10">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-medium tracking-tight text-[#1d1d1f]">Contáctanos</h2>
                <p className="text-[#86868b] text-[17px] leading-relaxed font-normal">
                  Estamos aquí para ayudarte. <br className="hidden md:block"/> Escríbenos y te responderemos pronto.
                </p>
              </div>

              <form onSubmit={handleSend} className="space-y-6">
                <div className="space-y-5">
                  <div className="group relative">
                    <input
                      required
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="peer w-full bg-[#f5f5f7] rounded-2xl px-6 py-4 text-[17px] text-[#1d1d1f] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all duration-300"
                      placeholder="Nombre completo"
                      id="nombre"
                    />
                    <label 
                      htmlFor="nombre"
                      className="absolute left-6 top-4 text-[#86868b] text-[17px] transition-all duration-300 pointer-events-none 
                                 peer-focus:-translate-y-3 peer-focus:text-[11px] peer-focus:text-[#0071e3]
                                 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-[#86868b]"
                    >
                      Nombre completo
                    </label>
                  </div>

                  <div className="group relative">
                    <textarea
                      required
                      name="consulta"
                      rows={4}
                      value={formData.consulta}
                      onChange={handleInputChange}
                      className="peer w-full bg-[#f5f5f7] rounded-2xl px-6 pt-6 pb-2 text-[17px] text-[#1d1d1f] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 transition-all duration-300 resize-none"
                      placeholder="Tu consulta"
                      id="consulta"
                    />
                    <label 
                      htmlFor="consulta"
                      className="absolute left-6 top-4 text-[#86868b] text-[17px] transition-all duration-300 pointer-events-none 
                                 peer-focus:translate-y-[-0.2rem] peer-focus:text-[11px] peer-focus:text-[#0071e3]
                                 peer-not-placeholder-shown:translate-y-[-0.2rem] peer-not-placeholder-shown:text-[11px] peer-not-placeholder-shown:text-[#86868b]"
                    >
                      ¿En qué podemos ayudarte?
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1d1d1f] text-white text-[17px] font-medium py-4 rounded-full active:scale-95 hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          ) : (
            /* Mensaje de Agradecimiento - Minimalista */
            <div className="flex flex-col items-center text-center space-y-6 py-8 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#34c759]/10 text-[#34c759] rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#1d1d1f]">¡Gracias, {formData.nombre}!</h2>
                <p className="text-[#86868b] text-[17px] leading-relaxed max-w-xs mx-auto">
                  Te escribiremos pronto por WhatsApp.
                </p>
              </div>
              <button 
                onClick={() => setEnviado(false)}
                className="text-[#0071e3] text-[15px] font-medium hover:underline transition mt-2"
              >
                Enviar otro mensaje
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}