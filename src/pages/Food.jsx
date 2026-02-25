import React, { useState } from 'react';
import Button from '../components/Button';
import '../App.css'; // Importamos los estilos globales

function Food() {
  const foodItems = [
    { id: 1, name: 'Palomitas Grandes', price: '$80', image: 'https://m.media-amazon.com/images/I/71WCHcFxA8L.jpg' },
    { id: 2, name: 'Refresco Grande', price: '$60', image: 'https://cdn.quicksell.co/-Mk2olrjepwccC7R1eDF/products/-NbFu_jyHt8XC33YpDKR.jpg' },
    { id: 3, name: 'Nachos con Queso', price: '$75', image: 'https://cdn7.kiwilimon.com/recetaimagen/15795/1200x600/7826.jpg.webp' },
    { id: 4, name: 'Hot Dog', price: '$55', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1280px-Hot_dog_with_mustard.png' },
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    alert(`Datos enviados: Nombre - ${formData.nombre}, Email - ${formData.email}`);
  };

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

      <div style={{ gridColumn: '1 / -1', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', marginTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Registrate para promociones</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <Button text="Enviar" type="submit" />
        </form>
        {submittedData && (
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
            <h3 style={{ color: '#333' }}>Información enviada:</h3>
            <p><strong>Nombre:</strong> {submittedData.nombre}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Food;