const AvatarCard = () => {
  return (
    <div className='avatar-card'>
      <div className='avatar-placeholder'>
        <div className='profile-picture'>
          <img src='../public/images/profile-pic.jpeg' alt='Alex Bilba' />
        </div>
      </div>
      <div className='status-indicator'>
        <div className='status-dot'></div>
        <span>Limited Availability</span>
      </div>
    </div>
  );
};

export default AvatarCard;
