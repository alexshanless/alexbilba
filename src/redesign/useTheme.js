import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'alex_theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

/**
 * Theme state for the redesign. Resolution order (per handoff):
 *   1. localStorage.alex_theme  2. prefers-color-scheme  3. 'dark'
 * Scoped to the redesign wrapper via a data-theme attribute, so the rest
 * of the (current) site is unaffected. No pre-paint script needed: this is
 * a client-rendered SPA, so first React paint already carries the right theme.
 */
export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch { /* non-fatal */ }
      return next;
    });
  }, []);

  // Follow OS changes only while the user hasn't made a manual choice.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: light)');
    if (!mq) return undefined;
    const onChange = (e) => {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
      setThemeState(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return { theme, setTheme, toggleTheme };
}
