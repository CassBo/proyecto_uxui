import React, { useState } from 'react';
import Button from './Button';
import '../App.css'; // Importamos estilos

function MovieCard({ title, image, description, onVerDetalle, buttonText = "Ver detalles", isFavorite, onToggleFavorite }) {
  // Interacción dinámica 2: Mostrar/ocultar descripción
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setMostrarInfo(true)}
      onMouseLeave={() => setMostrarInfo(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Botón de favorito */}
      {onToggleFavorite && (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            color: isFavorite ? 'gold' : 'white',
            cursor: 'pointer',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          ★
        </button>
      )}

      <img 
        src={image} 
        alt={title} 
        className="movie-image" 
        style={{ opacity: mostrarInfo ? 0.3 : 1, transition: 'opacity 0.3s' }}
      />
      
      {/* Overlay con descripción al hacer hover */}
      {mostrarInfo && description && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: '100px', // Dejar espacio para el título y botón
          padding: '1rem',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none' // Permitir clicks a través si fuera necesario
        }}>
          <p style={{ fontWeight: 'bold' }}>{description}</p>
        </div>
      )}

      <div className="movie-info">
        <h3>{title}</h3>
        <div style={{ marginTop: 'auto' }}>
            <Button text={buttonText} onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;