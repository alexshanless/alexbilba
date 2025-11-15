import AvatarCard from './AvatarCard';
import BioCard from './BioCard';

const ProfileSection = () => {
  return (
    <div className='profile-section'>
      <AvatarCard />
      <BioCard />
    </div>
  );
};

export default ProfileSection;