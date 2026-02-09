import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

function App() {
  // Lista de películas basada en tu imagen
  const movies = [
    { id: 1, title: 'Duna: Parte Dos', imageUrl: 'https://via.placeholder.com/250x150?text=Duna' },
    { id: 2, title: 'Kung Fu Panda 4', imageUrl: 'https://via.placeholder.com/250x150?text=Kung+Fu+Panda' },
    { id: 3, title: 'Intensamente 2', imageUrl: 'https://via.placeholder.com/250x150?text=Intensamente' }
  ];

  return (
    <div className="app-container">
      {/* 1. Uso del componente Header */}
      <Header />

      <main className="movies-container">
        {/* 2. Mapeamos la lista para crear las tarjetas dinámicamente */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} imageUrl={movie.imageUrl} />
        ))}
      </main>
    </div>
  );
}

export default App;