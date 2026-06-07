import type { Project } from './types';

const problem =
  'El conteo de inventario dependía de procesos manuales y archivos de Excel, lo que hacía difícil mantener visibilidad mientras las ventas seguían ocurriendo. El problema no era solo registrar productos, sino poder contar, comparar y actualizar sin detener la operación diaria.';

const solution =
  'Desarrollo de un sistema web de inventario que permite crear conteos, consultar productos, registrar cantidades y ver actualizaciones en tiempo real mientras la operación continúa. El sistema centraliza la información y reduce la dependencia de archivos manuales dispersos.';

const role =
  'Trabajé en la estructura del sistema, diseño de flujos, desarrollo del backend, comunicación en tiempo real, interfaz operativa y decisiones técnicas para que la herramienta fuera práctica durante conteos reales de inventario.';

const ux =
  'La experiencia se enfocó en que el usuario operativo pudiera encontrar productos rápido, registrar cantidades con pocos pasos y confiar en que los datos estaban actualizados. La prioridad fue reducir fricción, evitar tareas repetitivas y hacer visible el estado del conteo.';

const impact = [
  'Conteos de inventario sin detener completamente las ventas',
  'Menos dependencia de Excel y registros manuales',
  'Actualización en tiempo real durante el proceso de conteo',
  'Búsqueda más rápida de productos y códigos',
  'Mayor claridad sobre diferencias y avances del inventario',
  'Base más ordenada para procesos internos de control',
];

const features = [
  'Creación y gestión de conteos de inventario',
  'Consulta de productos por código o descripción',
  'Registro de cantidades contadas',
  'Actualización en tiempo real con WebSockets',
  'Gestión de diferencias entre sistema y conteo físico',
  'Vistas operativas para seguimiento del avance',
  'Exportación o revisión de datos para análisis posterior',
  'Interfaz de acceso para usuarios internos',
];

const technical = [
  'Express como backend principal del sistema',
  'Socket.IO para sincronización y actualizaciones en tiempo real',
  'TypeScript para mantener estructura clara en datos y eventos',
  'Astro para construir una interfaz web rápida y ligera',
  'Base de datos para registrar productos, conteos y diferencias',
  'Playwright para apoyar procesos de extracción o conexión con información existente',
];

const learnings =
  'Este proyecto reforzó que el valor de un sistema interno está en adaptarse al flujo real de trabajo. En inventario, la clave no es solo guardar datos, sino hacer que el conteo sea más confiable, rápido y fácil de seguir mientras la empresa sigue operando.';

export const sistemaInventario: Project = {
  slug: 'sistema-inventario',
  title: 'Sistema de Inventario',
  eyebrow: 'Operación interna en tiempo real',
  summary:
    'Sistema interno para realizar conteos de inventario, consultar productos y registrar diferencias sin depender de Excel ni detener la operación.',
  intro:
    'Herramienta operativa para contar inventario con mayor claridad, sincronización en tiempo real y menos trabajo manual.',
  icon: 'package',
  images: [
    {
      src: '/projects/construfijaciones-inventario/dashboard.webp',
      alt: 'Dashboard principal del sistema de inventario de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-inventario/inventarios.webp',
      alt: 'Vista de inventarios del sistema de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-inventario/inventory-creation.webp',
      alt: 'Formulario de creación de inventario en Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-inventario/gestion-de-items.webp',
      alt: 'Gestión de ítems del sistema de inventario',
    },
    {
      src: '/projects/construfijaciones-inventario/item-menu.webp',
      alt: 'Menú de ítem del sistema de inventario',
    },
    {
      src: '/projects/construfijaciones-inventario/excel.webp',
      alt: 'Exportación o manejo de datos en Excel del sistema de inventario',
    },
    {
      src: '/projects/construfijaciones-inventario/login.webp',
      alt: 'Pantalla de inicio de sesión del sistema de inventario',
    },
  ],
  stack: [
    'typescript',
    'nodejs',
    'express',
    'socketio',
    'astro',
    'turso',
    'playwright',
    'cloudflare',
    'eslint',
    'pnpm',
  ],
  details: [
    {
      id: 'impacto',
      eyebrow: 'Impacto operativo',
      title: 'Inventario más claro sin frenar la operación',
      icon: 'chart-bar',
      content: [{ list: impact }],
    },
    {
      id: 'problema',
      eyebrow: 'Problema operativo',
      title: 'Contar inventario mientras la empresa sigue vendiendo',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Solución interna',
      title: 'Un sistema para registrar, sincronizar y comparar',
      icon: 'refresh',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Funciones principales',
      title: 'Herramientas para conteo y seguimiento',
      icon: 'clipboard-list',
      content: [{ list: features }],
    },
    {
      id: 'tecnico',
      eyebrow: 'Decisiones técnicas',
      title: 'Tiempo real, backend ligero e interfaz operativa',
      icon: 'server',
      content: [{ list: technical }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Flujo, backend, interfaz y tiempo real',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Experiencia operativa',
      title: 'Buscar, contar y avanzar con menos fricción',
      icon: 'search',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje',
      title: 'El inventario necesita claridad, no solo registros',
      icon: 'brain',
      content: [{ text: learnings }],
    },
  ],
};
