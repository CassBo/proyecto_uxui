import React from 'react';
import Button from '../components/Button';
import '../App.css'; // Importamos los estilos globales

function Food() {
  const foodItems = [
    { id: 1, name: 'Palomitas Grandes', price: '$80', image: 'https://m.media-amazon.com/images/I/71WCHcFxA8L.jpg' },
    { id: 2, name: 'Refresco Grande', price: '$60', image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$CCO%20GDE%20300X225.png/200/200/original?country=mx' },
    { id: 3, name: 'Nachos con Queso', price: '$75', image: 'https://cdn7.kiwilimon.com/recetaimagen/15795/1200x600/7826.jpg.webp' },
    { id: 4, name: 'Hot Dog', price: '$55', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1280px-Hot_dog_with_mustard.png' },
  ];

  return (
    <main className="responsive-grid">
      {foodItems.map((item) => (
        <div key={item.id} className="movie-card">
          <img src={item.image} alt={item.name} className="movie-image" />
          <div className="movie-info">
            <h3>{item.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>{item.price}</p>
            <div style={{ marginTop: 'auto' }}>
              <Button text="Agregar" onClick={() => alert(`Agregado: ${item.name}`)} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Food;