import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import '../App.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  // Usamos un portal para renderizar el modal en el body,
  // fuera de la jerarquía del DOM de la app. Esto evita problemas de z-index.
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
        <div style={{ marginTop: '20px' }}>
          <Button
            text="Cerrar"
            onClick={onClose}
            className="custom-button secondary-button"
            style={{ width: 'auto', padding: '10px 30px' }}
          />
        </div>
      </div>
    </div>,
    document.body // El modal se renderizará como un hijo directo del body
  );
}

export default Modal;