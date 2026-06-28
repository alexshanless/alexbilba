/* eslint-disable react-refresh/only-export-components */
import styles from './WorkPage.module.css';

/* ============================================================
   Per-project mono mini-previews. Each shares the .thumb frame
   (border + diagonal stripe via ::after) and uses var() tokens
   inline so they track the active theme. Ported from the /work
   handoff reference. One component per project, no shared logic
   beyond the frame.
   ============================================================ */

function ThumbBuildCore() {
  return (
    <div className={styles.thumb} style={{ aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '14px 18px', fontSize: 11 }}>
        <div style={{ color: 'var(--soft)', marginBottom: 8 }}>buildcore · /lakeline-tower</div>
        <div style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 12, height: 'calc(100% - 24px)' }}>
          <div style={{ borderRight: '1px solid var(--rule)', paddingRight: 8 }}>
            {['▸ docs', '  roles', '  reports', '  timeline'].map((s, i) => (
              <div key={i} style={{ padding: '3px 0', color: i === 0 ? 'var(--accent)' : 'var(--soft)', fontSize: 10 }}>{s}</div>
            ))}
          </div>
          <div>
            {['DRW-104 · foundation_C', 'RFI-021 · curtainwall', 'DRW-102 · lvl3_mech', 'SUB-014 · glazing_B'].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid var(--rule)', fontSize: 10 }}>
                <span>{r}</span>
                <span style={{ color: i === 1 ? 'var(--warn)' : 'var(--accent)' }}>{i === 1 ? '!' : '✓'}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, marginTop: 8 }}>
              {[6, 10, 8, 12, 10, 16, 12, 18, 14, 22].map((h, i) => (
                <span key={i} style={{ width: 5, height: h, background: i === 9 ? 'var(--accent)' : 'var(--rule)' }} />
              ))}
              <span style={{ color: 'var(--accent)', marginLeft: 'auto', fontSize: 11 }}>+47%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbEMBR() {
  return (
    <div className={styles.thumb} style={{ aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 200 120" width="80%" height="80%">
          <defs>
            <radialGradient id="emb" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8A86A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E8A86A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="60" r="50" fill="url(#emb)" />
          {[...Array(24)].map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * 30}
                y1={60 + Math.sin(a) * 30}
                x2={100 + Math.cos(a) * 48}
                y2={60 + Math.sin(a) * 48}
                stroke="#E8A86A"
                strokeWidth="0.6"
                opacity={0.4 + (i % 3) * 0.2}
              />
            );
          })}
          <circle cx="100" cy="60" r="22" fill="none" stroke="#E8A86A" strokeWidth="0.5" />
          <circle cx="100" cy="60" r="14" fill="none" stroke="#E8A86A" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>
      <div style={{ color: 'var(--soft)', position: 'absolute', bottom: 10, left: 14, fontSize: 10 }}>embrsolar.com · 3D hero</div>
    </div>
  );
}

function ThumbJNA() {
  return (
    <div className={styles.thumb} style={{ aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '14px', display: 'grid', gridTemplateRows: 'auto 1fr', gap: 8 }}>
        <div style={{ color: 'var(--soft)', fontSize: 10 }}>jna group · three audiences, one site</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)' }}>
          <div style={{ background: 'var(--buildcore-outer)', padding: '12px', fontSize: 10 }}>
            <div style={{ color: 'var(--accent)', marginBottom: 6 }}>▸ for engineers</div>
            <div style={{ color: 'var(--soft)', fontSize: 9 }}>specs · calcs · drawings</div>
            <div style={{ marginTop: 8, height: 30, background: 'repeating-linear-gradient(90deg, var(--rule) 0 4px, transparent 4px 8px)' }} />
          </div>
          <div style={{ background: 'var(--buildcore-outer)', padding: '12px', fontSize: 10 }}>
            <div style={{ color: 'var(--warn)', marginBottom: 6 }}>▸ for homeowners</div>
            <div style={{ color: 'var(--soft)', fontSize: 9 }}>what we do, plainly</div>
            <div style={{ marginTop: 8, display: 'flex', gap: 2, alignItems: 'flex-end', height: 30 }}>
              <span style={{ background: 'var(--warn)', width: 18, height: 14 }} />
              <span style={{ background: 'var(--warn)', width: 18, height: 22, opacity: 0.7 }} />
              <span style={{ background: 'var(--warn)', width: 18, height: 18, opacity: 0.5 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbCSM() {
  return (
    <div className={styles.thumb} style={{ aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ color: 'var(--soft)', fontSize: 10 }}>c.s. media · goal-based pitch</div>
        <div style={{ fontWeight: 500, letterSpacing: '-0.03em', fontSize: 32, lineHeight: 1 }}>
          We don&apos;t do<br />
          <span style={{ color: 'var(--accent)' }}>services.</span><br />
          We do <span style={{ color: 'var(--warn)' }}>outcomes.</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['leads', 'pipeline', 'meetings'].map((t) => (
            <span key={t} style={{ padding: '2px 8px', border: '1px solid var(--rule)', fontSize: 9, color: 'var(--soft)' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThumbBees() {
  return (
    <div className={styles.thumb} style={{ aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0, padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: 'var(--buildcore-outer)', border: '1px solid var(--rule)', padding: 10, fontSize: 9 }}>
          <div style={{ height: 50, background: 'repeating-linear-gradient(135deg, #3F362A 0 8px, #2A2722 8px 16px)' }} />
          <div style={{ marginTop: 8 }}>BCAA Honey Whey</div>
          <div style={{ color: 'var(--soft)', marginTop: 3 }}>£34.99 · 1kg</div>
          <div style={{ color: 'var(--accent)', marginTop: 4 }}>● in stock</div>
        </div>
        <div style={{ fontSize: 9 }}>
          <div style={{ color: 'var(--soft)', marginBottom: 8 }}>musclebees.co.uk · cart</div>
          <div style={{ borderBottom: '1px solid var(--rule)', padding: '6px 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>2 × Honey Whey</span><span>£69.98</span>
          </div>
          <div style={{ borderBottom: '1px solid var(--rule)', padding: '6px 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>1 × Creatine</span><span>£18.50</span>
          </div>
          <div style={{ padding: '8px 0', display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
            <span style={{ color: 'var(--soft)' }}>total</span><span style={{ color: 'var(--accent)' }}>£88.48</span>
          </div>
          <div style={{ marginTop: 6, padding: '6px 10px', background: 'var(--accent)', color: 'var(--bg)', textAlign: 'center', fontSize: 10 }}>
            checkout ▸
          </div>
        </div>
      </div>
    </div>
  );
}

export const THUMBS = {
  buildcore: ThumbBuildCore,
  embr: ThumbEMBR,
  jna: ThumbJNA,
  csm: ThumbCSM,
  bees: ThumbBees,
};
