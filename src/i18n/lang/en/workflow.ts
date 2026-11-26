import type { SectionShape } from '../../schema';
import type { workflow as esWorkflow } from '../../es/workflow';

// English translations: workflow
export const workflow: SectionShape<typeof esWorkflow> = {
  step1Title: "Understand",
  step1Text: "Listen, research, and understand the problem.",
  step2Title: "Reason",
  step2Text: "Question alternatives and set priorities.",
  step3Title: "Plan",
  step3Text: "Design a simple, sustainable solution.",
  step4Title: "Implement",
  step4Text: "Turn ideas into working software.",
  step5Title: "Improve",
  step5Text: "Learn from real use and iterate.",
  eyebrow: "How I work",
  title: "Curiosity, reasoning, and execution.",
  description: "I believe a good solution starts with understanding the problem, not with choosing the technology.",
};
