import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewProject = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="project-modal-overlay" onClick={handleBackdropClick}>
      <div className="project-modal">
        <button className="project-modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {project.image && (
          <div className="project-modal-logo">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        <h2 className="project-modal-title">{project.title}</h2>

        <p className="project-modal-description">{project.description}</p>

        <div className="project-modal-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-modal-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-modal-actions">
          <button className="project-modal-btn primary" onClick={handleViewProject}>
            View Project →
          </button>
          <button className="project-modal-btn secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
