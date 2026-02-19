import React from 'react';

function Button({ text, onClick }) {
  return (
    <button 
      className="custom-button" 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#272e5c', // Color rojo típico de cine
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        width: '100%',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#b20710'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#e50914'}
    >
      {text}
    </button>
  );
}

export default Button;