---
id: sistema-rma-garantias
navigationLabels: [Impacto, Problema, Solución, Funciones, Tecnología, Mi rol, Experiencia, Aprendizaje]
icon: shield-check
locale: es
slug: sistema-rma-garantias
title: Sistema RMA / Garantías
description: Sistema para registrar, documentar y dar seguimiento a procesos de garantía y devolución con mayor orden operativo.
intro: Herramienta interna para que cada garantía tenga contexto, estado, evidencia y continuidad durante todo el ciclo de revisión.
category: business-software
status: archived
featured: true
featuredOrder: 4
draft: false
technologies:
  - Next.js
  - TypeScript
  - Turso
  - AWS
  - JWT
  - Cloudflare
  - ESLint
  - pnpm
eyebrow: Trazabilidad de casos
impact:
  - Mejor trazabilidad de casos de garantía
  - Menos información perdida entre etapas
  - Mayor orden en procesos de revisión interna
  - Consulta más clara de cliente, producto, estado y evidencia
  - Base más confiable para responder al cliente
gallery:
  - src: /projects/construfijaciones-rma/dashboard.webp
    alt: Dashboard principal del sistema RMA de Construfijaciones
  - src: /projects/construfijaciones-rma/menu.webp
    alt: Menú del sistema RMA de Construfijaciones
  - src: /projects/construfijaciones-rma/info-pedido.webp
    alt: Información de pedido dentro del sistema RMA
  - src: /projects/construfijaciones-rma/usuarios.webp
    alt: Gestión de usuarios del sistema RMA
  - src: /projects/construfijaciones-rma/usuario.webp
    alt: Detalle de usuario del sistema RMA
  - src: /projects/construfijaciones-rma/centros-de-distribucion.webp
    alt: Centros de distribución configurados en el sistema RMA
  - src: /projects/construfijaciones-rma/dashboard-interno.webp
    alt: Dashboard interno del sistema RMA
  - src: /projects/construfijaciones-rma/aprobados-interno.webp
    alt: Casos aprobados en la vista interna del sistema RMA
  - src: /projects/construfijaciones-rma/aprobacion-interna.webp
    alt: Aprobación interna de caso RMA
  - src: /projects/construfijaciones-rma/rechazo-interna.webp
    alt: Rechazo interno de caso RMA
---

## <span id="impacto"></span>Más control sobre cada caso de garantía

*Impacto operativo*

- Mejor trazabilidad de casos de garantía
- Menos información perdida entre etapas
- Mayor orden en procesos de revisión interna
- Consulta más clara de cliente, producto, estado y evidencia
- Base más confiable para responder al cliente

## <span id="problema"></span>Cuando un caso pierde contexto entre etapas

*Pérdida de seguimiento*

Los procesos de garantía y devolución pueden perder trazabilidad cuando se manejan por mensajes, papeles o memoria del equipo. Sin un flujo centralizado, es más difícil saber el estado de cada caso, quién lo revisó, qué evidencia existe y qué respuesta debe darse al cliente.

## <span id="solucion"></span>Un sistema para documentar estado, evidencia y responsables

*Flujo rastreable*

Implementación de un sistema RMA para registrar casos, documentar información del cliente y producto, adjuntar evidencia, controlar estados y dar seguimiento al ciclo de revisión o garantía desde una interfaz centralizada.

## <span id="features"></span>Los módulos que dan continuidad al proceso

*Piezas del sistema*

- Registro de casos RMA
- Datos de cliente, producto y pedido
- Seguimiento de estados del caso
- Historial de cambios y revisiones
- Carga o consulta de evidencia relacionada
- Panel interno para revisión operativa
- Gestión de usuarios y centros de distribución
- Vistas separadas para seguimiento interno y aprobación

## <span id="tecnico"></span>Datos, archivos y estados en un flujo centralizado

*Decisiones técnicas*

- Next.js para construir el sistema web y sus flujos internos
- TypeScript para modelar casos, estados y datos importantes
- Base de datos para persistir casos, usuarios, estados e historial
- AWS S3 para almacenar documentos, imágenes o evidencia del proceso
- Integración con flujos logísticos o de seguimiento cuando el caso lo requiere

## <span id="rol"></span>Ordenar el proceso desde la interfaz y los datos

*Mi rol*

Participé en el planteamiento del flujo, diseño de pantallas, estructura de datos y desarrollo de funcionalidades para convertir un proceso disperso en un sistema más comprensible, rastreable y útil para el equipo interno.

## <span id="ux"></span>Estado claro para avanzar sin perder información

*Experiencia de seguimiento*

La experiencia se centró en que cada caso tuviera suficiente contexto para entenderse sin depender de conversaciones externas. La interfaz debía mostrar estado, datos relevantes, historial y acciones claras para avanzar el caso sin perder información.

## <span id="aprendizaje"></span>Una herramienta interna también guarda memoria

*Aprendizaje del proceso*

Este proyecto mostró que una buena herramienta interna no solo guarda datos: también conserva contexto, memoria y continuidad. En procesos de garantía, la trazabilidad es clave para evitar confusión y sostener una respuesta más profesional al cliente.
