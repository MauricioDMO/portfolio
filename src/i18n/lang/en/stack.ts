import type { SectionShape } from '../../schema';
import type { stack as esStack } from '../../es/stack';

// English translations: stack
export const stack: SectionShape<typeof esStack> = {
  frontendText: "Interfaces with Next.js, Astro, React, and Tailwind, taking care of state management, responsiveness, user experience, accessibility, and workflows that reduce friction for operational users.",
  backendText: "APIs with Node.js and Express, JWT authentication, business rules, validation, and integrations that connect the system with third-party services.",
  dataTitle: "Data",
  dataText: "Modeling and queries with PostgreSQL, Turso, and Prisma, prioritizing consistency, traceability, and maintainability. Data is the heart of the system, not an afterthought.",
  operationsTitle: "Operations",
  operationsText: "Deployments, storage, Git, Linux, Bash, Docker, and cloud services. Infrastructure is part of the system, not an extra, and I maintain it with the same care as the rest of the software.",
  processTitle: "Process",
  processText: "I choose tools that help build clear, fast, and maintainable systems. I'm not married to any technology; I look for the best fit for each project and context.",
  eyebrow: "Areas of specialization",
  title: "Four areas, one way of building.",
  description: "Software, AI and automation, infrastructure, and data. Each area is backed by real projects, not proficiency percentages.",
  techLabel: "Technologies used",
  specialtySoftwareTitle: "Software Development",
  specialtySoftwareText: "Frontend, backend, and full systems development, from the interface to the logic and the deployment.",
  specialtyAiTitle: "AI & Automation",
  specialtyAiText: "AI integration, process automation, and technology experimentation, always followed by validation.",
  specialtyInfraTitle: "Infrastructure & DevOps",
  specialtyInfraText: "Deployment, service administration, Linux, and self-hosted infrastructure.",
  specialtyDataTitle: "Data & Architecture",
  specialtyDataText: "Databases, software architecture, integrations, and solution design.",
};
