import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/movieService";

function Cartelera({ favoritos, toggleFavorito, searchTerm }) {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setPeliculas(data);
    };
    fetchMovies();
  }, []);

  const peliculasFiltradas = peliculas.filter(pelicula => 
    pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVerDetalle = (pelicula) => {
    navigate(`/peliculas/${pelicula.id}`);
  };

  return (
    <div className="responsive-grid">
      {peliculasFiltradas.length > 0 ? (
        peliculasFiltradas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            description={pelicula.sinopsis}
            onVerDetalle={() => handleVerDetalle(pelicula)}
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
