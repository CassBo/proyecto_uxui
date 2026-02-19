import React from 'react';

function Header({ cambiarVista }) {
  return (
    <header className="header" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      backgroundColor: '#141414', 
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ margin: 0, cursor: 'pointer', color: '#272e5c' }} onClick={() => cambiarVista('home')}>Cine Prueba</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => cambiarVista('home')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>Inicio</button>
        <button onClick={() => cambiarVista('cartelera')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>Cartelera</button>
        <button onClick={() => cambiarVista('food')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>Alimentos</button>
        <button onClick={() => cambiarVista('otros')} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem' }}>Otros</button>
      </nav>
    </header>
  );
}

export default Header;