import { useState } from 'react';

const EMAIL = 'direct@alexbilba.com';

/**
 * Contact link with a reliable fallback. Clicking opens the visitor's mail app
 * via `mailto:` AND copies the address to the clipboard — because `mailto:`
 * silently no-ops when no default mail client is registered (common on desktop).
 * Briefly swaps to `copiedLabel` for feedback. We never preventDefault, so the
 * mail app still opens for anyone who has one.
 */
export default function ContactLink({ className, style, label, copiedLabel = '✓ copied', onClick }) {
  const [copied, setCopied] = useState(false);

  const handle = (e) => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    if (onClick) onClick(e);
  };

  return (
    <a className={className} style={style} href={`mailto:${EMAIL}`} onClick={handle}>
      {copied ? copiedLabel : label}
    </a>
  );
}
