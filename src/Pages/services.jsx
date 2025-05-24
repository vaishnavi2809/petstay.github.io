import React from 'react';
import Section from '../Component/Section';
import Card from '../Component/Card';
import Button from '../Component/Button';
import '../App.css';

const Services = () => {
  const services = [
    {
      title: "Pet Sitting",
      subtitle: "Professional in-home care",
      description: "Our experienced pet sitters provide loving care in your home, maintaining your pet's routine and comfort.",
      features: [
        "Daily feeding and fresh water",
        "Regular exercise and playtime",
        "Medication administration if needed",
        "Mail and plant care",
        "Security checks"
      ],
      price: "From 3000/day"
    },
    {
      title: "Dog Walking",
      subtitle: "Regular exercise for your dog",
      description: "Keep your dog healthy and happy with our professional dog walking services.",
      features: [
        "30 or 60-minute walks",
        "Individual or group walks",
        "GPS tracking of walks",
        "Water and treat breaks",
        "Detailed walk reports"
      ],
      price: "From 1500/walk"
    },
    {
      title: "Overnight Care",
      subtitle: "24/7 attention and care",
      description: "Our overnight care ensures your pet receives constant attention and care throughout the night.",
      features: [
        "Overnight stays in your home",
        "Evening and morning care",
        "Security and home care",
        "Regular updates and photos",
        "Emergency support"
      ],
      price: "From 2000/night"
    }
  ];

  return (
    <div className="services-page">
      <Section 
        title="Our Services" 
        subtitle="Professional pet care services tailored to your needs"
        background="light"
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <Card 
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              className="service-card"
            >
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="service-price">{service.price}</div>
              <Button 
                variant="primary" 
                size="medium"
                onClick={() => window.location.href = '/book-now'}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section 
        title="Why Choose Our Services?" 
        background="dark"
      >
        <div className="features-grid">
          <Card className="feature-card">
            <h3>Experienced Caregivers</h3>
            <p>All our pet sitters are thoroughly vetted and have years of experience in pet care.</p>
          </Card>
          <Card className="feature-card">
            <h3>Customized Care</h3>
            <p>We tailor our services to meet your pet's specific needs and preferences.</p>
          </Card>
          <Card className="feature-card">
            <h3>Peace of Mind</h3>
            <p>Regular updates and photos keep you connected with your pet while you're away.</p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Services;
