import type { Project } from './types';

const problem =
  'Una presencia web poco clara dificulta que las personas encuentren información importante, entiendan la oferta y sepan como contactar o avanzar.';
const solution =
  'Construcción de un sitio con jerarquía visual, contenido organizado y rutas claras para presentar la empresa y facilitar el contacto.';
const role =
  'Trabaje en la implementación del sitio, estructura de contenido, adaptación responsive y detalles de experiencia para mejorar la navegación.';
const ux =
  'La prioridad fue hacer que la información se pudiera escanear rápido, con secciones concretas y llamados a la acción visibles sin sobrecargar la pagina.';
const impact = [
  'Mejor presentación digital de la empresa',
  'Información más accesible para visitantes',
  'Base web adaptable para crecimiento futuro',
];
const features = [
  'Pagina informativa responsive',
  'Secciones comerciales claras',
  'Llamados a la acción',
  'Estructura preparada para contenido futuro',
];
const learnings =
  'Un sitio web efectivo no necesita ser complejo: necesita ordenar bien el mensaje y facilitar que la persona encuentre lo que busca.';

export const construfijacionesWeb: Project = {
  slug: 'construfijaciones-web',
  title: 'Sitio web de Construfijaciones',
  eyebrow: 'Presencia web',
  summary:
    'Sitio web orientado a comunicar productos, servicios e información comercial con una estructura clara para visitantes reales.',
  intro:
    'Sitio comercial pensado para ordenar la presencia digital de la empresa y hacer mas facil entender su oferta.',
  icon: 'building-store',
  images: [
    {
      src: '/projects/construfijaciones-web/inicio.webp',
      alt: 'Pagina de inicio del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/catalogo.webp',
      alt: 'Catalogo del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/garantia-dewalt.webp',
      alt: 'Pagina de garantia DeWalt en el sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/nosotros.webp',
      alt: 'Pagina Nosotros del sitio web de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-web/contacto.webp',
      alt: 'Pagina de contacto del sitio web de Construfijaciones',
    },
  ],
  stack: ['astro', 'html', 'javascript'],
  details: [
    {
      id: 'impacto',
      eyebrow: 'Impacto',
      title: 'Lo que cambio en el proyecto',
      icon: 'code',
      content: [{ list: impact }],
    },
    {
      id: 'problema',
      eyebrow: 'Problema de comunicacion',
      title: 'Cuando la oferta existe pero no se entiende rapido',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Estructura web',
      title: 'Una estructura clara para guiar al visitante',
      icon: 'bolt',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Elementos implementados',
      title: 'Las partes que sostienen el mensaje comercial',
      icon: 'code',
      content: [{ list: features }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Implementacion, estructura y responsive',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Contenido y conversion',
      title: 'Escanear rapido sin sobrecargar la pagina',
      icon: 'brain',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje web',
      title: 'Ordenar el mensaje vale mas que agregar complejidad',
      icon: 'arrow-up-right',
      content: [{ text: learnings }],
    },
  ],
};
