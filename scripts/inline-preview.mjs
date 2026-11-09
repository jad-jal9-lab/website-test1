// Bouwt één zelfstandig HTML-bestand (hash-routing) voor de online preview.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
const dir = 'preview-dist/assets/';
const files = readdirSync(dir);
const css = readFileSync(dir + files.find((f) => f.endsWith('.css')), 'utf8');
const js = readFileSync(dir + files.find((f) => f.endsWith('.js')), 'utf8').replace(/<\/script/gi, '<\\/script');
const out = `<title>Martin Cruiming Schilderwerken</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="Vakkundig binnen- en buitenschilderwerk, glaszetten en houtrotherstel vanuit Noordhorn.">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Libre+Caslon+Text:ital@0;1&family=Albert+Sans:wght@400;500;600&display=swap">
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`;
writeFileSync(process.argv[2], out);
console.log('preview', (out.length / 1024).toFixed(0) + ' KB');
