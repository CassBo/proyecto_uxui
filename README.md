# Plataforma de Cine - Proyecto UX/UI

Este proyecto consiste en la estructura base de una aplicación web desarrollada en React utilizando Vite. Representa una plataforma genérica de cine que servirá como base para futuras adaptaciones visuales (Cinépolis o Cinemex).

## 1. Creación del entorno de desarrollo

El proyecto ha sido creado utilizando **Vite** para garantizar un entorno de desarrollo rápido y optimizado.

### Instrucciones de ejecución:

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```
2.  **Ejecutar el proyecto**:
    ```bash
    npm run dev
    ```
3.  **Visualización**:
    Abrir el navegador en la dirección local indicada (por defecto `http://localhost:5173`).

## 2. Estructura del proyecto

El proyecto sigue una organización modular para facilitar el mantenimiento y la escalabilidad:

*   **`src/`**: Carpeta raíz del código fuente.
*   **`src/components/`**: Contiene los componentes reutilizables de la interfaz.
    *   `Header.jsx`
    *   `MovieCard.jsx`
    *   `Button.jsx`
*   **`src/App.jsx`**: Componente principal que orquesta la estructura de la página.

## 3. Componentes Base

Se han desarrollado tres componentes funcionales clave para cumplir con los requisitos:

### a) Header (`src/components/Header.jsx`)
Componente funcional que renderiza el encabezado de la aplicación, proporcionando identidad visual a la plataforma.

### b) Botón (`src/components/Button.jsx`)
Un componente reutilizable que acepta propiedades (`props`) para personalizar su texto y comportamiento (`onClick`), permitiendo estandarizar los botones en toda la app.

### c) Tarjeta de película (`src/components/MovieCard.jsx`)
Componente que representa la ficha de una película.
*   Recibe el título y la URL de la imagen como `props`.
*   Integra y reutiliza el componente **Button** para la acción de "Ver horarios".

## 4. Integración en App.jsx

El archivo `App.jsx` actúa como el contenedor principal donde se ensamblan los componentes:

1.  **Importación**: Se importan los componentes `Header` y `MovieCard`.
2.  **Datos**: Se define una lista de objetos (`movies`) que contiene la información de las películas (ID, título, imagen).
3.  **Renderizado**:
    *   Se muestra el `<Header />`.
    *   Se utiliza el método `.map()` sobre la lista de películas para renderizar dinámicamente un componente `<MovieCard />` por cada elemento, pasando los datos correspondientes como propiedades.

---
**Asignatura:** UX/UI - Unidad I
**Objetivo:** Crear la estructura base de una aplicación web en React.