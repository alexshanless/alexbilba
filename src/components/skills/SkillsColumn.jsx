import DesignTools from './DesignTools';
import Development from './Development';
import Location from './Location';
import Services from './Services';

const SkillsColumn = () => {
  return (
    <div className='skills-column'>
      <DesignTools />
      <Development />
      <Services />
      <Location />
    </div>
  );
};

export default SkillsColumn;
