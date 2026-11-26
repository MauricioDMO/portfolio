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

**Fase 9 (26 de noviembre de 2026):** las 16 reglas siguen intactas: las únicas URLs históricas inventariadas son las ocho de proyectos, con y sin barra final. La compilación verificó que los enlaces internos de los 35 HTML generados resuelven a archivos existentes. Las referencias `hreflang` se emiten en el HTML (`Layout.astro`) y son recíprocas, incluidos los slugs distintos de proyectos, artículos y las rutas `sobre-mi`/`about`, `contacto`/`contact`. No se activó la opción `i18n` de `@astrojs/sitemap`: construiría las alternativas por sustitución del segmento de idioma y produciría destinos inexistentes para esas rutas; por eso el sitemap no lleva `xhtml:link`. Queda pendiente comprobar las 301 en el dominio publicado y decidir qué hacer con enlaces externos a fragmentos antiguos de la portada (`#sobre-mi`, `#proceso`, `#contacto`), que un servidor no puede redirigir por separado.
