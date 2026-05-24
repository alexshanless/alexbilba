import embrLogo from '../assets/EMBR-Logo.png';
import jnaLogo from '../assets/JNA-logo.png';
import musclebeesLogo from '../assets/musclebees-logo.png';
import csmediaLogo from '../assets/C.s.media-logo.png';
import lustreLogo from '../assets/lustre-logo.png';
import adheroLogo from '../assets/adhero-logo.png';
import blurLogo from '../assets/blur-logo.png';
import dogBandanaLogo from '../assets/dog-bandana-logo.png';
import robAdamsonLogo from '../assets/rob-adamson-logo.png';
import fowldrakeLogo from '../assets/fowldrake-logo.webp';
import materiallyLogo from '../assets/materially-logo.jpeg';
import beyondtheguidebookLogo from '../assets/beyondtheguidebook-logo.png';
import marjorieLogo from '../assets/marjorie-logo.svg';
import hevenLogo from '../assets/heven-logo.webp';
import educationAdvancedLogo from '../assets/education-advanced-logo.png';

export const projectsData = [
	{
		id: 1,
		title: 'BuildCore',
		description:
			'Construction management SaaS. Building the platform end to end: React frontend, AWS backend (Lambda, DynamoDB, Cognito, S3), role-based access, document pipelines, automated reporting.',
		image: null,
		tags: ['Fullstack'],
		link: null,
		featured: true,
	},
	{
		id: 2,
		title: 'Discord Community Bots',
		description:
			'Serverless Discord bots for gaming communities. Event-driven architecture on AWS Lambda, DynamoDB for state, webhook integrations. Built for fun, kept running for years.',
		image: null,
		tags: ['Fullstack'],
		link: null,
		featured: true,
	},
	{
		id: 3,
		title: 'EMBR Solar',
		description:
			'Solar company site built to convert. The standout is a 3D animation that took serious work to get right — smooth on load, not a liability.',
		image: embrLogo,
		tags: ['Webflow'],
		link: 'https://www.embrsolar.com/',
		featured: true,
	},
	{
		id: 4,
		title: 'JNA Group',
		description:
			'Structural consulting firm with complex technical services and two very different audiences — businesses and homeowners. The challenge was presenting that range without losing either.',
		image: jnaLogo,
		tags: ['Webflow'],
		link: 'https://jna-37757f.webflow.io/',
		featured: true,
	},
	{
		id: 5,
		title: 'Muscle Bees',
		description:
			'E-commerce build for a UK sports nutrition brand. Conversion-first: product benefits up front, free shipping prominent, checkout friction removed.',
		image: musclebeesLogo,
		tags: ['Shopify'],
		link: 'https://www.musclebees.co.uk/',
		featured: true,
	},
	{
		id: 6,
		title: 'C.S. Media',
		description:
			'Custom marketing services company with a non-standard pitch — goal-based, not service-based. Built the site around that angle so the positioning actually lands.',
		image: csmediaLogo,
		tags: ['Webflow', 'Design'],
		link: 'https://www.csmediaoc.com/',
		featured: true,
	},
	{
		id: 7,
		title: 'Marjorie Restaurant',
		description:
			"Marjorie needed to double down on existing SEO traffic, build brand loyalty, and convert more direct buyers. Rebuilt the digital presence to match the brand's commitment to climate, health, and equity.",
		image: marjorieLogo,
		tags: ['Webflow', 'Design'],
		link: 'https://www.marjorierestaurant.com/',
		featured: true,
	},
	{
		id: 8,
		title: 'Adhero',
		description:
			'Website for a UGC creation agency. Showcases world-class content work without overshadowing the work itself — clean layout, strong portfolio sections.',
		image: adheroLogo,
		tags: ['Webflow'],
		link: 'https://www.adhero.co/',
		featured: false,
	},
	{
		id: 9,
		title: 'Dog Bandana Co',
		description:
			'Pet accessories e-commerce. The challenge was making bandanas feel aspirational — styled product presentation, a clean browsing experience, brand voice that speaks to dog people.',
		image: dogBandanaLogo,
		tags: ['Shopify', 'Webflow'],
		link: 'https://dogbandanaco.com/',
		featured: false,
	},
	{
		id: 10,
		title: 'Blur',
		description:
			'Architectural design studio portfolio. Minimalist by necessity — the work has to speak. Clean grid, restrained type, nothing fighting for attention.',
		image: blurLogo,
		tags: ['Webflow'],
		link: 'https://blur-4c9680.webflow.io/',
		featured: false,
	},
	{
		id: 11,
		title: 'Rob Adamson',
		description:
			'Online portfolio for an artist. Built to surface the full body of work without visual noise getting in the way.',
		image: robAdamsonLogo,
		tags: ['Webflow'],
		link: 'https://rob-adamson-md.webflow.io/',
		featured: false,
	},
	{
		id: 12,
		title: 'The Fowl Drake',
		description:
			'Specialty food retailer e-commerce built from scratch. Custom Shopify theme, full product catalog, and checkout integration — nothing off-the-shelf.',
		image: fowldrakeLogo,
		tags: ['Shopify'],
		link: 'https://fowldrake.com/',
		featured: false,
	},
	{
		id: 13,
		title: 'Materially',
		description:
			'Platform for aggregates procurement — connecting buyers, suppliers, and haulers. Streamlines sales and dispatch operations with real-time connectivity across the supply chain.',
		image: materiallyLogo,
		tags: ['Webflow'],
		link: 'https://www.materially.com/',
		featured: false,
	},
	{
		id: 14,
		title: 'Beyond the Guidebook',
		description:
			'Small group travel company that needed bookings, tour showcases, and a voice distinct from big travel brands. Built to feel personal at every touchpoint.',
		image: beyondtheguidebookLogo,
		tags: ['Webflow'],
		link: 'https://www.beyondtheguidebooktours.com/',
		featured: false,
	},
	{
		id: 15,
		title: 'Big Health',
		description:
			'Digital therapeutics company in the mental health space. The site needed to feel trustworthy and clinical without being cold — evidence-based credibility, human tone.',
		image: null,
		tags: ['Webflow'],
		link: 'https://www.bighealth.com/',
		featured: false,
	},
	{
		id: 16,
		title: 'Lustre',
		description:
			'Wellness brand for an infrared sauna studio. Showcases private suite bookings and additional therapies — Normatec, Red Light, Halo Salt — with an aesthetic that matches the experience.',
		image: lustreLogo,
		tags: ['Webflow'],
		link: 'https://www.lustreinfraredsauna.com/',
		featured: false,
	},
	{
		id: 17,
		title: 'Heven',
		description:
			'Strategic management services for small to medium businesses — capital, scaling support, and operational services. Built to communicate expertise without sounding like every other consulting site.',
		image: hevenLogo,
		tags: ['Webflow'],
		link: 'https://www.heven.com.au/',
		featured: false,
	},
	{
		id: 18,
		title: 'Valorem',
		description:
			'Enterprise procurement solutions provider. B2B information architecture that makes complex purchasing services legible — and positions them as the expert without burying the pitch.',
		image: null,
		tags: ['Design'],
		link: 'https://www.valoremps.com/',
		featured: false,
	},
	{
		id: 19,
		title: 'Education Advanced',
		description:
			'EdTech platform covering testing, assessment, evaluation, and graduation tracking. Built to present a broad feature set without making educators feel overwhelmed.',
		image: educationAdvancedLogo,
		tags: ['Webflow'],
		link: 'https://www.educationadvanced.com/',
		featured: false,
	},
];
