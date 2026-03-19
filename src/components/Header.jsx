import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    background: 'none',
    border: 'none',
    color: isActive ? '#ffc107' : 'white', // Highlight active link
    cursor: 'pointer',
    fontSize: '1rem',
    textDecoration: 'none', // Remove underline
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'color 0.3s ease',
  });

  return (
    <header className="header" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      backgroundColor: '#262f5c',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
    }}>
      <NavLink to="/" style={{ margin: 0, cursor: 'pointer', color: '#ffffff', textDecoration: 'none' }}>
        <h1 style={{ margin: 0 }}>Cines Botello</h1>
      </NavLink>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to="/" style={navLinkStyles}>Inicio</NavLink>
        <NavLink to="/cartelera" style={navLinkStyles}>Cartelera</NavLink>
        <NavLink to="/alimentos" style={navLinkStyles}>Alimentos</NavLink>
        <NavLink to="/otros" style={navLinkStyles}>Otros</NavLink>
        <NavLink to="/about" style={navLinkStyles}>Acerca de</NavLink> {/* New additional page link */}
      </nav>
    </header>
  );
}

export default Header;