import { IconCube3dSphere, IconFileTextCog } from '@tabler/icons-astro';

export type Tech = {
  name: string;
  icon?: string;
  iconLight?: string;
  Icon?: typeof IconCube3dSphere;
  href: string;
  color: string;
};

export const techs = {
  // Bitcoin
  btcpayserver: {
    name: 'BTCPay Server',
    icon: '/svg/btcpay-server.svg',
    href: 'https://btcpayserver.org/',
    color: '#cedc21',
  },
  bitcoin: {
    name: 'Bitcoin',
    icon: '/svg/bitcoin.svg',
    href: 'https://bitcoin.org/',
    color: '#f7931a',
  },

  // IA
  opencode: {
    name: 'OpenCode',
    icon: '/svg/opencode-dark.svg',
    iconLight: '/svg/opencode.svg',
    href: 'https://opencode.ai/',
    color: '#5faf7b',
  },
  rag: {
    name: 'RAG',
    Icon: IconCube3dSphere,
    href: 'https://arxiv.org/abs/2005.11401',
    color: 'var(--color-accent)',
  },
  mcp: {
    name: 'MCP',
    icon: '/svg/modelcontextprotocol-dark.svg',
    iconLight: '/svg/modelcontextprotocol.svg',
    href: 'https://modelcontextprotocol.io/',
    color: 'var(--color-text)',
  },
  skills: {
    name: 'Skills',
    Icon: IconFileTextCog,
    href: 'https://agentskills.io/',
    color: 'var(--color-accent)',
  },

  // Frontend
  nextjs: {
    name: 'Next.js',
    icon: '/svg/nextjs_icon_dark.svg',
    href: 'https://nextjs.org/',
    color: '#ffffff',
  },
  react: {
    name: 'React',
    icon: '/svg/react_dark.svg',
    iconLight: '/svg/react_light.svg',
    href: 'https://react.dev/',
    color: '#61dafb',
  },
  astro: {
    name: 'Astro',
    icon: '/svg/astro-icon-dark.svg',
    iconLight: '/svg/astro-icon-light.svg',
    href: 'https://astro.build/',
    color: '#ff5d01',
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
  tailwind: {
    name: 'Tailwind CSS',
    icon: '/svg/tailwindcss.svg',
    href: 'https://tailwindcss.com/',
    color: '#38bdf8',
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

  // Backend
  nodejs: {
    name: 'Node.js',
    icon: '/svg/nodejs.svg',
    href: 'https://nodejs.org/',
    color: '#5fa04e',
  },
  express: {
    name: 'Express.js',
    icon: '/svg/expressjs_dark.svg',
    iconLight: '/svg/expressjs.svg',
    href: 'https://expressjs.com/',
    color: '#ffffff',
  },
  socketio: {
    name: 'Socket.IO',
    icon: '/svg/socketio-icon-dark.svg',
    iconLight: '/svg/socketio-icon-light.svg',
    href: 'https://socket.io/',
    color: '#010101',
  },
  zod: {
    name: 'Zod',
    icon: '/svg/zod.svg',
    href: 'https://zod.dev/',
    color: '#7c3aed',
  },
  jwt: {
    name: 'JWT',
    icon: '/svg/jwt.svg',
    href: 'https://jwt.io/',
    color: '#d63aff',
  },

  // Bases de datos
  postgresql: {
    name: 'PostgreSQL',
    icon: '/svg/postgresql.svg',
    href: 'https://www.postgresql.org/',
    color: '#336791',
  },
  prisma: {
    name: 'Prisma',
    icon: '/svg/prisma_dark.svg',
    iconLight: '/svg/prisma.svg',
    href: 'https://www.prisma.io/',
    color: '#2d3748',
  },
  turso: {
    name: 'Turso',
    icon: '/svg/turso-dark.svg',
    iconLight: '/svg/turso-light.svg',
    href: 'https://turso.tech/',
    color: '#4ff8d2',
  },

  // Infraestructura
  docker: {
    name: 'Docker',
    icon: '/svg/docker.svg',
    href: 'https://www.docker.com/',
    color: '#2496ed',
  },
  linux: {
    name: 'Linux',
    icon: '/svg/linux.svg',
    href: 'https://linux.org/',
    color: '#fcc624',
  },
  cloudflare: {
    name: 'Cloudflare',
    icon: '/svg/cloudflare.svg',
    href: 'https://pages.cloudflare.com/',
    color: '#f38020',
  },
  vercel: {
    name: 'Vercel',
    icon: '/svg/vercel_dark.svg',
    iconLight: '/svg/vercel.svg',
    href: 'https://vercel.com/',
    color: '#ffffff',
  },
  aws: {
    name: 'AWS',
    icon: '/svg/aws_dark.svg',
    iconLight: '/svg/aws_light.svg',
    href: 'https://aws.amazon.com/',
    color: '#ff9900',
  },
  ovh: {
    name: 'OVHcloud',
    icon: '/svg/ovh.svg',
    href: 'https://www.ovhcloud.com/',
    color: '#000e9c',
  },
  coolify: {
    name: 'Coolify',
    icon: '/svg/coolify.svg',
    href: 'https://coolify.io/',
    color: '#8c52ff',
  },
  dokploy: {
    name: 'Dokploy',
    icon: '/svg/dokploy-dark.svg',
    iconLight: '/svg/dokploy.svg',
    href: 'https://dokploy.com/',
    color: 'var(--color-text)',
  },
  stalwart: {
    name: 'Stalwart',
    icon: '/svg/stalwart.svg',
    href: 'https://stalw.art/',
    color: '#db2d54',
  },
  netbird: {
    name: 'NetBird',
    icon: '/svg/netbird.svg',
    href: 'https://netbird.io/',
    color: '#f68330',
  },
  umami: {
    name: 'Umami',
    icon: '/svg/umami.svg',
    href: 'https://umami.is/',
    color: '#6688db',
  },
  hermes: {
    name: 'Hermes Agent',
    icon: '/svg/hermes-dark.svg',
    iconLight: '/svg/hermes.svg',
    href: 'https://hermes-agent.nousresearch.com/',
    color: 'var(--color-text)',
  },

  // Herramientas
  git: {
    name: 'Git',
    icon: '/svg/git.svg',
    href: 'https://git-scm.com/',
    color: '#f05032',
  },
  github: {
    name: 'GitHub',
    icon: '/svg/github_dark.svg',
    iconLight: '/svg/github_light.svg',
    href: 'https://github.com/',
    color: '#ffffff',
  },
  pnpm: {
    name: 'pnpm',
    icon: '/svg/pnpm_dark.svg',
    iconLight: '/svg/pnpm.svg',
    href: 'https://pnpm.io/',
    color: '#f69220',
  },
  eslint: {
    name: 'ESLint',
    icon: '/svg/eslint-icon-dark.svg',
    iconLight: '/svg/eslint-icon-light.svg',
    href: 'https://eslint.org/',
    color: '#4b32c3',
  },
  playwright: {
    name: 'Playwright',
    icon: '/svg/playwright.svg',
    href: 'https://playwright.dev/',
    color: '#45ba4b',
  },
  bash: {
    name: 'Bash',
    icon: '/svg/bash_dark.svg',
    iconLight: '/svg/bash.svg',
    href: 'https://www.gnu.org/software/bash/',
    color: '#4eaa25',
  },
  obsidian: {
    name: 'Obsidian',
    icon: '/svg/obsidian.svg',
    href: 'https://obsidian.md/',
    color: '#7c3aed',
  },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof techs;
