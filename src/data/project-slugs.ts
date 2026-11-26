/** Identificadores estables: id español ↔ slug público inglés. */
const projectSlugs: Record<string, string> = {
  'facturacion-electronica-dte': 'electronic-invoicing',
  'sistema-inventario': 'inventory-management',
  'sistema-rma-garantias': 'warranty-management',
  'construfijaciones-web': 'construfijaciones-web',
};

const slugToId: Record<string, string> = Object.fromEntries(
  Object.entries(projectSlugs).map(([id, slug]) => [slug, id]),
);

/** Slug público inglés para un id español (identidad si no hay mapa). */
export function projectEnSlug(id: string): string {
  return projectSlugs[id] ?? id;
}

/** Id español para un slug inglés o un id español (identidad si no hay mapa). */
export function projectEsId(slugOrId: string): string {
  return slugToId[slugOrId] ?? slugOrId;
}
