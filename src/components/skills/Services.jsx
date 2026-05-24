import { ServiceDevelopmentIcon, ServiceDesignIcon, ServiceAutomationIcon } from '../icons/TechIcons';
import { FaWebflow } from 'react-icons/fa6';

const Services = () => {
  return (
    <div className='section-card'>
      <h3>What I Do</h3>
      <div className='services-list'>
        <div className='service-item'>
          <ServiceDevelopmentIcon />
          <span>Build fullstack web apps in React and AWS</span>
        </div>
        <div className='service-item'>
          <ServiceDesignIcon />
          <span>Design and ship product UIs</span>
        </div>
        <div className='service-item'>
          <FaWebflow />
          <span>Build websites in Webflow when that's the right tool</span>
        </div>
        <div className='service-item'>
          <ServiceAutomationIcon />
          <span>Automate workflows across Make, Zapier, and Monday</span>
        </div>
      </div>
    </div>
  );
};

export default Services;