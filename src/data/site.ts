const rawSiteUrl =
  import.meta.env.PUBLIC_SITE_URL ??
  import.meta.env.SITE_URL ??
  'https://mauriciodmo.com';

export const site = {
  name: 'MauricioDMO',
  fullName: 'Mauricio Martinez',
  title: 'MauricioDMO | Desarrollo web, sistemas internos y automatizacion',
  description:
    'Portafolio de MauricioDMO, desarrollador web full-stack enfocado en landings, sitios web, sistemas internos y automatizacion de procesos reales.',
  url: rawSiteUrl.replace(/\/$/, ''),
  email: 'mauriciodmoprogrammer@gmail.com',
  locale: 'es_SV',
  language: 'es',
};
