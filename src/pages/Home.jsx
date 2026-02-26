import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero"; // 1. Importar Hero

function Home({ verDetalle, favoritos, toggleFavorito, searchTerm }) {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaDestacada, setPeliculaDestacada] = useState(null);
  const [estrenos, setEstrenos] = useState([]);

  useEffect(() => {
    fetch("/detalles.json")
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
        if (data.length > 0) {
          // 3. La primera película es la destacada
          setPeliculaDestacada(data[0]);
          // El resto son los "estrenos"
          setEstrenos(data.slice(1));
        }
      })
      .catch((error) => console.error("Error al cargar las películas:", error));
  }, []);

  // 5. La búsqueda ahora filtra los estrenos
  const estrenosFiltrados = estrenos.filter(pelicula => 
    pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Si hay búsqueda, no mostramos el Hero para dar espacio a los resultados */}
      {!searchTerm && <Hero pelicula={peliculaDestacada} onVerDetalle={verDetalle} />}
      
      <h2 style={{ marginTop: '20px', marginBottom: '20px', color: '#333' }}>
        {searchTerm ? 'Resultados de la búsqueda' : 'Estrenos de la semana'}
      </h2>

      <div className="responsive-grid">
        {estrenosFiltrados.length > 0 ? (
          estrenosFiltrados.map((pelicula) => (
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
          <p>No se encontraron películas.</p>
        )}
      </div>
    </div>
  );
}

export default Home;