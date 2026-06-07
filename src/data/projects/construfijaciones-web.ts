import type { Project } from './types';

const problem =
  'La empresa necesitaba una presencia web más clara para mostrar quiénes son, qué ofrecen, qué marcas trabajan y cómo contactarlos. Una web poco estructurada dificulta que un visitante entienda la oferta comercial y avance hacia una acción concreta.';

const solution =
  'Construcción y remodelación de un sitio web corporativo y comercial con estructura clara, secciones informativas, catálogo, páginas de marca, contacto y contenido preparado para crecer con la empresa.';

const role =
  'Trabajé en la implementación del sitio, estructura de contenido, adaptación responsive, organización visual, páginas comerciales y detalles de experiencia para mejorar la navegación y presentación digital de la empresa.';

const ux =
  'La prioridad fue que la información pudiera escanearse rápido, con secciones concretas, jerarquía visual clara y llamados a la acción visibles. El diseño busca verse profesional sin sobrecargar al visitante con información innecesaria.';

const impact = [
  'Mejor presentación digital de la empresa',
  'Información más accesible para clientes y visitantes',
  'Estructura web preparada para catálogo y contenido futuro',
  'Mejor comunicación de marcas, productos y servicios',
  'Base más sólida para contacto comercial y posicionamiento',
];

const features = [
  'Página de inicio corporativa',
  'Catálogo o presentación de productos',
  'Secciones comerciales claras',
  'Página de garantía o información por marca',
  'Página Nosotros',
  'Página de contacto',
  'Diseño responsive',
  'Estructura preparada para crecimiento futuro',
];

const technical = [
  'Astro para construir un sitio rápido, estático y fácil de mantener',
  'HTML, CSS y JavaScript para estructura, estilos e interacciones',
  'Diseño responsive para navegación desde escritorio y móvil',
  'Optimización de estructura visual y contenido comercial',
  'Organización de rutas y secciones para escaneo rápido',
];

const learnings =
  'Un sitio web efectivo no necesita ser complejo: necesita ordenar bien el mensaje, verse confiable y facilitar que la persona encuentre lo que busca. La claridad de contenido pesa más que agregar efectos o secciones innecesarias.';

export const construfijacionesWeb: Project = {
  slug: 'construfijaciones-web',
  title: 'Sitio web de Construfijaciones',
  eyebrow: 'Presencia web comercial',
  summary:
    'Sitio web corporativo y comercial orientado a presentar la empresa, sus productos, marcas e información de contacto de forma clara.',
  intro:
    'Sitio comercial pensado para ordenar la presencia digital de la empresa y hacer más fácil entender su oferta.',
  icon: 'building-store',
  images: [
    {
      src: '/projects/construfijaciones-web/inicio.webp',
      alt: 'Página de inicio del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/catalogo.webp',
      alt: 'Catálogo del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/garantia-dewalt.webp',
      alt: 'Página de garantía DeWalt en el sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/nosotros.webp',
      alt: 'Página Nosotros del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/contacto.webp',
      alt: 'Página de contacto del sitio web de Construfijaciones',
    },
  ],
  stack: ['astro', 'typescript', 'html', 'css', 'javascript', 'cloudflare', 'eslint', 'pnpm'],
  details: [
    {
      id: 'impacto',
      eyebrow: 'Impacto comercial',
      title: 'Una presencia digital más clara y útil',
      icon: 'chart-bar',
      content: [{ list: impact }],
    },
    {
      id: 'problema',
      eyebrow: 'Problema de comunicación',
      title: 'Cuando la oferta existe pero no se entiende rápido',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Estructura web',
      title: 'Un sitio para guiar al visitante con claridad',
      icon: 'layout-dashboard',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Elementos implementados',
      title: 'Las partes que sostienen el mensaje comercial',
      icon: 'forms',
      content: [{ list: features }],
    },
    {
      id: 'tecnico',
      eyebrow: 'Decisiones técnicas',
      title: 'Un sitio rápido, mantenible y preparado para crecer',
      icon: 'brand-astro',
      content: [{ list: technical }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Implementación, estructura y responsive',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Contenido y conversión',
      title: 'Escanear rápido sin sobrecargar la página',
      icon: 'brain',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje web',
      title: 'Ordenar el mensaje vale más que agregar complejidad',
      icon: 'arrow-up-right',
      content: [{ text: learnings }],
    },
  ],
};