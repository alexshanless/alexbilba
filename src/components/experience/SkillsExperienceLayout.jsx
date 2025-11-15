import SkillsColumn from '../skills/SkillsColumn';
import ExperienceColumn from './ExperienceColumn';

const SkillsExperienceLayout = () => {
  return (
    <div className='skills-experience-layout'>
      <SkillsColumn />
      <ExperienceColumn />
    </div>
  );
};

export default SkillsExperienceLayout;