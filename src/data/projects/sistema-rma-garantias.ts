import type { Project } from './types';

const problem =
  'Los procesos de garantía y devolución pueden perder trazabilidad cuando se manejan por mensajes, papeles o memoria del equipo. Sin un flujo centralizado, es más difícil saber el estado de cada caso, quién lo revisó, qué evidencia existe y qué respuesta debe darse al cliente.';

const solution =
  'Implementación de un sistema RMA para registrar casos, documentar información del cliente y producto, adjuntar evidencia, controlar estados y dar seguimiento al ciclo de revisión o garantía desde una interfaz centralizada.';

const role =
  'Participé en el planteamiento del flujo, diseño de pantallas, estructura de datos y desarrollo de funcionalidades para convertir un proceso disperso en un sistema más comprensible, rastreable y útil para el equipo interno.';

const ux =
  'La experiencia se centró en que cada caso tuviera suficiente contexto para entenderse sin depender de conversaciones externas. La interfaz debía mostrar estado, datos relevantes, historial y acciones claras para avanzar el caso sin perder información.';

const impact = [
  'Mejor trazabilidad de casos de garantía',
  'Menos información perdida entre etapas',
  'Mayor orden en procesos de revisión interna',
  'Consulta más clara de cliente, producto, estado y evidencia',
  'Base más confiable para responder al cliente',
];

const features = [
  'Registro de casos RMA',
  'Datos de cliente, producto y pedido',
  'Seguimiento de estados del caso',
  'Historial de cambios y revisiones',
  'Carga o consulta de evidencia relacionada',
  'Panel interno para revisión operativa',
  'Gestión de usuarios y centros de distribución',
  'Vistas separadas para seguimiento interno y aprobación',
];

const technical = [
  'Next.js para construir el sistema web y sus flujos internos',
  'TypeScript para modelar casos, estados y datos importantes',
  'Base de datos para persistir casos, usuarios, estados e historial',
  'AWS S3 para almacenar documentos, imágenes o evidencia del proceso',
  'Integración con flujos logísticos o de seguimiento cuando el caso lo requiere',
];

const learnings =
  'Este proyecto mostró que una buena herramienta interna no solo guarda datos: también conserva contexto, memoria y continuidad. En procesos de garantía, la trazabilidad es clave para evitar confusión y sostener una respuesta más profesional al cliente.';

export const sistemaRmaGarantias: Project = {
  slug: 'sistema-rma-garantias',
  title: 'Sistema RMA / Garantías',
  eyebrow: 'Trazabilidad de casos',
  summary:
    'Sistema para registrar, documentar y dar seguimiento a procesos de garantía y devolución con mayor orden operativo.',
  intro:
    'Herramienta interna para que cada garantía tenga contexto, estado, evidencia y continuidad durante todo el ciclo de revisión.',
  url: '',
  repo: '',
  icon: 'shield-check',
  images: [
    {
      src: '/projects/construfijaciones-rma/dashboard.webp',
      alt: 'Dashboard principal del sistema RMA de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-rma/menu.webp',
      alt: 'Menú del sistema RMA de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-rma/info-pedido.webp',
      alt: 'Información de pedido dentro del sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/usuarios.webp',
      alt: 'Gestión de usuarios del sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/usuario.webp',
      alt: 'Detalle de usuario del sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/centros-de-distribucion.webp',
      alt: 'Centros de distribución configurados en el sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/dashboard-interno.webp',
      alt: 'Dashboard interno del sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/aprobados-interno.webp',
      alt: 'Casos aprobados en la vista interna del sistema RMA',
    },
    {
      src: '/projects/construfijaciones-rma/aprobacion-interna.webp',
      alt: 'Aprobación interna de caso RMA',
    },
    {
      src: '/projects/construfijaciones-rma/rechazo-interna.webp',
      alt: 'Rechazo interno de caso RMA',
    },
  ],
  stack: ['nextjs', 'typescript', 'turso', 'aws', 'jwt', 'cloudflare', 'eslint', 'pnpm'],
  details: [
    {
      id: 'impacto',
      eyebrow: 'Impacto operativo',
      title: 'Más control sobre cada caso de garantía',
      icon: 'chart-bar',
      content: [{ list: impact }],
    },
    {
      id: 'problema',
      eyebrow: 'Pérdida de seguimiento',
      title: 'Cuando un caso pierde contexto entre etapas',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Flujo rastreable',
      title: 'Un sistema para documentar estado, evidencia y responsables',
      icon: 'route',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Piezas del sistema',
      title: 'Los módulos que dan continuidad al proceso',
      icon: 'clipboard-list',
      content: [{ list: features }],
    },
    {
      id: 'tecnico',
      eyebrow: 'Decisiones técnicas',
      title: 'Datos, archivos y estados en un flujo centralizado',
      icon: 'stack-2',
      content: [{ list: technical }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Ordenar el proceso desde la interfaz y los datos',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Experiencia de seguimiento',
      title: 'Estado claro para avanzar sin perder información',
      icon: 'history',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje del proceso',
      title: 'Una herramienta interna también guarda memoria',
      icon: 'brain',
      content: [{ text: learnings }],
    },
  ],
};
