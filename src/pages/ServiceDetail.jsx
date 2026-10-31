import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const { info } = companyData;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const whatsappUrl = `https://wa.me/${info.whatsappNumber}?text=Hola,%20me%20interesa%20cotizar%20el%20servicio%20de:%20${encodeURIComponent(service.title)}`;

  return (
    <div className="py-16 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link to="/servicios" className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Servicio Especializado
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">{service.title}</h1>
            <p className="text-zinc-300 leading-relaxed text-base">{service.detailedDescription || service.description}</p>

            {service.materials && (
              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold uppercase text-yellow-400 tracking-wider">Materiales Empleados:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-400">
                  {service.materials.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-zinc-800">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black px-8 py-4 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider">
                <MessageCircle className="w-4 h-4" /> Cotizar {service.title} por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};