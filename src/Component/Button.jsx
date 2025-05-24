import React from 'react';
import '../App.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = 'custom-button';
  const variantClass = `button-${variant}`;
  const sizeClass = `button-${size}`;
  
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 