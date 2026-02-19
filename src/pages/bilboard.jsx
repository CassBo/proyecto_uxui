import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {
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
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Bob Esponja: Al Rescate"
        image="https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc0Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Cartelera