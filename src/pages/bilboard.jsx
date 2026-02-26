import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Cartelera({ verDetalle, favoritos, toggleFavorito, searchTerm }) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // 1. Cargar datos dinámicamente
    fetch("/detalles.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error("Error al cargar las películas:", error));
  }, []);

  // 3. Filtrar las películas
  const peliculasFiltradas = peliculas.filter(pelicula => 
    pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // 2. Usar la clase CSS para el layout
    <div className="responsive-grid">
      {peliculasFiltradas.length > 0 ? (
        peliculasFiltradas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            description={pelicula.sinopsis}
            onVerDetalle={() => verDetalle(pelicula)}
            isFavorite={favoritos.includes(pelicula.id)}
            onToggleFavorite={() => toggleFavorito(pelicula.id)}
          />
        ))
      ) : (
        <p>No se encontraron películas con ese nombre.</p>
      )}
    </div>
  );
}

export default Cartelera;