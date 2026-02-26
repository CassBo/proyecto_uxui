import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  
  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    // previene que la página se recargue, cumpliendo uno de los criterios
    event.preventDefault();
    // Podríamos añadir lógica adicional aquí si quisiéramos,
    // pero para un filtro en tiempo real, no es estrictamente necesario.
  };

  // Maneja el cambio en el input
  const handleChange = (event) => {
    // Llama a la función del padre para actualizar el estado
    onSearchChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', width: '100%' }}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={searchTerm} // El valor es controlado por el estado del padre
        onChange={handleChange} // Cada cambio se reporta al padre
        style={{
          width: '100%',
          padding: '12px 20px',
          fontSize: '1rem',
          borderRadius: '20px',
          border: '1px solid #ccc',
        }}
      />
    </form>
  );
}

export default SearchBar;