// Maakt voor elke route een eigen index.html met de juiste <title>, description en canonical.
// Zo werkt verversen en direct openen van elke URL op iedere statische host,
// en zien zoekmachines per pagina de juiste metadata.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { SEO } from '../src/data.js';

const SITE = 'https://martincruimingschilderwerken.nl';
const base = readFileSync('dist/index.html', 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const ld = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  name: 'Martin Cruiming Schilderwerken',
  url: SITE + '/',
  telephone: '+31594505543',
  email: 'info@martincruimingschilderwerken.nl',
  foundingDate: '2011',
  address: { '@type': 'PostalAddress', streetAddress: 'Verlengde Oosterweg 49', postalCode: '9804 RD', addressLocality: 'Noordhorn', addressCountry: 'NL' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '17:00' }],
};

for (const [path, { title, desc }] of Object.entries(SEO)) {
  const url = SITE + (path === '/' ? '/' : path + '/');
  const head = [
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="nl_NL" />`,
    `<meta property="og:url" content="${url}" />`,
    `<link rel="canonical" href="${url}" />`,
    path === '/' ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : '',
  ].join('\n    ');
  const html = base
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${esc(desc)}" />`)
    .replace('<!--SEO-->', head);
  if (path === '/') writeFileSync('dist/index.html', html);
  else {
    mkdirSync('dist' + path, { recursive: true });
    writeFileSync('dist' + path + '/index.html', html);
  }
}
// 404-pagina voor hosts die die gebruiken (Netlify, GitHub Pages, Apache)
writeFileSync('dist/404.html', base.replace('<!--SEO-->', '<meta name="robots" content="noindex" />'));

const today = new Date().toISOString().slice(0, 10);
writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.keys(SEO).map((p) => `  <url><loc>${SITE}${p === '/' ? '/' : p + '/'}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`);
console.log('Routes geschreven:', Object.keys(SEO).join(', '));
