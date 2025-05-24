import React from 'react';
import '../App.css';

const Section = ({ 
  children, 
  title,
  subtitle,
  className = '',
  background = 'light',
  ...props 
}) => {
  return (
    <section 
      className={`custom-section section-${background} ${className}`}
      {...props}
    >
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section; 