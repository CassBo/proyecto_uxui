import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import '../App.css'; // Importamos los estilos globales

function Otros() {
  const seccionesEstaticas = [
    {
      titulo: "Promociones",
      descripcion: "2x1 todos los miércoles en funciones 2D y 3D.",
      imagen: "https://preview.citicinemas.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fciticinemas-store%2FPromotion-33%2Fimage%2FaENgrwkkWOmO%2Frefill%20palomitas.jpg&w=1920&q=75"
    },
    {
      titulo: "Membresía CineFan",
      descripcion: "Acumula puntos por cada visita y canjéalos por entradas y combos.",
      imagen: "https://m.cinesargentinos.com.ar/static/archivos/47864"
    },
    {
      titulo: "Preventas Exclusivas",
      descripcion: "Asegura tu lugar para los estrenos más esperados del año.",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO_a15Yz2gMprhbKWVTePtYlXUk-BK_5BuA&s"
    },
    {
      titulo: "Formatos Especiales",
      descripcion: "Vive la experiencia IMAX, 4DX y Salas VIP con servicio a la butaca.",
      imagen: "https://sacnkprodpecms.blob.core.windows.net/content/formats/REAL%203D-76f51577-4d7c-4b68-b88a-46a3ed92cb77.webp"
    }
  ];

  // Estado para datos dinámicos
  const [noticias, setNoticias] = useState([]);

  // Consumo de datos dinámicos (simulado con JSONPlaceholder)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then(response => response.json())
      .then(data => {
        // Transformamos los datos para que parezcan noticias de cine
        const noticiasAdaptadas = data.map(item => ({
          id: item.id,
          titulo: `Noticia de Cine: ${item.title.substring(0, 20)}...`,
          cuerpo: item.body
        }));
        setNoticias(noticiasAdaptadas);
      })
      .catch(error => console.error('Error al cargar noticias:', error));
  }, []);

  return (
    <main className="responsive-grid">
      <h2 style={{ gridColumn: '1 / -1', textAlign: "center", marginBottom: "1rem", color: "#333" }}>Más Servicios</h2>
      {seccionesEstaticas.map((seccion, index) => (
        <div key={index} className="movie-card">
          <img 
            src={seccion.imagen} 
            alt={seccion.titulo} 
            className="movie-image"
          />
          <div className="movie-info">
            <h3 style={{ marginTop: 0, color: "#272e5c" }}>{seccion.titulo}</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{seccion.descripcion}</p>
            <div style={{ marginTop: "1rem" }}>
              <Button text="Ver más" />
            </div>
          </div>
        </div>
      ))}

      <h2 style={{ gridColumn: '1 / -1', textAlign: "center", margin: "2rem 0 1rem", color: "#333" }}>Últimas Noticias (Dinámico)</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="movie-card" style={{ backgroundColor: '#fffbe6' }}>
          <div className="movie-info">
            <h3 style={{ marginTop: 0, color: "#d32f2f" }}>{noticia.titulo}</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{noticia.cuerpo}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Otros;