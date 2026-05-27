/* ============================================================
   /work page data.
   Bodies are written from real research of each live site, not
   placeholders. `outcome` is intentionally null on every project
   until Alex supplies real numbers — the card omits the row when
   it's empty (never ship a fabricated metric).
   `thumb` is a key resolved to a component in WorkPage.jsx.
   Order: BuildCore (flagship) → client work newest-first → side.
   ============================================================ */

// Featured + grid. Order = display order. BuildCore is featured (WIP).
export const WORK_PROJECTS = [
  {
    id: 'buildcore',
    featured: true,
    year: '2025',
    name: 'BuildCore',
    subtitle: 'construction management SaaS',
    url: 'private',
    link: null,
    status: 'wip', // in active development, not yet public
    category: 'fullstack',
    thumb: 'buildcore',
    body:
      "The platform I'm building right now. Construction-management SaaS for a real team, built solo and end to end: React frontend, AWS serverless backend, a custom design system. The architecture is deliberately small enough for one engineer to hold in their head.",
    built:
      'auth and role-based access, document upload pipelines, a multi-tenant data model, automated report generation, and a React frontend that does not feel like enterprise software.',
    tags: ['fullstack', 'b2b', 'saas'],
    stack: 'React · Lambda · DynamoDB · Cognito · S3 · API Gateway · CDK',
    outcome: null,
  },
  {
    id: 'jna',
    year: '2024',
    name: 'JNA Group',
    url: 'jnagroup.net.au',
    link: 'https://www.jnagroup.net.au/',
    status: 'live',
    category: 'marketing site',
    thumb: 'jna',
    body:
      'Structural-engineering consultancy serving three audiences that barely overlap: commercial clients, homeowners, and public/community projects. One site, several front doors, no compromise on any of them.',
    tags: ['marketing site', 'IA', 'copy'],
    stack: 'Webflow · CMS · copywriting',
    outcome: null,
  },
  {
    id: 'csmedia',
    year: '2024',
    name: 'C.S. Media',
    url: 'csmediaoc.com',
    link: 'https://www.csmediaoc.com/',
    status: 'live',
    category: 'marketing site',
    thumb: 'csm',
    body:
      'Digital marketing agency built around a goal-first pitch: custom content, video, and a local creator network, sold as outcomes rather than a service menu. Rebuilt the site so the positioning lands — the whole page is the deck.',
    tags: ['marketing site', 'brand', 'copy'],
    stack: 'Webflow · brand design · positioning',
    outcome: null,
  },
  {
    id: 'embr',
    year: '2023',
    name: 'EMBR Solar',
    url: 'embrsolar.com',
    link: 'https://www.embrsolar.com/',
    status: 'live',
    category: 'marketing site',
    thumb: 'embr',
    body:
      'Marketing site for a residential solar installer offering purchase, lease, or subscription plans. Anchored by a 3D hero animation that had to load smooth and never become a liability. Conversion-tuned from the first wireframe, copy rewritten alongside the build.',
    tags: ['marketing site', '3d', 'motion'],
    stack: 'Webflow · 3D hero · custom code',
    outcome: null,
  },
  {
    id: 'bees',
    year: '2021',
    name: 'Muscle Bees',
    url: 'musclebees.co.uk',
    link: 'https://www.musclebees.co.uk/',
    status: 'live',
    category: 'e-commerce',
    thumb: 'bees',
    body:
      'E-commerce build for a UK sports-nutrition retailer carrying premium brands like MuscleTech, Ghost, and Reflex. Conversion-first and mobile-first: product benefits up front, next-day delivery prominent, checkout friction stripped out.',
    tags: ['e-commerce', 'CRO'],
    stack: 'custom storefront · CRO · custom JS',
    outcome: null,
  },
  {
    id: 'bots',
    year: '2026',
    name: 'Discord Bots',
    url: 'github',
    link: null,
    status: 'side',
    category: 'side',
    thumb: 'bots',
    body:
      'Serverless Discord bot for a milsim community: member onboarding with callsigns, promotion votes and instant batch ceremonies, event timestamps that render in everyone’s local time, dice rolls, and a doctrine Q&A backed by an LLM. Event-driven on AWS Lambda with DynamoDB for state — still running, no babysitting.',
    tags: ['side', 'serverless'],
    stack: 'AWS Lambda · DynamoDB · Discord interactions · LLM',
    outcome: null,
  },
];

// Filter chips. Counts derive from WORK_PROJECTS categories.
export const WORK_FILTERS = ['all', 'fullstack', 'marketing site', 'e-commerce', 'side'];

// Archive = the real remaining portfolio projects (researched scope per site).
// `type` is the engagement category, not the platform. No fabricated dates.
// (Adhero, Valorem, Blur types are best guesses — confirm.)
export const WORK_ARCHIVE = [
  { name: 'Marjorie Restaurant', scope: 'restaurant · brand + SEO site', type: 'end-to-end', link: 'https://www.marjorierestaurant.com/' },
  { name: 'EdXeno', scope: 'edtech · college-prep app site', type: 'end-to-end', link: 'https://www.edxeno.com/' },
  { name: 'Adhero', scope: 'UGC creative agency · site', type: 'end-to-end', link: null },
  { name: 'Dog Bandana Co', scope: 'pet accessories · e-commerce', type: 'end-to-end · shopify', link: 'https://dogbandanaco.com/' },
  { name: 'Materially', scope: 'aggregates procurement platform', type: 'build only · webflow', link: null },
  { name: 'Big Health', scope: 'digital therapeutics · marketing site', type: 'migration', link: 'https://www.bighealth.com/' },
  { name: 'Education Advanced', scope: 'K-12 edtech platform · site', type: 'migration', link: 'https://www.educationadvanced.com/' },
  { name: 'Heven', scope: 'SMB advisory + investment · site', type: 'end-to-end', link: 'https://www.heven.com.au/' },
  { name: 'Beyond the Guidebook', scope: 'small-group travel · bookings', type: 'end-to-end', link: 'https://www.beyondtheguidebooktours.com/' },
  { name: 'Lustre', scope: 'infrared sauna studio · wellness site', type: 'end-to-end', link: 'https://www.lustreinfraredsauna.com/' },
  { name: 'The Fowl Drake', scope: 'waterfowl guide service · shop', type: 'end-to-end · shopify', link: 'https://fowldrake.com/' },
  { name: 'Valorem', scope: 'enterprise procurement · IA + design', type: 'design', link: 'https://www.valoremps.com/' },
  { name: 'Blur', scope: 'architecture studio · portfolio', type: 'end-to-end', link: null },
  { name: 'Rob Adamson', scope: 'artist portfolio', type: 'end-to-end · webflow', link: 'https://rob-adamson-md.webflow.io/' },
];
