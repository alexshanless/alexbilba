import { CodeIcon, DesignIcon, InnovationIcon } from '../icons/UtilityIcons';

const Interests = () => {
  return (
    <div className='section-card'>
      <h3>Interests</h3>
      <div className='interests'>
        <div className='interest-item'>
          <CodeIcon />
          <span>Fullstack Development</span>
        </div>
        <div className='interest-item'>
          <DesignIcon />
          <span>Product Design</span>
        </div>
        <div className='interest-item'>
          <InnovationIcon />
          <span>Automation</span>
        </div>
      </div>
    </div>
  );
};

export default Interests;