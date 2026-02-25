import MovieCard from "../components/MovieCard";
import peliculas from "../detalles.json";

function Home({ verDetalle, favoritos, toggleFavorito }) {

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          description={pelicula.sinopsis}
          onVerDetalle={() => verDetalle(pelicula)}
          isFavorite={favoritos.includes(pelicula.id)}
          onToggleFavorite={() => toggleFavorito(pelicula.id)}
        />
      ))}
    </main>
  );
}

export default Home;