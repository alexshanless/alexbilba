import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RedesignHome.module.css';
import { useTheme } from './useTheme';
import ThemeToggle from './ThemeToggle';
import ContactLink from './ContactLink';

/* Case study: migrating a live B2B platform to serverless AWS.
 * Deliberately static and JS-free in its content — no interaction-gated
 * reveals — so it prints / PDFs cleanly for job applications. Reuses the
 * home page's tokens and primitives; no new design system. */

const EMAIL = 'direct@alexbilba.com';
const UPWORK = 'https://www.upwork.com/freelancers/~01905f084be42da06a?mp_source=share';
const LINKEDIN = 'https://www.linkedin.com/in/alex-bilba-643898190/';
const ASCII_RULE = '─'.repeat(120);

const NAV = [
  ['~/work', '/work'],
  ['~/stack', '/#stack'],
  ['~/now', '/#now'],
];

const META = [
  ['role', 'senior project manager · technical owner (architecture, planning, execution)'],
  ['timeline', 'May–July 2026 · ~3 months end to end'],
  ['status', 'cutover-ready · read cutover pending'],
  ['stack', 'TypeScript · AWS (Lambda/DynamoDB/API Gateway/Cognito) · Redshift Serverless · CDK'],
  ['from', 'Supabase / Postgres → serverless AWS'],
];

// before: two backends, two data shapes
const ARCH_BEFORE = `  [ staff portal ]     ──▸  [ supabase · postgres ]   ◂─ inherited stack
  [ customer portal ]  ──▸  [ aws · dynamodb ]        ◂─ purpose-built

  two data models · every cross-portal feature built twice or bridged`;

// the dual-write bridge: supabase stays authoritative, dynamo mirrored
const ARCH_BRIDGE = `  [ portal write ] ──▸ [ supabase · postgres ] ◂── system of record
                              │
                              └─▸ [ dual-write fan-out ] ──▸ [ dynamodb ]
                                        │                         │
                                  carries incumbent id            ├─▸ shadow compare
                                                                  │     (field by field)
                                                                  ├─▸ read path
                                                                  │     (flag-gated per entity/org)
                                                                  └─▸ [ zero-ETL ] ▸ [ redshift ]`;

// headline facts — big-number band at the top.
// Ordered to lead with the arresting numbers (cost + team size).
const STATS = [
  ['<$45/mo', 'infra · 3 AWS accounts'],
  ['1', 'engineer · AI-assisted'],
  ['~8,150', 'backend tests · coverage floors + ratchets'],
  ['~25', 'DynamoDB tables mirrored'],
  ['15+', 'entity types migrated'],
  ['~50', 'write paths, mechanically derived'],
  ['8', 'soak windows validated'],
  ['40+', 'PRs/week · 3 repos'],
];

// recommended vs chosen — [dimension, recommended, chosen]
const CMP = [
  ['path', 'Aurora Postgres as system of record', 'all-in port to DynamoDB + dual-write bridge'],
  ['data model', 'keeps the older of the two', 'the one the customer portal already used'],
  ['posture', 'a managed database to run', 'serverless · no standing capacity'],
  ['risk', 'lower short-term variance', 'higher up front · reversible at every step'],
  ['end state', 'preserves the split that caused it', 'one data model'],
];

const WHY = [
  'Customer portal was born native on DynamoDB — Aurora meant migrating proven infra backward.',
  'DynamoDB scaling + latency fit the access patterns.',
  'Serverless posture: no standing capacity to pay for or operate.',
  'Reversibility made the higher-variance choice defensible — being wrong was a toggle, not an outage.',
];

// [name, one-line consequence]
const CONSTRAINTS = [
  ['Live production, field users', 'Supabase stayed authoritative the whole time — every write kept landing in the system of record. The business never bet on the new stack.'],
  ['Money-path exactness', 'Invoices, draws, and payment schedules run on integer-cent arithmetic, fail-loud. One penny of divergence between stores fails a gate — not a warning.'],
  ['One human engineer', 'No QA, no rollback budget, no second reviewer. The machinery replaces headcount: derived manifests, drift-guarded gates, adversarial verification.'],
];

// [name, one-line guarantee]
const MACHINERY = [
  ['Dual-write fan-out', 'Every Supabase write mirrors to DynamoDB — flag-gated per entity/org, carrying the incumbent ID. Fails open; a mirror hiccup never breaks the portal.'],
  ['Shadow compare', 'Reads hit both stores and compare field by field. Divergences log as structured events, never shown to users.'],
  ['Soak gating', 'Reads can\u2019t flip until a soak window exercises every write path clean. Manifest is derived from the TypeScript by call-graph analysis and drift-guarded. Gates emit signed receipts.'],
  ['Instant reversal', 'One command flips reads per entity. Writes stay dual, so reversal is lossless and immediate — a toggle, not a restore.'],
  ['Risk-scaled review', 'Every PR auto-reviewed to a terminal state; migration-surface PRs get an adversarial verification pass before merge.'],
];

const RESULTS = [
  '15+ entity types mirrored across ~25 DynamoDB tables',
  '7 soak slices covering ~50 mechanically derived write paths, validated across 8 soak windows',
  '~8,150 backend tests with coverage floors and quality ratchets',
  'Under $45/month total infrastructure across three AWS accounts — no standing capacity, cost scales with usage',
  '~3 months end to end · designed for reversibility, validated through soak, cutover gated',
  '40+ PRs merged per week across three repositories, single engineer directing an AI-assisted pipeline',
  'Contract-first API design (Smithy / AWS PDK) with generated runtime types and documentation',
];

function Rule() {
  return <div className={styles.ascii}>{ASCII_RULE}</div>;
}

function ArchBlock({ label, art, note }) {
  return (
    <div className={styles.arch}>
      <div className={styles.archLabel}>{label}</div>
      <pre className={styles.archPre}>{art}</pre>
      {note ? <div className={styles.archNote}>{note}</div> : null}
    </div>
  );
}

export default function CaseStudyMigration() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page} data-theme={theme}>
      {/* ── top bar ── */}
      <header className={styles.topbar}>
        <div className={styles.row}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>alex.bilba</Link>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>·</span>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>case study</span>
        </div>
        <nav className={styles.topbarRight}>
          {NAV.map(([label, href]) =>
            href.startsWith('/#') ? (
              <a key={href} className={`${styles.navLink} ${styles.desktopOnly}`} href={href}>{label}</a>
            ) : (
              <Link key={href} className={`${styles.navLink} ${styles.desktopOnly}`} to={href}>{label}</Link>
            )
          )}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <ContactLink className={`${styles.ok} ${styles.desktopOnly}`} label="→ say hi" copiedLabel="✓ copied" />
          <button type="button" className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            ▤ menu
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.overlayTop}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>alex.bilba</Link>
            <button type="button" className={styles.overlayClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">✗</button>
          </div>
          <nav className={styles.overlayNav}>
            {NAV.map(([label, href]) =>
              href.startsWith('/#') ? (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ) : (
                <Link key={href} to={href} onClick={() => setMenuOpen(false)}>{label}</Link>
              )
            )}
          </nav>
          <ContactLink className={styles.overlayStatus} label="→ say hi" copiedLabel="✓ copied" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* ── header ── */}
      <section className={styles.csHead}>
        <div className={styles.csKicker}># case study · platform migration</div>
        <h1 className={`${styles.display} ${styles.csTitle}`}>
          Migrating a live B2B platform to serverless AWS<br />
          <span className={styles.warn}>without betting the business.</span>
        </h1>
        <p className={styles.csSub}>
          A B2B construction-management platform, running two backends at once. This is how it got to
          one data model — on the newer stack, live the entire time, with money on the line and a single
          engineer directing the work.
        </p>
        <div className={styles.metaGrid} style={{ marginTop: 32 }}>
          {META.map(([k, v]) => (
            <span key={k} style={{ display: 'contents' }}>
              <span className={styles.dim}>{k}</span>
              <span>{v}</span>
            </span>
          ))}
        </div>
        <div className={styles.csStats}>
          {STATS.map(([big, cap]) => (
            <div key={cap} className={styles.csStat}>
              <div className={`${styles.display} ${styles.csStatBig}`}>{big}</div>
              <div className={styles.csStatCap}>{cap}</div>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── the problem ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># the problem</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>Two backends, two data models.</h2>
        <p className={styles.csProse}>
          A B2B construction-management platform was running two backends at once — an inherited
          Supabase/Postgres staff portal and a purpose-built AWS customer portal. Not a crisis; a
          convergence problem. Every cross-portal feature got built twice, entities lived in two shapes,
          tenant isolation was only designed properly on one side, and the cost compounded with every
          release.
        </p>
        <ArchBlock
          label="# before · divergence"
          art={ARCH_BEFORE}
          note="two systems of record · isolation designed properly on only one side"
        />
      </section>

      <Rule />

      {/* ── the decision ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># the decision that didn&apos;t go as recommended</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>We overrode the safe recommendation.</h2>
        <p className={styles.csProse}>
          The strategy analysis recommended Aurora Postgres as the system of record. We went the other
          way — an all-in port to DynamoDB with a dual-write bridge.
        </p>
        <div className={styles.csCmp}>
          <div className={styles.csCmpHead}>
            <span />
            <span>recommended</span>
            <span>chosen</span>
          </div>
          {CMP.map(([dim, rec, chosen]) => (
            <div key={dim} className={styles.csCmpRow}>
              <span>{dim}</span>
              <span>{rec}</span>
              <span className={styles.csChosen}>{chosen}</span>
            </div>
          ))}
        </div>
        <ul className={styles.csBullets}>
          {WHY.map((w) => <li key={w}>{w}</li>)}
        </ul>
      </section>

      <Rule />

      {/* ── constraints ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># three constraints that shaped everything</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>What the design had to survive.</h2>
        <div className={styles.csSpec}>
          {CONSTRAINTS.map(([name, body], i) => (
            <div key={name} className={styles.csSpecRow}>
              <span className={styles.csSpecName}>
                <span className={styles.csNum}>{String(i + 1).padStart(2, '0')}</span>{name}
              </span>
              <span className={styles.csSpecBody}>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── safety machinery ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># what I built to make it safe</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>The machinery that replaced a team.</h2>
        <ArchBlock
          label="# the dual-write bridge"
          art={ARCH_BRIDGE}
          note="supabase authoritative throughout · dynamo mirrored + shadow-compared · reads flip per entity behind a flag"
        />
        <div className={styles.csSpec}>
          {MACHINERY.map(([name, body]) => (
            <div key={name} className={styles.csSpecRow}>
              <span className={styles.csSpecName}>{name}</span>
              <span className={styles.csSpecBody}>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── when it earned its cost ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># when the machinery earned its cost — continuously</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>Defects surfaced throughout, not once.</h2>
        <p className={styles.csProse}>
          Shadow compare and soak validation ran continuously and surfaced defects throughout —
          divergences, missed cascades, status drift, write-path edge cases unit tests didn&apos;t reach.
          Most were caught and fixed inside the same soak window. One shows the shape of it:
        </p>
        <div className={styles.csSpec} style={{ marginTop: 20 }}>
          <div className={styles.csSpecRow}>
            <span className={styles.csSpecName}>divergence</span>
            <span className={styles.csSpecBody}>
              <code>scopeStatus</code>: primary said <code>ARCHIVED</code>, mirror said <code>SCHEDULED</code> — one field, one row.
            </span>
          </div>
          <div className={styles.csSpecRow}>
            <span className={styles.csSpecName}>cause</span>
            <span className={styles.csSpecBody}>Archiving a project cascade-archived its scopes and work orders in the primary DB; the cascade never wrote to the mirror.</span>
          </div>
          <div className={styles.csSpecRow}>
            <span className={styles.csSpecName}>if shipped</span>
            <span className={styles.csSpecBody}>Every archived project&apos;s scopes and work orders reappear as open, scheduled work — cancelled jobs field teams could act on.</span>
          </div>
          <div className={styles.csSpecRow}>
            <span className={styles.csSpecName}>caught by</span>
            <span className={styles.csSpecBody}>The first soak window to exercise the archive path — a path the mechanically-derived manifest had just picked up. Fix cost nothing in validation.</span>
          </div>
        </div>
        <p className={styles.csProse} style={{ marginTop: 20 }}>
          That&apos;s the whole argument for the approach: the alternative is discovering it in production,
          on money-adjacent data, with one engineer and no rollback plan.
        </p>

        <h2 className={`${styles.display} ${styles.csH2}`} style={{ marginTop: 40 }}>
          The Tier-B warehouse: 8 deploy attempts, one error mask.
        </h2>
        <p className={styles.csProse}>
          Zero-ETL replication from DynamoDB to Redshift Serverless failed repeatedly with what looked like
          a single AWS error. It was two stacked root causes wearing the same mask:
        </p>
        <ul className={styles.csBullets}>
          <li>a split across two policy stores;</li>
          <li>an IAM ARN service-prefix mismatch underneath it.</li>
        </ul>
        <p className={styles.csProse} style={{ marginTop: 16 }}>
          Each fix revealed the next, identically — written up as a root-cause ledger. The instructive
          failure mode: an identical error across attempts read as one unsolved problem, not two sequential
          ones.
        </p>
      </section>

      <Rule />

      {/* ── results ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># results</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>What it came to.</h2>
        <div className={styles.csResults}>
          {RESULTS.map((r, i) => (
            <div key={r} className={styles.csResult}>
              <span>
                <span className={styles.csResultNum}>{String(i + 1).padStart(2, '0')}</span>
                {r}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── what I'd take from it ── */}
      <section className={styles.csSection}>
        <div className={styles.csSectionLabel}># what I&apos;d take from it</div>
        <h2 className={`${styles.display} ${styles.csH2}`}>The machinery was the consequence, not the flourish.</h2>
        <ul className={styles.csBullets}>
          <li>The safety machinery wasn&apos;t over-engineering — it&apos;s what one engineer plus a live money-path system forces. With a team it&apos;s review and QA; alone it has to be mechanical: derived manifests, drift guards, gates that fail closed.</li>
          <li>Overriding the recommended architecture only worked because every step was reversible. The higher-variance path was defensible precisely because being wrong was a toggle, not an outage.</li>
        </ul>
        <Link to="/#work" className={styles.csBack}>← back to building now</Link>
      </section>

      {/* ── footer ── */}
      <footer className={styles.footer}>
        <span>© 2026 alex bilba · tacoma</span>
        <span className={styles.footerDim}>built in react · ~/work/platform-migration · last update 2026-07-23</span>
        <span className={styles.footerDim}>
          <a href={UPWORK} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>upwork</a>
          {' · '}
          <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>linkedin</a>
          {' · '}
          <ContactLink label={EMAIL} copiedLabel="✓ copied" style={{ color: 'inherit' }} />
        </span>
      </footer>
    </div>
  );
}
