// Importamos la tarjeta reutilizable
import MovieCard from "../components/MovieCard"
import '../App.css'; // Importamos los estilos globales

function Home({ cambiarVista }) {
  return (
    <main className="responsive-grid">
      <MovieCard
        title="Avatar: Fuego y Cenizas"
        image="https://m.media-amazon.com/images/M/MV5BYjZjNDdkZmYtYmFlZS00NzU5LThhNTEtMjkyNGJhNzk5OWUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="¡Ayuda!"
        image="https://lumiere-a.akamaihd.net/v1/images/ayuda_poster_a657c33f.jpeg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Arco"
        image="https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Home