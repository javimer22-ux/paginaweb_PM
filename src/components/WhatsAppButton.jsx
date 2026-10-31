import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const WhatsAppButton = () => {
  const { info } = siteData;
  const whatsappUrl = `https://wa.me/${info.whatsappNumber}?text=Hola,%20quisiera%20cotizar%20un%20proyecto`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 p-4 rounded-full shadow-2xl shadow-emerald-500/30 transition-transform hover:scale-110 flex items-center justify-center"
    >
      <MessageCircle className="w-7 h-7 fill-zinc-950 text-emerald-500" />
    </a>
  );
};