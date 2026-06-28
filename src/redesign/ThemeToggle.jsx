import styles from './RedesignHome.module.css';

/**
 * Single mono-glyph toggle. Dark shows ☼ (click → light), light shows ☾.
 * No `> ` prefix — it's a button, not a nav link.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☼' : '☾'}
    </button>
  );
}
