import React from 'react';
import Button from './Button';

function MovieCard({ title, image, onVerDetalle, buttonText = "Ver detalles" }) {
  return (
    <div className="movie-card" style={{ display: 'flex', flexDirection: 'column', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
      <img 
        src={image} 
        alt={title} 
        className="movie-image" 
        style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
      />
      <div className="movie-info" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h3>
        <div style={{ marginTop: 'auto' }}>
            <Button text={buttonText} onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;