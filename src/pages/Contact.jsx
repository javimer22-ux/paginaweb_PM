import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Upload, CheckCircle } from 'lucide-react';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';

export const Contact = () => {
  const { info } = companyData;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: servicesData[0]?.title || '',
    message: '',
    fileName: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola, mi nombre es *${formData.name}*.\n*Servicio de interés:* ${formData.service}\n*Teléfono:* ${formData.phone}\n*Detalles:* ${formData.message}${
      formData.fileName ? `\n*Archivo adjunto propuesto:* ${formData.fileName} (lo adjuntaré directamente en este chat)` : ''
    }`;
    const url = `https://wa.me/${info.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Contacto & Cotizaciones
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            ¿Tienes un <span className="text-yellow-400">Proyecto en Mente?</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Envíanos las medidas, la idea o el archivo vectorizado para generarte una proforma inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Formulario de Cotización Rápida */}
          <div className="lg:col-span-7 bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Solicitar Cotización</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre o empresa"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="0991234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Servicio de Interés</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  {servicesData.map((serv) => (
                    <option key={serv.id} value={serv.title}>
                      {serv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Detalles del Pedido (Medidas, Materiales, Cantidad)</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Ej: Necesito un letrero en Neón Flex de 1.20m x 0.60m con fondo de acrílico..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-yellow-400 transition-colors"
                ></textarea>
              </div>

              {/* Adjuntar Archivo */}
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-2">Adjuntar Diseño / Logo (Opcional)</label>
                <div className="relative border-2 border-dashed border-zinc-800 hover:border-yellow-400/50 rounded-xl p-4 text-center cursor-pointer transition-colors bg-zinc-950">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center gap-1 text-zinc-400 text-xs">
                    {formData.fileName ? (
                      <>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 font-semibold">{formData.fileName}</span>
                        </div>
                        <span className="text-[11px] text-zinc-500">Recuerda adjuntar el archivo directamente en la conversación al abrirse WhatsApp.</span>
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-yellow-400" />
                        <span>Sube tu archivo PDF, Illustrator o imagen</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black py-4 rounded-xl shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2 transition-all text-sm uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Cotización por WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Información de Atención y Mapa */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-4">
              <h3 className="text-lg font-bold text-white">Datos del Taller</h3>
              
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{info.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{info.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{info.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span>{info.schedule}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Embebido */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 h-64 bg-zinc-900">
              <iframe
                title="Ubicación del Taller"
                src={info.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};