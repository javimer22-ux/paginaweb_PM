import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-zinc-950 text-white px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="inline-flex p-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-black">404 - Página No Encontrada</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          La ruta solicitada no existe o fue movida. Regresa a nuestra página principal para seguir explorando nuestros servicios de publicidad.
        </p>
        <div>
          <Link to="/" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all text-sm">
            <Home className="w-4 h-4" /> Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};