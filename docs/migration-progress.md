# Seguimiento de migración

Actualizado: 26 de noviembre de 2026.

## Fase actual

**Fase 6 — Sobre mí y currículum**, reorientada por decisión del propietario el 26 de noviembre de 2026: `/es/cv` y `/en/cv` son el currículum en línea; `/es/sobre-mi` y `/en/about` son la página personal. El título profesional es **Full-Stack Engineer**. La portada sigue en hero mínimo (foto, titular, descripción, disponibilidad y botones), proyectos, stack y contacto; no se crea la página `/stack` propuesta. Los PDF descargables en ambos idiomas ya están generados y enlazados desde `/cv`. Queda únicamente ampliar la historia personal si el propietario lo desea. No iniciar la Fase 7 sin aprobación explícita.

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

## Pendiente y riesgos

- Confirmar que «Hermes» en la VPS corresponde a Hermes Agent de Nous Research; el caso de estudio usa esa interpretación, derivada del servicio listado por Coolify y de la documentación oficial.
- Revisar privacidad y autorización de las capturas restantes antes de publicar; verificar métricas existentes.
- Revisar visualmente los dos casos nuevos en ambos idiomas y en móvil, incluida la galería de Coolify; verificar que las capturas no muestren información sensible.
- Implementar el listado del blog en la Fase 7.
- Centralizar la URL de Silver Wolf en `src/data/site.ts` al implementar la página de contacto; el teléfono ya está centralizado y enlaza a `https://wa.me/50379996844`.
- Crear las rutas `/es/contacto` y `/en/contact` en su fase, con correo, LinkedIn, GitHub, teléfono y Silver Wolf, los textos en `src/i18n/lang/{es,en}/contact.ts` y el cierre de la portada enlazando a ellas.
- Medir Lighthouse y revisar accesibilidad y responsive manualmente en páginas representativas; aún no hay cifras verificadas.
- Revisar capturas por datos privados; verificar enlaces históricos y redirecciones en el hosting.
- El propietario confirmó que `public/projects/construfijaciones-dte/factura.webp` contiene datos de prueba; se conserva. Revisar independientemente las demás capturas antes de migrarlas.
- Falta revisión visual del nuevo botón «Ver CV» del hero en escritorio y móvil.
- Revisar visualmente el carrusel y las transiciones en ambos idiomas y en móvil; el contenido de proceso puede quedar oculto sin JavaScript.
- Decidir si añadir herramientas de tipos, lint y pruebas en una fase apropiada; no se instalaron dependencias.
- Conservar analítica de producción, contenido bilingüe y URLs existentes durante cada transición.
- Fase 5: publicaciones recientes ocultas mientras la colección del blog esté vacía.
- Fase 5: sección final de contacto compacta con enlace a `/es/contacto` y `/en/contact`; se hace junto con la página dedicada en Fase 7 para no dejar enlaces rotos.
- Fase 6 resuelta: currículums en inglés y español derivados del mismo contenido verificado, optimizados para impresión y ATS, con botones de descarga ya publicados. El PDF recibido no se publicó tal cual: solo estaba en español e incluía una referencia laboral con datos personales de un tercero.
- Fase 5: el propietario eligió «Full-Stack Engineer» como título; el hero y los metadatos ya lo usan. La redacción manuscrita del hero se conserva.
- Fase 6: ampliar la historia personal con preguntas específicas si el propietario lo desea; el texto actual es el resumen que ya existía en el sitio.

## Decisiones y preguntas abiertas

- Mantener por ahora Astro, salida estática y Cloudflare; propuesta de evolución incremental, no aprobación para rediseñar.
- El propietario eligió detectar idioma en `/` y dirigir a `/es` o `/en`, conforme al plan; conservar enlaces antiguos de proyectos.
- Revisar los slugs ingleses iniciales y su impacto SEO antes de publicar.
- El propietario aprobó la Fase 1, conservando la identidad actual y con temas light/dark/system.
- La tipografía y el ancho documentados en `DESIGN.md` difieren de lo implementado. Se propone conservar la apariencia actual y discutir cambios significativos, incluida la escritura del hero.
- La fotografía ya está disponible. Siguen pendientes la ampliación de la historia personal, las certificaciones y la verificación de herramientas y servicios autohospedados antes de publicarlos.
- Los PDF en inglés y español se derivan del mismo contenido verificado del CV web, con presentación optimizada para impresión y ATS; se generan con `pnpm cv:pdf` usando Chrome headless, sin añadir dependencias.
- El propietario decidió publicar en el CV web solo experiencia y educación, más su teléfono `+503 79996844` (WhatsApp); se excluyen el teléfono distinto del PDF y la referencia laboral de un tercero. El correo de contacto es `contacto@mauriciodmo.com`.

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

## Próximo paso

La Fase 6 queda pendiente solo de la ampliación de la historia personal, que el propietario proporcionará. Una vez recibida, actualizar `/es/sobre-mi` y `/en/about` y cerrar la fase. Las publicaciones recientes siguen ocultas hasta la Fase 7; la página de contacto dedicada también se implementa en la Fase 7, previa aprobación. Comprobar SEO y redirecciones en el hosting antes de publicar. No avanzar a la Fase 7 sin aprobación.
