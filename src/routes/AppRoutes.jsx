import { Routes, Route } from "react-router-dom";

// Vistas
import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import MovieDetail from "../pages/MovieDetail";
import Alimentos from "../pages/Alimentos";
import Otros from "../pages/Otros";
import Terminos from "../pages/Terminos";
import QuienesSomos from "../pages/QuienesSomos";
import About from "../pages/About";

function AppRoutes({ favoritos, toggleFavorito, searchTerm }) {
  return (
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
      <Route path="/about" element={<About />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
    </Routes>
  );
}

export default AppRoutes;
