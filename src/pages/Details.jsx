// Vista de detalle de una película
function Detalle() {
  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2>¿Cómo llegué aquí?</h2>

      <img
        src="https://m.media-amazon.com/images/M/MV5BYjZjNDdkZmYtYmF1ZS00NzU5LThhNTEtMjkyNGJhNzk5OWUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        alt="Nombre de la película"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>
        AQUÍ VA UNA SINÓPSIS DE LA PELÍCULA
      </p>
    </main>
  )
}

// Exportamos la vista
export default Detalle