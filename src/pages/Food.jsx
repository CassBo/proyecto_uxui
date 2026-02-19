import React from 'react';
import Button from '../components/Button';

function Food() {
  const foodItems = [
    { id: 1, name: 'Palomitas Grandes', price: '$80', image: 'https://m.media-amazon.com/images/I/71WCHcFxA8L.jpg' },
    { id: 2, name: 'Refresco Grande', price: '$60', image: 'https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$CCO%20GDE%20300X225.png/200/200/original?country=mx' },
    { id: 3, name: 'Nachos con Queso', price: '$75', image: 'https://cdn7.kiwilimon.com/recetaimagen/15795/1200x600/7826.jpg.webp' },
    { id: 4, name: 'Hot Dog', price: '$55', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1280px-Hot_dog_with_mustard.png' },
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
        padding: "24px"
      }}
    >
      {foodItems.map((item) => (
        <div key={item.id} style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '16px', 
          textAlign: 'center',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <img src={item.image} alt={item.name} style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '16px' }} />
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{item.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem', marginBottom: '16px' }}>{item.price}</p>
            <Button text="Agregar" onClick={() => alert(`Agregado: ${item.name}`)} />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Food;