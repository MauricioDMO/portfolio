import type { Project } from './types';

const problem =
  'El proceso anterior requería tareas repetitivas, doble registro de información y revision manual de documentos, lo que consumía tiempo y aumentaba la posibilidad de errores.';
const solution =
  'Construcción de una plataforma para centralizar la emision de documentos, generar PDFs, almacenar respaldos, enviar correos y comunicarse con servicios externos necesarios para el flujo fiscal.';
const role =
  'Participe en el diseño, desarrollo, implementación, mantenimiento y despliegue del sistema, trabajando tanto la experiencia de usuario como la logica de negocio y las integraciones.';
const ux =
  'La interfaz se diseno para emitir documentos con el menor numero de pasos posible, reduciendo friccion en una tarea repetitiva y critica para la operacion diaria.';
const impact = [
  '+300 facturas mensuales gestionadas',
  'Reduccion importante del tiempo operativo',
  'Integracion con Ministerio de Hacienda, PDF, correo y almacenamiento',
];
const features = [
  'Emision y gestion de documentos tributarios electronicos',
  'Generacion de documentos PDF',
  'Envio de correos transaccionales',
  'Almacenamiento de respaldos',
  'Autenticacion y manejo de sesiones',
  'Integracion con APIs externas',
];
const learnings =
  'Este proyecto reforzo la importancia de pensar mas alla del codigo: reglas de negocio, errores humanos, trazabilidad, mantenimiento y confianza operativa.';

export const facturacionElectronicaDte: Project = {
  slug: 'facturacion-electronica-dte',
  title: 'Sistema de Facturación Electrónica DTE',
  eyebrow: 'Sistema en producción',
  summary:
    'Sistema web para emisión, gestión y envío de documentos tributarios electrónicos, integrado con flujos operativos reales.',
  intro:
    'Sistema fiscal en produccion para emitir, respaldar y enviar documentos tributarios electronicos dentro de una operacion real.',
  icon: 'receipt-tax',
  images: [
    {
      src: '/projects/construfijaciones-dte/dashboard.webp',
      alt: 'Dashboard principal del sistema DTE de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-dte/seleccion-de-tipo-de-factura.webp',
      alt: 'Seleccion de tipo de factura en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/datos-del-cliente.webp',
      alt: 'Formulario de datos del cliente para factura DTE',
    },
    {
      src: '/projects/construfijaciones-dte/info-factura.webp',
      alt: 'Informacion de la factura en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/factura.webp',
      alt: 'Detalle de factura generada en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/resumen-envio.webp',
      alt: 'Resumen de envio de documento tributario electronico',
    },
    {
      src: '/projects/construfijaciones-dte/reportes.webp',
      alt: 'Reportes del sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/login.webp',
      alt: 'Pantalla de inicio de sesión del sistema DTE',
    },
  ],
  stack: ['nextjs', 'postgresql', 'aws', 'jwt'],
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
      eyebrow: 'Problema operativo',
      title: 'El punto donde el flujo fiscal se volvia lento',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Solucion fiscal',
      title: 'Una plataforma para centralizar la emision',
      icon: 'bolt',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Integraciones criticas',
      title: 'Las piezas que sostienen la operacion',
      icon: 'code',
      content: [{ list: features }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Del diseno del flujo al despliegue',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Experiencia de emision',
      title: 'Menos friccion en una tarea critica',
      icon: 'brain',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje principal',
      title: 'Lo que este sistema termino reforzando',
      icon: 'arrow-up-right',
      content: [{ text: learnings }],
    },
  ],
};
