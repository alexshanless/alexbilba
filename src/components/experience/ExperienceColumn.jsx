import ExperienceCard from './ExperienceCard';

const ExperienceColumn = () => {
	const experiences = [
		{
			title: 'Fullstack Engineer',
			company: 'BuildCore',
			period: 'Jun 2025 - Current',
			responsibilities: [
				'Building the construction management platform end to end',
				'React app for property managers, AWS backend (Lambda, DynamoDB, Cognito, S3)',
				'Shipped role-based access, document pipelines, real-time notifications',
				'Built automated reporting system tracking project health across the portfolio',
			],
		},
		{
			title: 'Technical PM & UI/UX Designer',
			company: 'Valorem',
			period: '2023 - 2025',
			responsibilities: [
				'Led product design for property management web and mobile apps',
				'Ran user research, wireframes, prototypes, and Figma high-fidelity designs',
				'Managed development sprints using Agile methods',
			],
		},
		{
			title: 'Freelance Developer & Designer',
			company: 'Self-employed',
			period: '2017 - Present',
			responsibilities: [
				'Shipped 25+ websites and web apps for clients across multiple industries',
				'Upwork Top Rated with 100% Job Success Score',
				'Specialized in Webflow builds, then expanded into React and AWS',
				'Conversion optimization and SEO baked into every build',
			],
		},
	];

	return (
		<div className='experience-column'>
			{experiences.map((experience, index) => (
				<ExperienceCard
					key={index}
					title={experience.title}
					company={experience.company}
					period={experience.period}
					responsibilities={experience.responsibilities}
				/>
			))}
		</div>
	);
};

export default ExperienceColumn;
