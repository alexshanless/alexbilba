import { ServiceDesignIcon, ServiceDevelopmentIcon, ServiceProjectManagementIcon, ServiceSEOIcon, ServiceAutomationIcon } from '../icons/TechIcons';

const Services = () => {
  return (
    <div className='section-card'>
      <h3>Services</h3>
      <div className='tools-icons'>
        <div className='tool-icon service-design' title='Design'>
          <ServiceDesignIcon />
        </div>
        <div className='tool-icon service-development' title='Development'>
          <ServiceDevelopmentIcon />
        </div>
        <div className='tool-icon service-project-management' title='Project Management'>
          <ServiceProjectManagementIcon />
        </div>
        <div className='tool-icon service-seo' title='SEO'>
          <ServiceSEOIcon />
        </div>
        <div className='tool-icon service-automation' title='Automation'>
          <ServiceAutomationIcon />
        </div>
      </div>
    </div>
  );
};

export default Services;