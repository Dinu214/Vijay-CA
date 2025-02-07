import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';

const CoachingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="coaching-section" data-aos="fade-up">
      <div className="coaching-info">
        <h2 className="coaching-title">Expert guidance for your path</h2>
        <div className="stats-container">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
            <h3>81%</h3>
            <p>improved time management</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <h3>70%</h3>
            <p>increased work performance</p>
          </div>
        </div>
        <p className="coaching-description">
          Achieve lasting transformation in all areas of your life. Discover the support 
          you need to do more, be more and serve more with one-on-one strategy sessions 
          with our expert results coaches.
        </p>
        <div className="coaching-buttons">
          <Link to="/invite" className="coaching-btn">Results coaching</Link>
          <Link to="/invite" className="coaching-btn">Business coaching</Link>
        </div>
      </div>
      <div className="coaching-image" data-aos="fade-left">
        {/* Placeholder for image/video */}
      </div>
    </section>
  );
};

export default CoachingSection;