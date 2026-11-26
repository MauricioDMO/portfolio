# Seguimiento de migración

Actualizado: 26 de noviembre de 2026.

## Fase actual

**Fase 8 — Buscador global: completada el 26 de noviembre de 2026** (el propietario aprobó el inicio). El buscador usa un índice JSON generado en compilación y un diálogo nativo con atajo `Ctrl/Cmd + K`, sin dependencias nuevas. Las fases 0 a 7 siguen concluidas: `/es/cv` y `/en/cv` son el currículum en línea, `/es/sobre-mi` y `/en/about` la página personal, los PDF bilingües están publicados, y `/es/contacto`, `/en/contact`, `/es/blog` y `/en/blog` están operativos. No se crea `/uses` ni `/herramientas`: el stack sigue en `#stack` de la portada. **Fase 9 — SEO, optimización y pruebas: completada el 26 de noviembre de 2026** (el propietario aprobó el trabajo y su cierre). Quedan como comprobaciones atrasadas, no como trabajo de esta fase: medir Lighthouse/Core Web Vitals (sin herramienta instalada), verificar las 301 en el dominio publicado y ejecutar pruebas (esta última, solo con autorización explícita). Las fases 0 a 8 siguen concluidas y no se avanza a la Fase 10 sin aprobación.

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
- Ajuste puntual de portada: mosaico de cuatro proyectos destacados con enlaces al catálogo y contacto; Construfijaciones ocupa el segundo lugar en el orden configurado. No se inicia la Fase 5 completa.
- Ajuste solicitado: Stalwart, NetBird, Hermes Agent, OVHcloud, Dokploy y Coolify añadidos a los pills de «Stack técnico» en `src/data/techs.ts`, con los SVG proporcionados en `public/svg/` (variante oscura de Hermes derivada del original). Iconos monocromos adaptados al tema claro/oscuro en pills y tarjetas de proyecto: Prisma, GitHub, Socket.IO, Express.js, Astro, Vercel, Bash, AWS, ESLint, pnpm, React, Turso, OpenCode, Hermes y Dokploy. Sin cambio de fase.
- Transiciones compartidas del título y la imagen entre el catálogo y los casos de estudio, usando el identificador estable del proyecto.
- Carrusel: navegación con flechas limitada al foco dentro del componente y controles de paginación de 24 × 24 px.
- Selector personalizado accesible para los filtros del catálogo (categoría, estado y orden): botón + listbox con `aria-activedescendant`, navegación con flechas, Inicio/Fin, Enter/Espacio, Escape, Tab y escritura incremental; el resaltado activo y hover usan el color de acento para distinguirse en tema oscuro.
- Decisión del propietario: los proyectos se quedan como están (mosaico de cuatro destacados en la portada, catálogo y casos); la Fase 5 no los modifica. Se actualizó el plan en consecuencia.
- Decisión del propietario: crear una página de contacto dedicada con correo, LinkedIn, GitHub, número de teléfono y enlace a la página de Silver Wolf; se documenta en el plan y corresponde a la Fase 7.
- Datos de contacto proporcionados: `+503 79996844` (al hacer clic abre `https://wa.me/50379996844`) y `https://web.mauriciodmo.com` para Silver Wolf.
- Orden destacado aplicado en el render del catálogo para que sea el orden natural y no haya reordenamiento (layout shift) al cargar; el cambio de orden solo se aplica cuando el usuario lo elige explícitamente.
- Ajuste solicitado: BTCPay Server y Bitcoin añadidos a los pills de «Stack técnico» en `src/data/techs.ts`, con iconos en `public/svg/`. Sin cambio de fase.
- Ajuste solicitado: transición compartida de la imagen entre el mosaico de destacados de la portada (`/en`, `/es`) y el caso de estudio; se añadió `transition:name` a las imágenes en `src/sections/projects/ProjectsSection.astro` con el mismo identificador (`project-image-${id}`) ya usado en catálogo y casos. Sin cambio de fase.
- Fase 4: caso de estudio de FrameKit en ES/EN con información del sitio `framekit.mauriciodmo.com` y del repositorio `MauricioDMO/FrameKit` (licencia Apache 2.0, beta, stack y documentación); tres capturas WebP del sitio en `public/projects/framekit/`. No se añadió a los destacados.
- Ajuste solicitado: las secciones finales del caso de FrameKit se centran ahora en la creación de una librería para generar imágenes, la comunicación y el desarrollo con agentes, y el aprendizaje de mantenimiento de paquetes en npmjs.com y documentación de código abierto.
- Fase 4: caso de estudio de infraestructura en ES/EN con los cuatro servicios indicados por el propietario (Hermes, NetBird, Stalwart y Umami), descripciones basadas en documentación oficial y sin datos sensibles. No se añadió a los destacados.
- Ajuste solicitado: Coolify añadido a las herramientas y a la arquitectura del caso de infraestructura; las dos capturas del panel se optimizaron a WebP (1600 px, 60 KB en total) y se renombraron a `panel-de-control.webp` y `metricas.webp`, eliminando los PNG originales.
- Ajuste solicitado: el campo `featured` se eliminó del esquema y de los 12 archivos de proyecto. `/#proyectos` muestra automáticamente los cuatro primeros por `featuredOrder`, igual que el catálogo: FrameKit e infraestructura ocupan los lugares 3 y 4, e inventario y RMA pasan a 5 y 6. Esta decisión sustituye la indicación anterior de conservar el mosaico original.
- Ajuste solicitado: Playwright añadido a la lista de tecnologías del caso de FrameKit en ES/EN (`src/content/projects/framekit/{es,en}.md`); la entrada ya existía en `src/data/techs.ts`. Sin cambio de fase.
- Ajuste solicitado: las listas flex de tecnologías/herramientas usan `flex-wrap: wrap balance` (pills del stack y lista compartida `ProjectTools`), con `flex-wrap: wrap` como fallback. Sin cambio de fase.
- Ajuste solicitado: en el catálogo (`/es/proyectos` y `/en/projects`) solo el CTA «Ver caso completo» de cada tarjeta está centrado con `flex justify-center`. La barra de filtros y los badges de herramientas se dejaron como estaban. Sin cambio de fase.
- Fase 5 (parcial): disponibilidad centralizada en `src/data/site.ts` (`location`, `remote`) y línea en el hero con ubicación y apertura a oportunidades remotas en ambos idiomas. No se añaden foto ni botón de CV sin archivos definitivos.
- Fase 5 (parcial): `#stack` pasa a «Áreas de especialización» con los cuatro grupos del plan en es/en, rejilla 2×2 en escritorio y una columna en móvil. Se conservan los pills de tecnologías y el ancla `#stack` de la navegación.
- Ajuste solicitado: el icono y el título de cada tarjeta de especialización comparten línea, en ambos idiomas y en móvil.
- i18n sin mapa manual: `t()` deriva el mapa inverso desde el diccionario español en tiempo de ejecución; se eliminó `src/i18n/source-keys.ts`. El encabezado del catálogo y el `description` de proyectos usan ahora claves namespaced, antes dejaban texto español en `/en`.
- Fase 5 (parcial): fotografía del propietario descargada de `https://web.mauriciodmo.com/_astro/mauricio-dmo.C_z7KpM0.webp` en `public/mauricio-dmo.webp` (WebP 900 × 1013, 128 KB) y mostrada en el hero con texto alternativo bilingüe, dimensiones explícitas y prioridad de carga alta.
- Fase 5 (parcial): el resumen de experiencia tomado del CV (Desarrollador de Software en Construfijaciones S.A. de C.V., medio tiempo desde febrero de 2024; sistemas internos en producción para facturación, inventario, RMA y reportes, automatización y soporte a usuarios) se añadió al hero y se retiró a petición del propietario, que quiere menos información en esa sección. Los datos se conservan aquí para el CV web de la Fase 6.
- Fase 6: aprobación del propietario para crear el CV web y mover «Sobre mí» y «Cómo trabajo» fuera de la portada, evitando redundancias.
- Fase 6: rutas `/es/sobre-mi` y `/en/about` con una plantilla compartida: presentación con foto, experiencia real (responsabilidades y resultados verificables), educación en curso, conocimientos agrupados, contacto con teléfono/WhatsApp y correo, y las secciones reutilizadas de About y proceso. Sin botón de descarga de CV.
- Fase 6: navegación actualizada para enlazar a las rutas del CV web y a `#proceso` dentro de ellas; equivalencias `sobre-mi` ↔ `about` añadidas a `localizedPath`.
- Fase 6: el correo de contacto centralizado pasa a ser `contacto@mauriciodmo.com`; el teléfono `+503 79996844` y su enlace de WhatsApp también quedan en `src/data/site.ts`.
- Ajuste solicitado: la portada se redujo de nuevo a petición del propietario. Se quitaron del hero los tres chips de enfoque, la fila de GitHub/LinkedIn (disponible en el footer) y la tarjeta de fortalezas/cifras; se conservan la foto, el titular, la descripción, la disponibilidad y los dos botones.
- Decisión del propietario (26-11-2026): título profesional **Full-Stack Engineer**; `/cv` pasa a ser el currículum en línea y `/sobre-mi` / `/about` la página personal; se descarta la página `/stack` y sus tecnologías siguen en la portada.
- Fase 6: marco compartido `src/pages/cv/_CvPageFrame.astro` y rutas `/es/cv` y `/en/cv` con presentación, contacto, experiencia, impacto operativo, cuatro proyectos enlazados a sus casos, habilidades (incluidas Negocio, Herramientas e IA con criterio), educación e idiomas. Sin botón de PDF hasta tener los documentos definitivos. El teléfono `+503 79996844` (WhatsApp) aparece en la cabecera y en el contacto; el sitio corporativo ocupa la segunda posición de los proyectos, por petición del propietario.
- Fase 6: `/es/sobre-mi` y `/en/about` reescritos como página personal con historia, intereses, filosofía, IA con criterio, las cinco etapas de «Cómo trabajo», aprendizaje continuo y objetivos profesionales; enlace destacado al currículum.
- Fase 6: eliminado `ProfileSignalCard.astro` y sus textos sin uso en `hero`; el componente mostraba «4 proyectos reales», métrica que el propietario prefirió no destacar.
- Fase 6: navegación actualizada (Currículum en las dos variantes, «Cómo trabajo» fuera del menú, `#stack` conservado en la portada); metadatos y `jobTitle` bilingües ajustados a Full-Stack Engineer.
- Ajuste solicitado: `--color-muted` pasa de `#9baaa0` a `#c6d5cb` en tema oscuro y de `#496253` a `#345139` en tema claro, para aumentar el contraste del texto de cuerpo. Un único token en `src/styles/global.css` cubre ambos temas (explícito y preferencia del sistema).
- Ajuste solicitado: textos de `/es/sobre-mi` y `/en/about` reescritos con el contenido proporcionado: propuesta de valor «Construyo software que simplifica el trabajo de las personas.», ubicación junto al título, botón «Contactar» hacia `#contacto`, dos párrafos en «Un poco sobre mí», intereses como título + descripción, «Delego tareas, no decisiones.» como titular de la tarjeta de IA, cinco pasos con frases cortas y cierre «Trabajemos juntos». Se eliminaron los bloques de filosofía, aprendizaje y objetivos por redundantes con el proceso y el cierre. Sin cambio de fase.
- Fase 6 completada en lo que no depende del propietario: datos estáticos del CV centralizados en `src/data/cv.ts` y compartidos entre el CV web y el generador de PDF.
- Fase 6: `scripts/generate-cv-pdf.mjs` genera `public/cv/mauricio-martinez-cv-{es,en}.pdf` desde los mismos textos i18n y datos de `src/data/site.ts`, con Chrome headless y sin dependencias nuevas. Comando: `pnpm cv:pdf`.
- Fase 6: botón «Descargar CV en PDF» / «Download résumé (PDF)» en la cabecera de `/cv`, con atributo `download`, evento de analítica `cv_download` y enlace a la versión del idioma correspondiente. `ButtonLink` admite ahora el atributo `download`.
- Ajuste solicitado: los PDF son tamaño Carta (Letter) y tienen más estilo (cabecera con regla de acento, encabezados con barra lateral, viñetas y etiquetas con color). Los títulos de los cuatro proyectos son enlaces reales al caso de estudio en el idioma del PDF.
- Ajuste solicitado: educación incorpora «CUBO+ y CUBO AI — Oficina Nacional De Bitcoin — En curso, generación 2026» en el CV web y en ambos PDF, con traducción al inglés. Las dos entradas de educación quedan alineadas en la web.
- Ajuste solicitado: las secciones del CV web se distinguen mejor mediante el encabezado compartido `CvSectionHeading.astro`: regla alineada con el contenido, línea de acento y etiqueta grande en negrita; los títulos interiores pasan a `h3`.
- El mapa id español ↔ slug inglés de proyectos se centralizó en `src/data/project-slugs.ts` y lo reutilizan la i18n y el generador de PDF.
- Ajuste solicitado: aspecto de los PDF actualizado en `scripts/generate-cv-pdf.mjs`: tipografía Inter/IBM Plex Sans con Arial como respaldo (nombre 26 pt, encabezados 11,5 pt, cuerpo 10 pt), más separación entre secciones, encabezados sin barra vertical (solo regla horizontal fina), contacto con etiqueta y dato visible (correo, teléfono, portafolio, GitHub y LinkedIn) como enlaces, y cifras de impacto operativo en negrita; las URLs se muestran de forma compacta para que el PDF impreso conserve los datos de contacto. Etiquetas `cv.contactEmail`, `cv.contactPhone` y `cv.contactPortfolio` añadidas a ambos idiomas. `pnpm cv:pdf` regenera un único tamaño Carta por idioma con enlaces de contacto y proyectos verificados. Sin cambio de fase.
- Ajuste solicitado: tercer botón en el hero de la portada («Ver CV» / «View CV») que enlaza al currículum en línea de cada idioma con icono `IconFileCv` de Tabler y analítica `nav_section`. Sin cambio de fase.
- Cierre de la Fase 6 confirmado por el propietario el 26 de noviembre de 2026: CV web, página personal y PDFs bilingües se consideran definitivos para esta fase.
- Fase 7: decisión del propietario de no migrar la página Uses; el stack técnico ya está en la portada (`#stack`). Se documenta en el plan y se retira de las tareas pendientes.
- Fase 7: `site.silverWolf` centraliza `https://web.mauriciodmo.com` y `site.whatsapp` abre el teléfono en WhatsApp.
- Fase 7: rutas `/es/contacto` y `/en/contact` con marco compartido `src/pages/contact/_ContactPageFrame.astro`: canales (correo, WhatsApp, GitHub, LinkedIn), disponibilidad profesional y enlace a Silver Wolf, sin formularios; equivalencia `contacto` ↔ `contact` en `localizedPath`.
- Fase 7: navegación con enlaces a Blog y a la página de contacto dedicada, en lugar del ancla `#contacto`; en las fichas de proyecto «Contacto» también apunta a esa página.
- Fase 7: cierre de portada compacto con disponibilidad y enlace a la página de contacto; el listado de canales ya no se duplica en la portada.
- Fase 7: sección i18n `blog` en es/en con categorías, estado vacío, fecha y tiempo de lectura; rutas `/es/blog` y `/en/blog` con marco compartido y plantilla editorial que muestra fecha, categoría, etiquetas y enlace de vuelta al blog.
- Fase 7: la colección del blog sigue vacía, por lo que el listado muestra el estado vacío y no hay publicaciones recientes en la portada.
- Ajuste solicitado: el CTA del hero pasa a «Ver proyectos» / «See projects» (sin «reales»), lleva al catálogo localizado (`/es/proyectos` y `/en/projects`) y usa `IconLayoutGrid` de Tabler; «Hablemos de tu proyecto» lleva a la página de contacto dedicada, con `IconMessage` y evento `nav_section` en lugar de `mailto:`.
- Ajuste solicitado: RAG añadido a los pills del stack y a las listas de herramientas en `src/data/techs.ts`, con el icono `cube-3d-sphere` de Tabler (`IconCube3dSphere`) renderizado directamente en `TechPill.astro` y `ProjectTools.astro`; enlace al paper original. Sin cambio de fase.
- Ajuste solicitado: MCP añadido a los pills del stack y a las listas de herramientas con el SVG de `public/svg/modelcontextprotocol.svg` (relleno negro, tema claro) y la variante nueva `public/svg/modelcontextprotocol-dark.svg` (relleno blanco, tema oscuro), enlace a `modelcontextprotocol.io`. Sin cambio de fase.
- Ajuste solicitado: Skills añadido a los pills del stack y a las listas de herramientas con el icono `file-text-cog` de Tabler (`IconFileTextCog`), enlace a `agentskills.io`. Sin cambio de fase.
- Ajuste solicitado: reordenadas las entradas de `src/data/techs.ts` por similitud para los pills del stack — Bitcoin (BTCPay Server, Bitcoin) primero, IA (OpenCode, RAG, MCP, Skills) en segundo lugar y después frontend, backend, bases de datos, infraestructura y herramientas. No cambió ninguna entrada ni las claves; Hermes Agent se mantiene en infraestructura por formar parte del caso autohospedado. Sin cambio de fase.
- Post de prueba eliminado. Primer artículo real, bilingüe y en MDX: `src/content/blog/este-sitio-y-construfijaciones/{es,en}.mdx` explica el portafolio y Construfijaciones con datos verificados del CV y del caso web, e incluye una captura existente y un enlace en línea al caso. Para MDX se añadió `@astrojs/mdx@6.0.3` (compatible con Astro 6), se registró `mdx()` en `astro.config.mjs` y el loader y `lib/content.ts` aceptan `.md` y `.mdx`. Sin cambio de fase.
- Ajuste solicitado: el botón verde del artículo se sustituyó por un CTA compacto con borde tenue, texto de acento e icono de Tabler (`ButtonLink` con `variant="ghost"`), centrado dentro de la columna con un contenedor `flex justify-center`; los enlaces del cuerpo siguen siendo Markdown. La cabecera y el cuerpo de las fichas del blog se centran con `mx-auto` en `EditorialPage.astro`, sin cambiar la disposición de los casos de estudio.
- Ajuste solicitado de redacción en el primer artículo (es/en): tono más natural y eliminación del párrafo que explicaba que el contenido vive en Markdown/MDX y que el artículo usa componentes de Astro. Se conservan todos los datos, enlaces, imagen y CTA. Sin cambio de fase.
- Ajuste solicitado: encabezado unificado en todas las páginas. Se eliminó la prop `variant` de `src/components/SiteHeader.astro` (antes `home`, con seis enlaces, y `project`, con cuatro) y se retiró `variant="project"` del catálogo, los casos de estudio, el listado del blog y la ficha de artículo. El mismo menú (Proyectos, CV, Stack, Sobre mí, Blog, Contacto) aparece ahora en portada, CV, sobre mí, contacto, catálogo, casos y artículos, en ambos idiomas; la única diferencia por página es el destino del selector de idioma, que apunta a la traducción de la página actual. Sin cambio de fase.
- Fase 8: endpoint `src/pages/search-index.json.ts` que genera durante la compilación un índice con los proyectos y artículos publicados en ambos idiomas; reutiliza `getPublishedEntries` y `localizedPath`, por lo que excluye borradores y usa las URLs definitivas.
- Fase 8: `src/components/SearchDialog.astro` añade un botón en la cabecera con icono de Tabler, diálogo nativo con atajo `Ctrl/Cmd + K`, búsqueda sin distinción de tildes ni mayúsculas, coincidencias parciales, orden por relevancia, navegación con flechas/Inicio/Fin/Enter/Escape y estado vacío traducido. Los resultados se filtran por el idioma de la página.
- Fase 8: nueva sección i18n `search` en es/en con los textos del diálogo y las etiquetas de categoría de los proyectos; registrada en `schema.ts` y en los índices de ambos idiomas.
- Ajuste visual del buscador: centrado explícito del diálogo porque el reset de Tailwind anula el `margin: auto` propio de `<dialog>`, y oculto el botón nativo de limpiar del campo.
- Ajuste solicitado por el propietario: el índice incluye también las seis páginas principales por idioma (inicio, proyectos, CV, sobre mí, blog y contacto), con títulos y descripciones de SEO ya traducidos. Buscar «proyectos» abre `/es/proyectos/`; el índice pasa a 26 entradas.
- Ajuste solicitado por el propietario: el resultado activo muestra ahora borde y fondo de acento y título en color de acento, y la pista de teclado es visible bajo los resultados. Antes las flechas solo desplazaban la lista y no era evidente qué resultado estaba seleccionado; el resaltado fallaba porque la regla CSS apuntaba a `data-search-option` y el `<li>` no llevaba ese atributo.
- Ajuste solicitado: barra de desplazamiento propia en `src/styles/global.css`, derivada de los tokens de acento y borde con `color-mix`, redondeada y con `scrollbar-width: thin`/`scrollbar-color` como equivalente para Firefox. Aplica al documento y a áreas con scroll interno, como la lista del buscador. Sin cambio de fase.
- Corrección solicitada por el propietario: al llegar al último resultado y pulsar abajo saltaba al tercero, y desde el primero hacia arriba al antepenúltimo. La causa era el cursor quieto sobre la lista: `scrollIntoView` movía el contenido y disparaba `mouseenter` en otra opción, sobrescribiendo la selección del teclado. Se sustituyó `mouseenter` por `pointermove`, que solo responde a movimiento real del ratón; el resaltado al pasar el cursor sigue funcionando. Sin cambio de fase.
- Fase 9: `Layout.astro` emite `hreflang="es"`, `hreflang="en"` y `hreflang="x-default"` con pares recíprocos derivados de `switchLocalePath`; las fichas del blog pasan la ruta traducida real porque sus slugs difieren entre idiomas. El canónico ya existente se conserva y el `x-default` apunta a la versión española, idioma por defecto.
- Fase 9: imagen social predeterminada (`/mauricio-dmo.webp`) en `og:image`/`twitter:image` para las páginas que no definen una imagen propia; se retiró el `<link>` a `/favicon.ico`, que no existe en `public/`, y se conserva `favicon.svg`.
- Fase 9: datos estructurados `BlogPosting` y `BreadcrumbList` para los artículos, con fecha real del frontmatter, autor, sección y etiquetas; los casos de estudio ya tenían `CreativeWork` y `BreadcrumbList`, y el CV, «Sobre mí» y contacto `ProfilePage` con `Person`.
- Fase 9: las tarjetas de «Cómo trabajo» siguen siendo visibles sin JavaScript mediante un `<style is:inline>` dentro de `<noscript>`, sin cambiar la animación con JS activo.
- Decisión de la fase 9: no se configura `i18n` en `@astrojs/sitemap` porque generaría pares `hreflang` incorrectos al no conocer los slugs traducidos de proyectos, artículos y rutas como `sobre-mi`/`about`; las referencias bilingües viven en el HTML, que es la fuente verificada.
- Cierre de la Fase 9 confirmado por el propietario el 26 de noviembre de 2026: se acepta el SEO implementado y la documentación; Lighthouse, las redirecciones en producción y la ejecución de pruebas quedan registradas como comprobaciones pendientes.
- El propietario dio por completadas el 26 de noviembre de 2026 las revisiones de privacidad y visuales (capturas, casos nuevos, carrusel, transiciones, contacto y blog), el bloque de contenido y las decisiones abiertas; en esta sesión no se añadieron artículos ni se cambió la redacción.
- Auditoría de enlaces del 26 de noviembre de 2026: 1.128 referencias internas y anclas revisadas sin roturas; 26 URLs del índice de búsqueda, 26 del sitemap, 16 destinos de redirección y los dos PDF existen. De 47 enlaces externos, todos respondieron 2xx salvo `linux.org` (desafío de Cloudflare para clientes automatizados) y LinkedIn (authwall de inicio de sesión); ambos cargan en navegador, por lo que no hubo que corregir ningún destino.

## Pendiente y riesgos

- Atrasado a la Fase 10: medir Lighthouse y revisar accesibilidad y responsive manualmente en páginas representativas; aún no hay cifras verificadas. La revisión responsive inicial de la Fase 9 no encontró desbordamiento a 375 px ni a 1280 px en las páginas comprobadas.
- Atrasado a la Fase 10: verificar las 16 redirecciones 301 en el hosting (las reglas locales siguen intactas).
- Decidir si añadir herramientas de tipos, lint y pruebas en una fase apropiada; no se instalaron dependencias.
- Conservar analítica de producción, contenido bilingüe y URLs existentes durante cada transición.
- Fase 6 resuelta: currículums en inglés y español derivados del mismo contenido verificado, optimizados para impresión y ATS, con botones de descarga ya publicados. El PDF recibido no se publicó tal cual: solo estaba en español e incluía una referencia laboral con datos personales de un tercero.
- Fase 5: el propietario eligió «Full-Stack Engineer» como título; el hero y los metadatos ya lo usan. La redacción manuscrita del hero se conserva.

## Decisiones y preguntas abiertas

El propietario dio por cerradas el 26 de noviembre de 2026 las decisiones que seguían abiertas (slugs ingleses, diferencia entre `DESIGN.md` y lo implementado, y ampliación de historia/certificaciones); no se registraron cambios de redacción ni de diseño en esta sesión.

- Mantener por ahora Astro, salida estática y Cloudflare; propuesta de evolución incremental, no aprobación para rediseñar.
- El propietario eligió detectar idioma en `/` y dirigir a `/es` o `/en`, conforme al plan; conservar enlaces antiguos de proyectos.
- El propietario aprobó la Fase 1, conservando la identidad actual y con temas light/dark/system.
- Los PDF en inglés y español se derivan del mismo contenido verificado del CV web, con presentación optimizada para impresión y ATS; se generan con `pnpm cv:pdf` usando Chrome headless, sin añadir dependencias.
- El propietario decidió publicar en el CV web solo experiencia y educación, más su teléfono `+503 79996844` (WhatsApp); se excluyen el teléfono distinto del PDF y la referencia laboral de un tercero. El correo de contacto es `contacto@mauriciodmo.com`.
- Fase 7: el propietario descartó la página Uses porque el stack ya está en la portada; no se crean `/uses` ni `/herramientas`. Aceptó en cambio usar el stack verificado del repositorio como referencia, sin inventar herramientas ni descripciones.
- Fase 7: la sección de publicaciones recientes de la portada se deriva de la colección `blog` y solo aparece cuando hay artículos publicados; el listado del blog muestra un estado vacío mientras tanto.
- Fase 8: se eligió un índice JSON generado en compilación y filtrado local, sin Pagefind, Fuse.js ni MiniSearch: el contenido actual son siete entradas por idioma y no justifica una dependencia. Se añadirá una librería de búsqueda solo si el índice crece o necesita indexación de texto completo.

## Validación

Foto: `pnpm build` correcto (25 páginas). En `dist/es/index.html` y `dist/en/index.html` se verificó la imagen con `alt` y `width/height`. En navegador se revisó el hero en 1895 px, a 375 px sin desbordamiento horizontal (`scrollWidth` 375 = `innerWidth`) y en tema claro; la foto conserva un leve halo verde del recorte original. El bloque de experiencia se retiró después de esa revisión, a petición del propietario. No se ejecutaron pruebas sin aprobación.

Hero y CV web ajustados: `pnpm build` correcto (27 páginas). En `dist/es/index.html` y `dist/en/index.html` ya no aparecen los chips de enfoque, «También en» ni la tarjeta de fortalezas; los dos botones del hero siguen presentes. En `dist/es/sobre-mi/index.html` y `dist/en/about/index.html` aparece la tarjeta movida con sus textos en cada idioma. En navegador se revisaron ambas páginas a 375 px sin desbordamiento horizontal (`scrollWidth` 375 = `innerWidth`). No se ejecutaron pruebas sin aprobación.

Fase 6: `pnpm build` correcto (27 páginas, con `/es/sobre-mi` y `/en/about` en el sitemap). En `dist` se comprobó que la portada ya no contiene `#sobre-mi` ni `#proceso`, que la navegación apunta a las nuevas rutas, que no hay cadenas españolas en `/en/about` y que el correo y el teléfono centralizados aparecen en ambas versiones. En navegador se revisaron las dos rutas en escritorio y móvil (375 px sin desbordamiento), los seis apartados del CV y los enlaces de idioma. No se ejecutaron pruebas sin aprobación.

Fase 5 (parcial): `pnpm build` correcto (25 páginas; aviso esperado por colección de blog vacía). En `dist` se verificaron las cadenas de disponibilidad y los cuatro grupos de especialización en es/en. En navegador se revisó el hero, la rejilla 2×2 en escritorio y una sola columna a 375 px, sin desbordamiento horizontal (`scrollWidth` 375 = `innerWidth`). Falta revisión en tema claro. No se ejecutaron pruebas sin aprobación.

i18n y tarjetas: `pnpm build` correcto (25 páginas). En `dist/en` ya no aparecen las cadenas españolas del catálogo ni del `description` de proyectos; el `description` de `/en/projects/` emite el texto inglés de `seo.projectsDescription`. En navegador se comprobó el icono y el título en la misma línea en cada tarjeta, en escritorio y a 375 px, sin desbordamiento. No se ejecutaron pruebas sin aprobación.

Los ajustes posteriores del carrusel y las transiciones están pendientes de revisión visual y pruebas autorizadas. `git diff --check`: correcto.

Flex wrap balance: `pnpm build` correcto (25 páginas). En el CSS compilado se verificó `.\[flex-wrap\:wrap_balance\]\!{flex-wrap:wrap balance!important}` junto a `.flex-wrap{flex-wrap:wrap}` como fallback; en `dist/es/index.html` y `dist/es/proyectos/index.html` las listas de tecnologías emiten la clase. Falta revisión visual en navegador. No se ejecutaron pruebas sin aprobación.

CTA del catálogo: `pnpm build` correcto (25 páginas); en `dist/es/proyectos/index.html` se verificaron seis CTA con `mt-auto flex justify-center pt-6`, mientras la barra de filtros y las listas de badges conservan sus clases originales. Falta revisión visual. No se ejecutaron pruebas sin aprobación.

Orden automático: `pnpm build` correcto (25 páginas); en `dist/es/index.html` el mosaico emite DTE, Construfijaciones, FrameKit e infraestructura, y en `dist/es/proyectos/index.html` el catálogo emite los mismos cuatro primeros con inventario y RMA en 5 y 6. El campo `featured` ya no existe en el esquema ni en el contenido. Se ajustó `test/fase4-projects.test.mjs` a la nueva regla sin ejecutarlo. No se ejecutaron pruebas sin aprobación.

Casos FrameKit e infraestructura: `pnpm build` correcto (25 páginas; aviso esperado por colección de blog vacía). En navegador se verificaron las seis tarjetas del catálogo `/es/proyectos/`, las tres capturas de FrameKit y la tarjeta sin galería de infraestructura sin desbordamiento. En `dist` se comprobó que los anclas del índice de FrameKit coinciden con los ID de sus encabezados. No se ejecutaron pruebas sin aprobación.

Transición imagen portada → caso: `pnpm build` correcto (21 páginas). En `dist` se verificó que `/en/index.html` emite `view-transition-name: project-image-construfijaciones-web` y que `/en/projects/construfijaciones-web/index.html` emite el mismo valor inline; falta revisión visual en navegador. No se ejecutaron pruebas sin aprobación.

Selector de filtros y orden: `pnpm build` correcto (21 páginas). En navegador con tema oscuro se comprobó el resaltado con acento, la navegación con flechas/Enter, la escritura incremental (`a` → Archivado) y el filtro resultante. El catálogo renderiza los cuatro proyectos en orden destacado (1, 2, 3, 4) sin reordenamiento al cargar. No se ejecutaron pruebas sin aprobación.

Fase 4: compilación Astro correcta con caché Vite aislada, 21 páginas generadas; aviso esperado por colección de blog vacía. Comparación local verificó todas las cadenas de origen de los cuatro casos en ambos idiomas. En navegador se comprobaron cuatro tarjetas destacadas, búsqueda con tildes, filtro por estado, mensaje vacío, selector de idioma, galería, ocho anclas históricas y ancho móvil de 375 px. Brave mostró galería y navegación en el caso de inventario. `node --test test/routes.test.mjs`, `node --test test/content-collections.test.mjs` y `node --test test/fase4-projects.test.mjs`: 4, 3 y 4 pruebas correctas, respectivamente.

Ajuste visual posterior: compilación correcta y comprobación en navegador del diseño de inventario, 10 iconos de tecnologías, galería de 7 imágenes y navegación; a 375 px no hay desbordamiento horizontal. `node --test test/fase4-projects.test.mjs`: 6 pruebas correctas, incluidos nombres, claves y tecnologías desconocidas.

Ajuste del atajo `/`: compilación correcta, `node --test test/*.test.mjs` con 14 pruebas correctas y verificación en navegador en `/es/proyectos/` y `/en/projects/`: `/` enfoca el buscador, la pista no aparece a 375 px y sí desde 1280 px, escribir `/` dentro del campo no se intercepta y la portada no reacciona a `/`. El título del catálogo pasa de `mt-6` a `mt-0`. `git diff --check`: correcto.

Ajuste de tarjetas: compilación correcta y `node --test test/fase4-projects.test.mjs` con 7 pruebas correctas. En navegador se verificó una sola columna a 375 px y dos a 1280 y 1910 px, un único enlace por tarjeta, clic en el cuerpo y en el CTA hacia el caso, CTA con fondo de acento y sin sombra, e icono `IconArrowUpRight` de `@tabler/icons-astro`.

Ajuste puntual de portada: `pnpm build` correcto y `node --test test/*.test.mjs` con 18 pruebas correctas; pendiente revisión visual responsive. El orden utiliza `featuredOrder` porque los proyectos no tienen fechas.

Fase 3: compilación Astro correcta con caché Vite aislada; las colecciones vacías generan avisos esperados de `glob`. `node --test test/content-collections.test.mjs`: 3 pruebas de integración correctas, con proyectos y artículos sintéticos en un directorio aislado; verifican páginas bilingües, selector de traducción, exclusión de borradores del sitemap, slugs duplicados y fecha obligatoria. `node --test test/routes.test.mjs`: 4 pruebas correctas. `git diff --check`: correcto.

Fase 2: compilación Astro correcta con caché Vite aislada, 19 páginas generadas (incluidas ocho rutas antiguas) y 10 URLs localizadas en sitemap. `node --test test/routes.test.mjs`: 4 pruebas correctas; requiere Node 22.15+ y en Node 22 la opción `--experimental-strip-types`. `git diff --check`: correcto. En navegador se verificaron detección española, preferencia guardada, cambio de idioma con query y fragmento y traducción de un proyecto; Wrangler local confirmó cuatro redirecciones con y sin barra. Las 16 reglas fueron aceptadas. No se verificaron redirecciones en producción.

Fase 1: compilación y pruebas manuales de tema y viewport 375 px correctas. `astro check` requiere dependencias no instaladas; no hay lint configurado. Sin evaluación Lighthouse o WCAG concluyente.

CV y página personal (26-11-2026): `pnpm build` correcto (29 páginas). En `dist` se verificaron `/es/cv/` y `/en/cv/` en el sitemap, las cuatro rutas con `lang` correcto, el teléfono `+503 79996844` y su enlace de WhatsApp tanto en la cabecera como en el contacto del CV, y ausencia de cadenas españolas en las versiones inglesas. En navegador se revisaron las cuatro páginas en 1910 px y a 375 px sin desbordamiento horizontal (`scrollWidth` 375 = `innerWidth`); las cinco etapas de «Cómo trabajo» aparecen al desplazarse. No se ejecutaron pruebas sin aprobación.

Contraste del texto: `pnpm build` correcto (29 páginas). En navegador se comprobó el token aplicado a `#habilidades dd`: `rgb(198, 213, 203)` en tema oscuro y `rgb(52, 81, 57)` en tema claro, tanto con preferencia del sistema como con `data-theme` explícito. No se ejecutaron pruebas sin aprobación.

Textos de sobre mí: `pnpm build` correcto (29 páginas). En `dist` se verificaron las tres frases de marca y los textos nuevos en es/en, la ausencia de cadenas españolas en `/en/about` (salvo la dirección de correo) y la desaparición de los bloques eliminados. `git diff --check`: correcto. No se ejecutaron pruebas sin aprobación.

PDF del CV (26-11-2026): `pnpm cv:pdf` generó ambos PDF con `pdfinfo`: una página tamaño Carta (612 × 792 pts) y texto seleccionable; `pdftotext` confirmó los seis apartados, los datos de contacto y la ausencia de la referencia laboral de un tercero. `pnpm build` correcto (29 páginas); en `dist/cv/` están los dos archivos y en `dist/es/cv/index.html` y `dist/en/cv/index.html` el botón con `download` y el href del idioma correspondiente. Revisión visual del PDF en escritorio y de la página `/es/cv` a 1280 px y 375 px sin desbordamiento horizontal. No se ejecutaron pruebas sin aprobación.

Ajustes finales del CV (26-11-2026): `pdfinfo` confirma una página Carta por idioma; `grep` sobre el PDF verificó cuatro anotaciones `/URI` con las rutas `/es/proyectos/{id}/` y `/en/projects/{slug}/`, sin slugs ingleses en el PDF español ni viceversa. `pdftotext` confirmó las dos entradas de educación en es/en. `pnpm build` correcto (29 páginas) y `git diff --check` correcto. En navegador se revisó la alineación de educación y la separación de secciones a 1280 px. No se ejecutaron pruebas sin aprobación.

CTA del CV en la portada: `pnpm build` correcto (29 páginas). En `dist/es/index.html` y `dist/en/index.html` se verificó el tercer botón del hero con `href="/es/cv/"` y `href="/en/cv/"`, las etiquetas «Ver CV» y «View CV» y el evento `nav_section` con `section: "cv", source: "hero"`. `git diff --check` correcto. Falta revisión visual en navegador. No se ejecutaron pruebas sin aprobación.

Fase 7 (26-11-2026): `pnpm build` correcto (33 páginas; aviso esperado por colección de blog vacía). En `dist` se comprobó que `/es/contacto/`, `/en/contact/`, `/es/blog/` y `/en/blog/` están en el sitemap, que las páginas de contacto emiten correo, teléfono y Silver Wolf en ambos idiomas, que el listado del blog muestra el estado vacío traducido y que no hay cadenas españolas en las versiones inglesas. La navegación de la portada apunta a `/es/blog/` y `/es/contacto/` (y equivalentes en inglés), y el cierre de la portada ya no duplica el listado de canales. La sección de publicaciones recientes no se renderiza mientras no haya artículos. `git diff --check` correcto. Falta revisión visual en navegador, en escritorio y móvil. No se ejecutaron pruebas sin aprobación.

CTA del hero: `pnpm build` correcto (33 páginas). En `dist/es/index.html` y `dist/en/index.html` se verificaron los textos «Ver proyectos» / «See projects», los enlaces a `/es/proyectos/` y `/en/projects/`, el enlace de contacto a `/es/contacto/` y `/en/contact/` y las clases `tabler-icon-layout-grid` y `tabler-icon-message`. `git diff --check` correcto. No se ejecutaron pruebas sin aprobación.

Orden de las tools: `pnpm build` correcto (33 páginas; aviso esperado por colección de blog vacía). En `dist/es/index.html` se comprobó que los 42 pills del stack se emiten en el orden Bitcoin → IA → frontend → backend → bases de datos → infraestructura → herramientas, sin entradas duplicadas ni perdidas. `git diff --check` correcto. No se ejecutaron pruebas sin aprobación.

MDX y primer artículo: `pnpm build` correcto (35 páginas). En `dist` se generaron `/es/blog/este-sitio-y-construfijaciones/` y `/en/blog/this-site-and-construfijaciones/`; ambos listados y portadas enlazan a ellos, el HTML contiene la imagen de Construfijaciones, el CTA `article-cta` con icono `tabler-icon-arrow-up-right` y las clases `mx-auto` en la cabecera y el cuerpo del blog. Los botones `primary` y `secondary` conservan sus clases originales. `pnpm peers check` limpio tras fijar `@astrojs/mdx@6.0.3`. En navegador y servidor local se verificaron el CTA y ambos artículos con HTTP 200. `git diff --check` correcto. No se ejecutaron pruebas sin aprobación.

Redacción del artículo: `pnpm build` correcto (35 páginas) y `git diff --check` correcto. `grep` sobre el HTML generado confirmó que ni el artículo en español ni el inglés mencionan Markdown ni MDX; se mantienen la imagen, el CTA y los enlaces del cuerpo. No se ejecutaron pruebas sin aprobación.

Header unificado: `pnpm build` correcto (35 páginas). En el HTML generado se comparó el primer `<header>` de portada, catálogo, caso de estudio, listado del blog y ficha de artículo en es/en: los siete enlaces del menú principal coinciden en todas las páginas; las únicas diferencias son los `href` del selector de idioma, que apuntan a la traducción equivalente de la página actual. No se ejecutaron pruebas sin aprobación.

Fase 8 (26-11-2026): `pnpm build` correcto (35 páginas) con `/search-index.json` generado: 26 entradas, seis proyectos, un artículo y seis páginas principales por idioma, sin borradores. En navegador se verificó en `/es/` y `/en/` que `Ctrl+K` abre el diálogo con el foco en el campo, que `garantias` sin tilde encuentra «Sistema RMA / Garantías», que `inventario` no devuelve resultados en `/en/` y que `inventory` abre `/en/projects/inventory-management/` con Enter; `Escape` cierra el diálogo. Se revisó el centrado y la ausencia de desbordamiento horizontal a 375 px, en temas oscuro y claro. Tras el ajuste solicitado, buscar «proyectos» muestra «Proyectos» como primer resultado con destino `/es/proyectos/`, y `ArrowDown` resalta el siguiente resultado con borde y fondo de acento mientras `aria-activedescendant` sigue al elemento activo. `git diff --check` correcto. No se ejecutaron pruebas sin aprobación.

Scrollbars: `pnpm build` correcto (35 páginas). En el CSS compilado se verificaron `scrollbar-width: thin`, `scrollbar-color` y las reglas `::-webkit-scrollbar*` con `color-mix` de los tokens. En navegador, el thumb del documento computa `color(srgb 0.27 0.47 0.34)` en tema oscuro y `color(srgb 0.41 0.60 0.48)` en claro, con borde `rgb(13, 18, 16)` en oscuro y radio `999px`. No se ejecutaron pruebas sin aprobación.

Wrap del buscador: `pnpm build` correcto (35 páginas). Con ocho resultados, `End` + `ArrowDown` pasa al índice 0 y `Home` + `ArrowUp` al 7, aunque se dispare `mouseenter` sobre otra opción; `pointermove` sobre una opción sigue seleccionándola. No se ejecutaron pruebas sin aprobación.

Fase 9 (26-11-2026): `pnpm build` correcto (35 páginas). En el HTML generado se verificó que portada, catálogo, caso de estudio, artículo y «Sobre mí» emiten los tres `hreflang` con pares recíprocos: `/es/proyectos/sistema-inventario/` ↔ `/en/projects/inventory-management/`, `/es/blog/este-sitio-y-construfijaciones/` ↔ `/en/blog/this-site-and-construfijaciones/` y `/es/sobre-mi/` ↔ `/en/about/`; `x-default` apunta al equivalente español. El `sitemap-0.xml` sigue con 26 URLs y sin alternates (decisión documentada). `og:image` aparece en todas las páginas revisadas; no queda ninguna referencia a `favicon.ico`. Los artículos emiten `BlogPosting` con `datePublished` real y `BreadcrumbList`; en `/en/about/` el `<noscript>` conserva las tarjetas visibles. Un recorrido estático sobre los 35 HTML no encontró enlaces internos rotos. En navegador se revisaron `/es/`, `/es/sobre-mi/`, `/es/blog/este-sitio-y-construfijaciones/` y `/en/projects/`: a 375 px no hay desbordamiento horizontal (`scrollWidth` 375 = `innerWidth`), el `lang` del documento es el correcto y los tres `hreflang` están presentes; a 1280 px tampoco hay desbordamiento en la portada. `lighthouse` no está instalado en el entorno; sin cifras. No se ejecutaron pruebas sin aprobación.

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
- `src/content/projects/framekit/{es,en}.md`, `public/projects/framekit/`: caso y capturas de FrameKit.
- `src/content/projects/infraestructura-self-hosted/{es,en}.md`: caso de infraestructura autohospedada.
- `public/mauricio-dmo.webp`: fotografía del propietario usada en el hero.
- `src/data/site.ts`: disponibilidad centralizada (`location`, `remote`).
- `src/sections/hero/HeroSection.astro`: línea de ubicación y disponibilidad remota.
- `src/sections/stack/StackSection.astro`, `src/sections/stack/components/StackCard.astro`: áreas de especialización y rejilla.
- `src/i18n/lang/{es,en}/{hero,stack}.ts`: textos bilingües nuevos.
- `src/i18n/index.ts`: mapa inverso derivado de `esFlat`; `source-keys.ts` eliminado.
- `src/components/ProjectCatalog.astro`, `src/pages/{es,en}/{index.astro,projects/index.astro}`, `src/i18n/lang/{es,en}/seo.ts`: claves namespaced para textos que antes quedaban sin traducir.
- `src/pages/about/_AboutPageFrame.astro`, `src/pages/es/sobre-mi/index.astro`, `src/pages/en/about/index.astro`: CV web bilingüe.
- `src/i18n/lang/{es,en}/{about,seo}.ts`: textos del CV y metadatos de la nueva página.
- `src/sections/about/AboutSection.astro`, `src/sections/process/ProcessSection.astro`, `src/sections/about/components/ProfileSignalCard.astro`: secciones movidas de la portada al CV web.
- `src/data/site.ts`: correo `contacto@mauriciodmo.com`, teléfono y WhatsApp centralizados; título del sitio como Full-Stack Engineer.
- `src/pages/cv/_CvPageFrame.astro`, `src/pages/{es,en}/cv/index.astro`: currículum en línea bilingüe.
- `src/i18n/lang/{es,en}/cv.ts`: textos del currículum; `src/i18n/schema.ts` y `src/i18n/lang/{es,en}/index.ts`: sección registrada.
- `src/pages/about/_AboutPageFrame.astro`, `src/sections/about/AboutSection.astro`: página personal; `ProfileSignalCard.astro` eliminado.
- `src/data/cv.ts`: duties, resultados, habilidades y proyectos compartidos por el CV web y los PDF.
- `src/data/project-slugs.ts`: mapa id español ↔ slug inglés compartido por `src/i18n/index.ts` y el generador de PDF.
- `scripts/generate-cv-pdf.mjs`, `public/cv/mauricio-martinez-cv-{es,en}.pdf`: generación y resultados de los currículums descargables.
- `src/components/ButtonLink.astro`: soporte del atributo `download` para los enlaces a los PDF.
- `src/components/CvSectionHeading.astro`: encabezado compartido de las secciones del CV web.
- `src/pages/contact/_ContactPageFrame.astro`, `src/pages/es/contacto/index.astro`, `src/pages/en/contact/index.astro`: página de contacto bilingüe con canales, disponibilidad y Silver Wolf.
- `src/pages/blog/_BlogIndexFrame.astro`, `src/pages/es/blog/index.astro`, `src/pages/en/blog/index.astro`: listado del blog con estado vacío, fecha, categoría y tiempo de lectura.
- `src/sections/blog/BlogSection.astro`, `src/pages/{es,en}/index.astro`: publicaciones recientes condicionadas a la colección y cierre compacto con enlace al contacto.
- `src/i18n/lang/{es,en}/{blog,contact,seo}.ts`, `src/i18n/schema.ts`, `src/i18n/index.ts`: sección `blog`, textos nuevos y equivalencias `contacto` ↔ `contact`.
- `src/components/EditorialPage.astro`: ficha de artículo con fecha, etiquetas y vuelta al blog.
- `src/components/SiteHeader.astro`, `src/sections/contact/ContactSection.astro`: navegación y cierre de portada apuntando a las rutas nuevas.
- `src/data/site.ts`: URL de Silver Wolf centralizada.
- `astro.config.mjs`, `src/content.config.ts`, `src/lib/content.ts`: integración MDX y loaders `.md`/`.mdx`.
- `src/content/blog/este-sitio-y-construfijaciones/{es,en}.mdx`: primer artículo real, con imagen y componente importado.
- `src/pages/search-index.json.ts`: índice bilingüe de contenido publicado, generado en compilación.
- `src/components/SearchDialog.astro`: botón en la cabecera, diálogo, filtrado y navegación por teclado del buscador.
- `src/i18n/lang/{es,en}/search.ts`, `src/i18n/schema.ts`, `src/i18n/lang/{es,en}/index.ts`: sección `search` y etiquetas del buscador.
- `src/components/SiteHeader.astro`: botón del buscador en el menú compartido.
- `src/layouts/Layout.astro`: `hreflang` (es/en/x-default), imagen social predeterminada y link de favicon válido.
- `src/components/EditorialPage.astro`: ruta traducida del artículo y datos `BlogPosting`/`BreadcrumbList`.
- `src/sections/process/ProcessSection.astro`: contenido visible sin JavaScript.
- `docs/redirects.md`: decisión sobre `hreflang` en el sitemap y comprobaciones de la fase 9.

## Próximo paso

Fase 9 completada y cerrada con la aprobación del propietario. También cerró las revisiones de privacidad/visuales, el contenido y las decisiones abiertas, y pidió solo verificar enlaces: la auditoría no encontró roturas ni destinos que corregir. Comprobaciones atrasadas para la Fase 10: medir Lighthouse y Core Web Vitals en páginas representativas (no hay herramienta instalada), revisar accesibilidad y responsive de forma manual, verificar las redirecciones en producción y ejecutar `node --test test/*.test.mjs` **solo con autorización explícita**. El siguiente paso es proponer el inicio de la **Fase 10 — Publicación y limpieza**; no avanzar sin aprobación.
