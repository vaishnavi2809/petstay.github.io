import React from 'react';
import '../App.css';

const Card = ({ 
  children, 
  title,
  subtitle,
  className = '',
  ...props 
}) => {
  return (
    <div className={`custom-card ${className}`} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card; 