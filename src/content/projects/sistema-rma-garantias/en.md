---
id: sistema-rma-garantias
navigationLabels: [Impact, Problem, Solution, Features, Technology, My role, Experience, Takeaway]
icon: shield-check
locale: en
slug: warranty-management
title: RMA / Warranty System
description: System for logging, documenting, and tracking warranty and return processes with greater operational order.
intro: Internal tool so every warranty has context, status, evidence, and continuity throughout the review cycle.
category: business-software
status: archived
featuredOrder: 6
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
eyebrow: Case traceability
impact:
  - Better traceability of warranty cases
  - Less information lost between stages
  - More organization in internal review processes
  - Clearer lookup of customer, product, status, and evidence
  - A more reliable basis for responding to customers
gallery:
  - src: /projects/construfijaciones-rma/dashboard.webp
    alt: Main dashboard of the Construfijaciones RMA system
  - src: /projects/construfijaciones-rma/menu.webp
    alt: Menu of the Construfijaciones RMA system
  - src: /projects/construfijaciones-rma/info-pedido.webp
    alt: Order information in the RMA system
  - src: /projects/construfijaciones-rma/usuarios.webp
    alt: User management in the RMA system
  - src: /projects/construfijaciones-rma/usuario.webp
    alt: User detail in the RMA system
  - src: /projects/construfijaciones-rma/centros-de-distribucion.webp
    alt: Distribution centers configured in the RMA system
  - src: /projects/construfijaciones-rma/dashboard-interno.webp
    alt: Internal dashboard of the RMA system
  - src: /projects/construfijaciones-rma/aprobados-interno.webp
    alt: Approved cases in the internal view of the RMA system
  - src: /projects/construfijaciones-rma/aprobacion-interna.webp
    alt: Internal approval of an RMA case
  - src: /projects/construfijaciones-rma/rechazo-interna.webp
    alt: Internal rejection of an RMA case
---

## <span id="impacto"></span>More control over every warranty case

*Operational impact*

- Better traceability of warranty cases
- Less information lost between stages
- More organization in internal review processes
- Clearer lookup of customer, product, status, and evidence
- A more reliable basis for responding to customers

## <span id="problema"></span>When a case loses context between stages

*Lost tracking*

Warranty and return processes can lose traceability when handled through messages, paper, or team memory. Without a centralized flow, it's harder to know the status of each case, who reviewed it, what evidence exists, and what answer the customer should receive.

## <span id="solucion"></span>A system to document status, evidence, and ownership

*Traceable workflow*

Implemented an RMA system to log cases, document customer and product information, attach evidence, manage statuses, and track the review or warranty cycle from a centralized interface.

## <span id="features"></span>The modules that keep the process continuous

*System components*

- RMA case registration
- Customer, product, and order data
- Case status tracking
- History of changes and reviews
- Upload or lookup of related evidence
- Internal dashboard for operational review
- Management of users and distribution centers
- Separate views for internal tracking and approval

## <span id="tecnico"></span>Data, files, and statuses in a centralized flow

*Technical decisions*

- Next.js to build the web system and its internal workflows
- TypeScript to model cases, statuses, and key data
- Database to persist cases, users, statuses, and history
- AWS S3 to store documents, images, or process evidence
- Integration with logistics or tracking workflows when a case requires it

## <span id="rol"></span>Bringing order to the process through the interface and data

*My role*

I took part in shaping the workflow, designing screens, structuring data, and developing features to turn a scattered process into a more understandable, traceable, and useful system for the internal team.

## <span id="ux"></span>Clear status to move forward without losing information

*Tracking experience*

The experience centered on giving each case enough context to be understood without relying on external conversations. The interface needed to show status, relevant data, history, and clear actions to move the case forward without losing information.

## <span id="aprendizaje"></span>An internal tool preserves memory too

*Process takeaway*

This project showed that a good internal tool doesn't just store data: it also preserves context, memory, and continuity. In warranty processes, traceability is key to avoiding confusion and supporting a more professional response to the customer.
