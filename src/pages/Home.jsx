import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero"; // 1. Importar Hero

function Home({ verDetalle, favoritos, toggleFavorito, searchTerm }) {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaDestacada, setPeliculaDestacada] = useState(null);
  const [estrenos, setEstrenos] = useState([]);
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>

      {/* Carrusel Swiper */}
      <div style={{ height: "400px", marginBottom: "30px", borderRadius: "8px", overflow: "hidden" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          style={{ width: "100%", height: "100%" }}
        >
          {peliculas.slice(0, 5).map((pelicula) => (
            <SwiperSlide key={`slide-${pelicula.id}`}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${pelicula.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <div style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  width: "100%",
                  padding: "20px",
                  textAlign: "center"
                }}>
                  <h2 style={{ margin: "0 0 10px 0" }}>{pelicula.titulo}</h2>
                  <p style={{ margin: 0 }}>{pelicula.sinopsis.substring(0, 100)}...</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid de Películas */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
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
    </div>
  );
}

export default Home;