import type { SectionShape } from '../../schema';
import type { about as esAbout } from '../../es/about';

// English translations: about
export const about: SectionShape<typeof esAbout> = {
  eyebrow: "About me",
  title: "I build software that makes people's work simpler.",
  storyTitle: "A little about me",
  bio1: "I'm a software developer and a Computer Science Engineering student. I like understanding how things work, questioning how they could improve, and building solutions from there. My experience centers on web applications, process automation, and business systems in production.",
  bio2: "I also enjoy experimenting with new technologies, running my own infrastructure, and learning beyond the code.",
  cvLink: "View résumé",
  contactLink: "Contact",

  interestsEyebrow: "What interests me",
  interest1: "Full-stack development: building applications end to end, from the interface to deployment.",
  interest2: "Infrastructure and automation: understanding what happens behind the software and finding ways to simplify processes.",
  interest3: "Artificial intelligence: exploring how AI can extend our capabilities and solve everyday problems.",

  aiEyebrow: "My relationship with AI",
  ai1: "I delegate tasks, not decisions.",
  ai2: "I use artificial intelligence to research, experiment, and speed up my work.",
  ai3: "For me, understanding, validating, and taking responsibility for what I build remains essential.",

  closingEyebrow: "Let's work together",
  closingText: "I'm looking for opportunities to keep learning, take on technical challenges, and build products end to end. Available for remote work, freelance projects, and professional collaborations.",
};
