import ExperienceCard from './ExperienceCard';

const ExperienceColumn = () => {
	const experiences = [
		{
			title: 'Lead Designer & Project Manager',
			company: 'Valorem Project',
			period: '2023 - present',
			responsibilities: [
				'Leading design for property management web & mobile apps',
				'Managing user research, wireframes, and prototypes',
				'Overseeing development sprints using Agile methods',
				'Creating high-fidelity designs in Figma',
			],
		},
		{
			title: 'Freelance Designer',
			company: 'Web Designer & Webflow Developer',
			period: '2017 - present',
			responsibilities: [
				'Designed and developed 25+ websites using Webflow',
				'Achieved Upwork Top Rated status with 30+ happy clients',
				'Delivered projects for diverse industries',
				'Specialized in conversion optimization and SEO',
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
