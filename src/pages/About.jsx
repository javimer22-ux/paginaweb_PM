import React from 'react';
import { ShieldCheck, Cpu, Wrench } from 'lucide-react';
import { companyData } from '../data/company';

export const About = () => {
  const { about } = companyData;

  const features = [
    {
      icon: Cpu,
      title: "Tecnología de Punta",
      description: "Corte láser CO2 de alta precisión e impresoras solventes de gran formato."
    },
    {
      icon: Wrench,
      title: "Ensamble Especializado",
      description: "Acabados impecables en acrílicos, metales, Neón Flex y estructuras 3D."
    },
    {
      icon: ShieldCheck,
      title: "Garantía de Calidad",
      description: "Materiales altamente resistentes a la intemperie y leds de bajo consumo."
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Fotografía de Taller / Infraestructura */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl bg-zinc-900">
              <img
                src={about.image}
                alt="Taller de publicidad exterior y corte láser"
                className="w-full h-80 lg:h-[450px] object-cover opacity-90 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm">
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Taller Directo</p>
                <p className="text-sm text-zinc-200 font-medium">Fabricación local con control absoluto sobre cada proyecto.</p>
              </div>
            </div>
          </div>

          {/* Texto de Trayectoria */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Nuestra Empresa
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {about.title}
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              {about.story}
            </p>

            {/* Pilares Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div key={index} className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 space-y-2">
                    <Icon className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                    <p className="text-xs text-zinc-400">{feat.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};