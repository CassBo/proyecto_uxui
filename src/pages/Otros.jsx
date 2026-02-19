import React from 'react';

function Otros() {
  const secciones = [
    {
      titulo: "Promociones",
      descripcion: "2x1 todos los miércoles en funciones 2D y 3D.",
      imagen: "https://static.vecteezy.com/system/resources/previews/002/294/859/non_2x/flash-sale-web-banner-design-e-commerce-vector.jpg"
    },
    {
      titulo: "Membresía CineFan",
      descripcion: "Acumula puntos por cada visita y canjéalos por entradas y combos.",
      imagen: "https://static.vecteezy.com/system/resources/previews/006/828/785/non_2x/gold-vip-card-design-template-vector.jpg"
    },
    {
      titulo: "Preventas Exclusivas",
      descripcion: "Asegura tu lugar para los estrenos más esperados del año.",
      imagen: "https://static.vecteezy.com/system/resources/previews/002/453/533/non_2x/coming-soon-background-with-starlight-vector.jpg"
    },
    {
      titulo: "Formatos Especiales",
      descripcion: "Vive la experiencia IMAX, 4DX y Salas VIP con servicio a la butaca.",
      imagen: "https://static.vecteezy.com/system/resources/previews/008/323/878/non_2x/cinema-movie-theater-interior-with-screen-and-red-seats-vector.jpg"
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