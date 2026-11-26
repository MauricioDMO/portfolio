const rawSiteUrl =
  import.meta.env?.PUBLIC_SITE_URL ??
  import.meta.env?.SITE_URL ??
  'https://mauriciodmo.com';

export const site = {
  name: 'MauricioDMO',
  fullName: 'Mauricio Martinez',
  title: 'MauricioDMO | Full-Stack Engineer',
  description:
    'Portafolio de Mauricio Martinez, Full-Stack Engineer enfocado en sistemas internos, automatizacion de procesos y aplicaciones web.',
  url: rawSiteUrl.replace(/\/$/, ''),
  email: 'contacto@mauriciodmo.com',
  phone: '+503 79996844',
  whatsapp: 'https://wa.me/50379996844',
  github: 'https://github.com/MauricioDMO/',
  linkedin: 'https://www.linkedin.com/in/mauriciodmo/',
  silverWolf: 'https://web.mauriciodmo.com',
  availability: {
    location: 'El Salvador',
    remote: true,
  },
  locale: 'es_SV',
  language: 'es',
};
