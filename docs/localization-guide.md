# Guía de localización

## Estado actual

Astro configura las rutas con prefijos `/es/` y `/en/` en `astro.config.mjs`. La raíz elige la preferencia guardada en `localStorage`, el primer idioma compatible del navegador o inglés como alternativa; sin JavaScript ofrece enlaces a ambos idiomas. Las visitas directas conservan el idioma de la URL. El selector guarda la preferencia y conserva query y fragmentos.

Los textos se encuentran en `src/i18n/lang/es/` y `src/i18n/lang/en/`, organizados por sección y con proyectos en archivos individuales. `src/i18n/index.ts` relaciona los identificadores existentes con sus slugs ingleses. Las rutas antiguas de proyectos tienen reglas 301 en `public/_redirects` para Cloudflare.

Al modificar textos existentes, mantener las claves y estructuras equivalentes en ambos idiomas y verificar las rutas directas y los metadatos.

El contenido Markdown nuevo se organiza como `{id}/es.md` y `{id}/en.md` en la colección correspondiente. Ambas versiones comparten el `id`, pero cada una declara su propio `slug`. Solo se enlaza a una traducción publicada; si no existe, el selector comunica que no está disponible. Las entradas en borrador no generan página.

## Propuesta futura — no implementada

La verificación SEO completa, `hreflang` y producción corresponden a fases posteriores; ver [redirecciones](redirects.md).

La futura página de contacto dedicada (`/es/contacto` y `/en/contact`) debe usar las claves de `src/i18n/lang/{es,en}/contact.ts` y tomar correo, LinkedIn, GitHub, teléfono (clic a `https://wa.me/50379996844`) y Silver Wolf (`https://web.mauriciodmo.com`) de `src/data/site.ts`, sin textos hardcodeados.
