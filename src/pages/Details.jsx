import { useState } from "react"

// Vista de detalle de una película
function Detalle({ pelicula }) {

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")
  const [metodoPago, setMetodoPago] = useState("tarjeta") // Nuevo estado para select

  // En el caso que no se seleccione ninguna película
  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No hay película seleccionada</h2>
      </main>
    )
  }

  // Evento submit/enviar
  function manejarCompra(e) {
    e.preventDefault()

    setMensaje(
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo} pagando con ${metodoPago}.`
    )

    // Opcional: limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
    setMetodoPago("tarjeta")
  }

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{pelicula.sinopsis}</p>

      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Método de Pago:</label>
          <select
            value={metodoPago}
            onChange={(e) => setMetodoPago(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
          >
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="paypal">PayPal</option>
            <option value="efectivo">Efectivo en taquilla</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "16px", color: "green", fontWeight: "bold" }}>
          {mensaje}
        </p>
      )}
    </main>
  )
}

// Exportamos la vista
export default Detalle