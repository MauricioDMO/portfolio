import type { Project } from './types';

const problem =
  'Los procesos de garantia pueden perder informacion cuando se manejan por mensajes, hojas separadas o memoria del equipo, afectando seguimiento y respuesta al cliente.';
const solution =
  'Implementacion de una herramienta para documentar casos, estados, responsables y detalles importantes durante el ciclo de revision o garantia.';
const role =
  'Participe en el planteamiento del flujo, diseno de pantallas y desarrollo de funcionalidades para mantener el proceso comprensible y rastreable.';
const ux =
  'La experiencia se centro en que cada caso tuviera contexto suficiente, estado claro y acciones simples para avanzar sin perder informacion relevante.';
const impact = [
  'Mejor trazabilidad de casos',
  'Procesos de garantia mas ordenados',
  'Menos informacion perdida entre etapas',
];
const features = [
  'Registro de casos RMA',
  'Seguimiento de estados',
  'Historial de cambios',
  'Datos de cliente y producto',
  'Panel para revision operativa',
];
const learnings =
  'Este proyecto mostro que una buena herramienta interna no solo guarda datos: tambien da orden, memoria y continuidad al trabajo del equipo.';

export const sistemaRmaGarantiass: Project = {
  slug: 'sistema-rma-garantias',
  title: 'Sistema RMA / Garantias',
  eyebrow: 'Seguimiento de casos',
  summary:
    'Sistema para registrar, dar seguimiento y ordenar procesos de garantias y devoluciones con mejor trazabilidad.',
  intro:
    'Sistema para que cada garantia tenga contexto, estado y continuidad durante todo el ciclo de revision.',
  icon: 'shield-check',
  stack: ['nextjs', 'postgresql', 'nodejs'],
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
      eyebrow: 'Perdida de seguimiento',
      title: 'Cuando el caso pierde contexto entre etapas',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Flujo rastreable',
      title: 'Un flujo para documentar estado y responsables',
      icon: 'bolt',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Piezas del sistema',
      title: 'Los modulos que dan continuidad al proceso',
      icon: 'code',
      content: [{ list: features }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Ordenar el proceso desde la interfaz',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Experiencia de seguimiento',
      title: 'Estado claro para avanzar sin perder informacion',
      icon: 'brain',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje del proceso',
      title: 'Una herramienta interna tambien guarda memoria',
      icon: 'arrow-up-right',
      content: [{ text: learnings }],
    },
  ],
};
