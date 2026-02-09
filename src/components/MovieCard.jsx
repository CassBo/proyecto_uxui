import React from 'react';
import Button from './Button';

function MovieCard({ title, imageUrl }) {
  const handleClick = () => {
    alert(`Viendo horarios para: ${title}`);
  };

  return (
    <div className="movie-card">
      {imageUrl && <img src={imageUrl} alt={title} className="movie-image" />}
      <div className="movie-info">
        <h3>{title}</h3>
        {/* Reutilizamos el componente Botón */}
        <Button text="Ver horarios" onClick={handleClick} />
      </div>
    </div>
  );
}

export default MovieCard;