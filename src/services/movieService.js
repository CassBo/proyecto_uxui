export const getMovies = async () => {
  try {
    const response = await fetch("/detalles.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar las películas:", error);
    return [];
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await fetch("/detalles.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.find(p => p.id.toString() === id.toString());
  } catch (error) {
    console.error("Error al cargar los detalles de la película:", error);
    return null;
  }
};
