import React, { useState } from 'react';
import { Eye, X, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Portfolio = () => {
  const { portfolio, info } = siteData;
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'letras-3d', label: 'Letras 3D' },
    { id: 'rotulos', label: 'Rótulos & Cajas' },
    { id: 'gigantografias', label: 'Gigantografías' },
    { id: 'neon-flex', label: 'Neón Flex' },
    { id: 'totems', label: 'Tótems' },
    { id: 'corte-laser', label: 'Corte Láser' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? portfolio
    : portfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Trabajos Realizados
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Nuestros <span className="text-yellow-400">Proyectos</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Fotografías reales de instalación y fabricación en taller. Calidad garantizada en cada acabado.
          </p>
        </div>

        {/* Filtros por Pestaña */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === cat.id
                  ? 'bg-yellow-400 text-zinc-950 shadow-lg shadow-yellow-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grilla de Fotografías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Botón Flotante Ver */}
              <div className="absolute top-4 right-4 p-2 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-zinc-800 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Título de la Foto */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-yellow-400">
                  {item.category.replace('-', ' ')}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal / Lightbox de Ampliación */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-zinc-950/80 text-zinc-300 hover:text-yellow-400 rounded-full border border-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagen Ampliada */}
            <div className="max-h-[70vh] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Pie del Modal */}
            <div className="p-6 bg-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-800">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-yellow-400">
                  {selectedImage.category.replace('-', ' ')}
                </span>
                <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              </div>
              <a
                href={`https://wa.me/${info.whatsappNumber}?text=Hola,%20quisiera%20cotizar%20un%20trabajo%20similar%20a:%20${encodeURIComponent(selectedImage.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-400 text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-yellow-300 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950 text-yellow-400" />
                <span>Cotizar algo igual</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};