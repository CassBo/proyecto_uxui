// Hook de React para manejar estado
import { useState } from "react"

// Componentes
import Header from "./components/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/bilboard"
import Detalle from "./pages/Details"
import Food from "./pages/Food"
import Otros from "./pages/Otros"

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  // Aquí nos permite guardar alguna película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // Estado para lista de favoritos (Interacción dinámica 1)
  const [favoritos, setFavoritos] = useState([])

  // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  // Función para agregar/quitar favoritos
  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    // Contenedor raíz de la aplicación
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header puede cambiar la vista */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && (
        <Home 
          verDetalle={verDetalle} 
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera 
          verDetalle={verDetalle}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}

      {vistaActual === "food" && <Food />}
      {vistaActual === "otros" && <Otros />}
    </div>
  )
}

// Exportamos App
export default App