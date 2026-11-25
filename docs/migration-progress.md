# Seguimiento de migración

Actualizado: 25 de noviembre de 2026.

## Fase actual

**Fase 4 — migración de proyectos**, en curso: los cuatro proyectos existentes están migrados; FrameKit, infraestructura y revisión de capturas requieren información del propietario. No iniciar la Fase 5 sin aprobación explícita.

## Completado

- Lectura del plan completo e inspección de arquitectura, configuración y estructura.
- Inventario de páginas generadas y mapa preliminar de URLs.
- Clasificación inicial de elementos y propuesta de reutilización.
- Compilación de referencia e identificación de comprobaciones no configuradas.
- Documentación inicial de arquitectura, contenido y localización.
- Fase 1: variables de color compartidas y adaptación de componentes, secciones y casos de estudio a temas claro y oscuro.
- Preferencia de tema sistema/claro/oscuro, persistencia local y conservación durante las transiciones; el modo sistema sigue cambios del sistema operativo.
- Navegación adaptable con controles de idioma y tema, foco visible y respeto a movimiento reducido para el desplazamiento.
- Fase 2: rutas `/es/` y `/en/`, detección en la raíz y preferencia persistente.
- Equivalencias de proyectos y reglas 301 de Cloudflare para las rutas antiguas.
- Traducción de tarjetas, textos alternativos y controles del carrusel; sitemap con las URLs localizadas actuales.
- Fase 3: colecciones Markdown tipadas para proyectos y blog, con borradores por defecto y validación de metadatos y relaciones.
- Rutas y plantilla editorial bilingües; enlaces entre traducciones publicadas e indicación cuando no hay traducción.
- Correo centralizado en `site.email`; los proyectos originales permanecen intactos.
- Fase 4: facturación, inventario, RMA y Construfijaciones migrados a Markdown ES/EN, con galería, anclas antiguas y rutas localizadas preservadas.
- Catálogo bilingüe con búsqueda, filtros y orden; destacados configurables desde el contenido.
- Ajuste solicitado: recuperar la disposición anterior de los casos y los iconos de tecnologías, conservando Markdown, galerías y rutas.
- Actualizadas las cinco capturas del sitio de Construfijaciones desde `construfijaciones.com` (1600×900 WebP), conservando nombres, rutas y textos alternativos.
- Ajuste solicitado en el catálogo: `/` enfoca el buscador solo en las páginas de proyectos, con pista visual en escritorio y margen superior del título reducido.
- Ajuste solicitado en las tarjetas: CTA destacado como botón relleno con icono Tabler, tarjeta completa clicable y máximo dos proyectos por fila.

## Pendiente y riesgos

- Obtener información verificable de FrameKit y de la infraestructura antes de crear sus casos de estudio o diagramas.
- Revisar privacidad y autorización de las capturas restantes antes de publicar; verificar métricas existentes.
- Implementar el listado del blog en la Fase 7.
- Medir Lighthouse y revisar accesibilidad y responsive manualmente en páginas representativas; aún no hay cifras verificadas.
- Revisar capturas por datos privados; verificar enlaces históricos y redirecciones en el hosting.
- El propietario confirmó que `public/projects/construfijaciones-dte/factura.webp` contiene datos de prueba; se conserva. Revisar independientemente las demás capturas antes de migrarlas.
- Revisar la navegación global por flechas del carrusel; el contenido de proceso puede quedar oculto sin JavaScript.
- Decidir si añadir herramientas de tipos, lint y pruebas en una fase apropiada; no se instalaron dependencias.
- Conservar analítica de producción, contenido bilingüe y URLs existentes durante cada transición.

## Decisiones y preguntas abiertas

- Mantener por ahora Astro, salida estática y Cloudflare; propuesta de evolución incremental, no aprobación para rediseñar.
- El propietario eligió detectar idioma en `/` y dirigir a `/es` o `/en`, conforme al plan; conservar enlaces antiguos de proyectos.
- Revisar los slugs ingleses iniciales y su impacto SEO antes de publicar.
- El propietario aprobó la Fase 1, conservando la identidad actual y con temas light/dark/system.
- La tipografía y el ancho documentados en `DESIGN.md` difieren de lo implementado. Se propone conservar la apariencia actual y discutir cambios significativos, incluida la escritura del hero.
- Se necesitarán fotografía, historia profesional, fechas, formación, certificaciones, métricas comprobables, recursos de proyectos, CV, herramientas y servicios autohospedados antes de publicar el contenido correspondiente.

## Validación

Fase 4: compilación Astro correcta con caché Vite aislada, 21 páginas generadas; aviso esperado por colección de blog vacía. Comparación local verificó todas las cadenas de origen de los cuatro casos en ambos idiomas. En navegador se comprobaron cuatro tarjetas destacadas, búsqueda con tildes, filtro por estado, mensaje vacío, selector de idioma, galería, ocho anclas históricas y ancho móvil de 375 px. Brave mostró galería y navegación en el caso de inventario. `node --test test/routes.test.mjs`, `node --test test/content-collections.test.mjs` y `node --test test/fase4-projects.test.mjs`: 4, 3 y 4 pruebas correctas, respectivamente.

Ajuste visual posterior: compilación correcta y comprobación en navegador del diseño de inventario, 10 iconos de tecnologías, galería de 7 imágenes y navegación; a 375 px no hay desbordamiento horizontal. `node --test test/fase4-projects.test.mjs`: 6 pruebas correctas, incluidos nombres, claves y tecnologías desconocidas.

Ajuste del atajo `/`: compilación correcta, `node --test test/*.test.mjs` con 14 pruebas correctas y verificación en navegador en `/es/proyectos/` y `/en/projects/`: `/` enfoca el buscador, la pista no aparece a 375 px y sí desde 1280 px, escribir `/` dentro del campo no se intercepta y la portada no reacciona a `/`. El título del catálogo pasa de `mt-6` a `mt-0`. `git diff --check`: correcto.

Ajuste de tarjetas: compilación correcta y `node --test test/fase4-projects.test.mjs` con 7 pruebas correctas. En navegador se verificó una sola columna a 375 px y dos a 1280 y 1910 px, un único enlace por tarjeta, clic en el cuerpo y en el CTA hacia el caso, CTA con fondo de acento y sin sombra, e icono `IconArrowUpRight` de `@tabler/icons-astro`.

Fase 3: compilación Astro correcta con caché Vite aislada; las colecciones vacías generan avisos esperados de `glob`. `node --test test/content-collections.test.mjs`: 3 pruebas de integración correctas, con proyectos y artículos sintéticos en un directorio aislado; verifican páginas bilingües, selector de traducción, exclusión de borradores del sitemap, slugs duplicados y fecha obligatoria. `node --test test/routes.test.mjs`: 4 pruebas correctas. `git diff --check`: correcto.

Fase 2: compilación Astro correcta con caché Vite aislada, 19 páginas generadas (incluidas ocho rutas antiguas) y 10 URLs localizadas en sitemap. `node --test test/routes.test.mjs`: 4 pruebas correctas; requiere Node 22.15+ y en Node 22 la opción `--experimental-strip-types`. `git diff --check`: correcto. En navegador se verificaron detección española, preferencia guardada, cambio de idioma con query y fragmento y traducción de un proyecto; Wrangler local confirmó cuatro redirecciones con y sin barra. Las 16 reglas fueron aceptadas. No se verificaron redirecciones en producción.

Fase 1: compilación y pruebas manuales de tema y viewport 375 px correctas. `astro check` requiere dependencias no instaladas; no hay lint configurado. Sin evaluación Lighthouse o WCAG concluyente.

## Archivos relevantes

- `docs/migration-plan.md`: plan original.
- `docs/migration-audit.md`: auditoría y clasificación.
- `docs/architecture.md`: arquitectura actual y dirección propuesta.
- `docs/content-guide.md`, `docs/localization-guide.md`: estado actual y trabajo previsto.
- `docs/redirects.md`: rutas existentes y mapa de redirecciones.
- `src/styles/global.css`, `src/components/ThemeSwitcher.astro`, `src/layouts/Layout.astro`: tokens y preferencias de tema.
- `src/components/`, `src/sections/`, `src/pages/proyectos/_ProjectPageFrame.astro`: componentes adaptados a los temas.
- `src/i18n/index.ts`, `src/components/LanguageSwitcher.astro`, `src/pages/{es,en}/`, `public/_redirects`: rutas y navegación bilingües.
- `test/routes.test.mjs`: comprobaciones de rutas y redirecciones históricas.
- `src/content.config.ts`, `src/lib/content.ts`, `src/components/EditorialPage.astro`: esquemas, validación y plantilla editorial.
- `test/content-collections.test.mjs`: pruebas de integración de las colecciones.
- `src/content/projects/`: proyectos migrados y metadatos de galerías.
- `src/components/ProjectCatalog.astro`, `src/components/ProjectPreview.astro`: catálogo y destacados.
- `test/fase4-projects.test.mjs`: regresión de URLs, contenido, catálogo y destacados.

## Próximo paso

Completar las pruebas y recopilar información de FrameKit e infraestructura; revisar capturas y esperar aprobación antes de la Fase 5. Comprobar SEO y redirecciones en el hosting antes de publicar.
