import type { Project } from './types';

const problem =
  'La gestion de inventario puede volverse fragil cuando depende de registros dispersos, consultas manuales y poca visibilidad del estado real de los productos.';
const solution =
  'Desarrollo de un sistema web para consultar, registrar y organizar informacion de inventario desde una interfaz centralizada y facil de usar.';
const role =
  'Trabaje en la estructura del sistema, interfaces, flujos de datos y decisiones tecnicas necesarias para que la herramienta fuera practica en uso diario.';
const ux =
  'El foco de experiencia estuvo en hacer visibles los datos importantes rapidamente, evitar pasos innecesarios y mantener acciones frecuentes cerca del usuario.';
const impact = [
  'Mayor claridad sobre existencias y productos',
  'Menos dependencia de registros manuales dispersos',
  'Base mas ordenada para procesos internos',
];
const features = [
  'Gestion de productos',
  'Consulta de existencias',
  'Registro de movimientos',
  'Filtros y busqueda',
  'Vistas para seguimiento operativo',
];
const learnings =
  'El inventario exige claridad y consistencia. Aprendi a valorar interfaces que reducen dudas y hacen mas facil mantener datos correctos.';

export const sistemaInventario: Project = {
  slug: 'sistema-inventario',
  title: 'Sistema de Inventario',
  eyebrow: 'Operacion interna',
  summary:
    'Herramienta para ordenar productos, existencias y movimientos internos con una experiencia clara para usuarios operativos.',
  intro:
    'Herramienta interna para dar visibilidad a productos, existencias y movimientos sin depender de registros dispersos.',
  icon: 'package',
  stack: ['nextjs', 'nodejs', 'postgresql'],
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
      eyebrow: 'Desorden de informacion',
      title: 'Cuando el inventario depende de registros dispersos',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Centro de consulta',
      title: 'Un lugar unico para consultar y registrar',
      icon: 'bolt',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Modulos principales',
      title: 'Las areas clave del sistema',
      icon: 'code',
      content: [{ list: features }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Estructura, interfaz y decisiones tecnicas',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Operacion diaria',
      title: 'Datos visibles para reducir dudas',
      icon: 'brain',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Criterio aprendido',
      title: 'La claridad tambien es parte del sistema',
      icon: 'arrow-up-right',
      content: [{ text: learnings }],
    },
  ],
};
