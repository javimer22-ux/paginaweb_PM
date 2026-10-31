# Instrucciones Específicas para la Creación y Modificación de Páginas

Ubicación de páginas: `src/pages/`

## 1. Estructura General de una Página

Toda página dentro del directorio `src/pages/` debe cumplir con los siguientes lineamientos:

1. **Envolvente por Defecto:** Cada página debe renderizarse dentro de `MainLayout` para conservar la continuidad del `Navbar`, `Footer` y `WhatsAppButton`.
2. **Restablecimiento de Scroll:** Al montar una nueva página, la vista debe restablecerse automáticamente a la parte superior (`window.scrollTo(0, 0)`).
3. **Encabezado de Página Consistente:** Las páginas secundarias (`/nosotros`, `/servicios`, `/proyectos`, `/contacto`) deben incluir un banner o encabezado que respete la jerarquía tipográfica del sistema de diseño (título en `font-black`, insignia superior en mayúsculas con color de acento `yellow-400`).

---

## 2. Definición de Vistas por Archivo

- **`Home.jsx` (`/`):** Vista principal de impacto visual. Compuesta por `HeroSection`, `TrustPoints`, resumen destacado de `ServicesGrid`, vista previa de `Portfolio`, bloque de `About` y CTA directo a contacto.
- **`About.jsx` (`/nosotros`):** Enfoque narrativo y técnico de la empresa. Presenta la historia familiar, maquinaria disponible (corte láser CO2, impresoras solventes), pilares de calidad y fotografía del taller.
- **`Services.jsx` (`/servicios`):** Catálogo completo de servicios organizados por categorías. Cada tarjeta debe vincular a la página individual de detalle (`/servicios/:slug`).
- **`ServiceDetail.jsx` (`/servicios/:slug`):** Página dinámica basada en el parámetro `:slug`. Carga los detalles técnicos del servicio desde `src/data/services.js`, incluye lista de aplicaciones, materiales utilizables, galería de fotos del servicio y botón CTA específico para cotizar ese producto vía WhatsApp.
- **`Portfolio.jsx` (`/proyectos`):** Vista de trabajos realizados con filtro por categorías y visor modal (*lightbox*) para ver imágenes ampliadas.
- **`Contact.jsx` (`/contacto`):** Formulario interactivo para generación de cotización rápida vía WhatsApp, información detallada de atención (dirección, horario, teléfono) y mapa embebido de Google Maps.
- **`NotFound.jsx` (`*`):** Página de error 404 con mensaje claro, diseño coherente e interfaz para retornar a la página de inicio.