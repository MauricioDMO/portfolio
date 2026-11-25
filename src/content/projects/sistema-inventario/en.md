---
id: sistema-inventario
navigationLabels: [Impact, Problem, Solution, Features, Technology, My role, Experience, Takeaway]
icon: package
locale: en
slug: inventory-management
title: "Inventory System"
description: "Internal system for running inventory counts, looking up products, and recording differences without relying on Excel or stopping operations."
summary: "Internal system for running inventory counts, looking up products, and recording differences without relying on Excel or stopping operations."
intro: "Operational tool for counting inventory with greater clarity, real-time synchronization, and less manual work."
category: business-software
featured: true
featuredOrder: 2
draft: false
technologies:
  - TypeScript
  - Node.js
  - Express.js
  - Socket.IO
  - Astro
  - Turso
  - Playwright
  - Cloudflare
  - ESLint
  - pnpm
eyebrow: "Real-time internal operations"
impact:
  - "Inventory counts without fully stopping sales"
  - "Less reliance on Excel and manual records"
  - "Real-time updates during the counting process"
  - "Faster lookup of products and codes"
  - "Greater clarity on inventory differences and progress"
  - "A more organized foundation for internal control processes"
gallery:
  - src: /projects/construfijaciones-inventario/dashboard.webp
    alt: "Main dashboard of the Construfijaciones inventory system"
  - src: /projects/construfijaciones-inventario/inventarios.webp
    alt: "Inventories view of the Construfijaciones system"
  - src: /projects/construfijaciones-inventario/inventory-creation.webp
    alt: "Inventory creation form in Construfijaciones"
  - src: /projects/construfijaciones-inventario/gestion-de-items.webp
    alt: "Item management in the inventory system"
  - src: /projects/construfijaciones-inventario/item-menu.webp
    alt: "Item menu in the inventory system"
  - src: /projects/construfijaciones-inventario/excel.webp
    alt: "Excel data export or handling in the inventory system"
  - src: /projects/construfijaciones-inventario/login.webp
    alt: "Login screen of the inventory system"
---

## <span id="impacto"></span> Clearer inventory without slowing operations

_Operational impact_

- Inventory counts without fully stopping sales
- Less reliance on Excel and manual records
- Real-time updates during the counting process
- Faster lookup of products and codes
- Greater clarity on inventory differences and progress
- A more organized foundation for internal control processes

## <span id="problema"></span> Counting inventory while the business keeps selling

_Operational problem_

Inventory counts relied on manual processes and Excel files, which made it hard to maintain visibility while sales kept happening. The problem wasn't just recording products, but being able to count, compare, and update without stopping daily operations.

## <span id="solucion"></span> A system to record, sync, and compare

_Internal solution_

Developed a web-based inventory system that lets you create counts, look up products, record quantities, and see real-time updates while operations continue. The system centralizes information and reduces reliance on scattered manual files.

## <span id="features"></span> Tools for counting and tracking

_Key features_

- Creation and management of inventory counts
- Product lookup by code or description
- Recording of counted quantities
- Real-time updates with WebSockets
- Management of differences between the system and the physical count
- Operational views for tracking progress
- Data export or review for later analysis
- Access interface for internal users

## <span id="tecnico"></span> Real-time updates, a lightweight backend, and an operational interface

_Technical decisions_

- Express as the system's main backend
- Socket.IO for synchronization and real-time updates
- TypeScript to keep data and events clearly structured
- Astro to build a fast, lightweight web interface
- Database to store products, counts, and differences
- Playwright to support extraction processes or connections to existing information

## <span id="rol"></span> Workflow, backend, interface, and real time

_My role_

I worked on the system structure, workflow design, backend development, real-time communication, operational interface, and technical decisions to make the tool practical during real inventory counts.

## <span id="ux"></span> Search, count, and move forward with less friction

_Operational experience_

The experience focused on letting operational users find products quickly, record quantities in a few steps, and trust that the data was up to date. The priority was reducing friction, avoiding repetitive tasks, and making the count status visible.

## <span id="aprendizaje"></span> Inventory needs clarity, not just records

_Takeaway_

This project reinforced that the value of an internal system lies in adapting to the real workflow. In inventory, the key isn't just storing data, but making counts more reliable, fast, and easy to follow while the business keeps operating.
