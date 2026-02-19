import React from 'react';

function Otros() {
  const secciones = [
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

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>Más Servicios</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "2rem" 
      }}>
        {secciones.map((seccion, index) => (
          <div key={index} style={{ 
            border: "1px solid #ddd", 
            borderRadius: "8px", 
            overflow: "hidden", 
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            backgroundColor: "white"
          }}>
            <img 
              src={seccion.imagen} 
              alt={seccion.titulo} 
              style={{ width: "100%", height: "180px", objectFit: "cover" }} 
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ marginTop: 0, color: "#272e5c" }}>{seccion.titulo}</h3>
              <p style={{ color: "#555", lineHeight: "1.5" }}>{seccion.descripcion}</p>
              <button style={{ 
                marginTop: "1rem", 
                padding: "0.5rem 1rem", 
                backgroundColor: "#333", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                cursor: "pointer" 
              }}>
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Otros;