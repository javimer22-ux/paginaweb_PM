import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export const ServicesGrid = () => {
  const { info } = companyData;

  return (
    <section id="servicios" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Catálogo Principal
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Soluciones de <span className="text-yellow-400">Impacto Visual</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Diseño, corte, ensamble e instalación. Fabricamos productos publicitarios con materiales de alta durabilidad para interiores y exteriores.
          </p>
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const whatsappServiceUrl = `https://wa.me/${info.whatsappNumber}?text=Hola,%20me%20interesa%20cotizar:%20${encodeURIComponent(service.title)}`;

            return (
              <div
                key={service.id}
                className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Imagen del Producto */}
                <div className="relative h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <a
                      href={whatsappServiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Cotizar este producto</span>
                    </a>
                    <Link
                      to={`/servicios/${service.slug}`}
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-yellow-400 hover:text-zinc-950 transition-all"
                      aria-label="Ver detalle del servicio"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};