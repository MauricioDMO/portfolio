---
id: infraestructura-self-hosted
navigationLabels: [Resumen, Servicios, Arquitectura, Decisiones, Mi rol, Aprendizaje]
icon: server
locale: es
slug: infraestructura-self-hosted
title: Infraestructura autohospedada
description: Un VPS personal con servicios autohospedados para red privada, correo, analítica web y automatización con IA.
intro: Un grupo pequeño de servicios independientes ejecutándose en mi propio servidor, con los datos y los accesos bajo mi control.
category: infrastructure
status: production
featuredOrder: 4
draft: false
technologies:
  - Linux
  - Docker
  - Coolify
  - NetBird
  - Stalwart
  - Umami
  - Hermes Agent
eyebrow: Infraestructura
impact:
  - Acceso privado a los servicios mediante una VPN
  - Correo gestionado por un servidor de correo autohospedado
  - Analítica web sin cookies y respetuosa con la privacidad
  - Un agente de IA siempre activo para experimentos de automatización
gallery:
  - src: /projects/infraestructura-self-hosted/panel-de-control.webp
    alt: Panel de Coolify con proyectos y servidor
  - src: /projects/infraestructura-self-hosted/metricas.webp
    alt: Métricas de recursos del servidor en Coolify
---

## <span id="impacto"></span>Servicios que controlo de principio a fin

*Resumen*

- Acceso privado a los servicios mediante una VPN
- Correo gestionado por un servidor de correo autohospedado
- Analítica web sin cookies y respetuosa con la privacidad
- Un agente de IA siempre activo para experimentos de automatización

## <span id="servicios"></span>Qué se ejecuta en el VPS

*Servicios*

- **Hermes** — un agente de IA autónomo de Nous Research con memoria persistente, tareas programadas e interfaces de terminal o mensajería. Funciona como servicio siempre activo en el servidor.
- **NetBird** — una plataforma de red de código abierto basada en Zero Trust y WireGuard. Conecta máquinas mediante túneles cifrados punto a punto y gestiona el acceso con políticas de identidad en lugar de exponer puertos a internet.
- **Stalwart** — un servidor de correo y colaboración de código abierto escrito en Rust, con soporte SMTP, IMAP, JMAP y CalDAV/CardDAV, filtrado de spam y gestión automática de certificados TLS.
- **Umami** — analítica web de código abierto que funciona sin cookies ni datos personales; se usa para medir el tráfico del sitio manteniendo los datos en mi propia infraestructura.

## <span id="arquitectura"></span>Un servidor, varios servicios independientes

*Arquitectura*

Cada herramienta corre como un servicio separado en el mismo VPS y se gestiona con Coolify. Mantenerlos independientes facilita actualizar o reemplazar uno sin modificar los demás. El acceso privado se gestiona con NetBird y solo se expone públicamente lo que realmente necesita ser alcanzable.

Aquí no se publican direcciones IP privadas, puertos, credenciales, configuración interna ni datos de clientes. El objetivo es mostrar los componentes y su relación, no exponer la topología del servidor.

## <span id="decisiones"></span>Piezas simples y herramientas abiertas

*Decisiones técnicas*

- Preferir herramientas de código abierto con documentación clara para autohospedaje
- Mantener los servicios separados para poder reemplazar uno sin rediseñar todo el entorno
- Usar redes privadas cifradas en lugar de exponer servicios administrativos a internet
- Evitar la recopilación de datos personales en la analítica
- Mantener secretos y configuración interna fuera del portafolio

## <span id="rol"></span>Despliegue y operación

*Mi rol*

Desplegué, configuré y mantengo estos servicios en mi VPS: elección de herramientas, exposición limitada a lo necesario, actualizaciones y verificación de que el entorno siga funcionando con el tiempo.

## <span id="aprendizaje"></span>Operar software enseña cosas distintas que escribirlo

*Aprendizaje*

Ejecutar servicios cambia la definición de «terminado»: las actualizaciones, los certificados, el control de acceso y las copias de seguridad pasan a formar parte del trabajo. El autohospedamiento resulta útil cuando aceptas esa responsabilidad operativa, no solo el despliegue inicial.
