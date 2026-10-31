# Reglas de Desarrollo e Instrucciones Generales para GitHub Copilot

Este documento establece los principios de ingeniería, arquitectura y diseño que deben ser respetados rigurosamente por GitHub Copilot durante la refactorización y desarrollo de la página web de la empresa de publicidad exterior y fabricación visual.

---

## 1. Reglas Fundamentales de Operación

1. **Inspección Previa de Código:** Antes de modificar o generar código, inspecciona siempre los archivos existentes implicados. No asumas la estructura ni la implementación interna de los componentes sin revisarlos primero.
2. **Respeto a la Arquitectura Establecida:** No modifiques la estructura de directorios ni introduzcas nuevos patrones arquitectónicos sin justificación explícita.
3. **Consulta de Skills Relevantes:** Para cada tarea, debes consultar y aplicar las instrucciones contenidas en los archivos `.github/skills/`:
   - `.github/skills/company-design-system/SKILL.md` para cambios visuales, componentes de UI y estilos.
   - `.github/skills/react-architecture/SKILL.md` para organización de carpetas, props, modularización y separación de datos.
   - `.github/skills/multipage-navigation/SKILL.md` para configuración de rutas, enlaces internos y `react-router-dom`.
   - `.github/skills/frontend-quality/SKILL.md` para linting, accesibilidad, diseño responsive y SEO.
4. **Reutilización Obligatoria:** Prioriza la reutilización de componentes existentes (`src/components/`) antes de crear nuevos archivos. Evita la duplicación de código innecesaria.
5. **Preservación de Funcionalidades:** No elimines ni alteres funcionalidades existentes (filtros de portafolio, modal de imágenes, generación de enlaces a WhatsApp) sin autorización previa.
6. **Integridad del Stack Tecnológico:** 
   - El proyecto utiliza **React 19**, **Vite 8**, **JavaScript (.jsx / .js)** y **Tailwind CSS 4**.
   - **NO utilices TypeScript** ni intentes convertir archivos a `.tsx`.
   - Utiliza exclusivamente **Lucide React** (`lucide-react`) para la iconografía.
   - No instales dependencias externas adicionales sin autorización.

---

## 2. Restricciones de Contenido y Datos

1. **Cero Invención de Datos:** No inventes números telefónicos, direcciones, correos, clientes, años de experiencia ni servicios de la empresa. Utiliza únicamente los datos centralizados en `src/data/`.
2. **Tratamiento de Fotografías:** No reemplaces las imágenes del portafolio o taller por marcadores genéricos o ilustrativos no relacionados con publicidad exterior, letras 3D, gigantografías o corte láser.

---

## 3. Flujo de Trabajo para Modificaciones Complejas

Si una tarea afecta a 2 o más archivos del proyecto:
1. Muestra primero un **plan breve de implementación** detallando los archivos a modificar/crear y el propósito de cada cambio.
2. Espera la confirmación del usuario antes de proceder con la edición de archivos.
3. Tras cada fase de cambios, verifica la ausencia de errores de sintaxis y asegura la compatibilidad con Oxlint (`npm run lint`).