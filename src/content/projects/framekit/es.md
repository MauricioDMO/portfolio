---
id: framekit
navigationLabels: [Impacto, Problema, Solución, Funciones, Tecnología, Librería y agentes, Aprendizaje]
icon: code
locale: es
slug: framekit
title: FrameKit
description: Herramienta de código abierto para construir imágenes de marca con plantillas React y editar su contenido en Studio.
intro: Un sistema visual definido en código, con contenido editable por separado y exportación PNG bajo demanda.
category: developer-tools
status: in-development
featuredOrder: 3
draft: false
technologies:
  - Next.js
  - React
  - TypeScript
  - Node.js
  - pnpm
  - Playwright
repository: https://github.com/MauricioDMO/FrameKit
website: https://framekit.mauriciodmo.com
openSource: true
eyebrow: Herramientas de desarrollo
impact:
  - Diseño, tipografía, colores y dimensiones definidos en código
  - El contenido se edita con campos y variantes sin tocar la plantilla
  - Exportación PNG desde Studio y mediante una API del servidor
  - Documentación bilingüe en inglés y español
gallery:
  - src: /projects/framekit/inicio.webp
    alt: Página de inicio de FrameKit
  - src: /projects/framekit/documentacion.webp
    alt: Índice de la documentación de FrameKit
  - src: /projects/framekit/estudio.webp
    alt: Guía de uso de FrameKit Studio
---

## <span id="impacto"></span>Un sistema visual que se mantiene coherente

*Impacto del proyecto*

- Diseño, tipografía, colores y dimensiones definidos en código
- El contenido se edita con campos y variantes sin tocar la plantilla
- Exportación PNG desde Studio y mediante una API del servidor
- Documentación bilingüe en inglés y español

## <span id="problema"></span>Repetir el mismo diseño a mano no escala

*El problema*

Campañas, catálogos y vistas previas necesitan muchas imágenes que deben parecer salidas de una misma plantilla. Editar cada variación a mano es lento y se aleja del diseño original. Generar cada imagen desde un prompt tiene el mismo riesgo: el lenguaje visual se reinterpreta en cada iteración.

## <span id="solucion"></span>Plantillas React con una capa de edición

*La solución*

FrameKit define una plantilla como un componente React con un contrato: dimensiones, campos, variantes y recursos. Ese mismo componente se renderiza en Studio y en la API de imágenes. Los desarrolladores son dueños del sistema visual; los equipos de contenido cambian textos, colores y recursos desde el editor y exportan el resultado como PNG.

## <span id="features"></span>Qué incluye el flujo de trabajo

*Funciones*

- Definición de plantillas con campos tipados y validación
- Variantes de contenido y recursos reutilizables
- Studio para explorar plantillas, editar campos y previsualizar el lienzo
- Componentes de marca como bloques visuales reutilizables
- Renderizado PNG en el servidor mediante una API HTTP
- Autenticación opcional, desactivada por defecto
- Documentación bilingüe en inglés y español

## <span id="tecnico"></span>Construido sobre el ecosistema de Node y React

*Decisiones técnicas*

- Objetivo: Node.js 22.13+, React 19 y Next.js 16
- Publicado como `@mauriciodmo/framekit` y `@mauriciodmo/create-framekit` en npm
- El creador genera una aplicación Next.js lista para ejecutar
- La autenticación se activa de forma explícita con `FRAMEKIT_AUTH_ENABLED`
- Licencia Apache 2.0 y estado actual de beta

## <span id="rol"></span>Una librería para crear imágenes y trabajar con agentes

*Mi rol*

Creé FrameKit como una aplicación distribuida como librería para generar imágenes a partir de plantillas React. Además de la implementación, preparé la documentación y las skills públicas del proyecto para que la comunicación y el desarrollo con agentes de IA fueran más claros: cualquier agente puede entender de qué trata el proyecto y contribuir con cambios coherentes.

## <span id="aprendizaje"></span>Librerías en npm y documentación de código abierto

*Aprendizaje*

El aprendizaje principal fue crear y mantener librerías publicadas en npmjs.com: definir una API usable, versionar paquetes y acompañarlos con documentación que otros puedan seguir. Publicar no fue el final del trabajo: mantener una librería implica cuidar la compatibilidad, responder a quienes la usan y decidir qué cambios entran en cada versión. Documentar un proyecto de código abierto resultó tan importante como implementarlo, porque es lo que permite a otras personas y a los agentes entender y desarrollar el proyecto. Una documentación clara, con ejemplos y referencias, funciona como interfaz del proyecto: reduce la dependencia de conversaciones informales y hace que el conocimiento pueda reutilizarse tanto por personas como por herramientas automáticas.
