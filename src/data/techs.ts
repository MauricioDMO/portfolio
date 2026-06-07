export type Tech = {
  name: string;
  icon: string;
  href: string;
  color: string;
};

export const techs = {
  nextjs: {
    name: 'Next.js',
    icon: '/svg/nextjs_icon_dark.svg',
    href: 'https://nextjs.org/',
    color: '#ffffff',
  },
  react: {
    name: 'React',
    icon: '/svg/react_dark.svg',
    href: 'https://react.dev/',
    color: '#61dafb',
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: '/svg/tailwindcss.svg',
    href: 'https://tailwindcss.com/',
    color: '#38bdf8',
  },
  typescript: {
    name: 'TypeScript',
    icon: '/svg/typescript.svg',
    href: 'https://www.typescriptlang.org/',
    color: '#3178c6',
  },
  javascript: {
    name: 'JavaScript',
    icon: '/svg/javascript.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    color: '#f7df1e',
  },
  nodejs: {
    name: 'Node.js',
    icon: '/svg/nodejs.svg',
    href: 'https://nodejs.org/',
    color: '#5fa04e',
  },
  express: {
    name: 'Express.js',
    icon: '/svg/expressjs_dark.svg',
    href: 'https://expressjs.com/',
    color: '#ffffff',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: '/svg/postgresql.svg',
    href: 'https://www.postgresql.org/',
    color: '#336791',
  },
  prisma: {
    name: 'Prisma',
    icon: '/svg/prisma_dark.svg',
    href: 'https://www.prisma.io/',
    color: '#2d3748',
  },
  jwt: {
    name: 'JWT',
    icon: '/svg/jwt.svg',
    href: 'https://jwt.io/',
    color: '#d63aff',
  },
  astro: {
    name: 'Astro',
    icon: '/svg/astro-icon-dark.svg',
    href: 'https://astro.build/',
    color: '#ff5d01',
  },
  html: {
    name: 'HTML5',
    icon: '/svg/html5.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    color: '#e34f26',
  },
  css: {
    name: 'CSS3',
    icon: '/svg/css.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    color: '#1572b6',
  },
  vite: {
    name: 'Vite',
    icon: '/svg/vite.svg',
    href: 'https://vite.dev/',
    color: '#646cff',
  },
  git: {
    name: 'Git',
    icon: '/svg/git.svg',
    href: 'https://git-scm.com/',
    color: '#f05032',
  },
  github: {
    name: 'GitHub',
    icon: '/svg/github_dark.svg',
    href: 'https://github.com/',
    color: '#ffffff',
  },
  docker: {
    name: 'Docker',
    icon: '/svg/docker.svg',
    href: 'https://www.docker.com/',
    color: '#2496ed',
  },
  pnpm: {
    name: 'pnpm',
    icon: '/svg/pnpm_dark.svg',
    href: 'https://pnpm.io/',
    color: '#f69220',
  },
  bash: {
    name: 'Bash',
    icon: '/svg/bash_dark.svg',
    href: 'https://www.gnu.org/software/bash/',
    color: '#4eaa25',
  },
  linux: {
    name: 'Linux',
    icon: '/svg/linux.svg',
    href: 'https://www.linux.org/',
    color: '#fcc624',
  },
  vercel: {
    name: 'Vercel',
    icon: '/svg/vercel_dark.svg',
    href: 'https://vercel.com/',
    color: '#ffffff',
  },
  turso: {
    name: 'Turso',
    icon: '/svg/turso-dark.svg',
    href: 'https://turso.tech/',
    color: '#4ff8d2',
  },
  aws: {
    name: 'AWS',
    icon: '/svg/aws_dark.svg',
    href: 'https://aws.amazon.com/',
    color: '#ff9900',
  },
  obsidian: {
    name: 'Obsidian',
    icon: '/svg/obsidian.svg',
    href: 'https://obsidian.md/',
    color: '#7c3aed',
  },
  opencode: {
    name: 'OpenCode',
    icon: '/svg/opencode-dark.svg',
    href: 'https://opencode.ai/',
    color: '#5faf7b',
  },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof techs;
