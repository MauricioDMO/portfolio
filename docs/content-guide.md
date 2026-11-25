# Guía de contenido

## Colecciones

Astro carga Markdown desde `src/content/projects/` y `src/content/blog/`. Cada traducción es un archivo `ID/es.md` o `ID/en.md`, donde `ID` es el identificador compartido y estable. Los slugs pueden variar entre idiomas. Markdown es suficiente para esta fase; no se instaló MDX.

Los cuatro proyectos existentes están migrados a `src/content/projects/` en ambos idiomas. Las fuentes anteriores permanecen en `src/data/projects/` y `src/i18n/lang/{es,en}/projects/` para las rutas históricas y como referencia; no eliminarlas sin verificar la migración y las redirecciones.

## Metadatos

Todos los documentos requieren `id`, `locale`, `slug`, `title`, `description` y `category`. Los identificadores y slugs usan minúsculas, números y guiones; `id` debe coincidir con el nombre de la carpeta. `draft` es `true` por defecto: solo `draft: false` genera página. No es obligatorio crear una traducción que aún no exista; se indicará que no está disponible.

Proyectos aceptan `status`, `featured`, `featuredOrder`, `technologies`, `repository`, `website` y `openSource`. El estado y la licencia se omiten si no están verificados. Categorías: `business-software`, `developer-tools`, `infrastructure`, `experiments`. Estados: `production`, `in-development`, `experimental`, `completed`, `archived`.

`icon` es opcional y selecciona un icono existente de `ProjectIcon`. Para las tecnologías se aceptan nombres o claves de `src/data/techs.ts`; las tecnologías desconocidas se muestran como texto sin icono.

`navigationLabels` es una lista opcional de etiquetas breves para el índice del caso, en el mismo orden que sus encabezados `##`. Si falta una etiqueta, se usa el encabezado completo.

Artículos aceptan `tags`, `publishedAt` y `updatedAt`; los artículos publicados requieren `publishedAt`. Categorías: `tutorials`, `engineering`, `experiments`, `insights`, `project-logs`. Fechas en formato `YYYY-MM-DD`; la actualización no puede ser anterior a la publicación.

La portada opcional se declara como `cover: ./assets/cover.webp` y requiere `coverAlt` descriptivo. Astro valida la referencia y optimiza la imagen. El cuerpo admite Markdown, imágenes locales y diagramas SVG; no requiere componentes personalizados.

Para reutilizar capturas existentes en `public/projects/`, `gallery` acepta una lista de objetos con `src` y `alt`; la compilación valida que cada archivo exista. La primera imagen se usa en las tarjetas y todas aparecen en el carrusel.

## Publicación y validación

Las páginas se generan automáticamente en `/es/proyectos/[slug]/`, `/en/projects/[slug]/` y `/es/blog/[slug]/` o `/en/blog/[slug]/`. Un documento no necesita cambios en las plantillas; los borradores no generan rutas ni entradas de sitemap.

La portada muestra hasta cuatro proyectos publicados con `featured: true`, ordenados por `featuredOrder`; el catálogo consulta los proyectos publicados. El listado del blog corresponde a la Fase 7.

La compilación valida metadatos, rutas de archivos, imágenes de galería y slugs duplicados por idioma. No publicar contenido sin revisar hechos, autorización y privacidad; no inventar métricas o información profesional.
