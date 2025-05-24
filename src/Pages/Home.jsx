import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PetStay</h1>
          <p>Your trusted partner in pet care services. We treat your pets like family.</p>
          <Link to="/book-now" className="btn btn-accent">Find a Pet Sitter</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive care for your beloved pets</p>
          <div className="grid grid-3">
            <div className="card">
              <div className="service-icon">🐾</div>
              <h3>Pet Sitting</h3>
              <p>Professional care for your pets in their own home, maintaining their routine and comfort.</p>
              <Link to="/services" className="btn btn-primary mt-3">Learn More</Link>
            </div>
            <div className="card">
              <div className="service-icon">🚶</div>
              <h3>Dog Walking</h3>
              <p>Regular exercise and outdoor time for your dogs, keeping them healthy and happy.</p>
              <Link to="/services" className="btn btn-primary mt-3">Learn More</Link>
            </div>
            <div className="card">
              <div className="service-icon">🌙</div>
              <h3>Overnight Care</h3>
              <p>24/7 attention and care for your pets, ensuring they're never alone.</p>
              <Link to="/services" className="btn btn-primary mt-3">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple steps to get started</p>
          <div className="grid grid-3">
            <div className="card">
              <div className="step-number">1</div>
              <h3>Create a Profile</h3>
              <p>Sign up and create your pet's profile with their preferences and needs.</p>
            </div>
            <div className="card">
              <div className="step-number">2</div>
              <h3>Find a Sitter</h3>
              <p>Browse and select from our network of trusted, verified pet sitters.</p>
            </div>
            <div className="card">
              <div className="step-number">3</div>
              <h3>Book & Relax</h3>
              <p>Schedule your service and enjoy peace of mind knowing your pet is in good hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Pet Parents Say</h2>
          <p className="section-subtitle">Trusted by thousands of happy pet owners</p>
          <div className="grid grid-2">
            <div className="card">
              <div className="testimonial-content">
                <p>"Amazing service! My dog loves his regular walks with PetStay. The sitters are professional and caring."</p>
                <div className="testimonial-author">
                  <img src="/src/assets/avatar1.jpg" alt="Sarah M." className="testimonial-avatar" />
                  <div>
                    <h4>Sarah M.</h4>
                    <p>Dog Parent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="testimonial-content">
                <p>"Reliable and caring sitters. I can travel worry-free now knowing my pets are in good hands!"</p>
                <div className="testimonial-author">
                  <img src="/src/assets/avatar2.jpg" alt="John D." className="testimonial-avatar" />
                  <div>
                    <h4>John D.</h4>
                    <p>Cat Parent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to give your pet the care they deserve?</h2>
          <p>Join thousands of happy pet parents who trust PetStay</p>
          <Link to="/book-now" className="btn btn-accent">Book Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
