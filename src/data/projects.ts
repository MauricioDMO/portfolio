export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  image?: {
    src: string;
    alt: string;
  };
  problem: string;
  solution: string;
  role: string;
  ux: string;
  impact: string[];
  features: string[];
  stack: string[];
  learnings: string;
};

export const projects: Project[] = [
  {
    slug: 'facturacion-electronica-dte',
    title: 'Sistema de Facturacion Electronica DTE',
    eyebrow: 'Sistema en produccion',
    summary:
      'Sistema web para emision, gestion y envio de documentos tributarios electronicos, integrado con flujos operativos reales.',
    problem:
      'El proceso anterior requeria tareas repetitivas, doble registro de informacion y revision manual de documentos, lo que consumia tiempo y aumentaba la posibilidad de errores.',
    solution:
      'Construccion de una plataforma para centralizar la emision de documentos, generar PDFs, almacenar respaldos, enviar correos y comunicarse con servicios externos necesarios para el flujo fiscal.',
    role:
      'Participe en el diseno, desarrollo, implementacion, mantenimiento y despliegue del sistema, trabajando tanto la experiencia de usuario como la logica de negocio y las integraciones.',
    ux:
      'La interfaz se diseno para emitir documentos con el menor numero de pasos posible, reduciendo friccion en una tarea repetitiva y critica para la operacion diaria.',
    impact: [
      '+300 facturas mensuales gestionadas',
      'Reduccion importante del tiempo operativo',
      'Integracion con Ministerio de Hacienda, PDF, correo y almacenamiento',
    ],
    features: [
      'Emision y gestion de documentos tributarios electronicos',
      'Generacion de documentos PDF',
      'Envio de correos transaccionales',
      'Almacenamiento de respaldos',
      'Autenticacion y manejo de sesiones',
      'Integracion con APIs externas',
    ],
    stack: ['Next.js', 'PostgreSQL', 'PDFKit', 'AWS S3', 'JWT', 'APIs'],
    learnings:
      'Este proyecto reforzo la importancia de pensar mas alla del codigo: reglas de negocio, errores humanos, trazabilidad, mantenimiento y confianza operativa.',
  },
  {
    slug: 'sistema-inventario',
    title: 'Sistema de Inventario',
    eyebrow: 'Operacion interna',
    summary:
      'Herramienta para ordenar productos, existencias y movimientos internos con una experiencia clara para usuarios operativos.',
    problem:
      'La gestion de inventario puede volverse fragil cuando depende de registros dispersos, consultas manuales y poca visibilidad del estado real de los productos.',
    solution:
      'Desarrollo de un sistema web para consultar, registrar y organizar informacion de inventario desde una interfaz centralizada y facil de usar.',
    role:
      'Trabaje en la estructura del sistema, interfaces, flujos de datos y decisiones tecnicas necesarias para que la herramienta fuera practica en uso diario.',
    ux:
      'El foco de experiencia estuvo en hacer visibles los datos importantes rapidamente, evitar pasos innecesarios y mantener acciones frecuentes cerca del usuario.',
    impact: [
      'Mayor claridad sobre existencias y productos',
      'Menos dependencia de registros manuales dispersos',
      'Base mas ordenada para procesos internos',
    ],
    features: [
      'Gestion de productos',
      'Consulta de existencias',
      'Registro de movimientos',
      'Filtros y busqueda',
      'Vistas para seguimiento operativo',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'APIs', 'Autenticacion'],
    learnings:
      'El inventario exige claridad y consistencia. Aprendi a valorar interfaces que reducen dudas y hacen mas facil mantener datos correctos.',
  },
  {
    slug: 'sistema-rma-garantias',
    title: 'Sistema RMA / Garantias',
    eyebrow: 'Seguimiento de casos',
    summary:
      'Sistema para registrar, dar seguimiento y ordenar procesos de garantias y devoluciones con mejor trazabilidad.',
    problem:
      'Los procesos de garantia pueden perder informacion cuando se manejan por mensajes, hojas separadas o memoria del equipo, afectando seguimiento y respuesta al cliente.',
    solution:
      'Implementacion de una herramienta para documentar casos, estados, responsables y detalles importantes durante el ciclo de revision o garantia.',
    role:
      'Participe en el planteamiento del flujo, diseno de pantallas y desarrollo de funcionalidades para mantener el proceso comprensible y rastreable.',
    ux:
      'La experiencia se centro en que cada caso tuviera contexto suficiente, estado claro y acciones simples para avanzar sin perder informacion relevante.',
    impact: [
      'Mejor trazabilidad de casos',
      'Procesos de garantia mas ordenados',
      'Menos informacion perdida entre etapas',
    ],
    features: [
      'Registro de casos RMA',
      'Seguimiento de estados',
      'Historial de cambios',
      'Datos de cliente y producto',
      'Panel para revision operativa',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Node.js', 'APIs', 'UI interna'],
    learnings:
      'Este proyecto mostro que una buena herramienta interna no solo guarda datos: tambien da orden, memoria y continuidad al trabajo del equipo.',
  },
  {
    slug: 'construfijaciones-web',
    title: 'Sitio web de Construfijaciones',
    eyebrow: 'Presencia web',
    summary:
      'Sitio web orientado a comunicar productos, servicios e informacion comercial con una estructura clara para visitantes reales.',
    problem:
      'Una presencia web poco clara dificulta que las personas encuentren informacion importante, entiendan la oferta y sepan como contactar o avanzar.',
    solution:
      'Construccion de un sitio con jerarquia visual, contenido organizado y rutas claras para presentar la empresa y facilitar el contacto.',
    role:
      'Trabaje en la implementacion del sitio, estructura de contenido, adaptacion responsive y detalles de experiencia para mejorar la navegacion.',
    ux:
      'La prioridad fue hacer que la informacion se pudiera escanear rapido, con secciones concretas y llamados a la accion visibles sin sobrecargar la pagina.',
    impact: [
      'Mejor presentacion digital de la empresa',
      'Informacion mas accesible para visitantes',
      'Base web adaptable para crecimiento futuro',
    ],
    features: [
      'Pagina informativa responsive',
      'Secciones comerciales claras',
      'Llamados a la accion',
      'Estructura preparada para contenido futuro',
    ],
    stack: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    learnings:
      'Un sitio web efectivo no necesita ser complejo: necesita ordenar bien el mensaje y facilitar que la persona encuentre lo que busca.',
  },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Project not found: ${slug}`);
  }

  return project;
}
