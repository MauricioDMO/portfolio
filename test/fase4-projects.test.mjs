// Node built-in regression tests for Fase 4 (project migration).
// Like the Fase 3 tests, every build uses a synthetic, isolated Astro root:
// nothing is written to the workspace's dist/.astro cache.
// Run: node --test test/fase4-projects.test.mjs
import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const workspace = fileURLToPath(new URL('..', import.meta.url));
const astroBin = join(workspace, 'node_modules', 'astro', 'bin', 'astro.mjs');

function fixture(t, { keepContent = false, files = {} } = {}) {
  const root = mkdtempSync(join(workspace, 'test', '.fase4-fixture-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  cpSync(join(workspace, 'src'), join(root, 'src'), { recursive: true });
  for (const name of ['astro.config.mjs', 'package.json', 'tsconfig.json']) {
    cpSync(join(workspace, name), join(root, name));
  }
  // Gallery validation and the layout resolve images from public/.
  cpSync(join(workspace, 'public'), join(root, 'public'), { recursive: true });
  if (!keepContent) rmSync(join(root, 'src', 'content'), { recursive: true, force: true });
  for (const [name, contents] of Object.entries(files)) {
    const target = join(root, 'src', 'content', name);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, contents);
  }
  return root;
}

function build(root) {
  return spawnSync(process.execPath, [astroBin, 'build', '--root', root, '--force'], {
    cwd: root,
    encoding: 'utf8',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
  });
}

const html = (root, route) => readFileSync(join(root, 'dist', route, 'index.html'), 'utf8');
const output = (result) => `${result.stdout}\n${result.stderr}`;

function entry(fields) {
  const quote = (value) => `"${String(value).replace(/"/g, '\\"')}"`;
  const frontmatter = Object.entries(fields).map(([key, value]) => {
    const serialized = typeof value === 'boolean' || typeof value === 'number'
      ? String(value)
      : Array.isArray(value)
        ? `[${value.map(quote).join(', ')}]`
        : quote(value);
    return `${key}: ${serialized}`;
  });
  return `---\n${frontmatter.join('\n')}\n---\n\n# ${fields.title}\n\nSynthetic body.\n`;
}

// Representative, locale-specific strings that must survive the migration.
const migrated = [
  {
    id: 'facturacion-electronica-dte',
    image: '/projects/construfijaciones-dte/dashboard.webp',
    es: { slug: 'facturacion-electronica-dte', title: 'Sistema de Facturación Electrónica DTE', phrase: 'Documentos Tributarios Electrónicos', alt: 'Dashboard principal del sistema DTE de Construfijaciones' },
    en: { slug: 'electronic-invoicing', title: 'DTE Electronic Invoicing System', phrase: 'Electronic Tax Documents', alt: 'Main dashboard of the Construfijaciones DTE system' },
  },
  {
    id: 'sistema-inventario',
    image: '/projects/construfijaciones-inventario/dashboard.webp',
    es: { slug: 'sistema-inventario', title: 'Sistema de Inventario', phrase: 'conteos de inventario', alt: 'Dashboard principal del sistema de inventario de Construfijaciones' },
    en: { slug: 'inventory-management', title: 'Inventory System', phrase: 'inventory counts', alt: 'Main dashboard of the Construfijaciones inventory system' },
  },
  {
    id: 'sistema-rma-garantias',
    image: '/projects/construfijaciones-rma/dashboard.webp',
    es: { slug: 'sistema-rma-garantias', title: 'Sistema RMA / Garantías', phrase: 'garantía y devolución', alt: 'Dashboard principal del sistema RMA de Construfijaciones' },
    en: { slug: 'warranty-management', title: 'RMA / Warranty System', phrase: 'warranty and return processes', alt: 'Main dashboard of the Construfijaciones RMA system' },
  },
  {
    id: 'construfijaciones-web',
    image: '/projects/construfijaciones-web/inicio.webp',
    es: { slug: 'construfijaciones-web', title: 'Sitio web de Construfijaciones', phrase: 'productos, marcas e información de contacto', alt: 'Página de inicio del sitio web de Construfijaciones' },
    en: { slug: 'construfijaciones-web', title: 'Construfijaciones website', phrase: 'products, brands, and contact information', alt: 'Home page of the Construfijaciones website' },
  },
];

test('migrated projects keep their URLs, text and images in the new structure', (t) => {
  const root = fixture(t, { keepContent: true });
  const result = build(root);
  assert.equal(result.status, 0, `build failed:\n${output(result)}`);

  t.test('all eight ES/EN case studies render at their canonical slugs with content and gallery', () => {
    for (const project of migrated) {
      for (const [locale, folder] of [['es', 'proyectos'], ['en', 'projects']]) {
        const expected = project[locale];
        const route = `${locale}/${folder}/${expected.slug}`;
        const page = html(root, route);
        for (const value of [expected.title, expected.phrase, project.image, expected.alt]) {
          assert.ok(page.includes(value), `${route} lost "${value}"`);
        }
      }
    }

    const sitemap = readFileSync(join(root, 'dist', 'sitemap-0.xml'), 'utf8');
    for (const project of migrated) {
      for (const [locale, folder] of [['es', 'proyectos'], ['en', 'projects']]) {
        const url = `/${locale}/${folder}/${project[locale].slug}/`;
        assert.ok(sitemap.includes(url), `${url} missing from sitemap`);
      }
    }
  });

  t.test('migrated cases and catalog render technology icons from content names', () => {
    for (const route of [
      'es/proyectos/facturacion-electronica-dte',
      'en/projects/electronic-invoicing',
      'es/proyectos',
      'en/projects',
    ]) {
      const page = html(root, route);
      for (const icon of ['/svg/nextjs_icon_dark.svg', '/svg/typescript.svg']) {
        assert.ok(page.includes(icon), `${route} is missing the ${icon} icon`);
      }
    }
  });

  t.test('short navigation labels link to the corresponding case sections', () => {
    for (const [route, label, heading] of [
      ['es/proyectos/facturacion-electronica-dte', 'Problema', 'Un flujo fiscal moderno conectado a un sistema legado'],
      ['en/projects/electronic-invoicing', 'Problem', 'A modern fiscal flow connected to a legacy system'],
    ]) {
      const page = html(root, route);
      const nav = page.match(/<nav aria-label="(?:Navegación del caso de estudio|Case study navigation)">([\s\S]*?)<\/nav>/)?.[1];
      const link = nav?.match(new RegExp(`<a[^>]*href="#([^"]+)"[^>]*>(?:(?!</a>)[\\s\\S])*?<span>${label}</span></a>`));
      assert.ok(link, `${route} missing navigation label ${label}`);
      assert.ok(page.includes(`id="${link[1]}"`), `${route} navigation target is missing`);
      assert.ok(page.includes(heading), `${route} full heading is missing`);
    }
  });

  t.test('catalog exposes filter controls and content-derived filter data', () => {
    for (const [index, searchFragment] of [['es/proyectos', 'facturacion electronica'], ['en/projects', 'dte electronic invoicing']]) {
      const page = html(root, index);
      for (const control of ['data-project-catalog', 'data-filter-search', 'data-filter-category', 'data-filter-status', 'data-filter-sort']) {
        assert.ok(page.includes(control), `${index} is missing ${control}`);
      }
      assert.equal((page.match(/data-category="/g) ?? []).length, migrated.length, `${index} item count`);

      // Search normalization is what makes accent-insensitive queries work.
      const searchValues = [...page.matchAll(/data-search="([^"]*)"/g)].map((match) => match[1]);
      const invoicing = searchValues.find((value) => value.includes(searchFragment));
      assert.ok(invoicing, `${index} search text must be accent-stripped`);
      assert.equal(invoicing.includes('facturación'), false, `${index} search text kept accents`);

      // Sorting by "featured" relies on featuredOrder reaching the DOM.
      assert.ok(page.includes('data-order="1"'), `${index} has no featured-order data`);
      assert.ok(page.includes('value="business-software"'), `${index} category filter has no real option`);
      assert.ok(page.includes('value="production"'), `${index} status filter has no real option`);
    }
  });
});

test('featured section renders only featured entries, ordered by featuredOrder', (t) => {
  const root = fixture(t, {
    files: {
      'projects/alpha/es.md': entry({ id: 'alpha', locale: 'es', slug: 'alpha-es', title: 'Destacado Alfa', description: 'Proyecto destacado de prueba', category: 'developer-tools', featured: true, featuredOrder: 2, draft: false }),
      'projects/alpha/en.md': entry({ id: 'alpha', locale: 'en', slug: 'alpha-en', title: 'Featured Alpha', description: 'Synthetic featured project', category: 'developer-tools', featured: true, featuredOrder: 2, draft: false }),
      'projects/beta/es.md': entry({ id: 'beta', locale: 'es', slug: 'beta-es', title: 'Destacado Beta', description: 'Proyecto destacado de prueba', category: 'developer-tools', featured: true, featuredOrder: 1, draft: false }),
      'projects/beta/en.md': entry({ id: 'beta', locale: 'en', slug: 'beta-en', title: 'Featured Beta', description: 'Synthetic featured project', category: 'developer-tools', featured: true, featuredOrder: 1, draft: false }),
      'projects/gamma/es.md': entry({ id: 'gamma', locale: 'es', slug: 'gamma-es', title: 'Oculto Gamma', description: 'Proyecto no destacado', category: 'experiments', featured: false, draft: false }),
      'projects/gamma/en.md': entry({ id: 'gamma', locale: 'en', slug: 'gamma-en', title: 'Hidden Gamma', description: 'Synthetic non-featured project', category: 'experiments', featured: false, draft: false }),
    },
  });

  const result = build(root);
  assert.equal(result.status, 0, `build failed:\n${output(result)}`);

  for (const [index, featured, other, hidden] of [
    ['es', 'Destacado Beta', 'Destacado Alfa', 'Oculto Gamma'],
    ['en', 'Featured Beta', 'Featured Alpha', 'Hidden Gamma'],
  ]) {
    const home = html(root, `${index}/`);
    assert.ok(home.includes(featured) && home.includes(other), `${index} home must show featured projects`);
    assert.ok(home.indexOf(featured) < home.indexOf(other), `${index} featuredOrder not respected`);
    assert.equal(home.includes(hidden), false, `${index} home showed a non-featured project`);
    // It is published, so exclusion comes from `featured`, not from being a draft.
    assert.ok(html(root, `${index}/${index === 'es' ? 'proyectos' : 'projects'}/${index === 'es' ? 'gamma-es' : 'gamma-en'}`).includes(hidden));
  }
});

test('technology keys and names show icons while unknown tech stays as text', (t) => {
  const root = fixture(t, {
    files: {
      'projects/iconos/es.md': entry({
        id: 'iconos', locale: 'es', slug: 'iconos', title: 'Proyecto con tecnologías',
        description: 'Proyecto sintético para probar iconos', category: 'experiments',
        draft: false, technologies: ['typescript', 'Next.js', 'Tech Fantasma 404'],
      }),
    },
  });

  const result = build(root);
  assert.equal(result.status, 0, `build failed:\n${output(result)}`);

  // The catalog is free of JSON-LD keywords, so these strings come from ProjectTools.
  const page = html(root, 'es/proyectos');
  assert.ok(page.includes('/svg/typescript.svg'), 'technology key did not resolve to its icon');
  assert.ok(page.includes('/svg/nextjs_icon_dark.svg'), 'technology name did not resolve to its icon');
  assert.ok(page.includes('Tech Fantasma 404'), 'unknown technology lost its text');
});
