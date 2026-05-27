import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './RouteTransition.module.css';

// Only animate transitions INTO a redesign route. Map pathname → ~/label.
const REDESIGN_PATHS = {
  '/': '~',
  '/work': '~/work',
};

const CHAR_MS = 22; // per-char typing cadence

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

/**
 * Wraps the routed content. On a client-side navigation into a redesign route,
 * a 40px terminal strip slides down and types "$ cd ~/path" (~200ms) while the
 * new page is hidden, then the strip slides away and the page fades in.
 * Total < 350ms — a beat of personality that masks the (already instant) swap.
 * No-ops on first paint, on non-redesign routes, and under prefers-reduced-motion.
 */
export default function RouteTransition({ children }) {
  const { pathname } = useLocation();
  const [strip, setStrip] = useState(null); // { cmd, n, leaving } | null
  const [hidden, setHidden] = useState(false);
  const prev = useRef(pathname);
  const timers = useRef([]);

  useEffect(() => {
    if (prev.current === pathname) return undefined;
    prev.current = pathname;

    const label = REDESIGN_PATHS[pathname];
    if (!label || prefersReducedMotion()) {
      setHidden(false);
      return undefined;
    }

    timers.current.forEach(clearTimeout);
    timers.current = [];

    const cmd = `cd ${label}`; // typed after a static "$ " prompt
    setHidden(true);
    setStrip({ cmd, n: 0, leaving: false });

    for (let i = 1; i <= cmd.length; i += 1) {
      timers.current.push(setTimeout(() => setStrip((s) => (s ? { ...s, n: i } : s)), i * CHAR_MS));
    }
    const typed = cmd.length * CHAR_MS;
    timers.current.push(setTimeout(() => setHidden(false), typed + 40)); // fade page in
    timers.current.push(setTimeout(() => setStrip((s) => (s ? { ...s, leaving: true } : s)), typed + 160));
    timers.current.push(setTimeout(() => setStrip(null), typed + 290)); // unmount strip

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [pathname]);

  return (
    <>
      {strip && (
        <div
          className={`${styles.strip} ${strip.leaving ? styles.stripLeaving : ''}`}
          aria-hidden="true"
        >
          <span className={styles.prompt}>$ </span>
          {strip.cmd.slice(0, strip.n)}
          <span className={styles.caret}>_</span>
        </div>
      )}
      <div className={hidden ? styles.contentOut : styles.contentIn}>{children}</div>
    </>
  );
}
