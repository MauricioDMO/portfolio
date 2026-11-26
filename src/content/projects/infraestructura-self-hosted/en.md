---
id: infraestructura-self-hosted
navigationLabels: [Overview, Services, Architecture, Decisions, My role, Takeaway]
icon: server
locale: en
slug: infraestructura-self-hosted
title: Self-hosted infrastructure
description: A personal VPS running self-hosted services for private networking, email, web analytics and AI automation.
intro: A small set of independent services running on my own server, with data and access kept under my control.
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
eyebrow: Infrastructure
impact:
  - Private access to services through a VPN
  - Email handled by a self-hosted mail server
  - Privacy-friendly analytics without cookies
  - An always-on AI agent for automation experiments
gallery:
  - src: /projects/infraestructura-self-hosted/panel-de-control.webp
    alt: Coolify dashboard showing projects and the server
  - src: /projects/infraestructura-self-hosted/metricas.webp
    alt: Server resource metrics in Coolify
---

## <span id="impacto"></span>Services I control end to end

*Overview*

- Private access to services through a VPN
- Email handled by a self-hosted mail server
- Privacy-friendly analytics without cookies
- An always-on AI agent for automation experiments

## <span id="servicios"></span>What runs on the VPS

*Services*

- **Hermes** — an autonomous AI agent from Nous Research with persistent memory, scheduled tasks and terminal or messaging interfaces. It runs as an always-on service on the server.
- **NetBird** — an open-source Zero Trust networking platform built on WireGuard. It connects machines over encrypted peer-to-peer tunnels and manages access with identity-based policies instead of exposing ports on the internet.
- **Stalwart** — an open-source mail and collaboration server written in Rust, with SMTP, IMAP, JMAP and CalDAV/CardDAV support, built-in spam filtering and automatic TLS certificate management.
- **Umami** — open-source web analytics that works without cookies or personal data, used to measure site traffic while keeping the data on my own infrastructure.

## <span id="arquitectura"></span>One server, several independent services

*Architecture*

Each tool runs as a separate service on the same VPS and is managed with Coolify. Keeping them independent makes it easier to update or replace one without changing the others. Private access is handled by NetBird, while public-facing services are limited to what actually needs to be reachable.

No private IP addresses, ports, credentials, internal configuration or client data are published here. The goal is to show the components and how they relate, not to expose the server topology.

## <span id="decisiones"></span>Simple pieces, open tools

*Technical decisions*

- Prefer open-source tools with documented self-hosting paths
- Keep services separated so one tool can be replaced without redesigning the whole setup
- Use encrypted private networking instead of exposing administrative services publicly
- Avoid collecting personal data in analytics
- Keep secrets and internal configuration out of the portfolio

## <span id="rol"></span>Deployment and operation

*My role*

I deployed, configured and maintain these services on my VPS: choosing the tools, exposing only what is needed, keeping them updated and verifying that the environment keeps working over time.

## <span id="aprendizaje"></span>Operating software teaches different lessons than writing it

*Takeaway*

Running services changes the definition of "done": updates, certificates, access control and backups become part of the work. Self-hosting is useful when you are willing to own that operational side, not just the initial deployment.
