// Alle bedrijfsinformatie komt van de bestaande website martincruimingschilderwerken.nl.
// Niets hieronder is verzonnen: geen extra diensten, cijfers, reviews of projecten.

export const BUSINESS = {
  name: 'Martin Cruiming Schilderwerken',
  short: 'Martin Cruiming',
  street: 'Verlengde Oosterweg 49',
  postcode: '9804 RD',
  city: 'Noordhorn',
  phone: '0594 50 55 43',
  phoneHref: 'tel:+31594505543',
  mobile: '06 22 09 10 47',
  mobileHref: 'tel:+31622091047',
  email: 'info@martincruimingschilderwerken.nl',
  since: 2011,
  hours: [
    ['Maandag – zaterdag', '09:00 – 17:00'],
    ['Zondag', 'Gesloten'],
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Verlengde+Oosterweg+49%2C+9804+RD+Noordhorn',
  mapsEmbed:
    'https://www.google.com/maps?q=Verlengde%20Oosterweg%2049%2C%209804%20RD%20Noordhorn&output=embed',
};

// Afbeeldingen: eerst de lokale kopie (/images/…, zie scripts/fetch-images.mjs),
// daarna de originele URL op de huidige website als terugval.
const ORIGIN = 'https://martincruimingschilderwerken.nl/wp-content/uploads/';
const img = (file, alt, extra = {}) => ({
  src: `/images/${file.split('/').pop()}`,
  remote: ORIGIN + file,
  alt,
  ...extra,
});

export const IMAGES = {
  over: img('2015/01/Geschiedenis.png', 'Martin Cruiming Schilderwerken in Noordhorn'),
  binnen: img('2015/01/paginafotobinnenwerk.jpg', 'Binnenschilderwerk: geschilderde wanden in een woonruimte'),
  glas: img('2015/03/glaszetten.png', 'Glaszetten: dubbel glas in een geschilderd kozijn'),
  buitenStock: img('2015/01/3413845072_ed79709cfe_o.jpg', 'Illustratie van buitenschilderwerk aan een woning'),
};

// Portfolio: uitsluitend foto's die op de huidige website als project staan.
// Categorie volgt de titel of bestandsnaam op de huidige site.
export const PORTFOLIO = [
  img('2015/03/2013-05-17-16-848x480.jpg', 'Buitenschilderwerk aan een woning in Noordhorn', { cat: 'Buitenwerk', title: 'Buitenwerk Noordhorn', w: 848, h: 480 }),
  img('2015/03/Martinbuitenwerk11.jpg', 'Buitenschilderwerk aan een woning, uitgevoerd door Martin Cruiming', { cat: 'Buitenwerk', title: 'Buitenwerk' }),
  img('2015/10/img_5900_720-540x480.jpg', 'Gerepareerde houtrot aan houtwerk van een woning', { cat: 'Houtrot', title: 'Houtrot gerepareerd', w: 540, h: 480 }),
  img('2015/03/Martin_0000_voordeur.jpg', 'Geschilderde voordeur', { cat: 'Binnenwerk', title: 'Voordeur' }),
  img('2015/03/Martinbuitenwerk6.jpg', 'Geschilderd houtwerk aan de buitenzijde van een woning', { cat: 'Buitenwerk', title: 'Buitenwerk' }),
  img('2015/03/houtrot1-848x480.jpg', 'Houtrotherstel aan een kozijn', { cat: 'Houtrot', title: 'Houtrot', w: 848, h: 480 }),
  img('2015/03/Martinbuitenwerk3.jpg', 'Buitenschilderwerk aan kozijnen en gevel', { cat: 'Buitenwerk', title: 'Buitenwerk' }),
];

export const SERVICES = [
  {
    slug: 'binnenwerk',
    name: 'Binnenschilderwerk',
    nav: 'Binnenwerk',
    image: IMAGES.binnen,
    teaser:
      'Wanden, plafonds, deuren en houtwerk binnen. Met kleur- en materiaaladvies dat past bij de sfeer van uw woning.',
    seoTitle: 'Binnenschilderwerk in Noordhorn en omgeving | Martin Cruiming Schilderwerken',
    seoDesc:
      'Binnenschilderwerk met kleur- en materiaaladvies: wanden, plafonds, deuren, behang, glasvlies en sauswerk. Oplosmiddelarme verf. Vrijblijvende offerte.',
  },
  {
    slug: 'buitenwerk',
    name: 'Buitenschilderwerk',
    nav: 'Buitenwerk',
    image: PORTFOLIO[4],
    teaser:
      'Kozijnen, deuren en gevelhout. Wij bekijken de staat van uw schilderwerk en adviseren over onderhoud of renovatie.',
    seoTitle: 'Buitenschilderwerk in Noordhorn en omgeving | Martin Cruiming Schilderwerken',
    seoDesc:
      'Buitenschilderwerk voor nieuwbouw, verbouw en onderhoud. Inspectie van bestaand schilderwerk, advies en uitvoering. Geen voorrijkosten.',
  },
  {
    slug: 'glaszetten',
    name: 'Glaszetten',
    nav: 'Glaszetten',
    image: IMAGES.glas,
    teaser:
      'Enkel glas vervangen door dubbel glas. Wij controleren of uw kozijnen geschikt zijn en werken alles netjes af.',
    seoTitle: 'Glaszetten: enkel glas vervangen door dubbel glas | Martin Cruiming Schilderwerken',
    seoDesc:
      'Enkel glas vervangen door isolatieglas. Controle van de sponning, zo nodig nieuwe kozijnen of draairamen, afgewerkt met overschilderbare kit.',
  },
  {
    slug: 'houtrot',
    name: 'Houtrotherstel',
    nav: 'Houtrot',
    image: PORTFOLIO[2],
    teaser:
      'Rotte kozijnen, ramen en deuren zijn vaak nog goed te herstellen. Wij zoeken de oorzaak en repareren het hout.',
    seoTitle: 'Houtrot herstellen aan kozijnen, ramen en deuren | Martin Cruiming Schilderwerken',
    seoDesc:
      'Houtrot aan kozijnen, ramen en deuren is vaak goed te herstellen. Inspectie, oorzaak opsporen, reparatie en advies om nieuwe schade te voorkomen.',
  },
];

export const SEO = {
  '/': {
    title: 'Martin Cruiming Schilderwerken | Schilder in Noordhorn sinds 2011',
    desc: 'Vakkundig binnen- en buitenschilderwerk, glaszetten en houtrotherstel vanuit Noordhorn. Geen voorrijkosten en een vrijblijvende offerte.',
  },
  '/diensten': {
    title: 'Diensten | Martin Cruiming Schilderwerken',
    desc: 'Binnenschilderwerk, buitenschilderwerk, glaszetten en houtrotherstel. Bekijk wat Martin Cruiming Schilderwerken voor uw woning kan doen.',
  },
  '/portfolio': {
    title: 'Portfolio | Martin Cruiming Schilderwerken',
    desc: 'Foto’s van uitgevoerd schilderwerk en houtrotherstel door Martin Cruiming Schilderwerken uit Noordhorn.',
  },
  '/over-ons': {
    title: 'Over ons | Martin Cruiming Schilderwerken',
    desc: 'Martin Cruiming begon in 2011 als zelfstandig schilder en werkt vanuit Noordhorn. Geen voorrijkosten, altijd een vrijblijvende offerte.',
  },
  '/contact': {
    title: 'Contact en offerte | Martin Cruiming Schilderwerken',
    desc: 'Vraag een vrijblijvende offerte aan of bel 06 22 09 10 47. Verlengde Oosterweg 49, Noordhorn. Maandag tot en met zaterdag 09:00–17:00.',
  },
};
SERVICES.forEach((s) => (SEO['/' + s.slug] = { title: s.seoTitle, desc: s.seoDesc }));

export const ROUTES = Object.keys(SEO);
