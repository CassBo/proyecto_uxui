import React from 'react';
import Button from './Button';
import '../App.css'; // Importamos estilos

function MovieCard({ title, image, onVerDetalle, buttonText = "Ver detalles" }) {
  return (
    <div className="movie-card">
      <img 
        src={image} 
        alt={title} 
        className="movie-image" 
      />
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