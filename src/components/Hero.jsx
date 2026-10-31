import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero = () => {
  const { info, trustPoints } = siteData;
  const whatsappUrl = `https://wa.me/${info.whatsappNumber}?text=Hola,%20me%20gustaría%20solicitar%20una%20proforma`;

  return (
    <section id="inicio" className="relative bg-zinc-950 text-white py-20 lg:py-28 border-b border-zinc-800 overflow-hidden">
      {/* Retícula visual industrial de fondo */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Texto Hero */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Fabricación Directa en Taller Propio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Letras 3D, <span className="text-yellow-400">Neón Flex</span> y Gigantografías
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Diseño, fabricación e instalación de rótulos luminosos, tótems exteriores y cajas de luz para destacar la fachada e imagen de tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all text-center"
              >
                Solicitar Proforma
              </a>
              <a
                href="#servicios"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold px-6 py-4 rounded-xl transition-all"
              >
                <span>Ver Catálogo</span>
                <ChevronRight className="w-4 h-4 text-yellow-400" />
              </a>
            </div>

            {/* Puntos de Confianza Rápida */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800/80">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center lg:text-left space-y-1">
                  <h4 className="text-sm font-bold text-yellow-400">{point.title}</h4>
                  <p className="text-xs text-zinc-400">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen Destacada */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                alt="Letras 3D iluminadas y rotulación comercial"
                className="w-full h-80 lg:h-[420px] object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Letras Corpóreas & Neón</p>
                <p className="text-sm text-zinc-200 font-medium">Estructuras 3D en acrílico, metal e iluminación LED.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};