# Instrucciones Específicas para la Creación y Modificación de Componentes

Ubicación de componentes: `src/components/`

## 1. Clasificación de Componentes

Los componentes deben clasificarse estrictamente en la subcarpeta que corresponda:

- `src/components/layout/`: Componentes estructurales globales (`Navbar.jsx`, `Footer.jsx`, `WhatsAppButton.jsx`).
- `src/components/ui/`: Componentes atómicos reutilizables (`Button.jsx`, `Badge.jsx`, `Card.jsx`, `Modal.jsx`).
- `src/components/home/`: Componentes exclusivos de la vista de inicio (`HeroSection.jsx`, `TrustPoints.jsx`).
- `src/components/services/`: Componentes para la gestión y despliegue del catálogo (`ServiceCard.jsx`, `ServiceDetailHeader.jsx`).
- `src/components/portfolio/`: Componentes del portafolio (`PortfolioFilter.jsx`, `PortfolioGrid.jsx`, `PortfolioModal.jsx`).
- `src/components/contact/`: Componentes del área de contacto (`ContactForm.jsx`, `WorkshopInfo.jsx`).

---

## 2. Reglas de Desarrollo de Componentes

1. **Fidelidad Visual:** Aplica siempre las clases de Tailwind CSS 4 definidas en la Skill `company-design-system`.
2. **Prop-Types Desestructurados:** Recibe las propiedades desestructuradas en la firma de la función y define valores por defecto cuando aplique.
3. **Exportaciones Nombradas vs. Por Defecto:** Utiliza exportaciones nombradas (`export const ComponentName = ...`) para facilitar el autocompletado e inspección de código.
4. **Sin Lógica Hardcodeada:** Ningún componente visual debe contener listas de servicios, números telefónicos o datos estáticos en código duro. Todos los contenidos deben consumirse desde `src/data/`.
5. **Manejo de Eventos y Accesibilidad:** Todos los elementos interactivos (`<button>`, `<a>`, inputs) deben tener estados focus visible claros (`focus:outline-none focus:ring-2 focus:ring-yellow-400`), compatibilidad con navegación por teclado y atributos `aria-label` cuando no incluyan texto visible.