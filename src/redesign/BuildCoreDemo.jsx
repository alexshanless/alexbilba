import { useState } from 'react';
import {
  FiHome,
  FiFolder,
  FiBox,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiSearch,
  FiBell,
  FiClock,
  FiFilter,
  FiMapPin,
  FiShield,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
} from 'react-icons/fi';
import styles from './RedesignHome.module.css';
import bc from './BuildCoreDemo.module.css';

/* Interactive BuildCore dashboard — coded light wireframe, framed in the dark
 * browser chrome. The sidebar switches pages; each view is rebuilt from the
 * real product screenshots (see Pictures/BC_*.png). */

const NAV = [
  { key: 'home', label: 'Home', icon: FiHome },
  { key: 'projects', label: 'Projects', icon: FiFolder },
  { key: 'properties', label: 'Properties', icon: FiBox },
  { key: 'calendar', label: 'Calendar', icon: FiCalendar },
  { key: 'users', label: 'Users', icon: FiUsers },
  { key: 'analytics', label: 'Analytics', icon: FiBarChart2 },
];

/* ===================== Home ===================== */
const TASK_TABS = [
  ['NTP Needed', 1],
  ['Scopes Ready for Review', 1],
  ['Ready for QC', 0],
  ['Change CO Approvals', 0],
  ['RFIs Needing Response', 0],
];

const TASKS = [
  {
    project: '1450_market_aco_0007',
    sub: 'Approve as Active Before to Proceed',
    pending: '17 days ago',
    status: 'Pre Construction',
    type: 'SCOPE',
    action: 'Review NTP',
  },
  {
    project: 'prj-0024',
    sub: 'Scopes ready for your review',
    pending: 'about 1 month ago',
    status: 'Pre Construction',
    type: 'SCOPE',
    action: 'Review Scope',
  },
];

const UPDATES = [
  ['Jordan Avery submitted scope 1450_market…', 'PRJ-0024 · 2 days ago'],
  ['Scopes ready for review on 1450_market', 'NTP · 3 days ago'],
  ['Riley Chen updated project status to Est…', 'PRJ-0024 · 5 days ago'],
];

const KPIS = [
  ['Avg Dollars/Day Completed (MTD)', '$0'],
  ['Active Projects On Time', '0'],
  ['Avg Projects/Day Completed Early (MTD)', '0.0'],
  ['Avg Projects/Day Completed Late (MTD)', '0.0'],
];

function HomeView() {
  const [activeTab, setActiveTab] = useState(0);
  const [span, setSpan] = useState('today');

  return (
    <div className={bc.content}>
      <h2 className={bc.greeting}>Good morning, Jordan 👋</h2>

      <div className={bc.card}>
        <div className={bc.cardHead}>
          <span className={bc.cardTitle}>My Tasks (2)</span>
          <button type="button" className={bc.newBtn}>+ New</button>
        </div>
        <div className={bc.tabs}>
          {TASK_TABS.map(([label, n], i) => (
            <button
              key={label}
              type="button"
              className={`${bc.tab} ${i === activeTab ? bc.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {label} <span className={bc.tabCount}>({n})</span>
            </button>
          ))}
        </div>
        <div className={bc.table}>
          <div className={bc.tHead}>
            <span>Order / Project</span>
            <span>Time Pending</span>
            <span>Status</span>
            <span className={bc.tColHide}>Type</span>
            <span>Action</span>
          </div>
          {TASKS.map((t) => (
            <div key={t.project} className={bc.tRow}>
              <span>
                <div className={bc.tProject}>{t.project}</div>
                <div className={bc.tSub}>{t.sub}</div>
              </span>
              <span className={bc.pending}><FiClock size={13} /> {t.pending}</span>
              <span><span className={bc.badge}>{t.status}</span></span>
              <span className={`${bc.type} ${bc.tColHide}`}>{t.type}</span>
              <button type="button" className={bc.rowAction}>{t.action}</button>
            </div>
          ))}
        </div>
      </div>

      <div className={bc.bottomGrid}>
        <div className={bc.card}>
          <div className={bc.miniHead}>
            <span className={bc.cardTitle}>2026 · 27 May</span>
            <div className={bc.segmented}>
              <button
                type="button"
                className={`${bc.seg} ${span === 'today' ? bc.segActive : ''}`}
                onClick={() => setSpan('today')}
              >
                Today
              </button>
              <button
                type="button"
                className={`${bc.seg} ${span === 'week' ? bc.segActive : ''}`}
                onClick={() => setSpan('week')}
              >
                This Week
              </button>
            </div>
          </div>
          <div className={bc.emptyState}>No events scheduled</div>
        </div>

        <div className={bc.card}>
          <div className={bc.miniHead}>
            <span className={bc.cardTitle}>Recent Updates</span>
            <span className={bc.link}>View All →</span>
          </div>
          {UPDATES.map(([text, meta]) => (
            <div key={text} className={bc.update}>
              <span className={bc.updateDot} />
              <span>
                <div className={bc.updateText}>{text}</div>
                <div className={bc.updateMeta}>{meta}</div>
              </span>
            </div>
          ))}
        </div>

        <div className={bc.card}>
          <div className={bc.miniHead}>
            <span className={bc.cardTitle}>KPIs</span>
            <span className={bc.dropdown}>Monthly ▾</span>
          </div>
          <div className={bc.kpiTop}>
            <div className={bc.kpiBig}>
              <div className={bc.kpiBigNum}>1</div>
              <div className={bc.kpiLabel}>Active Project Count</div>
            </div>
            <div className={bc.kpiBig}>
              <div className={bc.kpiBigNum}>$0</div>
              <div className={bc.kpiLabel}>Active Dollar</div>
            </div>
          </div>
          <div className={bc.kpiGrid}>
            {KPIS.map(([label, val]) => (
              <div key={label} className={bc.kpiRow}>
                <span className={bc.kpiLabel}>{label}</span>
                <span className={bc.kpiVal}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== Projects ===================== */
const PROJ_COLS = '1fr 1.6fr 1fr 0.9fr 1.1fr';

function ProjectsView() {
  return (
    <div className={bc.content}>
      <h2 className={bc.greeting} style={{ marginBottom: 18 }}>Projects</h2>
      <div className={bc.toolbar}>
        <div className={bc.search} style={{ maxWidth: 360 }}><FiSearch size={14} /> Search projects…</div>
        <div className={bc.toolbarRight}>
          <button type="button" className={bc.newBtn}>+ Add project</button>
          <button type="button" className={bc.ghostBtn}><FiFilter size={13} /> Filters</button>
        </div>
      </div>
      <div className={bc.card}>
        <div className={bc.tHead} style={{ gridTemplateColumns: PROJ_COLS }}>
          <span>Project ID</span><span>Property</span><span>Added</span><span>Assignees</span><span>Status</span>
        </div>
        <div className={bc.tRow} style={{ gridTemplateColumns: PROJ_COLS }}>
          <span className={bc.tLink}>PRJ-0024</span>
          <span className={bc.pending}><FiBox size={12} /> 1450 Market St…</span>
          <span className={bc.pending}><FiCalendar size={12} /> 22 Apr 2026</span>
          <span className={bc.avatarRow}>
            <span className={bc.avatarSm}>JA</span>
            <span className={bc.avatarSm}>RC</span>
          </span>
          <span><span className={bc.badgeBlue}>Pre-Construction</span></span>
        </div>
      </div>
      <div className={bc.totalRow}>Total: 1/1</div>
    </div>
  );
}

/* ===================== Properties ===================== */
function PropertiesView() {
  return (
    <div className={bc.content}>
      <h2 className={bc.greeting} style={{ marginBottom: 18 }}>Properties</h2>
      <div className={bc.toolbar}>
        <div className={bc.search} style={{ maxWidth: 320 }}><FiSearch size={14} /> Search for properties</div>
        <div className={bc.toolbarRight}>
          <button type="button" className={bc.newBtn}>+ Add property</button>
          <button type="button" className={bc.ghostBtn}><FiFilter size={13} /> Filters</button>
        </div>
      </div>
      <div className={bc.propCard} style={{ width: 300, padding: 0, overflow: 'hidden' }}>
        <div className={bc.propMap}><FiMapPin size={24} color="var(--bc-accent)" /></div>
        <div style={{ padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className={bc.tSub}>Unassigned</span>
            <span className={bc.tSub}>· SFR</span>
            <span className={bc.badgeGreen}>Active Project</span>
          </div>
          <div style={{ fontWeight: 600, fontSize: 12 }}>1450 Market Street, Austin, TX 78701</div>
        </div>
      </div>
      <div className={bc.totalRow}>Total: 1/1</div>
    </div>
  );
}

/* ===================== Calendar ===================== */
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const CAL_PREV = [26, 27, 28, 29, 30]; // May 1 2026 is a Friday
const CAL_EVENTS = {
  10: 'prj-0024',
  13: 'RFI-0002',
  14: 'RFI-0002',
  18: 'RFI-0064',
  20: 'RFI-0064',
  22: 'prj-0027',
};

function CalendarView() {
  const cells = [];
  CAL_PREV.forEach((d) => cells.push({ d, muted: true }));
  for (let d = 1; d <= 31; d += 1) cells.push({ d, muted: false });
  let trailing = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ d: trailing, muted: true });
    trailing += 1;
  }

  return (
    <div className={bc.content}>
      <div className={bc.calBar}>
        <div className={bc.pending}>
          <FiChevronLeft size={15} />
          <span className={bc.cardTitle}>May 2026</span>
          <FiChevronRight size={15} />
          <button type="button" className={bc.ghostBtn} style={{ marginLeft: 10 }}>Today</button>
        </div>
        <div className={bc.calViews}>
          {['Day', 'Week', 'Month', 'List'].map((v) => (
            <span key={v} className={`${bc.calViewItem} ${v === 'Month' ? bc.calViewActive : ''}`}>{v}</span>
          ))}
          <button type="button" className={bc.ghostBtn}><FiFilter size={13} /> Filters</button>
        </div>
      </div>
      <div className={bc.card}>
        <div className={bc.calGrid}>
          {DOW.map((d) => <div key={d} className={bc.calDow}>{d}</div>)}
          {cells.map((c, i) => (
            <div key={i} className={bc.calCell}>
              {c.muted ? (
                <div className={`${bc.calNum} ${bc.calFaint}`}>{c.d}</div>
              ) : c.d === 27 ? (
                <div className={bc.calNumToday}>27</div>
              ) : (
                <div className={bc.calNum}>{c.d}</div>
              )}
              {!c.muted && CAL_EVENTS[c.d] && <span className={bc.calEvent}>{CAL_EVENTS[c.d]}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== Users ===================== */
const USER_COLS = '2.2fr 0.9fr 2fr 0.8fr 0.5fr';
const USERS = [
  ['Jordan Avery', 'jordan.avery@northwind.build', 'JA', 'Austin, Denver, Phoenix, Nashville'],
  ['Riley Chen', 'riley.chen@northwind.build', 'RC', 'N/A'],
];

function UsersView() {
  return (
    <div className={bc.content}>
      <h2 className={bc.greeting} style={{ marginBottom: 18 }}>All Users</h2>
      <div className={bc.toolbar}>
        <div className={bc.search} style={{ maxWidth: 360 }}><FiSearch size={14} /> Search</div>
        <div className={bc.toolbarRight}>
          <button type="button" className={bc.newBtn}>+ Add user</button>
          <button type="button" className={bc.ghostBtn}><FiFilter size={13} /> Filters</button>
          <button type="button" className={bc.ghostBtn}>Actions ▾</button>
        </div>
      </div>
      <div className={bc.card}>
        <div className={bc.cardTitle} style={{ marginBottom: 14 }}>Users (3)</div>
        <div className={bc.tHead} style={{ gridTemplateColumns: USER_COLS }}>
          <span>Users</span><span>User Role</span><span>Market</span><span>Status</span><span>Actions</span>
        </div>
        {USERS.map(([name, email, initials, market]) => (
          <div key={email} className={bc.tRow} style={{ gridTemplateColumns: USER_COLS }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className={bc.avatar} style={{ width: 30, height: 30, fontSize: 11 }}>{initials}</span>
              <span>
                <div style={{ fontWeight: 600 }}>{name}</div>
                <div className={bc.tSub}>{email}</div>
              </span>
            </span>
            <span><span className={bc.badgeGreen}><FiShield size={10} /> Admin</span></span>
            <span className={bc.tSub}>{market}</span>
            <span className={bc.statusActive}>● Active</span>
            <span className={bc.tSub} style={{ fontSize: 16 }}>⋮</span>
          </div>
        ))}
      </div>
      <div className={bc.totalRow} style={{ textAlign: 'left' }}>Showing 1-2 of 3</div>
    </div>
  );
}

/* ===================== Analytics ===================== */
function Spark({ down }) {
  const pts = down
    ? '0,8 15,11 30,9 45,14 60,12 75,17 90,15 105,19 120,18'
    : '0,20 15,15 30,18 45,9 60,13 75,7 90,12 105,6 120,10';
  return (
    <svg viewBox="0 0 120 26" width="100%" height="26" preserveAspectRatio="none" style={{ marginTop: 10 }}>
      <polyline fill="none" stroke="var(--bc-accent)" strokeWidth="1.5" opacity="0.6" points={pts} />
    </svg>
  );
}

function StatCard({ label, value, no, down }) {
  return (
    <div className={bc.card}>
      <div className={bc.statLabel}>{label}</div>
      <div className={no ? bc.statNo : bc.statBig}>{value}</div>
      <Spark down={down} />
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className={bc.content}>
      <h2 className={bc.greeting} style={{ marginBottom: 4 }}>Analytics</h2>
      <div className={bc.tSub} style={{ marginBottom: 16 }}>Client performance metrics and delivery trends.</div>
      <div className={bc.statGrid}>
        <StatCard label="Active Project Count" value="1" />
        <StatCard label="Avg Project Scope Value" value="$48.50" down />
        <StatCard label="Dollars Per Day Completed" value="$0" />
        <StatCard label="On-Time Completion %" value="No data" no />
        <StatCard label="Early Completion %" value="No data" no down />
        <StatCard label="Late Completion %" value="No data" no />
      </div>
      <div className={bc.cardTitle} style={{ margin: '18px 0 12px' }}>Client KPIs</div>
      <div className={bc.statGrid4}>
        <StatCard label="Avg Change Order Approval" value="No data" no />
        <StatCard label="Avg Scope Client Review" value="No data" no down />
        <StatCard label="Avg Pending Client $" value="No data" no />
        <StatCard label="Projects Pending NTP" value="0 Pending NTP" />
      </div>
      <div className={bc.tSub} style={{ marginTop: 14 }}>Last refreshed: May 27, 2026, 7:34 AM</div>
    </div>
  );
}

const VIEWS = {
  home: HomeView,
  projects: ProjectsView,
  properties: PropertiesView,
  calendar: CalendarView,
  users: UsersView,
  analytics: AnalyticsView,
};

export default function BuildCoreDemo() {
  const [active, setActive] = useState('home');
  const [navOpen, setNavOpen] = useState(false);
  const View = VIEWS[active] ?? HomeView;

  return (
    <div className={styles.mock}>
      <div className={styles.mockInner}>
      {/* dark browser chrome */}
      <div className={styles.mockChrome}>
        <div className={styles.row} style={{ gap: 10 }}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dim} style={{ fontSize: 12, marginLeft: 14 }}>
            buildcore · app.buildcore.io/{active}
          </span>
        </div>
        <span className={styles.ok} style={{ fontSize: 12 }}>● live</span>
      </div>

      {/* light app */}
      <div className={bc.app}>
        {navOpen && <div className={bc.backdrop} onClick={() => setNavOpen(false)} />}
        <nav className={`${bc.sidebar} ${navOpen ? bc.sidebarOpen : ''}`}>
          <div className={bc.logo}>
            <span className={bc.logoMark}>B</span>
            <span>BuildCore</span>
          </div>
          <div className={bc.workspace}>
            <span className={bc.workspaceName}>Northwind Builders</span>
            <span className={bc.workspaceRole}>Admin</span>
          </div>
          {NAV.map((n) => {
            const Icon = n.icon;
            return (
              <button
                key={n.key}
                type="button"
                className={`${bc.navItem} ${n.key === active ? bc.navActive : ''}`}
                onClick={() => { setActive(n.key); setNavOpen(false); }}
              >
                <span className={bc.navIcon}><Icon size={16} /></span>
                <span>{n.label}</span>
              </button>
            );
          })}
          <div className={bc.navSpacer} />
          <button type="button" className={`${bc.navItem} ${bc.navBottom}`}>
            <span className={bc.navIcon}><FiSettings size={16} /></span><span>Settings</span>
          </button>
          <button type="button" className={`${bc.navItem} ${bc.navBottom}`}>
            <span className={bc.navIcon}><FiHelpCircle size={16} /></span><span>Help &amp; getting started</span>
          </button>
        </nav>

        <div className={bc.main}>
          <div className={bc.topbar}>
            <button
              type="button"
              className={bc.appMenuBtn}
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <FiMenu size={18} />
            </button>
            <div className={bc.search}><FiSearch size={14} /> Search…</div>
            <div className={bc.topRight}>
              <FiBell size={16} />
              <span className={bc.avatar}>J</span>
              <button type="button" className={bc.logout}>Logout</button>
            </div>
          </div>

          <View />
        </div>
      </div>

      <div className={styles.mockFooter}>
        $ buildcore · in development · construction management SaaS · use the sidebar to navigate
      </div>
      </div>
    </div>
  );
}
