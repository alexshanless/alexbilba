import { EmailIcon, CalendarIcon } from '../icons/UtilityIcons';

const CTACard = () => {
  return (
    <div className='cta-card'>
      <h3>Let's Work Together</h3>
      <p>Have a project in mind? I'd love to hear about it.</p>
      <div className='cta-actions'>
        <a
          href='mailto:hello@alexbilba.com'
          className='cta-button primary'
        >
          <EmailIcon />
          <span>Get in Touch</span>
        </a>
        <a href='https://calendly.com/alexbilba/30min' target='_blank' rel='noopener noreferrer' className='cta-button secondary'>
          <CalendarIcon />
          <span>Schedule a Call</span>
        </a>
      </div>
    </div>
  );
};

export default CTACard;