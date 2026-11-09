import { useCallback, useMemo, useState } from 'react';
import { Link, MODE } from './router.jsx';
import { BUSINESS, SERVICES, PORTFOLIO, IMAGES } from './data.js';
import { Photo, PageHead, QuoteBand, Process, Lightbox } from './components.jsx';

const svc = (slug) => SERVICES.find((s) => s.slug === slug);
const DIENSTEN = ['/diensten', 'Diensten'];

/* =============================== HOME =============================== */
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Schildersbedrijf in Noordhorn · sinds 2011</p>
            <h1>Vakkundig schilderwerk, met oog voor detail.</h1>
            <p className="lead">
              Voor binnen- en buitenschilderwerk, glaszetten en houtrotherstel. Martin Cruiming
              Schilderwerken helpt u uw woning mooi en goed onderhouden te houden.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Vrijblijvend een offerte aanvragen</Link>
              <Link to="/portfolio" className="btn btn-line">Bekijk ons werk</Link>
            </div>
            <ul className="trust">
              <li>Gestart in 2011</li>
              <li>Geen voorrijkosten</li>
              <li>Vrijblijvende offerte</li>
              <li>Hoogwaardige verfproducten</li>
            </ul>
          </div>
          <div className="hero-media">
            <Photo image={PORTFOLIO[1]} eager ratio="4 / 5" sizes="(max-width: 900px) 100vw, 45vw" />
            <p className="hero-tag">
              <span>Eigen werk</span> Buitenschilderwerk door Martin Cruiming
            </p>
          </div>
        </div>
      </section>

      <div className="swatch" aria-hidden="true"><i /><i /><i /><i /><i /></div>

      <section className="section">
        <div className="wrap intro-grid">
          <h2 className="h-section">Persoonlijk, van offerte tot oplevering.</h2>
          <div className="intro-text">
            <p>
              Martin Cruiming begon in 2011 als zelfstandig schilder en werkt vanuit Noordhorn. Wij
              komen bij u langs om de klus te bekijken en stellen een inzichtelijke offerte op, per
              onderdeel uitgesplitst. Er worden geen voorrijkosten gerekend.
            </p>
            <Link to="/over-ons" className="text-link">Meer over Martin Cruiming</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="h-diensten">
        <div className="wrap">
          <div className="section-head">
            <h2 id="h-diensten" className="h-section">Diensten</h2>
            <Link to="/diensten" className="text-link">Alle diensten</Link>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <Link to={'/' + s.slug} className="svc" key={s.slug}>
                <Photo image={s.image} ratio="4 / 3" sizes="(max-width: 700px) 100vw, 25vw" />
                <h3>{s.name}</h3>
                <p>{s.teaser}</p>
                <span className="more">Lees meer</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="h-werk">
        <div className="wrap">
          <div className="section-head">
            <h2 id="h-werk" className="h-section">Uitgevoerd werk</h2>
            <Link to="/portfolio" className="text-link">Naar het portfolio</Link>
          </div>
          <div className="home-gallery">
            {[PORTFOLIO[0], PORTFOLIO[2], PORTFOLIO[3], PORTFOLIO[6]].map((p, i) => (
              <Link to="/portfolio" key={p.src} className={'hg hg-' + i} aria-label={'Portfolio: ' + p.title}>
                <Photo image={p} sizes="(max-width: 700px) 100vw, 40vw" />
                <span className="hg-cap">{p.cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="h-waarom">
        <div className="wrap why-grid">
          <div>
            <h2 id="h-waarom" className="h-section">Waarom Martin Cruiming?</h2>
            <p className="since">
              <span className="since-year">2011</span>
              <span>Sindsdien heeft Martin vele opdrachten uitgevoerd, tot tevredenheid van zijn klanten.</span>
            </p>
          </div>
          <dl className="why">
            <div>
              <dt>Vrijblijvende offerte</dt>
              <dd>Wij komen altijd langs om de klus te bekijken. U ontvangt een offerte per onderdeel, zodat u precies ziet waar u voor betaalt.</dd>
            </div>
            <div>
              <dt>Geen voorrijkosten</dt>
              <dd>Voor het bezoek en de reistijd betaalt u niets extra.</dd>
            </div>
            <div>
              <dt>Hoogwaardige verfproducten</dt>
              <dd>Er wordt gewerkt met kwaliteitsverf, zodat u jarenlang plezier hebt van uw schilderwerk.</dd>
            </div>
            <div>
              <dt>Van voorgesprek tot nazorg</dt>
              <dd>Voorgesprek, offerte, uitvoering, nazorg en meerjarig onderhoud: elke stap krijgt volledige aandacht.</dd>
            </div>
          </dl>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}

/* ============================= DIENSTEN ============================= */
export function Diensten() {
  return (
    <>
      <PageHead
        trail={[DIENSTEN]}
        eyebrow="Wat wij doen"
        title="Diensten"
        lead="Martin Cruiming Schilderwerken richt zich op vier soorten werk aan en in uw woning. Per dienst leest u wat er mogelijk is en hoe het werk verloopt."
      />
      <section className="section">
        <div className="wrap svc-list">
          {SERVICES.map((s, i) => (
            <article className={'svc-row' + (i % 2 ? ' flip' : '')} key={s.slug}>
              <Photo image={s.image} ratio="3 / 2" sizes="(max-width: 800px) 100vw, 50vw" />
              <div className="svc-row-text">
                <h2>{s.name}</h2>
                <p>{s.teaser}</p>
                <Link to={'/' + s.slug} className="btn btn-line">Meer over {s.name.toLowerCase()}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <QuoteBand title="Twijfelt u welke aanpak past?" text="Wij bekijken de situatie bij u thuis en adviseren wat nodig is. Het bezoek en de offerte zijn vrijblijvend." />
    </>
  );
}

/* ========================= DIENSTPAGINA-SJABLOON ========================= */
function ServicePage({ slug, eyebrow, lead, children, aside }) {
  const s = svc(slug);
  const others = SERVICES.filter((o) => o.slug !== slug);
  return (
    <>
      <PageHead trail={[DIENSTEN, ['/' + slug, s.name]]} eyebrow={eyebrow} title={s.name} lead={lead} />
      <section className="section section-tight">
        <div className="wrap article-grid">
          <div className="prose">{children}</div>
          <aside className="article-aside">
            <Photo image={s.image} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 35vw" />
            <div className="aside-card">
              <h2>Offerte voor {s.name.toLowerCase()}</h2>
              <p>Vrijblijvend en zonder voorrijkosten.</p>
              <Link to="/contact" className="btn btn-primary">Offerte aanvragen</Link>
              <a href={BUSINESS.mobileHref} className="aside-phone">Of bel {BUSINESS.mobile}</a>
            </div>
            {aside}
          </aside>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h-section small">Andere diensten</h2>
          <ul className="other-svc">
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={'/' + o.slug}>
                  <strong>{o.name}</strong>
                  <span>{o.teaser}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}

const STEPS = [
  ['Kennismaking', 'U vertelt wat u wilt laten doen en welke sfeer of uitstraling u voor ogen heeft.'],
  ['Inspectie en rapport', 'Samen maken we een plan van aanpak. Gebreken worden beoordeeld en vastgelegd, zodat duidelijk is wat er hersteld moet worden voordat er geschilderd wordt.'],
  ['Offerte per onderdeel', 'U ontvangt een inzichtelijke offerte, uitgesplitst per onderdeel. Zo is helder waar u voor kiest.'],
  ['Uitvoering', 'Het werk wordt uitgevoerd met kwaliteitsproducten en zorgvuldig voorbereid.'],
  ['Oplevering en nazorg', 'Na afloop lopen we het werk samen na. Ook voor nazorg en onderhoud op langere termijn kunt u terecht.'],
];

export function Binnenwerk() {
  return (
    <ServicePage
      slug="binnenwerk"
      eyebrow="Diensten · binnen"
      lead="Kleuren bepalen voor een groot deel de sfeer in uw woning. Op basis van uw wensen en ideeën komen we tot een kleur- en materiaaladvies waarbij u zich prettig voelt."
    >
      <p>
        U weet vaak precies welke uitstraling uw huis moet krijgen. Wij vertalen die wensen naar
        de juiste kleur, het juiste materiaal en een nette afwerking. Goed binnenschilderwerk
        verhoogt het wooncomfort en draagt bij aan de waarde van uw woning.
      </p>
      <h2>Wat er mogelijk is</h2>
      <ul className="ticks">
        <li>Schilderen van wanden en plafonds</li>
        <li>Deuren, kozijnen en ander houtwerk binnenshuis</li>
        <li>Kleur- en materiaaladvies afgestemd op uw interieur</li>
        <li>Wandafwerking met behang, glasvlies, sauswerk of sierpleister</li>
      </ul>
      <h2>Oplosmiddelarme verf</h2>
      <p>
        Binnen wordt gewerkt met oplosmiddelarme verfproducten. U heeft daardoor weinig last van
        verflucht en de verf droogt sneller, zodat u uw ruimtes eerder weer kunt gebruiken.
      </p>
      <h2>Zo werken we</h2>
      <Process steps={STEPS} />
    </ServicePage>
  );
}

export function Buitenwerk() {
  return (
    <ServicePage
      slug="buitenwerk"
      eyebrow="Diensten · buiten"
      lead="Uw woning is een groot bezit en het schilderwerk is het visitekaartje ervan. Goed onderhouden buitenwerk ziet er verzorgd uit en beschermt het hout."
    >
      <p>
        Wij bekijken graag samen met u de onderhoudstoestand van uw woning. Aan de hand daarvan
        krijgt u een helder advies: wat nu aandacht nodig heeft, wat kan wachten en welke aanpak het
        beste resultaat geeft.
      </p>
      <h2>Wat er mogelijk is</h2>
      <ul className="ticks">
        <li>Schilderen van kozijnen, ramen en buitendeuren</li>
        <li>Schilderwerk bij nieuwbouw en verbouw</li>
        <li>Periodiek onderhoud en renovatie van bestaand schilderwerk</li>
        <li>Inspectie van de huidige verflaag, met advies over herstel</li>
        <li>Meerjarig onderhoud, zodat uw woning in goede staat blijft</li>
      </ul>
      <h2>Inspectie van bestaand schilderwerk</h2>
      <p>
        Bladderende verf, kale plekken of open naden zijn signalen dat het schilderwerk aandacht
        nodig heeft. Bij de inspectie wordt gekeken of gebreken eerst hersteld moeten worden, zodat de
        nieuwe verflaag goed hecht en lang meegaat. Waar nodig wordt ook houtrot{' '}
        <Link to="/houtrot">hersteld</Link>.
      </p>
      <h2>Zo werken we</h2>
      <Process steps={STEPS} />
    </ServicePage>
  );
}

export function Glaszetten() {
  return (
    <ServicePage
      slug="glaszetten"
      eyebrow="Diensten · glas"
      lead="Martin Cruiming Schilderwerken is gespecialiseerd in het vervangen van enkel glas door dubbel glas. Zo kunt u in één keer zowel het glas als het schilderwerk laten regelen."
    >
      <h2>Wat er gebeurt</h2>
      <Process
        steps={[
          ['Controle van de kozijnen', 'Eerst wordt gekeken of de sponning in uw bestaande kozijnen geschikt is voor het plaatsen van isolatieglas.'],
          ['Aanpassing of vervanging', 'Is de sponning niet geschikt, dan kunnen ook nieuwe kozijnen of draairamen worden geplaatst.'],
          ['Plaatsen van het glas', 'Het glas wordt geplaatst met overschilderbare kit. Dat geeft een strakke aansluiting op het schilderwerk.'],
          ['Afwerking', 'Kozijn en glaslatten worden netjes afgewerkt, gericht op onderhoudsvriendelijkheid.'],
        ]}
      />
      <h2>Door de ogen van een schilder</h2>
      <p>
        Omdat glas en schilderwerk door hetzelfde bedrijf worden verzorgd, sluit het een goed op het
        ander aan. Er wordt gekozen voor oplossingen die het onderhoud van uw kozijnen in de jaren
        daarna eenvoudig houden.
      </p>
      <p>Informeer gerust naar de mogelijkheden voor uw woning. Wij denken graag met u mee.</p>
    </ServicePage>
  );
}

export function Houtrot() {
  return (
    <ServicePage
      slug="houtrot"
      eyebrow="Diensten · herstel"
      lead="Rotte kozijnen, ramen en deuren worden vaak te snel als verloren beschouwd. In de meeste gevallen zijn ze met de huidige technieken goed te herstellen, voor een heel ander kostenplaatje dan vervangen."
    >
      <h2>Aanpak</h2>
      <Process
        steps={[
          ['Inspectie', 'Het aangetaste hout wordt beoordeeld: hoe ver de schade reikt en of herstel mogelijk is.'],
          ['Oorzaak opsporen', 'Houtrot ontstaat door vocht. Zonder de oorzaak aan te pakken komt het terug.'],
          ['Herstel', 'Het rotte hout wordt verwijderd en hersteld, zodat kozijn, raam of deur weer gaaf en sterk is.'],
          ['Afwerken en onderhouden', 'Het herstelde deel wordt geschilderd en opgenomen in het onderhoud van uw woning.'],
        ]}
      />
      <h2>Waar ontstaat houtrot?</h2>
      <p>
        Houtrot komt vooral voor bij oudere huizen. De oorzaak is vaak optrekkend vocht of slechte
        ventilatie in de kruipruimte. In badkamers en keukens kunnen lekkages langs kitranden het hout
        aantasten.
      </p>
      <p>
        In woningen uit de jaren zeventig en tachtig zijn veel materialen gebruikt die gevoelig zijn
        voor houtrot. U ziet het daar vooral in kozijnen en gevelpanelen. Ook boeiboorden, goten en
        overstekken zijn kwetsbare plekken.
      </p>
      <h2>Voorkomen is beter</h2>
      <ul className="ticks">
        <li>Een goed onderhouden verflaag houdt vocht buiten het hout.</li>
        <li>Zorg voor goede afwatering en ventilatie.</li>
        <li>Houd kit- en voegranden in keuken en badkamer in goede staat.</li>
      </ul>
    </ServicePage>
  );
}

/* ============================= PORTFOLIO ============================= */
export function Portfolio() {
  const cats = useMemo(() => ['Alles', ...Array.from(new Set(PORTFOLIO.map((p) => p.cat)))], []);
  const [cat, setCat] = useState('Alles');
  const [idx, setIdx] = useState(null);
  const items = cat === 'Alles' ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === cat);
  const close = useCallback(() => setIdx(null), []);
  const move = useCallback((d) => setIdx((i) => (i + d + items.length) % items.length), [items.length]);

  return (
    <>
      <PageHead
        trail={[['/portfolio', 'Portfolio']]}
        eyebrow="Eigen werk"
        title="Portfolio"
        lead="Een selectie foto’s van werk dat Martin Cruiming Schilderwerken heeft uitgevoerd. Klik op een foto om hem groot te bekijken."
      />
      <section className="section section-tight">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter op soort werk">
            {cats.map((c) => (
              <button key={c} className={c === cat ? 'on' : ''} aria-pressed={c === cat} onClick={() => setCat(c)}>
                {c}
                <span className="count">{c === 'Alles' ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.cat === c).length}</span>
              </button>
            ))}
          </div>
          <ul className="gallery">
            {items.map((p, i) => (
              <li key={p.src}>
                <button className="g-item" onClick={() => setIdx(i)} aria-label={'Vergroot foto: ' + p.alt}>
                  <Photo image={p} ratio="4 / 3" sizes="(max-width: 700px) 100vw, 33vw" />
                  <span className="g-cap">
                    <strong>{p.title}</strong>
                    <span>{p.cat}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Lightbox items={items} index={idx} onClose={close} onMove={move} />
      <QuoteBand title="Ook zulk resultaat voor uw woning?" />
    </>
  );
}

/* ============================== OVER ONS ============================== */
export function OverOns() {
  return (
    <>
      <PageHead trail={[['/over-ons', 'Over ons']]} eyebrow="Sinds 2011" title="Over ons" />
      <section className="section section-tight">
        <div className="wrap article-grid">
          <div className="prose">
            <p className="lead-p">
              Martin Cruiming begon in 2011 als zelfstandig schilder. Sindsdien heeft hij veel
              opdrachten uitgevoerd voor klanten in Noordhorn en omgeving.
            </p>
            <p>
              Het bedrijf is gevestigd aan de Verlengde Oosterweg 49 in Noordhorn. Van daaruit verzorgt
              Martin binnen- en buitenschilderwerk, glaszetten en houtrotherstel.
            </p>
            <h2>Waar u op kunt rekenen</h2>
            <ul className="ticks">
              <li>Er worden geen voorrijkosten gerekend.</li>
              <li>Wij komen altijd langs voor een geheel vrijblijvende offerte.</li>
              <li>Er wordt gewerkt met hoogwaardige verf, zodat u jarenlang plezier hebt van uw schilderwerk.</li>
              <li>Van voorgesprek, offerte en uitvoering tot nazorg en meerjarig onderhoud: alles krijgt aandacht.</li>
            </ul>
            <h2>Bedrijfsgegevens</h2>
            <dl className="facts">
              <div><dt>Naam</dt><dd>{BUSINESS.name}</dd></div>
              <div><dt>Gestart</dt><dd>{BUSINESS.since}</dd></div>
              <div><dt>Adres</dt><dd>{BUSINESS.street}, {BUSINESS.postcode} {BUSINESS.city}</dd></div>
              <div><dt>Bereikbaar</dt><dd>Maandag tot en met zaterdag, 09:00 – 17:00</dd></div>
            </dl>
          </div>
          <aside className="article-aside">
            <Photo image={IMAGES.over} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 35vw" />
            <div className="aside-card">
              <h2>Kennismaken?</h2>
              <p>Bel ons of vraag een offerte aan. Wij komen graag bij u langs.</p>
              <Link to="/contact" className="btn btn-primary">Neem contact op</Link>
            </div>
          </aside>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}

/* ============================== CONTACT ============================== */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | demo
  const [data, setData] = useState({ naam: '', email: '', telefoon: '', dienst: '', bericht: '' });
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const mailto =
    'mailto:' + BUSINESS.email +
    '?subject=' + encodeURIComponent('Offerteaanvraag' + (data.dienst ? ': ' + data.dienst : '')) +
    '&body=' + encodeURIComponent(
      `Naam: ${data.naam}\nE-mail: ${data.email}\nTelefoon: ${data.telefoon}\nDienst: ${data.dienst}\n\n${data.bericht}`
    );

  async function submit(e) {
    e.preventDefault();
    if (!FORM_ENDPOINT) return setStatus('demo');
    setStatus('sending');
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(r.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="form" onSubmit={submit} noValidate={false}>
      {!FORM_ENDPOINT && (
        <p className="demo-note" role="note">
          <strong>Demonstratie.</strong> Dit formulier is nog niet gekoppeld aan een verzenddienst en
          verstuurt geen berichten. Bel of mail ons rechtstreeks.
        </p>
      )}
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-naam">Naam <span aria-hidden="true">*</span></label>
          <input id="f-naam" required autoComplete="name" value={data.naam} onChange={set('naam')} />
        </div>
        <div className="field">
          <label htmlFor="f-tel">Telefoonnummer</label>
          <input id="f-tel" type="tel" autoComplete="tel" value={data.telefoon} onChange={set('telefoon')} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-email">E-mailadres <span aria-hidden="true">*</span></label>
        <input id="f-email" type="email" required autoComplete="email" value={data.email} onChange={set('email')} />
      </div>
      <div className="field">
        <label htmlFor="f-dienst">Waar gaat het om?</label>
        <select id="f-dienst" value={data.dienst} onChange={set('dienst')}>
          <option value="">Maak een keuze</option>
          {SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>Iets anders</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-bericht">Uw bericht <span aria-hidden="true">*</span></label>
        <textarea id="f-bericht" rows="5" required value={data.bericht} onChange={set('bericht')} placeholder="Bijvoorbeeld: welke ruimtes of onderdelen, en wanneer het u uitkomt." />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Bezig met versturen…' : FORM_ENDPOINT ? 'Verstuur aanvraag' : 'Aanvraag controleren'}
      </button>

      <div aria-live="polite">
        {status === 'sent' && <p className="form-msg ok">Uw aanvraag is verstuurd. Wij nemen zo snel mogelijk contact met u op.</p>}
        {status === 'error' && (
          <p className="form-msg err">
            Versturen is niet gelukt. Probeer het later opnieuw, of mail naar {BUSINESS.email}.
          </p>
        )}
        {status === 'demo' && (
          <div className="form-msg">
            <p>Er is niets verzonden: dit formulier is een demonstratie. Wilt u uw aanvraag mailen?</p>
            <a className="btn btn-line" href={mailto}>Open als e-mail</a>
            <p className="small">Of bel direct: {BUSINESS.mobile}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <>
      <PageHead
        trail={[['/contact', 'Contact']]}
        eyebrow="Offerte en contact"
        title="Neem contact op"
        lead="Vraag een vrijblijvende offerte aan of bel direct. Er worden geen voorrijkosten gerekend."
      />
      <section className="section section-tight">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <div className="ci-block">
              <h2>Bel direct</h2>
              <p><a className="big-link" href={BUSINESS.mobileHref}>{BUSINESS.mobile}</a> <span className="muted">mobiel</span></p>
              <p><a className="big-link" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> <span className="muted">vast</span></p>
            </div>
            <div className="ci-block">
              <h2>E-mail</h2>
              <p><a href={'mailto:' + BUSINESS.email} className="break">{BUSINESS.email}</a></p>
            </div>
            <div className="ci-block">
              <h2>Adres</h2>
              <address>
                {BUSINESS.name}<br />
                {BUSINESS.street}<br />
                {BUSINESS.postcode} {BUSINESS.city}
              </address>
            </div>
            <div className="ci-block">
              <h2>Bereikbaarheid</h2>
              <table className="hours">
                <tbody>
                  {BUSINESS.hours.map(([d, t]) => (
                    <tr key={d}><th scope="row">{d}</th><td>{t}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="h-section small">Offerte aanvragen</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section section-alt section-tight" aria-labelledby="h-route">
        <div className="wrap">
          <h2 id="h-route" className="h-section small">Locatie</h2>
          {MODE === 'history' ? (
            <div className="map">
              <iframe
                title="Kaart: Verlengde Oosterweg 49, Noordhorn"
                src={BUSINESS.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            <div className="map map-static">
              <p>De kaart van Google Maps wordt op de live website hier getoond.</p>
            </div>
          )}
          <p className="map-link">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Route plannen in Google Maps</a>
          </p>
        </div>
      </section>
    </>
  );
}

/* ================================ 404 ================================ */
export function NotFound() {
  return (
    <PageHead trail={[['/404', 'Niet gevonden']]} title="Deze pagina bestaat niet" lead="Mogelijk is de link verouderd. Ga terug naar de homepage of bekijk de diensten.">
      <div className="btn-row">
        <Link to="/" className="btn btn-primary">Naar de homepage</Link>
        <Link to="/diensten" className="btn btn-line">Bekijk de diensten</Link>
      </div>
    </PageHead>
  );
}
