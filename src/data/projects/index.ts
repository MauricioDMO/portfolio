export type { Project, ProjectDetail, ProjectDetailContent, ProjectIconKey } from './types';

export { facturacionElectronicaDte } from './facturacion-electronica-dte';
export { sistemaInventario } from './sistema-inventario';
export { sistemaRmaGarantiass } from './sistema-rma-garantias';
export { construfijacionesWeb } from './construfijaciones-web';

import type { Project } from './types';
import { facturacionElectronicaDte } from './facturacion-electronica-dte';
import { sistemaInventario } from './sistema-inventario';
import { sistemaRmaGarantiass } from './sistema-rma-garantias';
import { construfijacionesWeb } from './construfijaciones-web';

export const projects: Project[] = [
  facturacionElectronicaDte,
  sistemaInventario,
  sistemaRmaGarantiass,
  construfijacionesWeb,
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Project not found: ${slug}`);
  }

  return project;
}
