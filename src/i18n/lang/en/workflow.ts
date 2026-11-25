import type { SectionShape } from '../../schema';
import type { workflow as esWorkflow } from '../../es/workflow';

// English translations: workflow
export const workflow: SectionShape<typeof esWorkflow> = {
  step1Title: "Understand",
  step1Text: "Before building, I seek to understand the real process, who uses it, what decisions they make, and where the frictions are that software can resolve.",
  step2Title: "Reason",
  step2Text: "I analyze what needs to be solved first, what can be simplified, and which technical decisions make sense so the solution doesn't become unnecessarily heavy.",
  step3Title: "Plan",
  step3Text: "I design a clear, maintainable solution with a structure that fits the project's context and leaves room to grow without losing order.",
  step4Title: "Implement",
  step4Text: "I build interfaces, APIs, business logic, and working deployments, making sure every piece is useful, readable, and easy to connect with the rest of the system.",
  step5Title: "Improve",
  step5Text: "I observe how the system is actually used, identify areas that could be clearer or more efficient, and adjust the solution with practical judgment.",
  eyebrow: "How I work",
  title: "Curiosity, reasoning, and execution.",
  description: "My process aims to avoid building on impulse. I start with curiosity to understand the context, use technical reasoning to separate what matters from what doesn't, and execute with a focus on simple, maintainable solutions that are useful in real use.",
};
