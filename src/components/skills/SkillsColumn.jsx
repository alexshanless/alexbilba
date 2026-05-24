import Stack from './Development';
import Location from './Location';
import Services from './Services';

const SkillsColumn = () => {
  return (
    <div className='skills-column'>
      <Stack />
      <Services />
      <Location />
    </div>
  );
};

export default SkillsColumn;
