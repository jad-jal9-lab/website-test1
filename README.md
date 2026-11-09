# Martin Cruiming Schilderwerken – website

React (Vite) multi-page website. Geen extra dependencies naast React.

## Pagina's
/ · /diensten · /binnenwerk · /buitenwerk · /glaszetten · /houtrot · /portfolio · /over-ons · /contact

## Starten
    npm install
    npm run fetch-images   # haalt de echte projectfoto's eenmalig op van de huidige website
    npm run dev            # lokaal bekijken
    npm run build          # productieversie in dist/

`npm run build` schrijft voor elke route een eigen `index.html` met de juiste titel,
description, canonical en Open Graph-tags, plus `404.html`, `sitemap.xml` en `robots.txt`.
Daardoor werken directe links en verversen op elke statische host (Apache, Netlify, Vercel,
GitHub Pages, gewone webhosting). Upload de inhoud van `dist/` naar de webroot.

## Foto's
Alle foto's komen van de huidige website. De site laadt eerst `/images/<bestand>`
(na `npm run fetch-images`) en valt anders terug op de originele URL. Draai `fetch-images`
vóórdat de oude WordPress-site wordt verwijderd.

## Contactformulier
Zonder backend is het formulier duidelijk gemarkeerd als demonstratie en biedt het aan de
aanvraag als e-mail te openen. Voor echte verzending: maak bijv. een Formspree-formulier aan en
bouw met

    VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx npm run build

Het formulier stuurt dan een JSON-POST en toont pas "verstuurd" als de dienst dat bevestigt.

## Inhoud
Alle teksten zijn gebaseerd op de huidige website. Er zijn geen diensten, cijfers, reviews,
certificeringen of projecten toegevoegd. Bedrijfsgegevens staan centraal in `src/data.js`.
