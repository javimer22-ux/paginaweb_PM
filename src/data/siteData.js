// src/data/siteData.js

export const siteData = {
  info: {
    name: "Tu Empresa Visual",
    tagline: "Gigantografías, Letras 3D, Neón Flex y Rotulación Exterior",
    phone: "+593 90 000 0000",
    whatsappNumber: "593900000000",
    email: "contacto@tuempresa.com",
    address: "Quito, Ecuador",
    schedule: "Lunes a Viernes: 08:30 - 18:00 | Sábados: 09:00 - 13:00",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.48398188177!2d-78.5706249!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002422c05%3A0x2088d8b94f1c9c7e!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
  },
  
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  },

  trustPoints: [
    {
      title: "Fabricación e Instalación Directa",
      description: "Taller propio equipado con corte láser CO2 e impresión de gran formato."
    },
    {
      title: "Materiales de Alta Durabilidad",
      description: "Acrílicos de alto impacto, estructuras metálicas, LED de alta intensidad y lonas resistentes."
    },
    {
      title: "Proyectos Corporativos y Comerciales",
      description: "Atención a negocios locales, marcas e instituciones con acabados de primera."
    }
  ],

  services: [
    {
      id: "letras-3d",
      category: "letras-3d",
      title: "Letras en 3D y Corpóreas",
      description: "Diseño y fabricación de letras en relieve con acrílico, acero inox, MDF o metálicas, con o sin iluminación retroiluminada.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "gigantografias",
      category: "gigantografias",
      title: "Gigantografías e Impresión de Gran Formato",
      description: "Impresión en lona banner, microperforado, viniles adhesivos mate/brillante y pancartas publicitarias de alta resolución.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "rotulos-cajas-luz",
      category: "rotulos",
      title: "Rótulos y Cajas de Luz",
      description: "Cajas luminosas para fachadas, letreros en lona traslúcida o acrílico con sistemas de iluminación LED de bajo consumo.",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "neon-flex",
      category: "neon-flex",
      title: "Neón Flex Personalizado",
      description: "Diseño e instalación de letreros luminosos Neón Flex sobre bases de acrílico transparente para locales y eventos.",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "totems-publicitarios",
      category: "totems",
      title: "Tótems y Publicidad Exterior",
      description: "Estructuras verticales de gran formato para señalización de locales, estaciones de servicio y centros comerciales.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "corte-laser",
      category: "corte-laser",
      title: "Corte y Grabado Láser CO2",
      description: "Placas corporativas, exhibidores en acrílico, trofeos y piezas a medida con corte de alta precisión.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ],

  portfolio: [
    {
      id: 1,
      title: "Letras 3D en Acrílico con Iluminación LED",
      category: "letras-3d",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Caja de Luz Luminosa para Fachada Comercial",
      category: "rotulos",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Gigantografía Impresa en Lona de Alta Densidad",
      category: "gigantografias",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Diseño Personalizado en Neón Flex sobre Acrílico",
      category: "neon-flex",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Tótem Publicitario de Doble Cara Exterior",
      category: "totems",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    }
  ],

  about: {
    title: "Especialistas en Imagen Comercial y Publicidad Exterior",
    story: "Somos un taller familiar dedicado a transformar la presencia visual de los negocios. Contamos con tecnología de corte láser CO2, impresión de gran formato y ensamblaje de estructuras como tótems, cajas de luz y letreros 3D. Nos encargamos de todo el proceso: desde la asesoría de materiales hasta la fabricación e instalación final.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
  }
};