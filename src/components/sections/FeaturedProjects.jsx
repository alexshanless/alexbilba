import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import ProjectModal from '../projects/ProjectModal';

const FeaturedProjects = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className='section-card'>
      <h3>Featured Projects</h3>
      <div className='projects-logos'>
        {featuredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            onClick={(e) => handleProjectClick(e, project)}
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

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default FeaturedProjects;