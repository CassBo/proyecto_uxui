import '../App.css'; // Importamos los estilos globales

// Vista de detalle de una película
function Detalle() {
  return (
    <main className="responsive-detail">
      <h2>¿Cómo llegué aquí?</h2>

      <img
        src="https://m.media-amazon.com/images/M/MV5BYjZjNDdkZmYtYmF1ZS00NzU5LThhNTEtMjkyNGJhNzk5OWUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        alt="Nombre de la película"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "16px",
          maxHeight: "500px", // Limitamos la altura en pantallas grandes
          objectFit: "contain"
        }}
      />

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        AQUÍ VA UNA SINÓPSIS DE LA PELÍCULA
      </p>
    </main>
  )
}

// Exportamos la vista
export default Detalle