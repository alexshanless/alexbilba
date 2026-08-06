import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './RedesignHome.module.css';
import { useTheme } from './useTheme';
import ThemeToggle from './ThemeToggle';
import FitCheckTerminal from './FitCheckTerminal';
import SectionLabel from './SectionLabel';
import MailtoLine from './MailtoLine';
import BuildCoreDemo from './BuildCoreDemo';
import ContactLink from './ContactLink';

const NAV = [
  ['~/work', '#work'],
  ['~/stack', '#stack'],
  ['~/now', '#now'],
];

const ASCII_RULE = '─'.repeat(120);
const EMAIL = 'direct@alexbilba.com';
const UPWORK = 'https://www.upwork.com/freelancers/~01905f084be42da06a?mp_source=share';
const LINKEDIN = 'https://www.linkedin.com/in/alex-bilba-643898190/';

const STACK = [
  ['workflow', ['Figma', 'Linear', 'Notion', 'Claude Code', 'Cursor']],
  ['frontend', ['React', 'Next.js', 'Tailwind', 'Webflow']],
  ['backend', ['AWS Lambda', 'DynamoDB', 'Cognito', 'S3 · API Gateway', 'Supabase', 'Neon']],
  ['glue', ['Make.com', 'Zapier', 'Webhooks', 'Postmark / SES']],
];

const SHIP_LOG = [
  ['2026', 'platform migration', 'B2B · construction', 'supabase/postgres → serverless aws · dual-write, reversible cutover', 'case study', '/work/platform-migration'],
  ['2025', 'buildcore (private)', 'B2B · construction', 'fullstack SaaS · react + aws', 'in dev', null],
  ['2024', 'jnagroup.net.au', 'B2B · structural eng.', 'marketing site · three audiences', 'live', 'https://www.jnagroup.net.au/'],
  ['2024', 'csmediaoc.com', 'B2B · marketing svc.', 'agency site + brand design', 'live', 'https://www.csmediaoc.com/'],
  ['2023', 'embrsolar.com', 'B2B/C · solar', 'marketing site · 3D model · monday.com pipeline', 'live', 'https://www.embrsolar.com/'],
  ['2021', 'musclebees.co.uk', 'D2C · sports nutrition', 'ecommerce at scale · CRO-first', 'live', 'https://www.musclebees.co.uk/'],
];

const PROCESS = [
  ['01', 'you write', 'Two paragraphs, sent to direct@. What you do, what you want to ship, by when.'],
  ['02', 'we talk', 'A 30-minute call within 48 hours. Bring the messy version. I record it.'],
  ['03', 'you get a quote', 'Fixed price, fixed scope, by end of that week. No deck. No retainer.'],
  ['04', 'I build', 'A clickable build by week 2. React + AWS underneath. We review Tuesdays, iterate from there.'],
  ['05', 'we ship', 'App goes to production. Code, deploys, and docs handed off. I stay on call for two weeks.'],
];

const ARCH = `  [ react spa ] ──▸ [ api gateway ] ──▸ [ lambda fns ] ──▸ [ dynamodb ]
        │                                       │
        └───▸ [ cognito user pools ]                 └───▸ [ s3 • docs ]
                                                                  │
                                              [ scheduled λ ] ◂───┘
                                                    │
                                              [ reports.pdf ] ▸ mail`;

function Rule() {
  return <div className={styles.ascii}>{ASCII_RULE}</div>;
}

export default function RedesignHome() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page} data-theme={theme}>
      {/* ── top bar ── */}
      <header className={styles.topbar}>
        <div className={styles.row}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>alex.bilba</Link>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>·</span>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>fullstack dev + ui designer</span>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>·</span>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>tacoma / pacific time</span>
        </div>
        <nav className={styles.topbarRight}>
          {NAV.map(([label, href]) => (
            <a key={href} className={`${styles.navLink} ${styles.desktopOnly}`} href={href}>
              {label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <ContactLink className={`${styles.ok} ${styles.desktopOnly}`} label="→ say hi" copiedLabel="✓ copied" />
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ▤ menu
          </button>
        </nav>
      </header>

      {/* ── mobile nav overlay ── */}
      {menuOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.overlayTop}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>alex.bilba</Link>
            <button
              type="button"
              className={styles.overlayClose}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✗
            </button>
          </div>
          <nav className={styles.overlayNav}>
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <ContactLink
            className={styles.overlayStatus}
            label="→ say hi"
            copiedLabel="✓ copied"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {/* ── hero ── */}
      <section className={styles.hero} id="whoami">
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.label}><SectionLabel hash="whoami">whoami</SectionLabel></div>
            <h1 className={`${styles.display} ${styles.heroH1}`}>
              I plan <br />
              I build<br />
              — or <span className={styles.warn}>delegate</span><br />
              to the right people. Any tech, any stack.
            </h1>
            <div className={styles.metaGrid}>
              <span className={styles.dim}>role</span>
              <span>technical PM · platform architect</span>
              <span className={styles.dim}>focus</span>
              <span>B2B SaaS · migrations, foundations, POC→production</span>
              <span className={styles.dim}>stack</span>
              <span>TypeScript · AWS (Lambda/DynamoDB/Cognito/CDK) · React/Next.js</span>
              <span className={styles.dim}>uptime</span>
              <span><span className={styles.ok}>7y</span> · freelance since March 2019</span>
              <span className={styles.dim}>based</span>
              <span>Tacoma, WA · UTC−8</span>
              <span className={styles.dim}>status</span>
              <span><span className={styles.warn}>taking on select engagements · advisory and platform builds</span></span>
            </div>
          </div>
          <div>
            <FitCheckTerminal />
          </div>
        </div>
      </section>

      <Rule />

      {/* ── stack ── */}
      <section className={styles.section} id="stack">
        <div className={styles.sectionHead}>
          <SectionLabel hash="stack">the stack</SectionLabel>
          <h2 className={`${styles.display} ${styles.h2}`}>
            What I actually use, day to day.{' '}
            <span className={styles.dim}>No "expertise" bar charts. Just the tools.</span>
          </h2>
        </div>
        <div className={styles.stackGrid}>
          {STACK.map(([head, items]) => (
            <div key={head} className={styles.stackCol}>
              <div className={styles.stackColLabel}>{head}/</div>
              {items.map((t) => (
                <div key={t} className={styles.stackItem}>· {t}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── featured: buildcore ── */}
      <section className={styles.section} id="work">
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.dim} style={{ marginBottom: 14 }}># building now</div>
            <div>2026</div>
            <div className={`${styles.dim} ${styles.fcMetaDate}`}>cutover-ready · read cutover pending</div>
          </div>
          <div>
            <div className={styles.row} style={{ marginBottom: 14 }}>
              <span className={styles.warn}>●</span>
              <span className={styles.dim}>migration.ready</span>
              <span className={styles.dim}>·</span>
              <span>buildcore (private)</span>
            </div>
            <h3 className={`${styles.display} ${styles.fcH3}`}>
              BuildCore. A B2B construction-management platform.<br />
              Migrating it from Supabase/Postgres to serverless AWS — <span className={styles.warn}>dual-write</span>, reversible entity-by-entity cutover.
            </h3>
            <div style={{ marginBottom: 24 }}>
              <Link to="/work/platform-migration" className={styles.shipAll} style={{ marginTop: 0 }}>
                → read the migration case study
              </Link>
            </div>

            {/* interactive wireframe — click tabs to swap page screenshots */}
            <BuildCoreDemo />

            {/* architecture diagram */}
            <div className={styles.arch}>
              <div className={styles.archLabel}># architecture</div>
              <pre className={styles.archPre}>{ARCH}</pre>
              <div className={styles.archNote}>
                everything stateless except dynamodb · deploys via cdk · a single engineer can hold it in their head
              </div>
            </div>

            {/* meta matrix */}
            <table className={styles.matrix}>
              <tbody>
                <tr>
                  <td className={styles.matrixLabel}>brief</td>
                  <td>A live B2B construction-management platform running two backends — an inherited Supabase/Postgres staff portal and a native AWS customer portal. Converging both onto one serverless AWS data model, migrated live: Supabase stays authoritative while every write mirrors to DynamoDB, and reads flip per entity behind a flag.</td>
                </tr>
                <tr>
                  <td className={styles.matrixLabel}>scope</td>
                  <td>dual-write fan-out · field-by-field shadow compare · soak-gated cutover · instant per-entity reversal · zero-ETL warehouse to Redshift</td>
                </tr>
                <tr>
                  <td className={styles.matrixLabel}>stack</td>
                  <td>TypeScript · Lambda · DynamoDB · API Gateway · Cognito · Redshift Serverless · CDK</td>
                </tr>
                <tr>
                  <td className={styles.matrixLabel}>stage</td>
                  <td>
                    <span className={styles.warn}>cutover-ready · read cutover pending</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.matrixLabel}>status</td>
                  <td>
                    private ·{' '}
                    <Link to="/work/platform-migration" style={{ color: 'var(--accent)' }}>read the case study →</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── ship log ── */}
      <section className={styles.section} id="ship-log">
        <div className={styles.sectionHead}>
          <SectionLabel hash="ship-log">ship log</SectionLabel>
          <h2 className={`${styles.display} ${styles.h2}`}>
            Recent deployments.{' '}
            <span className={styles.dim}>Click any row for the receipts.</span>
          </h2>
        </div>
        <div className={styles.shipTable}>
          {SHIP_LOG.map((r) => {
            const [year, project, category, description, status, link] = r;
            const isInternal = Boolean(link) && link.startsWith('/');
            const tagClass = link ? styles.ok : status === 'in dev' ? styles.warn : styles.dim;
            const tagText = isInternal ? 'case study →' : link ? 'live ↗' : status;
            const inner = (
              <>
                <span>
                  <span className={styles.dim}>{year} · </span>
                  <span className={styles.shipProject}>{project}</span>
                </span>
                <span className={`${styles.dim} ${styles.shipScope}`}>{description}</span>
                <span className={`${styles.dim} ${styles.shipStack}`}>{category}</span>
                <span className={tagClass} style={{ textAlign: 'right' }}>{tagText}</span>
              </>
            );
            if (isInternal) {
              return (
                <Link key={project} className={styles.shipRow} to={link}>
                  {inner}
                </Link>
              );
            }
            return link ? (
              <a key={project} className={styles.shipRow} href={link} target="_blank" rel="noreferrer">
                {inner}
              </a>
            ) : (
              <div key={project} className={`${styles.shipRow} ${styles.shipDead}`}>{inner}</div>
            );
          })}
        </div>
        <Link to="/work" className={styles.shipAll}>
          → view all work
        </Link>
      </section>

      <Rule />

      {/* ── how it works ── */}
      <section className={styles.section} id="how">
        <div className={styles.sectionHead}>
          <SectionLabel hash="how">how it works</SectionLabel>
          <h2 className={`${styles.display} ${styles.h2}`}>A short script, in five steps.</h2>
        </div>
        <div className={styles.processGrid}>
          {PROCESS.map(([n, t, d]) => (
            <div key={n} className={styles.processCell}>
              <div className={styles.processNum}>{n}.</div>
              <div className={styles.processTitle}>{t}</div>
              <p className={styles.processBody}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── now / contact ── */}
      <section className={styles.nowSection} id="now">
        <div className={styles.nowGrid}>
          <div>
            <SectionLabel hash="now">/now</SectionLabel>
            <h2 className={`${styles.display} ${styles.nowH2}`}>
              Open to select work.<br />
              <span className={styles.warn}>Email beats DMs.</span>
            </h2>
            <MailtoLine />
          </div>
          <div>
            <div className={styles.dim} style={{ marginBottom: 18 }}># status</div>
            <div className={styles.statusGrid}>
              <span className={styles.dim}>current project</span>
              <span>buildcore · ongoing fullstack work</span>
              <span className={styles.dim}>availability</span>
              <span className={styles.warn}>selective · advisory and build work</span>
              <span className={styles.dim}>response time</span>
              <span className={styles.ok}>&lt; 24h on weekdays</span>
              <span className={styles.dim}>timezone</span>
              <span>UTC−8 / Pacific</span>
              <span className={styles.dim}>references</span>
              <span>
                buildcore ·{' '}
                <a href="https://www.embrsolar.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>embr solar</a>
                {' · '}
                <a href="https://www.jnagroup.net.au/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>jna</a>
                {' · on request'}
              </span>
              <span className={styles.dim}>elsewhere</span>
              <span>
                <a href={UPWORK} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>upwork</a>
                {' · '}
                <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>linkedin</a>
              </span>
              <span className={styles.dim}>say hi</span>
              <span>{EMAIL}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── footer (inverts — open decision) ── */}
      <footer className={styles.footer}>
        <span>© 2026 alex bilba · tacoma</span>
        <span className={styles.footerDim}>built in react · ~/site.v7 · last deploy 2026-07-23</span>
        <span className={styles.footerDim}>
          <a href={UPWORK} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>upwork</a>
          {' · '}
          <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>linkedin</a>
        </span>
      </footer>
    </div>
  );
}
