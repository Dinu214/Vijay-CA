import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos/dist/aos.js';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <header className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Transform Your Life</h1>
        <p>Unlock your potential with powerful insights and motivation</p>
        <Link to="/invite" className="cta-btn" style={{
          display: 'inline-block',
          padding: '1rem 2.5rem',
          background: 'var(--accent-color)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1.1rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'var(--transition)',
          opacity: '0',
          transform: 'translateY(30px)',
          animation: 'fadeInUp 1s ease forwards 0.6s'
        }}>
          Book a Session
        </Link>
      </div>
    </header>
  );
};

export default Hero;