# Arquitectura del portafolio

Estado observado en la Fase 0, 25 de noviembre de 2026. Las propuestas no son funcionalidades implementadas.

## Arquitectura actual

- Astro 6 genera un sitio estático en `dist/`; `wrangler.jsonc` configura esos archivos como assets de Cloudflare.
- `src/pages/` contiene las rutas localizadas en `src/pages/es/` y `src/pages/en/`; `/` detecta idioma en el cliente. Las páginas de proyectos delegan en `src/pages/proyectos/_ProjectPageFrame.astro`.
- `src/layouts/` proporciona el layout común; `src/components/` y `src/sections/` contienen componentes y secciones.
- `src/data/site.ts`, `src/data/projects/` y `src/data/techs.ts` almacenan datos compartidos y proyectos tipados.
- `src/i18n/` contiene el esquema, diccionarios por idioma, equivalencias de slugs y utilidades de localización. Los dos idiomas tienen prefijo; las rutas antiguas se redirigen mediante `public/_redirects` en Cloudflare.
- `src/content.config.ts` define colecciones Markdown de proyectos y blog; `src/lib/content.ts` valida relaciones y selecciona contenido publicado. Los archivos se guardan en `src/content/{projects,blog}/{id}/{locale}.md` y las páginas dinámicas reutilizan `src/components/EditorialPage.astro`.
- `src/styles/`, `src/assets/` y `public/` contienen estilos y recursos. Astro integra React, Tailwind y sitemap.

## Dirección propuesta, pendiente de aprobación

Conservar Astro, la salida estática y Cloudflare. Evolucionar los componentes existentes, no rehacer el sitio. Los cuatro proyectos existentes usan ahora las colecciones editoriales para las rutas localizadas; sus fuentes anteriores se conservan para rutas históricas y contraste. Las colecciones no requieren CMS ni base de datos. Mantener los diccionarios de interfaz y separar el contenido editorial por idioma con identificadores compartidos.

La detección de idioma en `/` funciona en el cliente porque el despliegue es estático; hay enlaces manuales sin JavaScript. Las redirecciones permanentes requieren Cloudflare Static Assets y deben volver a probarse en el entorno publicado.

Ver [auditoría](migration-audit.md), [progreso](migration-progress.md) y [redirecciones](redirects.md).
