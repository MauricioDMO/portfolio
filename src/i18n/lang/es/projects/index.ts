import type { TranslationSection } from '../../../schema';
import { facturacionElectronicaDte } from './facturacion-electronica-dte';
import { sistemaInventario } from './sistema-inventario';
import { sistemaRmaGarantias } from './sistema-rma-garantias';
import { construfijacionesWeb } from './construfijaciones-web';

/** Spanish project source strings. */
export const projects = {
  facturacionElectronicaDte,
  sistemaInventario,
  sistemaRmaGarantias,
  construfijacionesWeb,
} satisfies TranslationSection;

export type EsProjects = typeof projects;
