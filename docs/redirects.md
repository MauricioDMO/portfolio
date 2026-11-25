# URLs y redirecciones

Actualizado durante la Fase 2. `public/_redirects` contiene reglas 301 de Cloudflare para cada ruta antigua de proyecto, con y sin barra final. Las reglas se comprobaron con Wrangler local; verificar de nuevo en producción antes de publicar. También existen `/robots.txt`, `/sitemap-index.xml` y el sitemap generado.

| URL actual | Equivalente objetivo propuesto | Estado |
|---|---|---|
| `/` | `/es/` o `/en/` según preferencia o navegador | Detección en JavaScript; enlaces disponibles sin JavaScript |
| `/en` | `/en` | Conservar |
| `/proyectos/construfijaciones-web` | `/es/proyectos/construfijaciones-web/` | 301 |
| `/proyectos/facturacion-electronica-dte` | `/es/proyectos/facturacion-electronica-dte/` | 301 |
| `/proyectos/sistema-inventario` | `/es/proyectos/sistema-inventario/` | 301 |
| `/proyectos/sistema-rma-garantias` | `/es/proyectos/sistema-rma-garantias/` | 301 |
| `/en/proyectos/construfijaciones-web` | `/en/projects/construfijaciones-web/` | 301 |
| `/en/proyectos/facturacion-electronica-dte` | `/en/projects/electronic-invoicing/` | 301 |
| `/en/proyectos/sistema-inventario` | `/en/projects/inventory-management/` | 301 |
| `/en/proyectos/sistema-rma-garantias` | `/en/projects/warranty-management/` | 301 |

Los fragmentos de la portada y de los casos de estudio también pueden estar enlazados externamente: inventariarlos y verificar sus equivalencias antes de retirar secciones. Confirmar además URLs históricas mediante sitemap desplegado, analítica y enlaces externos; el repositorio solo permite identificar las rutas actuales.

Las reglas HTTP dependen de Cloudflare Workers Static Assets; un servidor estático genérico no procesa `_redirects`. La raíz es un selector estático con redirección cliente, no una redirección HTTP por idioma. Se excluye del sitemap y tiene `noindex`; evaluar el impacto sobre la antigua portada indexada y verificar canonical, `hreflang`, fragmentos y enlaces antes de publicar.
