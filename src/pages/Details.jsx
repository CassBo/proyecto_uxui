import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal"; // 1. Importar Modal

function Detalle({ pelicula, cambiarVista }) {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [cantidadBoletos, setCantidadBoletos] = useState(1);
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  
  // Estados para el Modal
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. Estado para el modal
  const [modalMessage, setModalMessage] = useState(""); // Estado para el mensaje del modal

  if (!pelicula) {
    return (
      <div className="responsive-detail" style={{ textAlign: "center" }}>
        <h2>No hay película seleccionada</h2>
        <Button 
          text="Regresar al inicio" 
          onClick={() => cambiarVista("home")}
          className="secondary-button"
        />
      </div>
    );
  }

  // 3. Modificar la función de compra
  function manejarCompra(e) {
    e.preventDefault();
    // Guardar el mensaje de confirmación
    setModalMessage(
      `¡Gracias, ${nombre}! Tu compra de ${cantidadBoletos} boleto(s) para ${pelicula.titulo} con ${metodoPago} ha sido exitosa.`
    );
    // Abrir el modal
    setIsModalOpen(true);

    // Limpiar el formulario
    setNombre("");
    setCantidadBoletos(1);
    setMetodoPago("tarjeta");
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div className="responsive-detail">
      <div style={{ marginBottom: '20px' }}>
        <Button 
          text="‹ Regresar" 
          onClick={() => cambiarVista("home")} 
          className="custom-button secondary-button"
          style={{ width: 'auto', padding: '10px 20px' }}
        />
      </div>

      <h2>{pelicula.titulo}</h2>
      <img src={pelicula.imagen} alt={pelicula.titulo} style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }} />
      <p>{pelicula.sinopsis}</p>
      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>
      <form onSubmit={manejarCompra} className="form-container">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad de boletos:</label>
          <input id="cantidad" type="number" min="1" value={cantidadBoletos} onChange={(e) => setCantidadBoletos(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="pago">Método de Pago:</label>
          <select id="pago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="paypal">PayPal</option>
            <option value="efectivo">Efectivo en taquilla</option>
          </select>
        </div>
        <Button type="submit" text="Comprar" className="custom-button" />
      </form>

      {/* 4. Renderizar el Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 style={{ color: '#28a745', marginBottom: '15px' }}>¡Compra Exitosa!</h3>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default Detalle;