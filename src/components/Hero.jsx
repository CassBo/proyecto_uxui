import React from 'react';
import Button from './Button';
import '../App.css';

// Estilos para el componente Hero
const heroStyles = {
  position: 'relative',
  width: '100%',
  height: '60vh', // 60% de la altura de la pantalla
  borderRadius: '8px',
  overflow: 'hidden',
  color: 'white',
  display: 'flex',
  alignItems: 'flex-end', // Alinea el contenido en la parte inferior
  padding: '40px',
  marginBottom: '40px',
};

const heroImageStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 1,
};

const heroOverlayStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 80%)', // Gradiente oscuro desde abajo
  zIndex: 2,
};

const heroContentStyles = {
  position: 'relative',
  zIndex: 3,
  maxWidth: '600px',
};

const heroTitleStyles = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
};

const heroSubtitleStyles = {
  fontSize: '1.2rem',
  marginBottom: '20px',
  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
};

function Hero({ pelicula, onVerDetalle }) {
  if (!pelicula) {
    return null; // No mostrar nada si no hay película
  }

  return (
    <div style={heroStyles}>
      <img src={pelicula.imagen} alt={pelicula.titulo} style={heroImageStyles} />
      <div style={heroOverlayStyles}></div>
      <div style={heroContentStyles}>
        <h2 style={heroTitleStyles}>{pelicula.titulo}</h2>
        <p style={heroSubtitleStyles}>{pelicula.sinopsis}</p>
        <Button 
          text="Ver Detalles" 
          onClick={() => onVerDetalle(pelicula)}
          style={{ width: 'auto', padding: '12px 24px', fontSize: '1.1rem' }}
        />
      </div>
    </div>
  );
}

export default Hero;