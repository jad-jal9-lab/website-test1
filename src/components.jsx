import { useEffect, useRef, useState } from 'react';
import { Link, useRouter } from './router.jsx';
import { BUSINESS, SERVICES, SEO } from './data.js';

/* ---------- SEO: titel en description per pagina ---------- */
export function useSeo(path) {
  useEffect(() => {
    const s = SEO[path] || { title: 'Pagina niet gevonden | ' + BUSINESS.name, desc: '' };
    document.title = s.title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement('meta');
      m.name = 'description';
      document.head.appendChild(m);
    }
    m.content = s.desc;
  }, [path]);
}

/* ---------- Foto met nette terugval ---------- */
export function Photo({ image, className = '', sizes, eager = false, ratio }) {
  const [stage, setStage] = useState(0); // 0 lokaal, 1 origineel, 2 mislukt
  const src = stage === 0 ? image.src : image.remote;
  return (
    <figure className={'photo ' + className} style={ratio ? { aspectRatio: ratio } : undefined}>
      {stage < 2 ? (
        <img
          src={src}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          width={image.w}
          height={image.h}
          onError={() => setStage((s) => s + 1)}
        />
      ) : (
        <div className="photo-fallback" role="img" aria-label={image.alt}>
          <span>{image.alt}</span>
        </div>
      )}
    </figure>
  );
}

/* ---------- Kop ---------- */
export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef(null);
  const serviceActive = path === '/diensten' || SERVICES.some((s) => '/' + s.slug === path);

  useEffect(() => {
    setOpen(false);
    setDd(false);
  }, [path]);

  useEffect(() => {
    const close = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDd(false);
    };
    const esc = (e) => e.key === 'Escape' && (setDd(false), setOpen(false));
    document.addEventListener('click', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  const item = (to, label) => (
    <li>
      <Link to={to} className={path === to ? 'active' : undefined} aria-current={path === to ? 'page' : undefined}>
        {label}
      </Link>
    </li>
  );

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>Geen voorrijkosten · Vrijblijvende offerte</span>
          <span className="topbar-contact">
            <a href={BUSINESS.mobileHref}>{BUSINESS.mobile}</a>
            <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
          </span>
        </div>
      </div>
      <div className="wrap nav-row">
        <Link to="/" className="brand" aria-label="Martin Cruiming Schilderwerken, naar de homepage">
          <span className="brand-name">Martin Cruiming</span>
          <span className="brand-sub">Schilderwerken · Noordhorn</span>
        </Link>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="menu-icon" aria-hidden="true"></span>
          {open ? 'Sluiten' : 'Menu'}
        </button>

        <nav id="hoofdmenu" className={'main-nav' + (open ? ' open' : '')} aria-label="Hoofdmenu">
          <ul>
            {item('/', 'Home')}
            <li className={'has-dd' + (dd ? ' dd-open' : '')} ref={ddRef}>
              <div className="dd-head">
                <Link to="/diensten" className={serviceActive ? 'active' : undefined} aria-current={path === '/diensten' ? 'page' : undefined}>
                  Diensten
                </Link>
                <button
                  className="dd-toggle"
                  aria-expanded={dd}
                  aria-controls="dienstenmenu"
                  aria-label="Diensten uitklappen"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDd((v) => !v);
                  }}
                >
                  <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                </button>
              </div>
              <ul id="dienstenmenu" className="dd">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link to={'/' + s.slug} className={path === '/' + s.slug ? 'active' : undefined} aria-current={path === '/' + s.slug ? 'page' : undefined}>
                      <strong>{s.name}</strong>
                      <small>{s.teaser.split('.')[0]}.</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {item('/portfolio', 'Portfolio')}
            {item('/over-ons', 'Over ons')}
            {item('/contact', 'Contact')}
          </ul>
          <Link to="/contact" className="btn btn-primary nav-cta">Offerte aanvragen</Link>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Kruimelpad ---------- */
export function Breadcrumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Kruimelpad">
      <ol>
        <li><Link to="/">Home</Link></li>
        {trail.map(([to, label], i) => (
          <li key={label}>
            {i === trail.length - 1 ? <span aria-current="page">{label}</span> : <Link to={to}>{label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Paginakop voor binnenpagina's ---------- */
export function PageHead({ trail, eyebrow, title, lead, children }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <Breadcrumbs trail={trail} />
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

/* ---------- Offerte-oproep ---------- */
export function QuoteBand({ title = 'Benieuwd wat het kost?', text }) {
  return (
    <section className="quote-band">
      <div className="wrap quote-in">
        <div>
          <h2>{title}</h2>
          <p>
            {text ||
              'Wij komen langs om de klus te bekijken en stellen een offerte op. Vrijblijvend en zonder voorrijkosten.'}
          </p>
        </div>
        <div className="quote-actions">
          <Link to="/contact" className="btn btn-light">Offerte aanvragen</Link>
          <a href={BUSINESS.mobileHref} className="btn btn-ghost-light">Bel direct: {BUSINESS.mobile}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Voet ---------- */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-brand">Martin Cruiming</p>
          <p className="foot-sub">Schilderwerken sinds {BUSINESS.since}</p>
          <address>
            {BUSINESS.street}<br />
            {BUSINESS.postcode} {BUSINESS.city}
          </address>
        </div>
        <div>
          <h2 className="foot-h">Diensten</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link to={'/' + s.slug}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="foot-h">Website</h2>
          <ul>
            <li><Link to="/diensten">Alle diensten</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/over-ons">Over ons</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="foot-h">Contact</h2>
          <ul>
            <li><a href={BUSINESS.mobileHref}>{BUSINESS.mobile}</a></li>
            <li><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
            <li><a href={'mailto:' + BUSINESS.email} className="break">{BUSINESS.email}</a></li>
          </ul>
          <p className="foot-hours">Ma – za 09:00 – 17:00<br />Zondag gesloten</p>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
        <span>Geen voorrijkosten · Vrijblijvende offerte</span>
      </div>
    </footer>
  );
}

/* ---------- Mobiele actiebalk ---------- */
export function StickyBar() {
  const { path } = useRouter();
  if (path === '/contact') return null;
  return (
    <div className="sticky-bar" role="region" aria-label="Snelle acties">
      <a href={BUSINESS.mobileHref} className="sb-call">Bel direct</a>
      <Link to="/contact" className="sb-quote">Offerte aanvragen</Link>
    </div>
  );
}

/* ---------- Werkwijze (echte volgorde, uit de bestaande teksten) ---------- */
export function Process({ steps }) {
  return (
    <ol className="process">
      {steps.map(([t, d], i) => (
        <li key={t}>
          <span className="step-no" aria-hidden="true">{i + 1}</span>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Lightbox ---------- */
export function Lightbox({ items, index, onClose, onMove }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (index === null) return;
    closeRef.current && closeRef.current.focus();
    const key = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    document.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', key);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onMove]);
  if (index === null) return null;
  const it = items[index];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={it.alt} onClick={onClose}>
      <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
        <Photo image={it} className="lb-photo" eager key={it.src} />
        <div className="lb-bar">
          <p><strong>{it.title}</strong> · {it.cat}</p>
          <p className="lb-count">{index + 1} / {items.length}</p>
          <div className="lb-btns">
            <button onClick={() => onMove(-1)} aria-label="Vorige foto">←</button>
            <button onClick={() => onMove(1)} aria-label="Volgende foto">→</button>
            <button onClick={onClose} ref={closeRef} aria-label="Sluiten">Sluiten</button>
          </div>
        </div>
      </div>
    </div>
  );
}
