import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WorkPage.module.css';
import { useTheme } from './useTheme';
import ThemeToggle from './ThemeToggle';
import ContactLink from './ContactLink';
import { THUMBS } from './WorkThumbs';
import { WORK_PROJECTS, WORK_FILTERS, WORK_ARCHIVE } from './workData';

const EMAIL = 'direct@alexbilba.com';
const UPWORK = 'https://www.upwork.com/freelancers/~01905f084be42da06a?mp_source=share';
const LINKEDIN = 'https://www.linkedin.com/in/alex-bilba-643898190/';
const ASCII_RULE = '─'.repeat(120);

const NAV = [
  ['~/work', '/work', true],
  ['~/stack', '/#stack', false],
  ['~/now', '/#now', false],
];

const HERO_STATS = [
  ['since', '2019', 'freelance, full-time'],
  ['shipped', '20+', 'builds in this folio'],
  ['fixed', '30+', 'client sites debugged + rescued'],
];

function Rule() {
  return <div className={styles.ascii}>{ASCII_RULE}</div>;
}

function StatusTag({ status }) {
  if (status === 'live') return <span className={`${styles.tag} ${styles.tagLive}`}>live ↗</span>;
  if (status === 'wip') return <span className={`${styles.tag} ${styles.tagPriv}`}>in dev</span>;
  if (status === 'private') return <span className={`${styles.tag} ${styles.tagPriv}`}>private</span>;
  return <span className={styles.tag}>side</span>;
}

function ProjectCard({ p }) {
  const Thumb = THUMBS[p.thumb];
  const inner = (
    <>
      <div
        style={{
          padding: '18px 20px',
          borderBottom: '1px solid var(--rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <div>
          <div className={styles.label} style={{ marginBottom: 6 }}>{p.year}</div>
          <div className={`${styles.display} ${styles.projName}`} style={{ fontSize: 22, letterSpacing: '-0.02em' }}>
            {p.name}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: 'var(--soft)' }}>{p.url}</div>
          <div style={{ marginTop: 8 }}><StatusTag status={p.status} /></div>
        </div>
      </div>

      {Thumb ? <Thumb /> : null}

      <div style={{ padding: '20px 20px 22px' }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{p.body}</p>
        <div style={{ marginBottom: 14 }}>
          {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div
          style={{
            borderTop: '1px solid var(--rule)',
            paddingTop: 14,
            display: 'grid',
            gridTemplateColumns: '80px 1fr',
            gap: '8px 18px',
            fontSize: 12,
          }}
        >
          <span style={{ color: 'var(--soft)' }}>stack</span>
          <span>{p.stack}</span>
          {/* outcome row only renders once Alex supplies a real metric */}
          {p.outcome ? (
            <>
              <span style={{ color: 'var(--soft)' }}>outcome</span>
              <span style={{ color: 'var(--accent)' }}>{p.outcome}</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );

  return p.link ? (
    <a className={`${styles.card} ${styles.projCard}`} href={p.link} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className={styles.card}>{inner}</div>
  );
}

export default function WorkPage() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const counts = useMemo(() => {
    const c = { all: WORK_PROJECTS.length };
    WORK_PROJECTS.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, []);

  const featured = WORK_PROJECTS.find((p) => p.featured);
  // On "all", the featured project gets its own block and the grid is the rest.
  // On any specific filter, hide the featured block and fold every match
  // (including the featured project) into the grid — so chip counts always
  // equal what's actually shown.
  const showFeatured = filter === 'all' && Boolean(featured);
  const visible = filter === 'all'
    ? WORK_PROJECTS.filter((p) => !p.featured)
    : WORK_PROJECTS.filter((p) => p.category === filter);
  const FeaturedThumb = featured ? THUMBS[featured.thumb] : null;

  return (
    <div className={styles.page} data-theme={theme}>
      {/* ── top bar ── */}
      <header className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>alex.bilba</Link>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>·</span>
          <span className={`${styles.dim} ${styles.topbarLeftExtra}`}>fullstack dev + ui designer</span>
        </div>
        <nav className={styles.topbarRight}>
          {NAV.map(([label, href, active]) => (
            <Link
              key={href}
              className={`${active ? styles.navActive : styles.navLink} ${styles.desktopOnly}`}
              to={href}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <ContactLink className={`${styles.sayHi} ${styles.desktopOnly}`} label="→ say hi" copiedLabel="✓ copied" />
          <button type="button" className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            ▤ menu
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.section} style={{ borderBottom: '1px solid var(--rule)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 18 }}>
            {NAV.map(([label, href]) => (
              <Link key={href} className={styles.navLink} to={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <ContactLink className={styles.sayHi} label="→ say hi" copiedLabel="✓ copied" onClick={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}

      {/* ── hero ── */}
      <section className={styles.section} style={{ padding: '56px 32px 48px' }}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.dim} style={{ marginBottom: 18 }}>$ ls ~/work</div>
            <h1 className={styles.display} style={{ fontSize: 'clamp(30px, 7vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 24 }}>
              A few things<br />
              <span className={styles.warn}>I&apos;ve built.</span>
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--soft)', maxWidth: 560 }}>
              A short list, the public slice of the work. Most are live and linked; a couple
              are private or still in progress and say so. If you&apos;re sizing me up, the
              answer is probably somewhere on this page.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {HERO_STATS.map(([label, big, caption]) => (
              <div key={label} style={{ padding: '18px 20px', border: '1px solid var(--rule)' }}>
                <div className={styles.label} style={{ marginBottom: 10 }}>{label}</div>
                <div className={styles.display} style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>{big}</div>
                <div className={styles.dim} style={{ fontSize: 12, marginTop: 6 }}>{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── filter bar ── */}
      <section className={styles.section} style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <span className={styles.dim} style={{ fontSize: 12, marginRight: 8 }}>$ filter --by</span>
        {WORK_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`${styles.chip} ${filter === f ? styles.chipOn : ''}`}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f} <span className={styles.dim} style={{ marginLeft: 8 }}>({counts[f] || 0})</span>
          </button>
        ))}
        <span className={styles.dim} style={{ marginLeft: 'auto' }}>sort: recent ▾</span>
      </section>

      <Rule />

      {/* ── featured: buildcore (only on the unfiltered view) ── */}
      {showFeatured && (
        <section className={styles.section} style={{ padding: '48px 32px 32px' }}>
          <div className={styles.sectionHead} style={{ marginBottom: 24 }}>
            <div>
              <div className={styles.label} style={{ marginBottom: 6 }}># featured</div>
              <div className={styles.dim} style={{ fontSize: 12 }}>in active development</div>
            </div>
            <div className={styles.display} style={{ fontSize: 'clamp(26px, 5vw, 42px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {featured.name} <span className={styles.dim} style={{ fontSize: 18 }}>· {featured.subtitle}</span>
            </div>
          </div>

          <div className={styles.featuredGrid}>
            <div className={styles.card}>
              <div style={{ aspectRatio: '21/9' }}>{FeaturedThumb ? <FeaturedThumb /> : null}</div>
              <div style={{ padding: '22px 24px' }}>
                <p style={{ fontSize: 16, lineHeight: 1.65, marginBottom: 18 }}>{featured.body}</p>
                <div className={styles.dim} style={{ fontSize: 13, lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>What it includes:</strong> {featured.built}
                </div>
              </div>
            </div>

            <div>
              {/* honest status panel — replaces the fabricated metrics grid */}
              <div style={{ padding: '22px', border: '1px solid var(--rule)', marginBottom: 16 }}>
                <div className={styles.label} style={{ marginBottom: 14 }}>status</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 14px' }}>
                  {[['WIP', 'in active dev', styles.ok], ['solo', 'one engineer', ''], ['2025', 'started', ''], ['private', 'pre-launch', styles.warn]].map(([big, cap, cls]) => (
                    <div key={cap}>
                      <div className={`${styles.display} ${cls}`} style={{ fontSize: 28, lineHeight: 1 }}>{big}</div>
                      <div className={styles.dim} style={{ fontSize: 11, marginTop: 4 }}>{cap}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '22px', border: '1px solid var(--rule)', marginBottom: 16 }}>
                <div className={styles.label} style={{ marginBottom: 14 }}>stack</div>
                <div style={{ fontSize: 12, lineHeight: 1.8 }}>
                  <div>React · Vite</div>
                  <div className={styles.dim}>─</div>
                  <div>API Gateway → Lambda</div>
                  <div>DynamoDB · S3</div>
                  <div>Cognito · SES</div>
                  <div className={styles.dim}>─</div>
                  <div>CDK · GitHub Actions</div>
                </div>
              </div>

              <div style={{ padding: '18px 22px', border: '1px solid var(--rule)', background: 'var(--grid)' }}>
                <div className={styles.label} style={{ marginBottom: 10 }}>private · demo</div>
                <div className={styles.dim} style={{ fontSize: 14 }}>not available yet · still in build</div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Rule />

      {/* ── project grid ── */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.label}>{filter === 'all' ? '# the rest' : '# results'}</div>
          <div className={styles.display} style={{ fontSize: 'clamp(24px, 4vw, 32px)', letterSpacing: '-0.02em' }}>
            {filter === 'all' ? (
              <>The public ones, <span className={styles.dim}>most of them client work.</span></>
            ) : (
              <>Filtered: <span className={styles.dim}>{filter}.</span></>
            )}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className={styles.gridTwo}>
            {visible.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        ) : (
          <div className={styles.dim} style={{ padding: '28px 0' }}>$ no matches · try a different filter</div>
        )}
      </section>

      <Rule />

      {/* ── archive ── */}
      <section className={styles.section} style={{ padding: '48px 32px 32px' }}>
        <div className={styles.sectionHead} style={{ marginBottom: 24 }}>
          <div className={styles.label}># archive</div>
          <div>
            <div className={styles.display} style={{ fontSize: 24, letterSpacing: '-0.02em', marginBottom: 6 }}>
              More I can show you.
            </div>
            <p className={styles.dim} style={{ fontSize: 13, maxWidth: 620 }}>
              Shorter entries — company, scope, stack. Live ones open in a new tab; a few
              are offline now and aren&apos;t linked. The full card treatment is reserved
              for the headliners above.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--rule)' }}>
          {WORK_ARCHIVE.map((r) => {
            const cells = (
              <>
                <span className={styles.archName}>{r.name}</span>
                <span className={`${styles.dim} ${styles.archScope}`}>{r.scope}</span>
                <span className={`${styles.dim} ${styles.archStack}`}>{r.type}</span>
                <span className={r.link ? styles.ok : styles.dim} style={{ textAlign: 'right' }}>
                  {r.link ? 'live ↗' : '—'}
                </span>
              </>
            );
            return r.link ? (
              <a key={r.name} className={styles.archRow} href={r.link} target="_blank" rel="noreferrer">
                {cells}
              </a>
            ) : (
              <div key={r.name} className={`${styles.archRow} ${styles.archDead}`} style={{ cursor: 'default' }}>
                {cells}
              </div>
            );
          })}
        </div>
      </section>

      <Rule />

      {/* ── CTA ── */}
      <section className={styles.section} style={{ padding: '80px 32px 64px' }}>
        <div className={styles.ctaGrid}>
          <div>
            <div className={styles.dim} style={{ marginBottom: 14 }}># next</div>
            <h2 className={styles.display} style={{ fontSize: 'clamp(34px, 7vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.025em' }}>
              Mostly booked.<br />
              <span className={styles.warn}>Still up for a good problem.</span>
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--soft)', marginBottom: 24, maxWidth: 480 }}>
              Availability is tight right now, but I&apos;m open to consultations: a quick
              call, a second opinion, untangling something gnarly. Two paragraphs is enough,
              what you&apos;re building and where you&apos;re stuck. I reply within a day.
            </p>
            <ContactLink
              style={{ display: 'inline-block', padding: '14px 18px', background: 'var(--term-bg)', border: '1px solid var(--rule)', color: 'var(--term-ink)', textDecoration: 'none' }}
              label={<><span className={styles.ok}>$</span> mail {EMAIL}<span style={{ background: 'var(--term-ink)', color: 'var(--term-bg)', marginLeft: 2 }}>_</span></>}
              copiedLabel={<><span className={styles.ok}>$</span> copied · {EMAIL}</>}
            />
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer className={styles.footer}>
        <span>© 2026 alex bilba · tacoma</span>
        <span className={styles.footerDim}>built in react · ~/work · last update 2026-07-23</span>
        <span className={styles.footerDim}>
          <a href={UPWORK} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>upwork</a>
          {' · '}
          <a href={LINKEDIN} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>linkedin</a>
        </span>
      </footer>
    </div>
  );
}
