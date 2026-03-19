import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from "../components/Button";
import Modal from "../components/Modal";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [pelicula, setPelicula] = useState(null);
  const [nombre, setNombre] = useState("");
  const [cantidadBoletos, setCantidadBoletos] = useState(1);
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    if (id) {
      fetch("/detalles.json")
        .then((response) => response.json())
        .then((data) => {
          const foundPelicula = data.find(p => p.id.toString() === id);
          setPelicula(foundPelicula);
        })
        .catch((error) => console.error("Error al cargar los detalles de la película:", error));
    }
  }, [id]);

  if (!pelicula) {
    return (
      <div className="responsive-detail" style={{ textAlign: "center" }}>
        <h2>Cargando detalles de la película...</h2>
        {/* Optionally, add a button to go back if movie not found or still loading */}
        <Button 
          text="Regresar al inicio" 
          onClick={() => navigate("/")} // Use navigate to go back to home
          className="secondary-button"
        />
      </div>
    );
  }

  function manejarCompra(e) {
    e.preventDefault();
    setModalMessage(
      `¡Gracias, ${nombre}! Tu compra de ${cantidadBoletos} boleto(s) para ${pelicula.titulo} con ${metodoPago} ha sido exitosa.`
    );
    setIsModalOpen(true);
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
          onClick={() => navigate(-1)} // Go back to previous page
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 style={{ color: '#28a745', marginBottom: '15px' }}>¡Compra Exitosa!</h3>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default MovieDetail;