import { useState } from 'react';
import styles from './RedesignHome.module.css';

/**
 * A "# label" section anchor. Hovering reveals a ▍ cursor on the prefix;
 * clicking copies the URL with this section's hash and shows a brief
 * "$ link copied" toast (3s).
 */
export default function SectionLabel({ hash, children }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${hash}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    if (window.history?.replaceState) {
      window.history.replaceState(null, '', `#${hash}`);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <span
      className={styles.secLabel}
      role="button"
      tabIndex={0}
      onClick={copyLink}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && copyLink()}
    >
      #<span className={styles.secCursor}>▍</span> {children}
      {copied && <span className={styles.linkToast}>$ link copied</span>}
    </span>
  );
}
