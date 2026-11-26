/** Claves y valores estáticos compartidos por el CV web y el generador de PDF. */
export const cvDuties = ['cv.duty1', 'cv.duty2', 'cv.duty3'];

export const cvResults = ['cv.result1', 'cv.result2', 'cv.result3'];

/** [clave de la etiqueta, texto o clave del valor]; `t()` resuelve ambos. */
export const cvSkills = [
  ['cv.skillLanguages', 'TypeScript, JavaScript, SQL'],
  ['cv.skillFrontend', 'React, Next.js, Astro, Tailwind CSS, HTML, CSS'],
  ['cv.skillBackend', 'Node.js, Express.js, REST APIs, WebSockets'],
  ['cv.skillDatabases', 'PostgreSQL, Turso/libSQL'],
  ['cv.skillInfrastructure', 'Linux, Docker, VPS, Cloudflare, AWS S3, Dokploy'],
  ['cv.skillTools', 'Git, GitHub, pnpm, Bun, PDFKit, Playwright, OpenCode, Hermes Agent'],
  ['cv.skillBusiness', 'cv.skillBusinessText'],
  ['cv.skillAi', 'cv.skillAiText'],
];

/** [id del proyecto, clave del título, clave de la descripción, stack]. */
export const cvProjects = [
  ['facturacion-electronica-dte', 'cv.projectTitleDte', 'cv.projectDte', 'Next.js · PostgreSQL · AWS'],
  ['construfijaciones-web', 'cv.projectTitleWebsite', 'cv.projectWebsite', 'Next.js · React · Tailwind CSS'],
  ['sistema-inventario', 'cv.projectTitleInventory', 'cv.projectInventory', 'TypeScript · Express.js · Socket.IO · Astro · Turso'],
  ['sistema-rma-garantias', 'cv.projectTitleRma', 'cv.projectRma', 'Next.js · Turso · AWS'],
];
