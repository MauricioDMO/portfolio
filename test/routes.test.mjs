// Node built-in regression tests for the Fase 2 localized-route mapping.
// Run with Node 22.15+ (on Node 22 use --experimental-strip-types):
// node --test test/routes.test.mjs
import { registerHooks } from 'node:module';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';

// The i18n sources use bundler-resolved extensionless imports; resolve them to
// .ts / index.ts so Node loads the real module directly, without a build.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (
      specifier.startsWith('.') &&
      !/\.[cm]?[jt]sx?$/i.test(specifier) &&
      context.parentURL?.startsWith('file:')
    ) {
      const base = fileURLToPath(new URL(specifier, context.parentURL));
      for (const candidate of [base + '.ts', `${base}/index.ts`]) {
        if (existsSync(candidate)) return nextResolve(pathToFileURL(candidate).href, context);
      }
    }
    return nextResolve(specifier, context);
  },
});

const { localizedPath, switchLocalePath } = await import('../src/i18n/index.ts');

const projects = [
  ['facturacion-electronica-dte', 'electronic-invoicing'],
  ['sistema-inventario', 'inventory-management'],
  ['sistema-rma-garantias', 'warranty-management'],
  ['construfijaciones-web', 'construfijaciones-web'],
];

test('switchLocalePath maps /es/proyectos ids to /en/projects slugs and back', () => {
  for (const [id, slug] of projects) {
    assert.equal(switchLocalePath(`/es/proyectos/${id}/`, 'en'), `/en/projects/${slug}/`);
    assert.equal(switchLocalePath(`/en/projects/${slug}/`, 'es'), `/es/proyectos/${id}/`);
  }
});

test('CV routes are locale-neutral', () => {
  assert.equal(localizedPath('cv', 'es'), '/es/cv/');
  assert.equal(localizedPath('cv', 'en'), '/en/cv/');
  assert.equal(switchLocalePath('/es/cv/', 'en'), '/en/cv/');
  assert.equal(switchLocalePath('/en/cv/', 'es'), '/es/cv/');
});

test('locale switch preserves query and hash', () => {
  assert.equal(
    switchLocalePath('/es/proyectos/sistema-inventario/?filter=all#galeria', 'en'),
    '/en/projects/inventory-management/?filter=all#galeria',
  );
  assert.equal(
    switchLocalePath('/en/projects/inventory-management/?filter=all#gallery', 'es'),
    '/es/proyectos/sistema-inventario/?filter=all#gallery',
  );
  // Header/footer anchors reach localizedPath as hash-only input.
  assert.equal(localizedPath('#proyectos', 'en'), '/en/#proyectos');
  assert.equal(switchLocalePath('/es/proyectos/?q=astro#lista', 'en'), '/en/projects/?q=astro#lista');
  assert.equal(switchLocalePath('/en/projects/', 'es'), '/es/proyectos/');
});

test('legacy project paths resolve to localized routes', () => {
  // Old unprefixed /proyectos/{id} links.
  assert.equal(switchLocalePath('/proyectos/sistema-rma-garantias/', 'en'), '/en/projects/warranty-management/');
  assert.equal(switchLocalePath('/proyectos/sistema-rma-garantias/', 'es'), '/es/proyectos/sistema-rma-garantias/');
  // Old /en/proyectos/{id} links still carrying the Spanish id.
  assert.equal(switchLocalePath('/en/proyectos/sistema-rma-garantias/', 'es'), '/es/proyectos/sistema-rma-garantias/');
  assert.equal(switchLocalePath('/en/proyectos/sistema-rma-garantias/', 'en'), '/en/projects/warranty-management/');
  // Internal callers pass neutral "proyectos/{id}" to localizedPath.
  assert.equal(localizedPath('proyectos/sistema-inventario/', 'en'), '/en/projects/inventory-management/');
});

test('static legacy redirects point at canonical localized URLs', () => {
  const redirects = readFileSync(new URL('../public/_redirects', import.meta.url), 'utf8');
  const rules = redirects
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/));
  assert.equal(rules.length, projects.length * 4, 'every legacy URL needs both slash variants');

  for (const [source, destination, code] of rules) {
    assert.equal(code, '301', `${source} must be a permanent redirect`);
    const esLegacy = source.match(/^\/proyectos\/([^/]+)\/?$/);
    const enLegacy = source.match(/^\/en\/proyectos\/([^/]+)\/?$/);
    if (esLegacy) assert.equal(destination, `/es/proyectos/${esLegacy[1]}/`);
    else if (enLegacy) {
      const slug = projects.find(([id]) => id === enLegacy[1])?.[1];
      assert.equal(destination, `/en/projects/${slug}/`);
    } else assert.fail(`unexpected redirect source: ${source}`);
  }
});
