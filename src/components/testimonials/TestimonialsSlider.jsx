import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/UtilityIcons';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've worked with Alex many times, and I am never disappointed by his professionalism, speed, and capabilities.",
      author: "Chris Brescia",
      company: "CTG Entertainment"
    },
    {
      id: 2,
      text: "Another great project with Alexandr! He really has a knack for understanding exactly what you need and delivering it in a timely manner. Can't go wrong with this guy!",
      author: "Larry Lorucey",
      company: "Lourcey Photography"
    },
    {
      id: 3,
      text: "Alex was great to work with! He was fast and able to run with the little bit of info that I gave him to create a great app for us. I will definitely use Alex again in the future! Thanks for your help Alex! We really appreciate you!",
      author: "Evan Edgeworth",
      company: "BuildCore"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='section-card'>
      <div className='testimonials-header'>
        <h3>Client Testimonials</h3>
        <div className='testimonial-nav'>
          <button className='nav-button' onClick={prevTestimonial}>
            <ChevronLeftIcon />
          </button>
          <div className='testimonial-dots'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
          <button className='nav-button' onClick={nextTestimonial}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className='testimonial-slider'>
        <div className='testimonial'>
          <p>"{testimonials[currentTestimonial].text}"</p>
          <div className='testimonial-author'>
            <strong>{testimonials[currentTestimonial].author}</strong>
            <span>{testimonials[currentTestimonial].company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;