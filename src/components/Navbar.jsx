import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { info } = companyData;

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const whatsappUrl = `https://wa.me/${info.whatsappNumber}?text=Hola,%20quisiera%20cotizar%20un%20proyecto`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-yellow-400 uppercase">
              {info.name.split(' ')[0]} <span className="text-white">{info.name.split(' ').slice(1).join(' ')}</span>
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-semibold">
              Publicidad & Señalética
            </span>
          </Link>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1'
                    : 'text-zinc-300 hover:text-yellow-400 transition-colors duration-200'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Botón WhatsApp */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-yellow-400/10"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950 text-yellow-400" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-yellow-400 p-2"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium ${
                  isActive ? 'text-yellow-400 font-bold' : 'text-zinc-300 hover:text-yellow-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-zinc-950 py-3 rounded-xl font-bold text-sm mt-4"
          >
            <MessageCircle className="w-5 h-5 fill-zinc-950 text-yellow-400" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
};