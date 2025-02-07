import { useState, useEffect } from 'react';
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';

const testimonials = [
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    title: "Former Prime Minister of the United Kingdom",
    bgColor: "#2c3e50"
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
    title: "Professional Boxer",
    bgColor: "#3498db"
  },
  {
    quote: "Peace begins with a smile.",
    author: "Mother Teresa",
    title: "Humanitarian",
    bgColor: "#e74c3c"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    title: "Former President of South Africa",
    bgColor: "#27ae60"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const handleTestimonialClick = (index) => {
    if (index === currentIndex || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="testimonials-section" data-aos="fade-up">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <blockquote 
              className="testimonial-quote"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {testimonials[currentIndex].quote}
            </blockquote>
            <div 
              className="testimonial-author"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {testimonials[currentIndex].author}
              <div className="author-title">
                {testimonials[currentIndex].title}
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-nav">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`testimonial-nav-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleTestimonialClick(index)}
            >
              <div 
                className="nav-image" 
                style={{ background: testimonial.bgColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;