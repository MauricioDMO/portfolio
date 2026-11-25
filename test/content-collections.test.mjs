// Node built-in integration tests for Fase 3 Astro content collections.
// Each case builds an isolated Astro root with synthetic Markdown fixtures:
// nothing is written to src/content (never served) and the workspace's own
// dist/.astro cache is never used.
// Run: node --test test/content-collections.test.mjs
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const workspace = fileURLToPath(new URL('..', import.meta.url));
const astroBin = join(workspace, 'node_modules', 'astro', 'bin', 'astro.mjs');

function entry(fields) {
  const frontmatter = Object.entries(fields).map(([key, value]) =>
    `${key}: ${typeof value === 'boolean' ? value : `"${value}"`}`
  );
  return `---\n${frontmatter.join('\n')}\n---\n\n# ${fields.title}\n\nSynthetic body.\n`;
}

function createFixture(t, files) {
  const root = mkdtempSync(join(workspace, 'test', '.fase3-fixture-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  cpSync(join(workspace, 'src'), join(root, 'src'), { recursive: true });
  for (const name of ['astro.config.mjs', 'package.json', 'tsconfig.json']) {
    cpSync(join(workspace, name), join(root, name));
  }
  rmSync(join(root, 'src', 'content'), { recursive: true, force: true });
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

const page = (root, route) => join(root, 'dist', route, 'index.html');
const output = (result) => `${result.stdout}\n${result.stderr}`;

test('published ES/EN entries render at equivalent routes; drafts produce no page or sitemap URL', (t) => {
  const root = createFixture(t, {
    'blog/alpha-widget/es.md': entry({ id: 'alpha-widget', locale: 'es', slug: 'alpha-widget-es', title: 'Widget Alfa ES', description: 'Descripción sintética ES', category: 'tutorials', publishedAt: '2026-01-15', draft: false }),
    'blog/alpha-widget/en.md': entry({ id: 'alpha-widget', locale: 'en', slug: 'alpha-widget-en', title: 'Alpha Widget EN', description: 'Synthetic EN description', category: 'tutorials', publishedAt: '2026-01-15', draft: false }),
    'blog/hidden-story/es.md': entry({ id: 'hidden-story', locale: 'es', slug: 'hidden-story-es', title: 'Borrador oculto', description: 'No debe publicarse', category: 'insights', draft: true }),
    'projects/alpha-widget/es.md': entry({ id: 'alpha-widget', locale: 'es', slug: 'alpha-widget-es', title: 'Proyecto Alfa ES', description: 'Descripción proyecto ES', category: 'developer-tools', status: 'production', draft: false }),
    'projects/alpha-widget/en.md': entry({ id: 'alpha-widget', locale: 'en', slug: 'alpha-widget-en', title: 'Alpha Project EN', description: 'Synthetic project EN description', category: 'developer-tools', status: 'production', draft: false }),
    'projects/hidden-project/es.md': entry({ id: 'hidden-project', locale: 'es', slug: 'hidden-project-es', title: 'Proyecto oculto', description: 'No publicar', category: 'experiments', status: 'in-development', draft: true }),
  });

  const result = build(root);
  assert.equal(result.status, 0, `build failed:\n${output(result)}`);

  for (const [route, title] of [
    ['es/blog/alpha-widget-es', 'Widget Alfa ES'],
    ['en/blog/alpha-widget-en', 'Alpha Widget EN'],
    ['es/proyectos/alpha-widget-es', 'Proyecto Alfa ES'],
    ['en/projects/alpha-widget-en', 'Alpha Project EN'],
  ]) {
    assert.ok(readFileSync(page(root, route), 'utf8').includes(title), `${route} did not render its content`);
  }
  const spanishArticle = readFileSync(page(root, 'es/blog/alpha-widget-es'), 'utf8');
  assert.match(spanishArticle, /href="\/en\/blog\/alpha-widget-en\/"/, 'language selector must link to the translated article');

  for (const route of ['es/blog/hidden-story-es', 'es/proyectos/hidden-project-es']) {
    assert.equal(existsSync(page(root, route)), false, `${route} is a draft and must have no URL`);
  }

  const sitemap = readFileSync(join(root, 'dist', 'sitemap-0.xml'), 'utf8');
  for (const url of [
    '/es/blog/alpha-widget-es/',
    '/en/blog/alpha-widget-en/',
    '/es/proyectos/alpha-widget-es/',
    '/en/projects/alpha-widget-en/',
  ]) {
    assert.ok(sitemap.includes(url), `${url} missing from sitemap`);
  }
  for (const slug of ['hidden-story-es', 'hidden-project-es']) {
    assert.equal(sitemap.includes(slug), false, `${slug} is a draft and must not be in the sitemap`);
  }
});

test('duplicate slugs fail the build even when both entries are drafts', (t) => {
  const root = createFixture(t, {
    'blog/dup-a/es.md': entry({ id: 'dup-a', locale: 'es', slug: 'shared-slug', title: 'Entrada A', description: 'Descripción', category: 'insights', draft: true }),
    'blog/dup-b/es.md': entry({ id: 'dup-b', locale: 'es', slug: 'shared-slug', title: 'Entrada B', description: 'Descripción', category: 'insights', draft: true }),
  });

  const result = build(root);
  assert.notEqual(result.status, 0, 'duplicate slugs must fail the build');
  assert.match(output(result), /duplicate slug es:shared-slug/);
});

test('a published post without publishedAt fails the build', (t) => {
  const root = createFixture(t, {
    'blog/bad/es.md': entry({ id: 'bad', locale: 'es', slug: 'bad-post', title: 'Sin fecha', description: 'Descripción', category: 'insights', draft: false }),
  });

  const result = build(root);
  assert.notEqual(result.status, 0, 'invalid frontmatter must fail the build');
  assert.match(output(result), /publishedAt is required for published posts/);
});
