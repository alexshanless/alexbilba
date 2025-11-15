import { DesignIcon, CodeIcon, InnovationIcon } from '../icons/UtilityIcons';

const Interests = () => {
  return (
    <div className='section-card'>
      <h3>Interests</h3>
      <div className='interests'>
        <div className='interest-item'>
          <DesignIcon />
          <span>UI/UX Design</span>
        </div>
        <div className='interest-item'>
          <CodeIcon />
          <span>Web Development</span>
        </div>
        <div className='interest-item'>
          <InnovationIcon />
          <span>Innovation</span>
        </div>
      </div>
    </div>
  );
};

export default Interests;