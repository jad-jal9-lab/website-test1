import { createContext, useContext, useEffect, useState, useCallback } from 'react';

// Kleine router zonder extra dependency.
// 'history'-modus: echte URL's (/diensten, /binnenwerk …) voor de live website.
// 'hash'-modus: #diensten, #binnenwerk … voor de online preview.
export const MODE = import.meta.env.VITE_ROUTER === 'hash' ? 'hash' : 'history';

function readPath() {
  if (MODE === 'hash') {
    const h = window.location.hash.replace(/^#\/?/, '');
    return h ? '/' + h : '/';
  }
  const p = window.location.pathname.replace(/\/+$/, '');
  return p || '/';
}

export function hrefFor(path) {
  if (MODE === 'hash') return path === '/' ? '#' : '#' + path.slice(1);
  return path;
}

const RouterCtx = createContext({ path: '/', navigate: () => {} });

export function Router({ children }) {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const sync = () => setPath(readPath());
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  const navigate = useCallback((to) => {
    if (to === readPath()) {
      window.scrollTo(0, 0);
      return;
    }
    if (MODE === 'hash') {
      window.location.hash = to === '/' ? '' : to.slice(1);
    } else {
      window.history.pushState(null, '', to);
      setPath(to);
    }
  }, []);

  return <RouterCtx.Provider value={{ path, navigate }}>{children}</RouterCtx.Provider>;
}

export const useRouter = () => useContext(RouterCtx);

export function Link({ to, children, onClick, ...rest }) {
  const { navigate } = useRouter();
  return (
    <a
      href={hrefFor(to)}
      onClick={(e) => {
        onClick && onClick(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
