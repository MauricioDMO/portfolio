import type { EsProjects } from '../../es/projects';
import type { LocalizedProjects } from '../../../schema';
import { facturacionElectronicaDte } from './facturacion-electronica-dte';
import { sistemaInventario } from './sistema-inventario';
import { sistemaRmaGarantias } from './sistema-rma-garantias';
import { construfijacionesWeb } from './construfijaciones-web';

/** English project translations. */
export const projects: LocalizedProjects<EsProjects> = {
  facturacionElectronicaDte,
  sistemaInventario,
  sistemaRmaGarantias,
  construfijacionesWeb,
};
