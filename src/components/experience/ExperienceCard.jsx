const ExperienceCard = ({ title, company, period, responsibilities }) => {
  return (
    <div className='experience-card'>
      <h3>{title}</h3>
      <p className='company'>{company}</p>
      <span className='period'>{period}</span>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;