import { useState } from 'react';
import styles from './RedesignHome.module.css';

const EMAIL = 'direct@alexbilba.com';

/**
 * Interactive terminal mailto line.
 * - Hover: a ▍ left-edge slides in (accent), the trailing cursor stops blinking.
 * - Click / Enter / Space: copies the email, flips to "$ copied · …" for 3s.
 */
export default function MailtoLine() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <div
        className={`${styles.term} ${styles.mailLine}`}
        role="button"
        tabIndex={0}
        onClick={copy}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && copy()}
        aria-label="Copy email address"
      >
        <span className={styles.mailEdge}>▍ </span>
        {copied ? (
          <span>
            <span className={styles.prompt}>$</span> copied · {EMAIL}
          </span>
        ) : (
          <span>
            <span className={styles.prompt}>$</span> mail {EMAIL}
            <span className={`${styles.cursor} ${styles.cursorBlink}`}>_</span>
          </span>
        )}
      </div>
      <div className={styles.mailHint}>→ copy email · ⌘C</div>
    </div>
  );
}
