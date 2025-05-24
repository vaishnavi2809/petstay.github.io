import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About PetStay</h1>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At PetStay, we believe that every pet deserves a loving and comfortable home away from home.
            Our mission is to connect pet owners with trusted pet sitters who will provide the same level
            of care and attention that you give to your furry family members.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Trusted Caregivers</h3>
              <p>All our pet sitters are thoroughly vetted and experienced in pet care.</p>
            </div>
            <div className="feature-card">
              <h3>Flexible Services</h3>
              <p>Choose from various services including home visits, overnight stays, and dog walking.</p>
            </div>
            <div className="feature-card">
              <h3>Peace of Mind</h3>
              <p>Regular updates and photos of your pet during their stay.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, PetStay was born from a simple idea: to make pet care accessible,
            reliable, and stress-free. We understand that leaving your pet in someone else's
            care can be challenging, which is why we've built a platform that prioritizes
            trust, transparency, and exceptional care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
