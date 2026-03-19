import React from 'react';

function About() {
  return (
    <main style={{ padding: "24px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una cadena de cines comprometida con ofrecer la mejor experiencia cinematográfica.
        Contamos con salas de última tecnología y una amplia variedad de alimentos y bebidas.
      </p>
      <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <h3>Nuestra Misión</h3>
        <p>Entretener y emocionar a nuestros clientes a través de la magia del cine.</p>
      </div>
    </main>
  );
}

export default About;