import React, { useState } from 'react';

function Button({ text, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    padding: '10px 20px',
    backgroundColor: '#272e5c', // Color azul oscuro por defecto
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    width: '100%',
    transition: 'background-color 0.3s ease',
  };

  const activeStyle = {
    ...baseStyle,
    backgroundColor: '#b20710', // Color rojo al activarse
  };

  return (
    <button 
      className="custom-button" 
      onClick={onClick}
      style={isHovered ? activeStyle : baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

export default Button;