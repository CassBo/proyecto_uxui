import React from 'react';
import Button from '../components/Button';
import '../App.css';

function Otros() {
  // Contenido estático para la sección "Más Servicios"
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

  // Contenido estático para las noticias de cine
  const noticiasDeCine = [
    {
      id: 1,
      titulo: "Secuela de 'Dune' confirma su fecha de rodaje",
      cuerpo: "El director Denis Villeneuve ha anunciado que la producción de la esperada secuela comenzará en otoño, con Timothée Chalamet y Zendaya regresando a sus papeles."
    },
    {
      id: 2,
      titulo: "Nuevo tráiler de 'The Batman' sorprende a los fans",
      cuerpo: "Un nuevo avance muestra más de la oscura y cruda versión de Gotham, con Robert Pattinson como un Bruce Wayne más joven y atormentado."
    },
    {
      id: 3,
      titulo: "Estudio independiente gana el gran premio en Cannes",
      cuerpo: "La película 'El Eco del Silencio', un drama de bajo presupuesto, se llevó la Palma de Oro, destacando por su guion original y actuaciones conmovedoras."
    }
  ];

  return (
    <div className="responsive-grid">
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

      <h2 style={{ gridColumn: '1 / -1', textAlign: "center", margin: "2rem 0 1rem", color: "#333" }}>Últimas Noticias</h2>
      {noticiasDeCine.map((noticia) => (
        <div key={noticia.id} className="movie-card" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="movie-info">
            <h3 style={{ marginTop: 0, color: "#b20710" }}>{noticia.titulo}</h3>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{noticia.cuerpo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Otros;