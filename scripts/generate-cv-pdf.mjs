// Genera los dos CV descargables a partir de los mismos textos del CV web.
// Requiere Chrome/Chromium en PATH (o CHROME_PATH); no añade dependencias npm.
// Uso: pnpm cv:pdf
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { cvDuties, cvProjects, cvResults, cvSkills } from '../src/data/cv.ts';
import { projectEnSlug } from '../src/data/project-slugs.ts';
import { site } from '../src/data/site.ts';
import { flattenTranslations } from '../src/i18n/schema.ts';
import { cv as esCv } from '../src/i18n/lang/es/cv.ts';
import { cv as enCv } from '../src/i18n/lang/en/cv.ts';

const esFlat = flattenTranslations({ cv: esCv });
const enFlat = flattenTranslations({ cv: enCv });

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'cv');
const chrome = process.env.CHROME_PATH ?? 'google-chrome';

const escapeHtml = (value) =>
  String(value).replace(/[&<>]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[char]);

function render(lang) {
  const dict = lang === 'es' ? esFlat : enFlat;
  const tr = (key) => dict[key] ?? key;
  const bullets = (items, emphasize = false) =>
    `<ul>${items
      .map((item) => {
        const text = escapeHtml(tr(item));
        // ponytail: solo números aislados; C807 u otros códigos con letra se dejan intactos
        return `<li>${emphasize ? text.replace(/(?<![\p{L}\d])\d[\d.,]*\+?(?:\s*%)?/gu, '<strong>$&</strong>') : text}</li>`;
      })
      .join('')}</ul>`;
  // ponytail: datos compactos para que el PDF impreso siga siendo útil sin URL completas
  const shortUrl = (url) => url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
  const contact = [
    [`mailto:${site.email}`, tr('cv.contactEmail'), site.email],
    [`tel:${site.phone.replace(/\s/g, '')}`, tr('cv.contactPhone'), site.phone],
    [site.url, tr('cv.contactPortfolio'), shortUrl(site.url)],
    [site.github, 'GitHub', shortUrl(site.github)],
    [site.linkedin, 'LinkedIn', shortUrl(site.linkedin)],
  ]
    .map(
      ([href, label, value]) =>
        `${escapeHtml(label)}: <a href="${escapeHtml(href)}">${escapeHtml(value)}</a>`,
    )
    .join(' · ');
  const projects = cvProjects
    .map(([id, title, description, stack]) => {
      const path =
        lang === 'es'
          ? `/es/proyectos/${id}/`
          : `/en/projects/${projectEnSlug(id)}/`;
      const url = `${site.url}${path}`;
      return `<p><strong><a href="${escapeHtml(url)}">${escapeHtml(tr(title))}</a></strong> — ${escapeHtml(tr(description))} <span class="stack">(${escapeHtml(stack)})</span></p>`;
    })
    .join('');
  const skills = cvSkills
    .map(
      ([label, value]) =>
        `<p class="skill"><strong>${escapeHtml(tr(label))}:</strong> ${escapeHtml(tr(value))}</p>`,
    )
    .join('');
  const languages = [
    [tr('cv.languageSpanish'), tr('cv.languageSpanishLevel')],
    [tr('cv.languageEnglish'), tr('cv.languageEnglishLevel')],
  ]
    .map(([name, level]) => `${escapeHtml(name)} — ${escapeHtml(level)}`)
    .join(' · ');

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(site.fullName)} — ${escapeHtml(tr('cv.role'))}</title>
<style>
@page { size: Letter; margin: 9mm 13mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #1b1b1b; font: 10pt/1.4 "Inter", "IBM Plex Sans", Arial, Helvetica, sans-serif; }
header { margin-bottom: 3mm; padding-bottom: 2mm; border-bottom: 1px solid #1f5e3b; }
h1 { margin: 0; font-size: 26pt; line-height: 1.1; color: #183a2a; letter-spacing: -0.02em; }
.role { margin: 1mm 0 2mm; font-size: 11.5pt; font-weight: 600; color: #1f5e3b; }
.contact { margin: 0; font-size: 9.5pt; color: #333; }
.location { margin: 1.5mm 0 0; font-size: 9.5pt; font-weight: 600; color: #3c6b4f; }
.intro { margin: 2.5mm 0 0; }
section { margin: 0 0 3.5mm; break-inside: avoid; }
h2 { margin: 0 0 2.3mm; padding: 0 0 0.8mm; border-bottom: 1px solid #b9cfc0; font-size: 11.5pt; text-transform: uppercase; letter-spacing: 0.07em; color: #183a2a; }
p { margin: 0 0 0.8mm; }
ul { margin: 1mm 0 1.5mm; padding-left: 5mm; }
li { margin: 0 0 0.6mm; }
li::marker { color: #1f5e3b; }
.subhead { margin: 2.5mm 0 0.8mm; font-size: 10pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #1f5e3b; }
.skill { margin: 0 0 0.5mm; }
.skill strong { color: #183a2a; }
a { color: #183a2a; text-decoration: underline; text-decoration-color: #9dbda8; text-underline-offset: 2px; }
.stack { color: #555; font-size: 9.5pt; }
</style>
</head>
<body>
<header>
<h1>${escapeHtml(site.fullName)}</h1>
<p class="role">${escapeHtml(tr('cv.role'))}</p>
<p class="contact">${contact}</p>
<p class="location">${escapeHtml(tr('cv.location'))}</p>
<p class="intro">${escapeHtml(tr('cv.intro'))}</p>
</header>
<section>
<h2>${escapeHtml(tr('cv.experienceEyebrow'))}</h2>
<p><strong>${escapeHtml(tr('cv.experienceRole'))}</strong> — ${escapeHtml(tr('cv.experienceCompany'))} | ${escapeHtml(tr('cv.experiencePeriod'))}</p>
${bullets(cvDuties)}
<p class="subhead">${escapeHtml(tr('cv.resultsEyebrow'))}</p>
${bullets(cvResults, true)}
</section>
<section>
<h2>${escapeHtml(tr('cv.projectsEyebrow'))}</h2>
${projects}
</section>
<section>
<h2>${escapeHtml(tr('cv.skillsEyebrow'))}</h2>
${skills}
</section>
<section>
<h2>${escapeHtml(tr('cv.educationEyebrow'))}</h2>
<p><strong>${escapeHtml(tr('cv.educationDegree'))}</strong> — ${escapeHtml(tr('cv.educationSchool'))} | ${escapeHtml(tr('cv.educationStatus'))}</p>
<p><strong>${escapeHtml(tr('cv.educationCubo'))}</strong> — ${escapeHtml(tr('cv.educationCuboSchool'))} | ${escapeHtml(tr('cv.educationCuboStatus'))}</p>
</section>
<section>
<h2>${escapeHtml(tr('cv.languagesEyebrow'))}</h2>
<p>${languages}</p>
</section>
</body>
</html>`;
}

mkdirSync(outDir, { recursive: true });
const tmpDir = mkdtempSync(join(tmpdir(), 'cv-pdf-'));
try {
  for (const lang of ['es', 'en']) {
    const htmlPath = join(tmpDir, `${lang}.html`);
    const pdfPath = join(outDir, `mauricio-martinez-cv-${lang}.pdf`);
    writeFileSync(htmlPath, render(lang));
    execFileSync(chrome, [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-pdf-header-footer',
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ]);
    console.log(`Generado ${pdfPath}`);
  }
} finally {
  rmSync(tmpDir, { recursive: true, force: true });
}
