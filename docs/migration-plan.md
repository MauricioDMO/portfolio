# Plan integral de rediseño y migración — MauricioDMO

**Dominio:** mauriciodmo.com  
**Proyecto:** Portafolio profesional y marca personal  
**Metodología:** Migración incremental  
**Idiomas:** Inglés y español

---

# 1. Contexto del proyecto

Actualmente cuento con un portafolio profesional que presenta mis proyectos, conocimientos técnicos y servicios de desarrollo de software.

Sin embargo, la organización actual del contenido es mejorable, existen secciones repetitivas y el sitio tiene un enfoque demasiado comercial para los objetivos que quiero alcanzar.

Quiero transformar el portafolio en una plataforma de marca personal que represente mi perfil como Software Engineer, manteniendo la identidad visual existente, pero mejorando la arquitectura de información, navegación, presentación de proyectos y experiencia de usuario.

La implementación debe realizarse sobre el repositorio existente, reutilizando los componentes y funcionalidades que tengan sentido. No se debe reconstruir completamente el proyecto sin una justificación técnica.

# 2. Objetivos

## 2.1. Objetivos principales

- Construir y fortalecer mi marca personal.
- Conseguir oportunidades laborales internacionales.
- Demostrar mis conocimientos y capacidades técnicas.
- Presentar proyectos profesionales y personales.
- Compartir conocimientos mediante un blog técnico.
- Posicionarme como Software Engineer.
- Mostrar mi capacidad de desarrollar soluciones completas.

## 2.2. Público objetivo

- Reclutadores internacionales.
- Empresas tecnológicas.
- Equipos de ingeniería de software.
- Desarrolladores y profesionales tecnológicos.
- Potenciales colaboradores.
- Clientes interesados en servicios profesionales.

## 2.3. Oportunidades profesionales

Quiero mostrar disponibilidad para:

- Empleo remoto a tiempo completo.
- Empleo remoto a tiempo parcial.
- Freelance.
- Contratos profesionales.

El estado de disponibilidad debe ser configurable y no estar codificado directamente en diferentes componentes.

# 3. Identidad profesional

## 3.1. Posicionamiento

Mi título profesional principal será:

**Full-Stack Engineer** (decisión del propietario del 26 de noviembre de 2026; sustituye la propuesta original de «Software Engineer»).

Las áreas que tendrán mayor protagonismo serán:

1. Full-stack Development.
2. Frontend Development.
3. Artificial Intelligence & Automation.

También deben aparecer como conocimientos complementarios:

- Backend Development.
- Database Engineering.
- DevOps & Infrastructure.
- Software Architecture.
- Library Development.

El título Software Engineer funciona como posicionamiento profesional. La información académica debe indicar correctamente que actualmente estudio Ingeniería en Ciencias de la Computación, sin afirmar que ya he obtenido el título universitario.

## 3.2. Personalidad del sitio

El portafolio debe transmitir:

- Profesionalismo.
- Curiosidad tecnológica.
- Capacidad para resolver problemas.
- Independencia técnica.
- Atención a los detalles.
- Interés por aprender nuevas tecnologías.
- Capacidad para construir y mantener software.

Evitar presentarme exclusivamente como desarrollador frontend, diseñador web o proveedor de páginas web.

## 3.3. Separación de Silver Wolf

MauricioDMO será mi marca personal.

Silver Wolf seguirá siendo mi marca comercial para ofrecer servicios profesionales.

El portafolio podrá mencionar mis servicios y enlazar a Silver Wolf, pero no debe convertirse en una landing page comercial ni duplicar el contenido de esa plataforma.

# 4. Auditoría inicial del repositorio

Antes de realizar modificaciones, analizar completamente el repositorio existente.

Identificar:

- Framework y versión utilizados.
- Estructura de carpetas.
- Sistema de enrutamiento.
- Componentes reutilizables.
- Dependencias actuales.
- Sistema de estilos.
- Tipografías.
- Paleta de colores.
- Variables CSS y design tokens.
- Layouts.
- Sistema de temas.
- Páginas existentes.
- Contenido de los proyectos.
- Imágenes y recursos disponibles.
- Metadatos SEO.
- Integraciones externas.
- Analítica.
- Configuración de despliegue.
- Pruebas existentes.
- Problemas de accesibilidad y rendimiento.

Crear un documento `docs/migration-audit.md` con los resultados.

Clasificar los elementos existentes en:

| Clasificación | Acción |
|---|---|
| Keep | Conservar sin modificaciones importantes. |
| Refactor | Reorganizar o mejorar. |
| Migrate | Trasladar a la nueva estructura. |
| Replace | Sustituir por una implementación mejor. |
| Remove | Eliminar después de verificar que ya no es necesario. |

Registrar también todas las URLs existentes para preparar posteriormente las redirecciones.

Ejecutar los comandos de compilación, linting, comprobación de tipos y pruebas disponibles para establecer una línea base.

No comenzar el rediseño hasta presentar los resultados de esta auditoría.

# 5. Identidad visual y sistema de diseño

## 5.1. Estilo general

Mantener un estilo:

- Minimalista.
- Profesional.
- Moderno.
- Centrado en el contenido.
- Con una jerarquía tipográfica clara.
- Con suficiente espacio en blanco.
- Con detalles visuales discretos.

## 5.2. Elementos que se deben conservar

Conservar del portafolio actual:

- Paleta de colores.
- Tipografías.
- Elementos reconocibles de la identidad de MauricioDMO.

Cualquier modificación importante de estos elementos deberá discutirse previamente.

## 5.3. Elementos que se pueden rediseñar

- Distribución de secciones.
- Componentes.
- Tarjetas de proyectos.
- Encabezado.
- Navegación.
- Footer.
- Botones.
- Presentación de artículos.
- Espaciado.
- Jerarquía visual.
- Comportamiento responsive.

Evitar utilizar tarjetas y bordes para contener absolutamente todas las secciones. El sitio debe tener una composición visual natural y no parecer un dashboard.

## 5.4. Design system

Centralizar los estilos existentes y definir una estructura consistente para:

- Background.
- Foreground.
- Muted colors.
- Accent colors.
- Border colors.
- Tipografía.
- Tamaños de texto.
- Espaciado.
- Border radius.
- Sombras.
- Ancho máximo del contenido.
- Breakpoints.
- Estados interactivos.
- Focus rings.
- Transiciones.

Reutilizar los design tokens en todos los componentes.

## 5.5. Temas visuales

Implementar tres preferencias:

- Light.
- Dark.
- System.

Utilizar la preferencia del sistema por defecto y permitir cambiarla manualmente.

Persistir la elección del usuario y evitar parpadeos de tema durante la carga inicial.

# 6. Arquitectura de información

El portafolio estará compuesto por seis páginas principales.

| Inglés | Español | Propósito |
|---|---|---|
| Home | Inicio | Presentación y resumen profesional. |
| Projects | Proyectos | Proyectos y casos de estudio. |
| About | Sobre mí | Trayectoria personal y profesional. |
| Blog | Blog | Publicaciones técnicas. |
| Uses | Herramientas | Entorno de trabajo y tecnologías utilizadas. |
| Contact | Contacto | Oportunidades profesionales y comunicación. |

## 6.1. Navegación principal

El encabezado debe contener:

- Marca MauricioDMO.
- Projects / Proyectos.
- About / Sobre mí.
- Blog.
- Uses / Herramientas.
- Acceso al contacto.
- Buscador global.
- Selector de idioma.
- Selector de tema.

La marca funcionará como enlace a la página de inicio.

En dispositivos móviles se utilizará una navegación compacta y accesible.

## 6.2. Estructura de rutas

```text
/
├── /en
│   ├── /projects
│   │   └── /[slug]
│   ├── /cv
│   ├── /about
│   ├── /blog
│   │   └── /[slug]
│   ├── /uses
│   └── /contact
│
└── /es
    ├── /proyectos
    │   └── /[slug]
    ├── /cv
    ├── /sobre-mi
    ├── /blog
    │   └── /[slug]
    ├── /herramientas
    └── /contacto
```

Esta estructura es una propuesta funcional. Adaptar su implementación al framework existente sin comprometer el comportamiento esperado.

**Actualización del propietario (26 de noviembre de 2026):** `/cv` es el currículum en línea (experiencia, resultados, proyectos enlazados, habilidades, educación e idiomas) y `/sobre-mi` / `/about` es la página personal (historia, intereses, filosofía, «Cómo trabajo», IA con criterio, aprendizaje y objetivos). «Cómo trabajo» deja de ser una entrada independiente del menú. La rejilla de tecnologías y el ancla `#stack` permanecen en la portada: no se crea la página `/stack` propuesta. El 26 de noviembre de 2026 el propietario también descartó `/uses` y `/herramientas` por duplicar lo que ya está en la portada.

# 7. Internacionalización

La web debe ser completamente bilingüe.

## 7.1. Idiomas

- English: `en`
- Español: `es`

## 7.2. Comportamiento

En la primera visita a la ruta raíz:

1. Comprobar si existe una preferencia guardada.
2. Detectar el idioma del navegador.
3. Seleccionar español si el idioma preferido es español.
4. Seleccionar inglés si el idioma preferido es inglés.
5. Utilizar inglés como idioma de respaldo.
6. Redirigir a la ruta correspondiente.

Las visitas directas a una URL localizada deben respetar siempre el idioma de dicha URL.

## 7.3. Selector de idioma

El selector debe:

- Cambiar entre inglés y español.
- Persistir la preferencia.
- Mantener al usuario en la página equivalente.
- Traducir las rutas cuando corresponda.
- Conservar parámetros y fragmentos válidos cuando sea posible.

Ejemplo:

```text
/en/projects/electronic-invoicing
                ↓
/es/proyectos/facturacion-electronica
```

Utilizar identificadores internos independientes del slug para relacionar las versiones de un mismo proyecto o artículo.

Si un artículo no tiene traducción disponible, indicarlo claramente. No mostrar contenido en inglés bajo una URL que afirma contener una traducción al español.

## 7.4. Contenido traducible

Internacionalizar:

- Navegación.
- Botones.
- Footer.
- Mensajes de error.
- Categorías.
- Proyectos.
- Artículos.
- Experiencia profesional.
- Formación académica.
- Certificaciones.
- Página Uses.
- Página Contact.
- Metadatos SEO.
- Textos alternativos de imágenes.
- Estados y etiquetas.
- Buscador.

Evitar textos visibles hardcodeados dentro de componentes reutilizables.

# 8. Página de inicio

La página principal debe permitir comprender mi perfil profesional rápidamente.

## 8.1. Hero

Incluir:

- Fotografía casual y natural.
- Nombre.
- Título profesional.
- Descripción breve.
- Ubicación general: El Salvador.
- Disponibilidad para oportunidades remotas.
- Enlace a los proyectos.
- Currículum descargable.
- GitHub.
- LinkedIn.
- Correo electrónico.

Propuesta inicial en inglés:

**Hey, I'm Mauricio.**

**Full-Stack Engineer**

I build software, automate processes and explore new technologies to solve real-world problems.

Based in El Salvador. Open to remote opportunities.

Propuesta inicial en español:

**Hola, soy Mauricio.**

**Full-Stack Engineer**

Desarrollo software, automatizo procesos y exploro nuevas tecnologías para resolver problemas reales.

Desde El Salvador. Abierto a oportunidades remotas.

Estos textos son borradores que deberán revisarse antes de su publicación.

## 8.2. Proyectos destacados

**Decisión del propietario:** los proyectos se conservan exactamente como están en este momento —mosaico de cuatro destacados en la portada, catálogo y casos de estudio con su disposición actual—. La Fase 5 no debe reordenarlos, rediseñarlos ni eliminarlos.

**Actualización posterior:** el propietario pidió que el mosaico se derive automáticamente de `featuredOrder` y eliminó el campo `featured`; el catálogo y la portada comparten ahora ese único criterio de orden.

Mostrar un máximo inicial de cuatro proyectos:

- Sistema de facturación electrónica.
- Sistema de inventario.
- Sistema de garantías RMA.
- FrameKit.

Cada elemento debe mostrar:

- Captura principal.
- Nombre.
- Descripción breve.
- Categoría.
- Tecnologías principales.
- Enlace al caso de estudio.

Evitar mostrar descripciones demasiado extensas en la página principal.

Agregar un enlace para consultar todos los proyectos.

Los proyectos destacados deben ser configurables mediante metadatos.

## 8.3. Experiencia profesional

Mostrar un resumen de mi experiencia profesional:

- Empresa.
- Cargo.
- Periodo.
- Responsabilidades principales.
- Áreas de trabajo.

Agregar un enlace para consultar la trayectoria completa.

No inventar fechas, cargos ni responsabilidades.

## 8.4. Áreas de especialización

Presentar cuatro grupos principales:

### Software Development

Desarrollo de aplicaciones frontend, backend y sistemas completos.

### AI & Automation

Integración de inteligencia artificial, automatización de procesos y experimentación tecnológica.

### Infrastructure & DevOps

Despliegue, administración de servicios, Linux e infraestructura autohospedada.

### Data & Architecture

Bases de datos, arquitectura de software, integraciones y diseño de soluciones.

Relacionar estas áreas con proyectos reales siempre que sea posible.

No utilizar barras de porcentaje de habilidades.

## 8.5. Publicaciones recientes

Mostrar las tres publicaciones más recientes del blog:

- Título.
- Descripción.
- Fecha.
- Categoría.
- Tiempo estimado de lectura.

Si todavía no existen artículos publicados, ocultar esta sección hasta que tenga contenido real.

## 8.6. Contacto

Finalizar con una sección compacta de contacto y disponibilidad profesional que enlace a la página de contacto dedicada (`/es/contacto` y `/en/contact`). El listado completo de canales vive en esa página y no se duplica en la portada.

Incluir una referencia a Silver Wolf para servicios comerciales.

# 9. Página de proyectos

La página debe funcionar como un catálogo de trabajos profesionales y personales.

## 9.1. Categorías

| Identificador | Inglés | Español |
|---|---|---|
| business-software | Business Software | Software empresarial |
| developer-tools | Developer Tools | Herramientas de desarrollo |
| infrastructure | Infrastructure | Infraestructura |
| experiments | Experiments | Experimentos |

## 9.2. Proyectos iniciales

### Software empresarial

- Sistema de facturación electrónica.
- Sistema de gestión de inventario.
- Sistema de garantías RMA.

### Herramientas de desarrollo

- FrameKit.
- Librerías propias.
- Utilidades de desarrollo.

### Infraestructura

- Infraestructura self-hosted.
- Servicios autohospedados.
- Arquitectura general de mi entorno.

### Experimentos

- Inteligencia artificial.
- Automatización.
- Proyectos personales.
- Pruebas de tecnologías emergentes.

Los proyectos que no tengan suficiente contenido deberán permanecer como borradores.

## 9.3. Estados de los proyectos

Definir estados consistentes:

- Production.
- In Development.
- Experimental.
- Completed.
- Archived.

La condición open source debe gestionarse como una propiedad independiente, ya que un proyecto puede estar en producción y ser open source simultáneamente.

## 9.4. Funcionalidades

- Filtrar por categoría.
- Filtrar por estado.
- Buscar proyectos.
- Mostrar proyectos destacados.
- Ordenar los proyectos.
- Navegar hacia casos de estudio.

Mantener los filtros sencillos. No convertir la página en una interfaz empresarial compleja.

# 10. Casos de estudio

Todos los proyectos deben utilizar una plantilla visual consistente, pero flexible según sus características.

## 10.1. Encabezado

Mostrar:

- Nombre del proyecto.
- Descripción.
- Imagen principal.
- Fecha o periodo de desarrollo.
- Categoría.
- Estado.
- Mi participación.
- Tecnologías principales.
- Repositorio, cuando sea público.
- Demo o sitio web, cuando exista.

## 10.2. Estructura del contenido

### Overview

Descripción general y propósito del proyecto.

### The Problem

Problema original, necesidades y contexto.

### The Solution

Solución desarrollada, funcionalidades y enfoque de implementación.

### Architecture

Arquitectura general del sistema.

Utilizar cuando corresponda:

- Diagramas Mermaid o SVG.
- Flujos de datos.
- Integraciones externas.
- Componentes principales.
- Relaciones entre servicios.

### Technical Challenges

Desafíos encontrados, alternativas consideradas y decisiones técnicas.

### Technology Stack

Tecnologías utilizadas y justificación de las decisiones relevantes.

Evitar limitarse a enumerar frameworks.

### Results

Resultados obtenidos, impacto y aprendizajes.

Utilizar únicamente métricas verificables.

Cuando no existan datos cuantitativos, presentar resultados cualitativos reales.

### Gallery

Capturas de pantalla adicionales, cuando sean necesarias.

### Repository & Resources

Repositorio de GitHub, documentación, demos y otros recursos relacionados.

Ocultar esta sección cuando no existan enlaces públicos.

## 10.3. Migración de proyectos existentes

Reutilizar la información disponible en el portafolio actual.

El agente debe:

1. Extraer el contenido existente.
2. Identificar información repetida.
3. Reorganizarlo en la nueva plantilla.
4. Conservar datos técnicos y métricas verificadas.
5. Identificar información faltante.
6. Preparar ambas versiones lingüísticas.
7. Reutilizar las capturas disponibles.
8. Solicitar nuevos recursos cuando sean necesarios.

No eliminar información útil únicamente para reducir la longitud del contenido.

## 10.4. Privacidad

No publicar:

- Credenciales.
- Tokens.
- Direcciones IP privadas o públicas sensibles.
- Información personal de clientes.
- Datos fiscales reales.
- Documentos confidenciales.
- Configuraciones internas que comprometan la seguridad.

Revisar las capturas de pantalla antes de publicarlas.

# 11. Página Sobre mí: CV web

La página Sobre mí presentará quién soy y cómo pienso: historia breve, intereses, filosofía, metodología de trabajo, IA con criterio, aprendizaje continuo y objetivos profesionales. No debe convertirse en una biografía extensa ni repetir información de otras páginas. El currículum web verificable vive en `/cv` (ver el apartado 6.2 y la actualización del 26 de noviembre de 2026).

## 11.1. Presentación

Incluir una presentación breve, fotografía cuando esté disponible y un resumen de mi perfil profesional. La información debe ser coherente con el currículum descargable.

## 11.2. Contexto personal

Incluir, si aporta contexto al perfil, una historia personal breve sobre cómo comencé a programar, cómo evolucionaron mis conocimientos, mis intereses tecnológicos y mis objetivos profesionales.

Construir esta información conmigo mediante preguntas específicas. No inventar mi historia ni extenderla a costa de la información curricular.

## 11.3. Experiencia profesional

Utilizar una línea temporal sencilla con:

- Empresa.
- Cargo.
- Fecha de inicio y finalización.
- Modalidad.
- Responsabilidades.
- Proyectos relacionados.
- Logros verificables.

## 11.4. Educación

Mostrar:

- Universidad.
- Carrera.
- Periodo académico.
- Estado actual.
- Información académica relevante.

## 11.5. Certificaciones

Permitir añadir:

- Nombre.
- Organización emisora.
- Fecha.
- Identificador, cuando proceda.
- URL de verificación.

Ocultar la sección si no existen certificaciones disponibles.

## 11.6. Conocimientos técnicos

Agrupar los conocimientos por área:

- Frontend.
- Backend.
- Databases.
- Artificial Intelligence.
- Automation.
- Infrastructure.
- Developer Tools.

No utilizar niveles arbitrarios, estrellas ni porcentajes de dominio.

## 11.7. Intereses personales

Incluir intereses técnicos y personales que ayuden a conocerme mejor, sin convertir la página en una lista extensa de pasatiempos.

## 11.8. PDF del currículum

Ofrecer versiones descargables en inglés y español. El contenido del PDF debe derivarse de la misma información verificada que la página CV web, evitando mantener dos currículums con datos divergentes.

La presentación del PDF debe estar optimizada para impresión y lectura como currículum; no debe ser una captura ni una exportación sin adaptar de la página web. Puede usar una composición distinta a la web, conservando el contenido y la identidad visual.

Crear ambas versiones con información real de mi trayectoria. La información compartida debe tener una fuente de contenido común y permitir adaptar la presentación a cada idioma.

El currículum debe ser:

- Profesional.
- Fácil de leer.
- Compatible con sistemas ATS.
- Orientado a puestos de ingeniería de software.
- Preferiblemente de una página, mientras la experiencia disponible lo permita.
- Disponible en formato PDF.

No mostrar un botón de descarga funcionalmente incorrecto antes de tener el documento definitivo.

# 12. Blog técnico

El blog será una plataforma para compartir conocimientos y experiencias.

## 12.1. Categorías

- Tutorials.
- Engineering.
- Experiments.
- Insights.
- Project Logs.

Cada categoría debe tener su correspondiente traducción.

## 12.2. Tipos de contenido

- Tutoriales técnicos.
- Investigaciones.
- Experimentos.
- Experiencias resolviendo problemas.
- Opiniones sobre tecnologías.
- Documentación de proyectos.

## 12.3. Página de publicaciones

Incluir:

- Listado de artículos.
- Búsqueda.
- Filtros por categoría.
- Fecha de publicación.
- Tiempo de lectura.
- Descripción breve.
- Etiquetas.
- Paginación cuando sea necesaria.

## 12.4. Página individual

Cada artículo debe soportar:

- Título.
- Descripción.
- Fecha de publicación.
- Fecha de actualización, cuando corresponda.
- Categoría.
- Etiquetas.
- Bloques de código con syntax highlighting.
- Imágenes.
- Tablas.
- Enlaces.
- Diagramas.
- Alertas o notas técnicas.
- Navegación hacia publicaciones relacionadas.

Para artículos extensos, considerar un índice de contenido si mejora la lectura.

## 12.5. Ideas iniciales de contenido

- Desarrollo de un sistema de facturación electrónica para El Salvador.
- Arquitectura de una aplicación SaaS multi-tenant.
- Experiencias utilizando modelos de IA localmente.
- Autohospedaje de infraestructura personal.
- Configuración de un servidor de correo con Stalwart.
- Búsqueda semántica utilizando PostgreSQL y pgvector.
- Experiencias desarrollando librerías propias.
- Aprendizaje de microcontroladores desde el desarrollo web.

Estas ideas no deben publicarse como artículos automáticamente generados. Se utilizarán como propuestas para desarrollar posteriormente.

# 13. Página Uses

**Decisión del propietario (26 de noviembre de 2026):** no se crea la página `/uses` ni `/herramientas`. El stack técnico ya se muestra en la rejilla `#stack` de la portada, y duplicarlo en una página propia no aporta valor suficiente. Este apartado queda como contexto, no como trabajo pendiente.

Presentar las herramientas que utilizo realmente en mi día a día.

Esta página debe diferenciarse de la sección de conocimientos técnicos.

## 13.1. Hardware

- Computadora.
- Periféricos.
- Dispositivos adicionales.
- Equipamiento de desarrollo.

## 13.2. Operating System

- Debian.
- Entorno de escritorio.
- Window manager.
- Terminal.
- Herramientas del sistema.

## 13.3. Development

- Editores de código.
- Lenguajes.
- Frameworks.
- Herramientas de desarrollo.
- Control de versiones.

## 13.4. Infrastructure

- Contenedores.
- Reverse proxies.
- Plataformas de despliegue.
- Servidores.
- Servicios autohospedados.

## 13.5. Artificial Intelligence

- Agentes de programación.
- Modelos locales.
- Herramientas de inteligencia artificial.
- Tecnologías de experimentación.

## 13.6. Productivity

- Aplicaciones de organización.
- Documentación.
- Gestión de proyectos.
- Herramientas personales.

Cada herramienta puede incluir una descripción breve explicando por qué la utilizo.

Verificar conmigo el listado antes de publicarlo.

# 14. Infraestructura self-hosted

Crear un caso de estudio específico sobre mi infraestructura personal.

El propósito es demostrar conocimientos prácticos de administración y despliegue de software.

Incluir:

- Arquitectura general.
- Servicios que alojo.
- Organización de aplicaciones.
- Contenedores.
- Reverse proxies.
- Plataformas de despliegue.
- Servicios de correo.
- Bases de datos.
- Servicios de analítica.
- Otros servicios relevantes.

Utilizar un diagrama de alto nivel que represente cómo se relacionan los componentes.

No es necesario publicar configuraciones exactas de seguridad, topología privada, credenciales o detalles sensibles.

# 15. Página Contacto

Crear una página sencilla de contacto.

## 15.1. Canales

- Correo electrónico (`site.email`).
- LinkedIn (`site.linkedin`).
- GitHub (`site.github`).
- Número de teléfono: `+503 79996844`, centralizado en `src/data/site.ts`; al hacer clic debe abrir WhatsApp (`https://wa.me/50379996844`).
- Página de Silver Wolf: `https://web.mauriciodmo.com`, centralizada en `src/data/site.ts`.

La sección comercial de Silver Wolf se mantiene en 15.3 como contexto para solicitudes de servicios; además, su página se ofrece como canal en esta sección.

## 15.2. Disponibilidad profesional

Comunicar claramente que estoy abierto a:

- Empleo remoto a tiempo completo.
- Empleo remoto a tiempo parcial.
- Freelance.
- Contratos profesionales.

## 15.3. Servicios comerciales

Agregar una sección breve que redirija a Silver Wolf para solicitudes relacionadas con servicios profesionales.

No implementar inicialmente un sistema de formularios, CRM ni backend de contacto sin discutirlo conmigo.

# 16. Gestión de contenido con Markdown/MDX

El contenido editorial debe gestionarse mediante Markdown o MDX dentro del repositorio.

No implementar un CMS, panel administrativo ni base de datos únicamente para gestionar el contenido.

## 16.1. Estructura propuesta

```text
content/
├── projects/
│   ├── electronic-invoicing/
│   │   ├── en.mdx
│   │   ├── es.mdx
│   │   └── assets/
│   ├── inventory/
│   ├── warranty-management/
│   ├── framekit/
│   └── infrastructure/
│
├── blog/
│   └── article-id/
│       ├── en.mdx
│       ├── es.mdx
│       └── assets/
│
├── about/
│   ├── en.mdx
│   └── es.mdx
│
└── uses/
    ├── en.mdx
    └── es.mdx
```

Adaptar esta estructura a las capacidades del framework existente.

## 16.2. Esquema de proyectos

Ejemplo de frontmatter:

```yaml
---
id: electronic-invoicing
locale: en
slug: electronic-invoicing
title: Electronic Invoicing System
description: Electronic invoicing and business automation.
category: business-software
status: production
featured: true
featuredOrder: 1
draft: false
technologies:
  - TypeScript
  - Next.js
  - PostgreSQL
cover: ./assets/cover.webp
coverAlt: Electronic invoicing dashboard
repository: null
website: null
openSource: false
---
```

Estos datos son ilustrativos y deben sustituirse por información verificada.

## 16.3. Esquema de artículos

```yaml
---
id: self-hosted-email
locale: en
slug: self-hosting-email
title: Self-hosting Your Own Email Server
description: Experiences running a self-hosted email server.
category: tutorials
tags:
  - infrastructure
  - email
  - self-hosting
publishedAt: null
updatedAt: null
draft: true
cover: null
---
```

## 16.4. Validación

Validar los metadatos mediante esquemas tipados o el sistema de colecciones del framework.

Detectar:

- Identificadores inválidos.
- Slugs duplicados por idioma.
- Categorías inexistentes.
- Estados inválidos.
- Metadatos obligatorios faltantes.
- Fechas incorrectas.
- Referencias a imágenes inexistentes.
- Traducciones sin relación válida.

Los borradores no deben aparecer en producción, buscadores, listados ni sitemap.

## 16.5. Configuración centralizada

Centralizar los datos que se reutilizan en diferentes páginas:

```text
config/
├── site
├── profile
├── social-links
├── availability
├── navigation
└── i18n
```

Evitar repetir enlaces, datos profesionales y configuraciones en diferentes componentes.

# 17. Buscador global

Implementar un buscador accesible desde cualquier página.

## 17.1. Interfaz

- Botón de búsqueda en el encabezado.
- Atajo `Ctrl + K`.
- Atajo `Cmd + K` en macOS.
- Modal o command palette.
- Navegación mediante teclado.
- Selección mediante Enter.
- Cierre mediante Escape.
- Diseño compatible con dispositivos móviles.

## 17.2. Contenido indexado

Principalmente:

- Proyectos.
- Artículos del blog.

Opcionalmente, las páginas principales cuando mejore la navegación.

## 17.3. Resultados

Mostrar:

- Título.
- Descripción.
- Categoría.
- Tipo de contenido.
- URL correspondiente.

## 17.4. Comportamiento

- Buscar en el idioma seleccionado.
- Ignorar diferencias entre mayúsculas y minúsculas.
- Facilitar búsquedas con o sin tildes.
- Admitir coincidencias parciales.
- Excluir borradores.
- Mostrar estados vacíos.
- Ordenar por relevancia.

## 17.5. Implementación

Preferir un índice de búsqueda generado durante la compilación.

Evaluar alternativas como:

- Pagefind.
- Fuse.js.
- MiniSearch.
- Capacidades nativas del framework.

Seleccionar la alternativa según el tamaño del contenido, arquitectura existente, experiencia de usuario y rendimiento.

No utilizar embeddings, servicios externos, inteligencia artificial ni bases de datos para esta funcionalidad inicial.

# 18. Componentes reutilizables

Identificar primero cuáles existen y cuáles es necesario crear.

Componentes propuestos:

```text
components/
├── layout/
│   ├── Header
│   ├── Footer
│   ├── Navigation
│   └── MobileNavigation
├── ui/
│   ├── Button
│   ├── Badge
│   ├── SectionHeading
│   └── ExternalLink
├── profile/
│   ├── Hero
│   ├── Availability
│   ├── ExperienceTimeline
│   ├── SocialLinks
│   └── ResumeDownload
├── projects/
│   ├── ProjectCard
│   ├── ProjectGrid
│   ├── ProjectFilters
│   ├── ProjectMetadata
│   └── ProjectGallery
├── blog/
│   ├── ArticleCard
│   ├── ArticleList
│   ├── ArticleMetadata
│   └── RelatedArticles
├── content/
│   ├── MDXContent
│   ├── CodeBlock
│   ├── Diagram
│   └── Callout
├── search/
│   ├── SearchDialog
│   ├── SearchInput
│   └── SearchResults
└── preferences/
    ├── LanguageSwitcher
    └── ThemeSwitcher
```

Esta estructura es orientativa. Evitar crear abstracciones y componentes innecesarios.

# 19. SEO y posicionamiento

Implementar SEO técnico para ambos idiomas.

## 19.1. Metadatos

- Título único por página.
- Descripción.
- Canonical URL.
- Open Graph.
- Twitter Cards.
- Imagen social.
- Idioma del documento.

## 19.2. SEO internacional

Implementar:

- `hreflang="en"`.
- `hreflang="es"`.
- `hreflang="x-default"` cuando corresponda.
- Sitemap con las URLs publicadas.
- Canonical independiente por traducción.
- URLs localizadas.
- HTML `lang` correcto.

Las referencias entre traducciones deben ser recíprocas.

## 19.3. Datos estructurados

Evaluar datos estructurados para:

- Person.
- ProfilePage.
- BlogPosting.
- BreadcrumbList.
- SoftwareApplication o SoftwareSourceCode cuando corresponda.

Utilizar únicamente datos reales.

## 19.4. Migración de URLs

Crear un mapa de redirecciones desde las URLs antiguas hacia sus equivalentes.

- Conservar enlaces externos existentes.
- Evitar errores 404 innecesarios.
- Utilizar redirecciones permanentes cuando corresponda.
- Evitar cadenas y bucles.
- Mantener el valor SEO del sitio existente.

No redirigir todas las páginas antiguas hacia el inicio.

## 19.5. Analítica

Conservar las integraciones de analítica existentes cuando sean compatibles con la nueva estructura.

Verificar que las visitas, rutas localizadas y cambios de navegación se registren correctamente sin duplicar eventos.

# 20. Rendimiento

Priorizar una web ligera.

Objetivos:

| Métrica | Objetivo |
|---|---|
| Lighthouse Performance | 95 o superior |
| Accessibility | 95 o superior |
| Best Practices | 95 o superior |
| SEO | 95 o superior |
| LCP | Hasta 2.5 segundos |
| CLS | Hasta 0.1 |
| INP | Hasta 200 ms |

Los objetivos de Lighthouse deben comprobarse en páginas representativas y condiciones reproducibles. Las métricas reales de experiencia se validarán mediante datos de campo cuando estén disponibles.

Buenas prácticas:

- Generación estática cuando sea viable.
- JavaScript mínimo.
- Imágenes optimizadas.
- WebP o AVIF cuando corresponda.
- Dimensiones explícitas para imágenes.
- Lazy loading.
- Optimización de fuentes.
- Evitar dependencias innecesarias.
- Evitar animaciones costosas.
- Aprovechar caché y CDN.
- Mantener el despliegue sencillo.

# 21. Accesibilidad

Utilizar WCAG 2.2 AA como objetivo de accesibilidad.

Considerar:

- Contraste de colores.
- Navegación mediante teclado.
- Estados de enfoque visibles.
- HTML semántico.
- Jerarquía correcta de encabezados.
- Textos alternativos.
- Labels accesibles.
- Enlaces descriptivos.
- Respeto a `prefers-reduced-motion`.
- Gestión del foco en modales.
- Accesibilidad del buscador.
- Accesibilidad de los selectores de tema e idioma.

Realizar comprobaciones automatizadas y manuales.

# 22. Diseño responsive

Todas las páginas deben funcionar correctamente en:

- Teléfonos pequeños.
- Teléfonos grandes.
- Tablets.
- Laptops.
- Monitores de escritorio.
- Pantallas de alta resolución.

Revisar especialmente:

- Hero.
- Navegación móvil.
- Tarjetas de proyectos.
- Capturas de pantalla.
- Diagramas.
- Tablas.
- Bloques de código.
- Buscador global.
- Artículos extensos.

Evitar desbordamientos horizontales y textos excesivamente anchos.

# 23. Plan de implementación por fases

## Fase 0 — Auditoría y planificación

Tareas:

- Inspeccionar el repositorio.
- Identificar dependencias y arquitectura.
- Documentar el diseño actual.
- Inventariar páginas, recursos y contenido.
- Identificar componentes reutilizables.
- Ejecutar las comprobaciones existentes.
- Establecer una línea base.
- Preparar mapa preliminar de redirecciones.
- Presentar estrategia de migración.

Entregable: auditoría técnica y propuesta adaptada al repositorio.

No realizar todavía cambios significativos en el diseño.

## Fase 1 — Fundamentos visuales

Tareas:

- Crear o reorganizar design tokens.
- Conservar la paleta de colores.
- Conservar la tipografía.
- Mejorar componentes UI existentes.
- Definir layout general.
- Reorganizar navegación.
- Crear footer.
- Implementar temas claro, oscuro y sistema.
- Validar comportamiento responsive.

Criterio de aceptación: sistema visual consistente sin perder la identidad original.

## Fase 2 — Internacionalización

Tareas:

- Seleccionar el mecanismo de internacionalización adecuado.
- Crear rutas localizadas.
- Implementar diccionarios.
- Configurar detección de idioma.
- Persistir preferencias.
- Crear selector de idioma.
- Traducir componentes globales.
- Implementar relaciones entre rutas equivalentes.
- Verificar navegación directa.

Criterio de aceptación: navegación funcional en inglés y español.

## Fase 3 — Arquitectura de contenido

Tareas:

- Configurar Markdown/MDX.
- Crear esquemas de metadatos.
- Crear colecciones de proyectos y artículos.
- Implementar soporte de traducciones.
- Configurar borradores.
- Centralizar datos del perfil.
- Crear componentes para renderizar contenido.
- Implementar soporte de imágenes y diagramas.
- Validar contenido durante la compilación.

Criterio de aceptación: añadir un proyecto o artículo no requiere modificar los componentes de presentación.

## Fase 4 — Migración de proyectos

Tareas:

- Crear plantilla de casos de estudio.
- Migrar facturación electrónica.
- Migrar inventario.
- Migrar garantías RMA.
- Incorporar FrameKit.
- Preparar el caso de infraestructura.
- Organizar capturas existentes.
- Crear diagramas basados en arquitecturas reales.
- Traducir contenido.
- Implementar listado y filtros.
- Configurar proyectos destacados.

Criterio de aceptación: todos los proyectos existentes conservan su información relevante dentro de la nueva estructura.

## Fase 5 — Rediseño de la página principal

Tareas:

- Crear hero profesional.
- Incorporar fotografía cuando esté disponible.
- Implementar disponibilidad laboral.
- Conservar sin cambios el bloque de proyectos destacados, el catálogo y los casos de estudio.
- Mostrar experiencia resumida.
- Mostrar áreas de especialización.
- Incorporar publicaciones recientes.
- Ajustar la sección final de contacto para enlazar a la página dedicada.
- Revisar jerarquía visual y eliminar redundancias fuera de los proyectos.

Criterio de aceptación: un visitante puede comprender mi perfil profesional en menos de un minuto.

## Fase 6 — Sobre mí y currículum

Tareas:

- Recopilar información profesional.
- Recopilar fechas de experiencia.
- Recopilar información académica.
- Preparar una presentación breve para el CV web y, si corresponde, contexto personal conciso.
- Incorporar certificaciones verificables.
- Organizar la experiencia como CV web.
- Organizar conocimientos técnicos.
- Agregar intereses personales.
- Preparar contenido común y verificado para la página y el PDF en ambos idiomas.
- Diseñar versiones PDF optimizadas para impresión.
- Implementar la descarga de los PDF definitivos.

Criterio de aceptación: CV web claro y verificable, coherente con los PDF en inglés y español derivados del mismo contenido y correctamente presentados para impresión.

## Fase 7 — Blog, Uses y contacto

Tareas:

- Crear listado de artículos.
- Crear plantilla individual de publicaciones.
- Implementar categorías y etiquetas.
- Agregar syntax highlighting.
- Configurar metadatos de artículos.
- No implementar la página Uses: el propietario la descartó; el stack permanece en `#stack` de la portada.
- Implementar la página de contacto dedicada en `/es/contacto` y `/en/contact` con correo, LinkedIn, GitHub, teléfono y enlace a Silver Wolf, sin formularios.
- Centralizar en `src/data/site.ts` el teléfono `+503 79996844` y la URL `https://web.mauriciodmo.com`; el teléfono enlaza a `https://wa.me/50379996844` para abrir WhatsApp.
- Incorporar enlaces profesionales.
- Enlazar Silver Wolf.

Criterio de aceptación: las páginas son funcionales y admiten contenido nuevo sin modificar su estructura.

## Fase 8 — Buscador global

Tareas:

- Evaluar alternativas de búsqueda.
- Seleccionar implementación.
- Generar índice de contenido.
- Implementar command palette.
- Implementar atajos de teclado.
- Crear resultados agrupados.
- Configurar búsqueda por idioma.
- Excluir borradores.
- Validar accesibilidad.
- Optimizar rendimiento.

Criterio de aceptación: encontrar cualquier proyecto o artículo publicado rápidamente desde cualquier página.

## Fase 9 — SEO, optimización y pruebas

Tareas:

- Configurar metadatos bilingües.
- Configurar sitemap.
- Configurar hreflang.
- Implementar canonical URLs.
- Implementar datos estructurados.
- Configurar redirecciones.
- Revisar imágenes.
- Ejecutar Lighthouse.
- Revisar accesibilidad.
- Comprobar diseño responsive.
- Verificar enlaces internos y externos.
- Ejecutar pruebas.
- Verificar integraciones de analítica.

Criterio de aceptación: sitio técnicamente preparado para producción.

## Fase 10 — Publicación y limpieza

Tareas:

- Revisar contenido definitivo.
- Verificar ambas traducciones.
- Eliminar contenido obsoleto después de comprobar su migración.
- Eliminar componentes sin uso.
- Eliminar dependencias innecesarias.
- Actualizar README.
- Documentar cómo añadir contenido.
- Documentar cómo traducir contenido.
- Preparar despliegue.
- Verificar redirecciones.
- Realizar pruebas de humo en producción.
- Mantener una estrategia de rollback.

Criterio de aceptación: nueva versión publicada, documentada y mantenible.

# 24. Estrategia de pruebas

Implementar pruebas según las herramientas existentes en el repositorio.

Priorizar:

- Validación de esquemas de contenido.
- Generación de rutas.
- Relación entre traducciones.
- Selector de idioma.
- Persistencia del tema.
- Exclusión de borradores.
- Filtros de proyectos.
- Generación del índice de búsqueda.
- Resultados de búsqueda.
- Navegación mediante teclado.
- Redirecciones de URLs antiguas.
- Compilación de producción.

Utilizar pruebas end-to-end para los recorridos principales cuando resulte viable.

No introducir múltiples frameworks de pruebas sin necesidad.

# 25. Metodología de trabajo con el agente

La implementación debe realizarse de manera colaborativa e incremental.

## 25.1. Reglas

- No implementar todas las fases en una sola ejecución.
- No modificar la arquitectura sin justificarlo.
- No reemplazar el framework actual sin consultarme.
- No actualizar dependencias indiscriminadamente.
- No eliminar contenido sin comprobar su migración.
- No inventar datos personales ni profesionales.
- No inventar resultados o métricas.
- No publicar información confidencial.
- No añadir funcionalidades fuera del alcance sin discutirlas.
- Priorizar soluciones sencillas.
- Mantener compatibilidad con el despliegue actual.
- Respetar modificaciones existentes que no estén relacionadas con la migración.
- No desplegar automáticamente a producción.

## 25.2. Flujo por fase

Antes de cada fase:

1. Explicar el objetivo.
2. Inspeccionar los archivos relevantes.
3. Identificar componentes afectados.
4. Presentar un plan técnico.
5. Señalar decisiones importantes.
6. Solicitar mi aprobación antes de comenzar la fase.

Durante la implementación:

1. Realizar cambios incrementales.
2. Reutilizar componentes.
3. Mantener el código tipado.
4. Validar los cambios.
5. Evitar modificaciones ajenas al objetivo.

Al finalizar cada fase:

1. Mostrar un resumen de los cambios.
2. Enumerar archivos relevantes modificados.
3. Informar decisiones técnicas.
4. Presentar resultados de pruebas.
5. Indicar problemas pendientes.
6. Proporcionar instrucciones para revisar visualmente los cambios.
7. Esperar mi aprobación antes de avanzar.

## 25.3. Control de versiones

Trabajar preferiblemente sobre una rama dedicada:

```text
feat/portfolio-redesign
```

Comprobar previamente el estado de Git y respetar cambios locales no relacionados.

Organizar los commits por funcionalidades:

```text
docs: audit existing portfolio
refactor: consolidate design tokens
feat: implement bilingual routing
feat: configure mdx content collections
feat: redesign project case studies
feat: redesign homepage
feat: add professional profile
feat: implement technical blog
feat: add global search
perf: optimize portfolio assets
fix: configure legacy redirects
```

No realizar force push, eliminar ramas ni fusionar automáticamente a producción.

# 26. Documentación y seguimiento

Crear los siguientes documentos:

```text
docs/
├── migration-plan.md
├── migration-audit.md
├── migration-progress.md
├── architecture.md
├── content-guide.md
├── localization-guide.md
└── redirects.md
```

El archivo `migration-progress.md` debe mantener:

- Fase actual.
- Tareas completadas.
- Tareas pendientes.
- Decisiones tomadas.
- Archivos relevantes.
- Problemas identificados.
- Información que debo proporcionar.
- Resultados de validación.
- Próximo paso.

Esto permitirá continuar el trabajo con diferentes agentes sin perder el contexto del proyecto.

# 27. Información pendiente que debo proporcionar

Durante las fases correspondientes, solicitarme:

- Fotografía personal.
- Historia como desarrollador.
- Fechas de experiencia laboral.
- Cargos y responsabilidades.
- Información académica.
- Certificaciones.
- Logros verificables.
- Métricas de proyectos.
- Capturas actualizadas.
- Enlaces de repositorios públicos.
- Herramientas utilizadas actualmente.
- Servicios autohospedados que quiero mostrar.
- Enlaces de contacto.
- Información para crear el currículum.

No es necesario recopilar toda esta información antes de comenzar la auditoría.

Los elementos pendientes deben mantenerse como borradores o secciones no publicadas.

# 28. Elementos fuera del alcance

No incluir inicialmente:

- CMS con panel administrativo.
- Base de datos para gestionar contenido.
- Chatbot de inteligencia artificial.
- Buscador semántico con embeddings.
- Sistema de comentarios.
- Autenticación de usuarios.
- Dashboard administrativo.
- Sistema complejo de gestión de clientes.
- Landing page comercial extensa.
- Barras de habilidades.
- Estadísticas decorativas de GitHub.
- Animaciones excesivas.
- Información técnica sensible.

Cualquier ampliación futura deberá tener una justificación concreta.

# 29. Definición de terminado

La migración se considerará completada cuando:

- El sitio conserve su identidad visual.
- Existan versiones funcionales en inglés y español.
- La selección de idioma sea persistente.
- El sitio soporte temas claro, oscuro y sistema.
- Los proyectos existentes estén migrados.
- Los casos de estudio tengan una estructura consistente.
- La página Sobre mí presente información real.
- Existan currículums descargables en ambos idiomas.
- El blog y Uses sean funcionales.
- El buscador indexe contenido publicado.
- Las URLs antiguas redirijan correctamente.
- Las páginas tengan metadatos SEO.
- La web funcione correctamente en móviles.
- Las pruebas y compilación sean satisfactorias.
- El proyecto esté documentado.
- El contenido pueda mantenerse mediante Markdown/MDX.
- No existan secciones vacías, información inventada ni enlaces rotos.

# 30. Primera instrucción para el agente

Comienza exclusivamente con la **Fase 0: Auditoría y planificación**.

Analiza el repositorio actual y determina qué elementos pueden conservarse, refactorizarse, migrarse o eliminarse.

Compara la arquitectura existente con los requisitos de este documento.

Identifica las decisiones técnicas que necesitan mi participación y aquellas que pueden resolverse utilizando buenas prácticas.

Crea los documentos iniciales de planificación y presenta un plan de implementación adaptado a la estructura real del repositorio.

No comiences todavía el rediseño de las páginas ni realices cambios destructivos.

Una vez finalizada la auditoría, presenta tus conclusiones y espera mi aprobación para iniciar la Fase 1.
