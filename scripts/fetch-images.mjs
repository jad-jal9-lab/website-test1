// Download eenmalig de echte projectfoto's van de huidige website naar public/images,
// zodat de nieuwe site niet afhankelijk is van de oude WordPress-installatie.
// Gebruik: npm run fetch-images   (daarna npm run build)
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { IMAGES, PORTFOLIO } from '../src/data.js';

mkdirSync('public/images', { recursive: true });
const all = [...Object.values(IMAGES), ...PORTFOLIO];
for (const im of all) {
  const dest = 'public' + im.src;
  if (existsSync(dest)) { console.log('bestaat al ', dest); continue; }
  try {
    const r = await fetch(im.remote);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
    console.log('opgehaald  ', dest);
  } catch (e) {
    console.warn('MISLUKT    ', im.remote, e.message);
  }
}
