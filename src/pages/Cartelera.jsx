import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MovieCard from "../components/MovieCard";

function Cartelera({ favoritos, toggleFavorito, searchTerm }) { // Removed verDetalle prop
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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

  // New function to handle navigation to movie detail
  const handleVerDetalle = (pelicula) => {
    navigate(`/peliculas/${pelicula.id}`);
  };

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
            onVerDetalle={() => handleVerDetalle(pelicula)} // Use new handler
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