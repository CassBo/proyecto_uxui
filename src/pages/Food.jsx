import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal'; // 1. Importar Modal
import '../App.css';

function Food() {
  // Datos de los productos
  const foodItems = [
    { id: 1, name: 'Palomitas Grandes', price: '$80', image: 'https://m.media-amazon.com/images/I/71WCHcFxA8L.jpg' },
    { id: 2, name: 'Refresco Grande', price: '$60', image: 'https://cdn.quicksell.co/-Mk2olrjepwccC7R1eDF/products/-NbFu_jyHt8XC33YpDKR.jpg' },
    { id: 3, name: 'Nachos con Queso', price: '$75', image: 'https://cdn7.kiwilimon.com/recetaimagen/15795/1200x600/7826.jpg.webp' },
    { id: 4, name: 'Hot Dog', price: '$55', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1280px-Hot_dog_with_mustard.png' },
  ];

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  // 2. Estados para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. Modificar handleSubmit para usar el modal
  const handleSubmit = (e) => {
    e.preventDefault();
    setModalMessage(`¡Gracias por registrarte, ${formData.nombre}! Recibirás nuestras promociones en ${formData.email}.`);
    setIsModalOpen(true);
    
    // Limpiar el formulario
    setFormData({ nombre: '', email: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  return (
    <div>
      <div className="responsive-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="movie-card">
            <img src={item.image} alt={item.name} className="movie-image" style={{ objectFit: 'contain', padding: '10px' }} />
            <div className="movie-info">
              <h3>{item.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>{item.price}</p>
              <div style={{ marginTop: 'auto' }}>
                {/* Opcional: podríamos hacer que este botón también abra un modal */}
                <Button text="Agregar" onClick={() => alert(`Agregado: ${item.name}`)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Aplicar estilos consistentes al formulario */}
      <div style={{ gridColumn: '1 / -1', padding: '2rem 0' }}>
        <div className="form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Regístrate para Promociones</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre-promo">Tu nombre</label>
              <input
                id="nombre-promo"
                type="text"
                name="nombre"
                placeholder="John Doe"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-promo">Tu email</label>
              <input
                id="email-promo"
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Button text="Enviar" type="submit" className="custom-button" />
          </form>
        </div>
      </div>

      {/* Renderizar el Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 style={{ color: '#28a745', marginBottom: '15px' }}>¡Registro Exitoso!</h3>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default Food;