import React from 'react';
import { companyData } from '../data/company';

export const Footer = () => {
  const { info, socials } = companyData;

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Marca */}
        <div className="text-center sm:text-left space-y-1">
          <span className="text-base font-black text-yellow-400 uppercase tracking-wider">
            {info.name}
          </span>
          <p className="text-zinc-500">Fabricación Directa de Publicidad Exterior & Letras 3D.</p>
        </div>

        {/* Enlaces Sociales */}
        <div className="flex items-center gap-6 text-sm font-semibold text-zinc-300">
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Facebook</a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Instagram</a>
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">TikTok</a>
        </div>

        {/* Copyright */}
        <div className="text-zinc-500 text-center sm:text-right">
          © {new Date().getFullYear()} {info.name}. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};