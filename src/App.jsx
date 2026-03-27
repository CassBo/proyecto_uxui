import { useState } from "react";
import { useLocation } from "react-router-dom"; 

// Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import AppRoutes from "./routes/AppRoutes";

// Estilos
import './App.css';

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

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

  const showSearchBar = location.pathname === "/" || location.pathname === "/cartelera";

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", display: "flex", flexDirection: "column" }}>
      <Header />

      <main className="main-container">
        {showSearchBar && (
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        )}

        <div style={{ flex: 1 }}>
          <AppRoutes 
            favoritos={favoritos} 
            toggleFavorito={toggleFavorito} 
            searchTerm={searchTerm} 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
