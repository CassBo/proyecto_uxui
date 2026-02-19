import React from 'react';
import Button from '../components/Button';

function Food() {
  const foodItems = [
    { id: 1, name: 'Palomitas Grandes', price: '$80', image: 'https://static.vecteezy.com/system/resources/previews/023/214/285/non_2x/popcorn-bucket-food-cinema-snack-3d-illustration-png.png' },
    { id: 2, name: 'Refresco Grande', price: '$60', image: 'https://static.vecteezy.com/system/resources/previews/027/144/656/non_2x/soft-drink-cup-with-ice-and-straw-takeaway-soda-beverage-3d-illustration-png.png' },
    { id: 3, name: 'Nachos con Queso', price: '$75', image: 'https://static.vecteezy.com/system/resources/previews/025/269/449/non_2x/nachos-with-cheese-and-jalapeno-peppers-mexican-food-3d-illustration-png.png' },
    { id: 4, name: 'Hot Dog', price: '$55', image: 'https://static.vecteezy.com/system/resources/previews/025/005/088/non_2x/hot-dog-fast-food-3d-illustration-png.png' },
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