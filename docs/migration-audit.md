# Auditoría de migración — Fase 0

Fecha: 25 de noviembre de 2026. Alcance: inspección del repositorio y compilación local; no se ha hecho un rediseño ni un despliegue. Las propuestas no son decisiones aprobadas.

## Arquitectura y dependencias

El sitio usa Astro 6.4.4 con salida estática, React 19.2.7, Tailwind CSS 4.3.0, iconos Tabler, Tegaki y `@astrojs/sitemap`; el gestor es pnpm. `astro.config.mjs` integra React, sitemap y Tailwind, y configura español sin prefijo e inglés bajo `/en`. `wrangler.jsonc` sirve `dist/` como assets estáticos de Cloudflare; no hay adaptador SSR configurado. Node local: 24.15.0; pnpm local: 12.6.0. Las versiones declaradas y comandos están en `package.json`.

La arquitectura separa rutas (`src/pages/`), layout (`src/layouts/`), componentes (`src/components/`), secciones (`src/sections/`), datos (`src/data/`), traducciones (`src/i18n/`), estilos (`src/styles/`) y recursos (`src/assets/`, `public/`). La portada es actualmente una composición de secciones; los cuatro casos de estudio tienen páginas por idioma y un marco compartido. Los proyectos son datos TypeScript tipados, no colecciones Markdown/MDX.

`src/data/site.ts` centraliza parte de los datos del sitio; las traducciones se mantienen por idioma y sección en `src/i18n/lang/`, con un archivo por proyecto. El SEO incluye sitemap y metadatos en el layout; existe Umami, cuya configuración actual restringe la medición a los dominios de producción. Verificar eventos y SEO bilingüe cuando cambien las rutas.

En `src/layouts/Layout.astro` hay canonical, Open Graph, Twitter Cards, idioma HTML y soporte JSON-LD, pero no se declaran enlaces `hreflang`. El `ClientRouter` hace importante verificar páginas vistas y eventos tras transiciones. La restauración explícita de scroll solo comprueba `/proyectos/`, no `/en/proyectos/`; comprobar su comportamiento real antes de modificarlo. El selector `src/components/LanguageSwitcher.astro` calcula el enlace a partir de `Astro.url.pathname`, por lo que no conserva parámetros ni fragmentos. La restricción de Umami está configurada con `data-domains`; no se ha verificado en red el comportamiento de los eventos manuales.

`README.md` conserva el contenido del starter y no documenta el proyecto actual. No se encontró ningún workflow en `.github/workflows/`.

## Inventario y reutilización

Las 10 páginas generadas son las dos portadas y cuatro proyectos por idioma: facturación electrónica DTE, inventario, garantías RMA y sitio de Construfijaciones. El inventario de rutas y destinos propuestos está en [redirects.md](redirects.md). FrameKit, el blog, Uses y las páginas independientes About y Contact no forman parte de esas 10 páginas generadas; su contenido no debe inventarse.

Los cuatro proyectos se muestran como destacados porque `featuredProjects` apunta al arreglo completo; el tipo actual no contempla categoría, estado, destacado, borrador ni fechas. Las imágenes asociadas suman 30 WebP: 8 de facturación, 7 de inventario, 10 de garantías y 5 del sitio corporativo.

| Elemento | Clasificación preliminar | Motivo |
|---|---|---|
| Astro, generación estática, Cloudflare y sitemap | Keep | Compatibles con la migración incremental; preservar y validar. |
| Paleta, tipografía e identidad existentes | Keep | El plan exige conservarlas; `DESIGN.md` documenta la intención visual. |
| Layout, navegación, footer, botones y secciones | Refactor | Reutilizar donde corresponda; adaptar jerarquía y accesibilidad por fase. |
| Selector e infraestructura i18n | Refactor | Ya existen, pero no cumplen todavía las rutas y preferencias propuestas. |
| Marco y componentes de casos de estudio | Refactor | Base compartida para una presentación coherente y flexible. |
| Proyectos y traducciones actuales | Migrate | Preservar datos, hechos, capturas y ambos idiomas al pasar al modelo editorial. |
| Rutas actuales | Migrate | Mantener operativas hasta definir y verificar redirecciones equivalentes. |
| README del starter | Replace | Sustituir por documentación real en la fase de publicación. |
| Contenido o componentes que resulten obsoletos | Remove, solo después de verificar | Ninguna eliminación queda autorizada por esta clasificación. |

Los recursos en `public/` ocupan aproximadamente 1,6 MiB y `src/assets/` 12 KiB en el entorno auditado. No se ha hecho una revisión visual de privacidad de todas las capturas; efectuarla antes de volver a publicarlas como parte de los casos de estudio.

### Diseño y componentes concretos

`src/styles/global.css` fija el tema oscuro y la familia sans del sistema; los colores forest/mint se repiten como literales en clases de muchos componentes, sin tokens semánticos centralizados. `DESIGN.md` describe Inter/JetBrains Mono y ancho de 1200 px, mientras el código usa fuentes del sistema, Caveat en el hero y contenedores habituales de 1120 px. Propuesta: tomar la apariencia realmente implementada como referencia para conservar la identidad, y discutir cualquier cambio tipográfico antes de hacerlo. No existe selector de tema ni preferencias light/system.

Reutilizar y adaptar `SiteHeader`, `SiteFooter`, `BrandLink`, `LanguageSwitcher`, `SectionHeader`, `ButtonLink`, `ProjectCard`, `ProjectImageFrame` y `_ProjectPageFrame.astro`. Los datos del correo se repiten en varios componentes pese a existir `site.email`. Las portadas y envoltorios de proyectos se duplican por idioma: evaluar simplificación cuando se cambien sus rutas, sin imponer abstracciones anticipadas. Los casos de estudio hidratan componentes React para galería y navegación; medir antes de decidir si simplificarlos.

### Riesgos detectados mediante inspección

- `src/components/Carousel.tsx` contiene etiquetas de controles en español también en la versión inglesa; escucha flechas en `window` independientemente del foco, y sus puntos de navegación tienen áreas visuales pequeñas. Validar mediante teclado y táctil antes de decidir su adaptación.
- Las tarjetas de proyectos en la portada inglesa imprimen títulos, descripciones e impactos originales sin traducir en `src/sections/projects/components/ProjectCard.astro`; `ProjectImageFrame.astro` también imprime el texto alternativo original.
- `src/sections/process/ProcessSection.astro` oculta inicialmente tarjetas mediante CSS y depende de JavaScript para mostrarlas; si falla o está deshabilitado pueden permanecer invisibles, salvo con movimiento reducido.
- No se ha verificado manualmente el indicador de foco, contraste, tamaños de objetivos ni un enlace de salto al contenido; son áreas prioritarias para revisión de accesibilidad, no una declaración de incumplimiento completo.
- `Layout.astro` referencia `/favicon.ico`, que no aparece en `public/` ni en `dist/`; confirmar con petición HTTP. Faltan `hreflang` y una imagen social predeterminada.
- Las capturas y los textos pueden identificar clientes o contener datos reales; verificar autorización y privacidad antes de migrarlos. Confirmar también las métricas y afirmaciones existentes.

### Privacidad: atención prioritaria

**Actualización:** el propietario confirmó que la captura de factura contiene datos de prueba. Esta confirmación se limita a dicha captura; las demás siguen pendientes de revisión.

La inspección visual de `public/projects/construfijaciones-dte/factura.webp` detectó un documento fiscal con identificadores y un PIN de descarga, que el propietario ha confirmado como datos de prueba. Está en `public/` y aparece en la compilación local. `public/projects/construfijaciones-rma/usuarios.webp` muestra identificadores y correos que parecen de prueba; confirmar su naturaleza. Revisar el resto de capturas y solicitar autorización de publicación. No se ha modificado ni desplegado ningún recurso durante la auditoría.

## Brechas frente al plan

- La raíz muestra el español sin prefijo. El plan propone detectar idioma en `/` y servir español bajo `/es`; las URLs de proyecto inglesas usan `/en/proyectos/`, no `/en/projects/`. Es necesario acordar equivalencias, slugs y estrategia de redirección sin romper SEO.
- La salida estática no proporciona por sí sola una decisión de idioma en servidor: evaluar una solución compatible con Cloudflare y con navegación directa, indexación, ausencia de JavaScript y caché.
- Los proyectos usan datos TS y traducciones separadas; faltan las colecciones editoriales, slugs por idioma, borradores validados y blog previstos. Evitar migrarlos hasta la fase correspondiente.
- La información profesional, currículums, fotografía, FrameKit e infraestructura necesitan datos y aprobación del propietario. No convertir los ejemplos del plan en afirmaciones verificadas.
- Los objetivos Lighthouse, Core Web Vitals, WCAG y navegación responsive no se han medido en navegador durante esta auditoría; no se presume conformidad. Programar mediciones reproducibles y revisión manual.

## Línea base de validación

| Comprobación | Resultado |
|---|---|
| `pnpm build` | Correcto; 10 páginas, `robots.txt` y sitemap, salida estática. |
| `pnpm exec astro check` | No ejecutada: solicita instalar `@astrojs/check` y `typescript`; no se instalaron. |
| `pnpm exec tsc --version` | Falló: `tsc` no está disponible como ejecutable del proyecto. |
| Lint | No existe script configurado. |
| Tests | No existe script configurado ni se encontraron archivos `*.test`/`*.spec` JS/TS. |
| Lighthouse, accesibilidad manual y Core Web Vitals | Pendientes; no hay cifras de línea base. |

## Estrategia por fases

Respetar el orden de `migration-plan.md` y solicitar aprobación antes de cada fase. Fase 1: consolidar lo existente sin cambiar identidad, navegación y tema con comprobaciones responsive/accesibles. Fase 2: resolver URLs y preferencias conservando enlaces. Fase 3: evaluar colecciones nativas y esquemas. Fase 4: migrar los cuatro proyectos existentes y agregar nuevos solo con información real. Después, continuar portada, perfil/CV, blog/Uses/contacto, búsqueda, SEO/pruebas y publicación según el plan. Cada fase requiere validación propia; redirecciones y rollback deben comprobarse antes de publicar.

Las decisiones abiertas y la información solicitada se registran en [migration-progress.md](migration-progress.md).
