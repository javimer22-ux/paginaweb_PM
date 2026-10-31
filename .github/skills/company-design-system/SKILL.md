---
name: company-design-system
description: Sistema visual e identidad de diseño para la web comercial de publicidad exterior, corte láser y rotulación.
---

# Company Design System — Publicidad & Fabricación Visual

Esta Skill establece las reglas estéticas y la identidad de diseño para el sitio web. Combina tres corrientes estéticas: **Editorial Premium**, **Industrial Brutalist** y **Minimalismo Suizo**, evitando plantillas genéricas de software o corporativas tradicionales.

---

## 1. Filosofía Visual

- **Fotografía Protagonista:** Las imágenes de trabajos reales en acrílico, Neón Flex, metal e impresiones deben destacar con alto contraste y claridad visual.
- **Carácter Técnico e Industrial:** Estructuras visuales claras, líneas divididas visibles (`border-zinc-800`), retículas técnicas de fondo y acabados limpios que evoquen precisión en taller.
- **Tipografía y Jerarquía:** Textos concisos, títulos en super negrita (`font-black`), interlineados ajustados y etiquetas en mayúsculas con alto espaciado de caracteres (`tracking-widest`).

---

## 2. Paleta de Colores (Tailwind CSS 4)

### Fondo y Envolventes (Dark Theme Industrial)
- **Fondo Principal (`bg-zinc-950`):** `#09090b` — Usado en el cuerpo general de la aplicación.
- **Contenedores y Tarjetas (`bg-zinc-900`):** `#18181b` — Para tarjetas, modales y secciones elevadas.
- **Superficies Secundarias (`bg-zinc-950/80` / `bg-zinc-900/90`):** Con propiedad `backdrop-blur-md` para elementos flotantes (Navbar, Modales).

### Color de Acento Principal
- **Amarillo Industrial (`yellow-400` / `#facc15`):** Utilizado para botones primarios, resaltados de títulos, bordes activos e íconos.
- **Amarillo Hover (`yellow-300` / `#fde047`):** Para estados interactivos sobre botones.
- **Transparencia táctica (`bg-yellow-500/10` / `border-yellow-500/30`):** Para insignias (*badges*) y contenedores de distinción.

### Textos y Jerarquía Tipográfica
- **Título Primario:** `text-white`
- **Títulos de Resalte:** `text-yellow-400`
- **Texto de Cuerpo:** `text-zinc-400` / `text-zinc-300`
- **Etiquetas y Metadatos:** `text-zinc-500` / `text-yellow-400`

### Bordes y Líneas Técnicas
- **Borde por Defecto:** `border border-zinc-800`
- **Borde Interactivo:** `hover:border-yellow-500/50`
- **Líneas de Separación:** `border-b border-zinc-800`

---

## 3. Tipografía y Estilos de Texto

```jsx
// Ejemplo de Jerarquía de Títulos
<span className="inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
  Etiqueta de Sección
</span>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
  Letras 3D, <span className="text-yellow-400">Neón Flex</span> y Gigantografías
</h1>

<p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
  Descripción del servicio o la empresa...
</p>