import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Webflow', 'Shopify', 'Design', 'End-to-End'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project =>
        project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
      );

  return (
    <div className='projects-page'>
      <div className='projects-header'>
        <Link to='/' className='back-home-link'>← Back to Home</Link>
        <h1>My Projects</h1>
        <p>Explore my work across design, development, and project management</p>
      </div>

      <div className='projects-filters'>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className='bento-projects-grid'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            const layouts = ['wide', 'tall', 'default', 'default'];
            const layout = layouts[index % layouts.length];
            return <ProjectCard key={project.id} project={project} layout={layout} />;
          })
        ) : (
          <p className='no-projects'>No projects found for this filter.</p>
        )}
      </div>

      <div className='projects-footer'>
        <h2>Let's work together</h2>
        <p>Have a project in mind? I'd love to hear about it.</p>
        <div className='footer-actions'>
          <a href='mailto:your.email@example.com' className='cta-button primary'>
            Get in Touch
          </a>
          <Link to='/' className='cta-button secondary'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
