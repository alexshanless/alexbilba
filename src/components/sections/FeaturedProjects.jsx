import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';

const FeaturedProjects = () => {
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className='section-card'>
      <h3>Featured Projects</h3>
      <div className='projects-logos'>
        {featuredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='project-logo'
            title={project.title}
          >
            <img src={project.image} alt={project.title} />
          </a>
        ))}
      </div>
      <Link to='/projects' className='view-all-link'>
        View All Projects →
      </Link>
    </div>
  );
};

export default FeaturedProjects;