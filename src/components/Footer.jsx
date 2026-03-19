import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Footer() { // Removed cambiarVista prop
  // Estilos constantes
  const footerStyle = {
    backgroundColor: '#333',
    color: '#ccc',
    padding: '40px 20px',
    marginTop: 'auto',
    fontFamily: 'Arial, sans-serif'
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    color: '#fff',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    marginBottom: '8px'
  };

  const linkStyle = {
    background: 'none',
    border: 'none',
    color: '#ddd',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left',
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.2s'
  };

  const textStyle = {
    color: '#aaa',
    fontSize: '14px',
    display: 'block'
  };

  return (
    <footer style={footerStyle}>
      <div style={gridContainerStyle}>
        
        {/* Cartelera */}
        <div>
          <h4 style={sectionTitleStyle}>Cartelera</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <Link 
                to="/cartelera" // Use Link for navigation
                style={linkStyle}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = '#ddd'}
              >
                Cartelera
              </Link>
            </li>
            <li style={listItemStyle}><span style={textStyle}>Garantía Cinépolis</span></li>
            <li style={listItemStyle}><span style={textStyle}>+Que Cine</span></li>
            <li style={listItemStyle}><span style={textStyle}>Muestras y festivales</span></li>
          </ul>
        </div>

        {/* Legales */}
        <div>
          <h4 style={sectionTitleStyle}>Legales</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <Link 
                to="/terminos" // Use Link for navigation
                style={linkStyle}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = '#ddd'}
              >
                Términos y condiciones
              </Link>
            </li>
            <li style={listItemStyle}><span style={textStyle}>Aviso de privacidad</span></li>
            <li style={listItemStyle}><span style={textStyle}>Términos Cinecash</span></li>
          </ul>
        </div>

        {/* ¿Quiénes somos? */}
        <div>
          <h4 style={sectionTitleStyle}>¿Quiénes somos?</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <Link 
                to="/quienes-somos" // Use Link for navigation
                style={linkStyle}
                onMouseOver={(e) => e.target.style.color = '#fff'}
                onMouseOut={(e) => e.target.style.color = '#ddd'}
              >
                ¿Quiénes somos?
              </Link>
            </li>
            <li style={listItemStyle}><span style={textStyle}>Próximas Aperturas</span></li>
            <li style={listItemStyle}><span style={textStyle}>Cinépolis Jobs</span></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={sectionTitleStyle}>Contacto</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><span style={textStyle}>Atención a clientes</span></li>
            <li style={listItemStyle}><span style={textStyle}>T. 552 122 6060</span></li>
            <li style={listItemStyle}><span style={textStyle}>aac@atencioncinepolis.com</span></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', borderTop: '1px solid #444', paddingTop: '20px' }}>
        <p style={{ fontSize: '12px', color: '#777' }}>&copy; {new Date().getFullYear()} Proyecto UX/UI - Clon con fines educativos.</p>
      </div>
    </footer>
  );
}

export default Footer;