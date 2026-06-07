import type { Project } from './types';

const problem =
  'La empresa necesitaba adaptarse a la facturación electrónica exigida en El Salvador, pero su operación dependía de un sistema legado sin integración directa. El proceso anterior obligaba a repetir información, revisar datos manualmente y emitir documentos con demasiados pasos, aumentando tiempo operativo y riesgo de errores.';

const solution =
  'Construcción de un sistema web full-stack para emitir Documentos Tributarios Electrónicos, tomar datos desde el sistema legado mediante automatización autorizada con Playwright, validar la información, generar el JSON fiscal, firmarlo, enviarlo al Ministerio de Hacienda, generar PDF, enviar correos y almacenar respaldos de forma segura.';

const role =
  'Diseñé, desarrollé, implementé, mantuve y desplegué el sistema de extremo a extremo. Trabajé la lógica fiscal, experiencia de emisión, integración con servicios externos, generación de PDF, firma digital, autenticación, almacenamiento y adaptación del flujo operativo real de la empresa.';

const ux =
  'La interfaz se diseñó para reducir el proceso a pasos mínimos: seleccionar tipo de documento, ingresar serie y correlativo del sistema legado, cargar la información, revisar datos clave y emitir. El objetivo fue que una tarea crítica y repetitiva pudiera completarse rápido, con validaciones claras y menos riesgo de error humano.';

const impact = [
  '+300 facturas mensuales gestionadas en producción',
  'Ahorro de más de la mitad del tiempo operativo de facturación',
  'Reducción de doble digitación entre sistema legado y DTE',
  'Integración con Ministerio de Hacienda, PDF, correo y almacenamiento',
  'Mayor trazabilidad de documentos emitidos, enviados y respaldados',
  'Control interno sobre el flujo fiscal sin depender completamente de terceros',
];

const features = [
  'Emisión de Factura, Crédito Fiscal, Nota de Crédito y Sujeto Excluido',
  'Obtención de datos desde sistema legado mediante Playwright',
  'Generación y validación de JSON según esquemas fiscales',
  'Firma digital de documentos con JWT RS512',
  'Envío de documentos al Ministerio de Hacienda',
  'Generación de PDF con representación gráfica del DTE',
  'Envío de correos transaccionales a clientes',
  'Almacenamiento de JSON y PDF en AWS S3',
  'Acceso seguro a documentos mediante URLs firmadas',
  'Ciclos de vida de almacenamiento para respaldos a largo plazo',
  'Autenticación, sesiones y control de acceso interno',
  'Reportes y consulta de documentos emitidos',
];

const technical = [
  'Next.js como framework full-stack para interfaz y lógica del sistema',
  'TypeScript para modelar flujos fiscales complejos con mayor seguridad',
  'Playwright para automatizar extracción autorizada desde el sistema legado',
  'JWT y firma RS512 para cumplir el flujo de firmado digital',
  'PDFKit para generar la representación gráfica del documento',
  'AWS S3 para almacenar documentos fiscales y respaldos',
  'URLs firmadas para acceso temporal y seguro a archivos',
  'Docker para desplegar componentes con dependencias como Playwright',
];

const learnings =
  'El mayor aprendizaje fue entender que un sistema fiscal no se resuelve solo con código: requiere dominar reglas de negocio, esquemas oficiales, validaciones estrictas, errores humanos, trazabilidad, despliegue y confianza operativa. También reforcé el valor de adaptar tecnología moderna a sistemas legados sin romper el flujo real de trabajo.';

export const facturacionElectronicaDte: Project = {
  slug: 'facturacion-electronica-dte',
  title: 'Sistema de Facturación Electrónica DTE',
  eyebrow: 'Sistema fiscal en producción',
  summary:
    'Sistema web para emitir, firmar, enviar, respaldar y consultar Documentos Tributarios Electrónicos dentro de una operación real.',
  intro:
    'Plataforma fiscal en producción que conecta un sistema legado con el flujo moderno de facturación electrónica, reduciendo trabajo manual y mejorando la trazabilidad.',
  url: '',
  repo: '',
  icon: 'file-invoice',
  images: [
    {
      src: '/projects/construfijaciones-dte/dashboard.webp',
      alt: 'Dashboard principal del sistema DTE de Construfijaciones',
    },
    {
      src: '/projects/construfijaciones-dte/seleccion-de-tipo-de-factura.webp',
      alt: 'Selección de tipo de factura en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/datos-del-cliente.webp',
      alt: 'Formulario de datos del cliente para factura DTE',
    },
    {
      src: '/projects/construfijaciones-dte/info-factura.webp',
      alt: 'Información de la factura en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/factura.webp',
      alt: 'Detalle de factura generada en el sistema DTE',
    },
    {
      src: '/projects/construfijaciones-dte/resumen-envio.webp',
      alt: 'Resumen de envío de documento tributario electrónico',
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
  stack: [
    'nextjs',
    'typescript',
    'postgresql',
    'aws',
    'jwt',
    'docker',
    'playwright',
    'zod',
    'cloudflare',
    'eslint',
    'pnpm',
  ],
  details: [
    {
      id: 'impacto',
      eyebrow: 'Impacto real',
      title: 'Una operación fiscal más rápida y rastreable',
      icon: 'chart-bar',
      content: [{ list: impact }],
    },
    {
      id: 'problema',
      eyebrow: 'Problema operativo',
      title: 'Un flujo fiscal moderno conectado a un sistema legado',
      icon: 'target-arrow',
      content: [{ text: problem }],
    },
    {
      id: 'solucion',
      eyebrow: 'Solución implementada',
      title: 'Automatización, emisión, firma, envío y respaldo',
      icon: 'bolt',
      content: [{ text: solution }],
    },
    {
      id: 'features',
      eyebrow: 'Módulos e integraciones',
      title: 'Las piezas que sostienen el flujo completo de DTE',
      icon: 'plug-connected',
      content: [{ list: features }],
    },
    {
      id: 'tecnico',
      eyebrow: 'Decisiones técnicas',
      title: 'Tecnología aplicada a un proceso fiscal real',
      icon: 'server',
      content: [{ list: technical }],
    },
    {
      id: 'rol',
      eyebrow: 'Mi rol',
      title: 'Desarrollo completo, implementación y mantenimiento',
      icon: 'user-check',
      content: [{ text: role }],
    },
    {
      id: 'ux',
      eyebrow: 'Experiencia de emisión',
      title: 'Menos pasos para una tarea crítica',
      icon: 'forms',
      content: [{ text: ux }],
    },
    {
      id: 'aprendizaje',
      eyebrow: 'Aprendizaje principal',
      title: 'Un sistema fiscal exige precisión, trazabilidad y criterio',
      icon: 'brain',
      content: [{ text: learnings }],
    },
  ],
};
