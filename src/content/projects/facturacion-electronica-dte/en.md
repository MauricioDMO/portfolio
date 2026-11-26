---
id: facturacion-electronica-dte
navigationLabels: [Impact, Problem, Solution, Features, Technology, My role, Experience, Takeaway]
icon: file-invoice
locale: en
slug: electronic-invoicing
title: "DTE Electronic Invoicing System"
description: "Web system for issuing, signing, sending, backing up, and looking up Electronic Tax Documents in a real-world operation."
summary: "Web system for issuing, signing, sending, backing up, and looking up Electronic Tax Documents in a real-world operation."
intro: "Production tax platform that connects a legacy system with the modern electronic invoicing flow, reducing manual work and improving traceability."
category: business-software
status: production
featuredOrder: 1
draft: false
technologies:
  - Next.js
  - TypeScript
  - PostgreSQL
  - AWS
  - JWT
  - Docker
  - Playwright
  - Zod
  - Cloudflare
  - ESLint
  - pnpm
eyebrow: "Tax system in production"
impact:
  - "+300 monthly invoices handled in production"
  - "Saved more than half of the invoicing time"
  - "Eliminated double entry between the legacy system and DTE"
  - "Integration with the Ministry of Finance, PDF, email, and storage"
  - "Better traceability of documents issued, sent, and backed up"
  - "Internal control over the fiscal workflow without relying entirely on third parties"
gallery:
  - src: /projects/construfijaciones-dte/dashboard.webp
    alt: "Main dashboard of the Construfijaciones DTE system"
  - src: /projects/construfijaciones-dte/seleccion-de-tipo-de-factura.webp
    alt: "Invoice type selection in the DTE system"
  - src: /projects/construfijaciones-dte/datos-del-cliente.webp
    alt: "Customer data form for a DTE invoice"
  - src: /projects/construfijaciones-dte/info-factura.webp
    alt: "Invoice information in the DTE system"
  - src: /projects/construfijaciones-dte/factura.webp
    alt: "Detail of an invoice generated in the DTE system"
  - src: /projects/construfijaciones-dte/resumen-envio.webp
    alt: "Submission summary of an electronic tax document"
  - src: /projects/construfijaciones-dte/reportes.webp
    alt: "Reports in the DTE system"
  - src: /projects/construfijaciones-dte/login.webp
    alt: "Login screen of the DTE system"
---

## <span id="impacto"></span> A faster, more traceable fiscal operation

_Real impact_

- +300 monthly invoices handled in production
- Saved more than half of the invoicing time
- Eliminated double entry between the legacy system and DTE
- Integration with the Ministry of Finance, PDF, email, and storage
- Better traceability of documents issued, sent, and backed up
- Internal control over the fiscal workflow without relying entirely on third parties

## <span id="problema"></span> A modern fiscal flow connected to a legacy system

_Operational problem_

The company needed to adapt to electronic invoicing as required in El Salvador, but its operations depended on a legacy system with no direct integration. The old process forced people to re-enter information, review data manually, and issue documents through too many steps, increasing operational time and the risk of errors.

## <span id="solucion"></span> Automation, issuance, signing, delivery, and backup

_Implemented solution_

Built a full-stack web system for issuing Electronic Tax Documents, pulling data from the legacy system through authorized Playwright automation, validating the information, generating the fiscal JSON, signing it, sending it to the Ministry of Finance, generating a PDF, sending emails, and storing backups securely.

## <span id="features"></span> The pieces that support the full DTE flow

_Modules and integrations_

- Issuance of invoices, tax credit receipts, credit notes, and excluded-subject receipts
- Data extraction from the legacy system using Playwright
- Generation and validation of JSON against fiscal schemas
- Digital signing of documents with RS512 JWT
- Submission of documents to the Ministry of Finance
- PDF generation with a graphical representation of the DTE
- Transactional email delivery to customers
- Storage of JSON and PDF files in AWS S3
- Secure document access via signed URLs
- Storage lifecycle policies for long-term backups
- Authentication, sessions, and internal access control
- Reporting and lookup of issued documents

## <span id="tecnico"></span> Technology applied to a real fiscal process

_Technical decisions_

- Next.js as the full-stack framework for the interface and system logic
- TypeScript to model complex fiscal flows with greater safety
- Playwright to automate authorized extraction from the legacy system
- JWT and RS512 signing to meet the digital signature flow
- PDFKit to generate the document's graphical representation
- AWS S3 to store fiscal documents and backups
- Signed URLs for temporary, secure file access
- Docker to deploy components with dependencies such as Playwright

## <span id="rol"></span> Full development, implementation, and maintenance

_My role_

I designed, developed, implemented, maintained, and deployed the system end to end. I worked on the fiscal logic, the issuance experience, integration with external services, PDF generation, digital signing, authentication, storage, and adapting to the company's real operational workflow.

## <span id="ux"></span> Fewer steps for a critical task

_Issuance experience_

The interface was designed to reduce the process to the minimum number of steps: select the document type, enter the series and correlative from the legacy system, load the information, review key data, and issue. The goal was for a critical, repetitive task to be completed quickly, with clear validations and less risk of human error.

## <span id="aprendizaje"></span> A fiscal system demands precision, traceability, and judgment

_Key takeaway_

The biggest lesson was that a fiscal system isn't solved with code alone: it requires mastering business rules, official schemas, strict validations, human errors, traceability, deployment, and operational trust. I also reinforced the value of adapting modern technology to legacy systems without disrupting the real workflow.
