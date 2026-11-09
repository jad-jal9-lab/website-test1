import { StrictMode, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, useRouter } from './router.jsx';
import { Header, Footer, StickyBar, useSeo } from './components.jsx';
import { Home, Diensten, Binnenwerk, Buitenwerk, Glaszetten, Houtrot, Portfolio, OverOns, Contact, NotFound } from './pages.jsx';
import './styles.css';

const PAGES = {
  '/': Home,
  '/diensten': Diensten,
  '/binnenwerk': Binnenwerk,
  '/buitenwerk': Buitenwerk,
  '/glaszetten': Glaszetten,
  '/houtrot': Houtrot,
  '/portfolio': Portfolio,
  '/over-ons': OverOns,
  '/contact': Contact,
};

function App() {
  const { path } = useRouter();
  const Page = PAGES[path] || NotFound;
  const main = useRef(null);
  const first = useRef(true);
  useSeo(PAGES[path] ? path : null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
    main.current && main.current.focus({ preventScroll: true });
  }, [path]);

  return (
    <>
      <a href="#inhoud" className="skip" onClick={(e) => { e.preventDefault(); main.current && main.current.focus(); }}>
        Naar de inhoud
      </a>
      <Header />
      <main id="inhoud" ref={main} tabIndex={-1}>
        <Page />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
