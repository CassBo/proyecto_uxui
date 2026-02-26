// Hook de React para manejar estado
import { useState } from "react"

// Componentes
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/bilboard"
import Detalle from "./pages/Details"
import Food from "./pages/Food"
import Otros from "./pages/Otros"

// Estilos
import './App.css';

function App() {
  // Estados
  const [vistaActual, setVistaActual] = useState("home")
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
  const [favoritos, setFavoritos] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  // Funciones de navegación y estado
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <div>
      <Header cambiarVista={setVistaActual} />

      <main className="main-container">
        {(vistaActual === "home" || vistaActual === "cartelera") && (
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={handleSearchChange} 
          />
        )}

        {vistaActual === "home" && (
          <Home 
            verDetalle={verDetalle} 
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
            searchTerm={searchTerm}
          />
        )}

        {vistaActual === "cartelera" && (
          <Cartelera 
            verDetalle={verDetalle}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
            searchTerm={searchTerm}
          />
        )}

        {vistaActual === "detalle" && (
          // 1. Pasar la función cambiarVista a Detalle
          <Detalle 
            pelicula={peliculaSeleccionada} 
            cambiarVista={setVistaActual} 
          />
        )}

        {vistaActual === "food" && <Food />}
        {vistaActual === "otros" && <Otros />}
      </main>
    </div>
  )
}

export default App