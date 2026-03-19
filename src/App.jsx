import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

// Vistas
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera"; // Renamed from bilboard
import MovieDetail from "./pages/MovieDetail"; // Renamed from Details, now dynamic
import Alimentos from "./pages/Alimentos"; // Renamed from Food
import Otros from "./pages/Otros";
import Terminos from "./pages/Terminos";
import QuienesSomos from "./pages/QuienesSomos";
import About from "./pages/About"; // New additional page

// Estilos
import './App.css';

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation(); // Hook to get current location

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  // Determine if SearchBar should be visible based on current route
  const showSearchBar = location.pathname === "/" || location.pathname === "/cartelera";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column" }}>
      <Header /> {/* Header no necesita cambiarVista */}

      <main className="main-container">
        {showSearchBar && (
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        )}

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <Home
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
                searchTerm={searchTerm}
              />
            } />
            <Route path="/cartelera" element={
              <Cartelera
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
                searchTerm={searchTerm}
              />
            } />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/otros" element={<Otros />} />
            <Route path="/peliculas/:id" element={<MovieDetail />} />
            <Route path="/about" element={<About />} /> {/* Additional page */}
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            {/* Add a catch-all route for 404 if desired */}
            {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
          </Routes>
        </div>
      </main>

      <Footer /> {/* Footer might need to be updated as well, depending on its content */}
    </div>
  );
}

export default App;