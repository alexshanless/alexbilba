const ProjectCard = ({ project, layout = 'default' }) => {
  return (
    <a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      className={`bento-project-card bento-${layout}`}
    >
      <div className='bento-project-placeholder'></div>
      <div className='bento-project-content'>
        <div className='bento-project-header'>
          <h3>{project.title}</h3>
          {project.image && (
            <div className='bento-project-logo'>
              <img src={project.image} alt={project.title} loading='lazy' />
            </div>
          )}
        </div>
        <div className='project-tags'>
          {project.tags.map((tag, index) => (
            <span key={index} className='project-tag'>
              {tag}
            </span>
          ))}
        </div>
        <p className='bento-project-description'>{project.description}</p>
        <span className='bento-project-link'>
          View Project →
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
