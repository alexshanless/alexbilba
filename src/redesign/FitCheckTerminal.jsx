import { useEffect, useRef, useState } from 'react';
import styles from './RedesignHome.module.css';

/* Terminal content as ordered lines of {text, cls} segments.
   `mt` = extra top-margin group; `pauseAfter` = extra ms once the line finishes. */
const LINES = [
  { seg: [{ t: '$ ', cls: 'prompt' }, { t: './fit-check.sh --your-company' }] },
  { seg: [{ t: 'running diagnostics ...', cls: 'dim' }], pauseAfter: 250 },
  { seg: [{ t: '✓ ', cls: 'ok' }, { t: "you're a SaaS founder or small operator with a real problem" }], mt: 'group' },
  { seg: [{ t: '✓ ', cls: 'ok' }, { t: 'the site (or the product) is blocking something concrete' }] },
  { seg: [{ t: '✓ ', cls: 'ok' }, { t: 'you have copy, or are open to writing it together' }] },
  { seg: [{ t: '✓ ', cls: 'ok' }, { t: 'React, AWS, or Webflow is on the table' }] },
  { seg: [{ t: '! ', cls: 'warn' }, { t: 'timeline is "weeks," not "months"' }] },
  { seg: [{ t: '✗ ', cls: 'err' }, { t: 'you need an enterprise CMS with 40 editors' }] },
  { seg: [{ t: '> score: ', cls: 'dim' }, { t: '5/6 · good fit', cls: 'ok' }], mt: 'score' },
  { seg: [{ t: '$ ', cls: 'prompt' }, { t: 'mailto:direct@alexbilba.com' }], mt: 'mail', mail: true },
];

const CHAR_MS = 7; // base per-char cadence
const CHAR_JITTER = 16; // randomized on top of base → varied, human typing
const NEWLINE_PAUSE = 95; // "Enter" keypress micropause at each line break

const LINE_LEN = LINES.map((l) => l.seg.reduce((m, s) => m + s.t.length, 0));
const TOTAL = LINE_LEN.reduce((a, b) => a + b, 0);
// global char index at which each line ends, + the pause to apply there
const LINE_END = [];
{
  let acc = 0;
  LINES.forEach((l, i) => {
    acc += LINE_LEN[i];
    LINE_END.push({ at: acc, pause: l.pauseAfter || NEWLINE_PAUSE });
  });
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

export default function FitCheckTerminal() {
  const reduce = prefersReducedMotion();
  const [revealed, setRevealed] = useState(reduce ? TOTAL : 0);
  const done = revealed >= TOTAL;
  const timers = useRef([]);

  // type char-by-char, fast, with brief line-boundary pauses
  useEffect(() => {
    if (reduce) return undefined;
    let i = 0;
    const step = () => {
      i += 1;
      setRevealed(i);
      if (i >= TOTAL) return;
      const boundary = LINE_END.find((b) => b.at === i);
      const delay = boundary
        ? boundary.pause
        : CHAR_MS + Math.random() * CHAR_JITTER;
      timers.current.push(setTimeout(step, delay));
    };
    timers.current.push(setTimeout(step, 120));
    return () => timers.current.forEach(clearTimeout);
  }, [reduce]);

  // skip to full on any interaction
  useEffect(() => {
    if (done) return undefined;
    const skip = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setRevealed(TOTAL);
    };
    window.addEventListener('keydown', skip);
    window.addEventListener('click', skip);
    window.addEventListener('wheel', skip, { passive: true });
    window.addEventListener('touchstart', skip, { passive: true });
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('click', skip);
      window.removeEventListener('wheel', skip);
      window.removeEventListener('touchstart', skip);
    };
  }, [done]);

  const mtClass = { group: styles.termGroup, score: styles.termScore, mail: styles.termMail };

  // line holding the blinking caret = where the NEXT char will land. On a line
  // break the caret jumps to column 0 of the next line during the "Enter" pause
  // (a real terminal never lingers at the end of a finished line). Strict `>`
  // makes a completed boundary resolve to the next line; -1 = fully done.
  const found = LINE_END.findIndex((b) => b.at > revealed);
  const cursorLine = found === -1 ? LINES.length - 1 : found;

  // render every line at full width (untyped chars are hidden but hold space,
  // so the box never reflows) and slice each segment at the global cursor.
  let cursor = 0;
  return (
    <div>
      <div className={styles.term}>
        {LINES.map((line, li) => {
          const lineStart = cursor;
          cursor += LINE_LEN[li];
          const shownInLine = Math.max(0, Math.min(LINE_LEN[li], revealed - lineStart));

          // split each segment into typed (visible) and untyped (invisible, but
          // kept in flow to reserve the box's height). The caret goes BETWEEN
          // them, so it sits right after the last typed character.
          let used = 0;
          const typed = [];
          const untyped = [];
          line.seg.forEach((s, si) => {
            const segStart = used;
            used += s.t.length;
            const n = Math.max(0, Math.min(s.t.length, shownInLine - segStart));
            const cls = s.cls ? styles[s.cls] : undefined;
            if (n > 0) typed.push(<span key={`t${si}`} className={cls}>{s.t.slice(0, n)}</span>);
            if (n < s.t.length) {
              untyped.push(
                <span key={`u${si}`} className={`${cls || ''} ${styles.lineHidden}`}>
                  {s.t.slice(n)}
                </span>,
              );
            }
          });

          return (
            <div key={li} className={line.mt ? mtClass[line.mt] : undefined}>
              {typed}
              {li === cursorLine && (
                <span className={`${styles.cursor} ${styles.cursorBlink}`}>_</span>
              )}
              {untyped}
            </div>
          );
        })}
      </div>
      <div className={styles.termCaption}>this is a static mock; the real one runs in your browser</div>
    </div>
  );
}
