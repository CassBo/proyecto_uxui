# Proyecto UX/UI - Cine App

Este proyecto es una aplicación web para un cine, desarrollada con React. A continuación se explica de manera sencilla la estructura de archivos y cómo se cumplen los requerimientos del proyecto.

## Secciones de Contenido

El código fuente de las páginas principales se encuentra en la carpeta `src/pages`.

### a) Cartelera
*   **Archivo**: `src/pages/bilboard.jsx`
*   **Descripción**: Esta sección muestra las películas disponibles en formato de tarjetas.
*   **Contenido**: Incluye un listado con al menos 4 películas, permitiendo visualizar sus pósters y detalles básicos.

### b) Alimentos
*   **Archivo**: `src/pages/Food.jsx`
*   **Descripción**: Una sección visual dedicada a la venta de alimentos.
*   **Categorías**:
    *   **Bebidas**: (Ej. Refrescos, Aguas)
    *   **Comestibles**: (Ej. Hot dogs, Nachos)
    *   **Snacks o dulces**: (Ej. Palomitas, Chocolates)
*   **Detalle**: Cada categoría cuenta con al menos 2 opciones de alimentos.

### c) Otros
*   **Archivo**: `src/pages/Otros.jsx`
*   **Descripción**: Sección que agrupa elementos secundarios de la experiencia del cine.
*   **Contenido**:
    *   Promociones
    *   Membresías
    *   Preventas
    *   Formatos especiales

## Componentes Estilizados

Los bloques de construcción de la interfaz se encuentran principalmente en `src/components`.

*   **Reutilización**: Se utilizan componentes para elementos repetitivos (como las tarjetas de las películas o los ítems del menú) para evitar duplicar código.
*   **Estilos**:
    *   Los estilos globales y específicos aseguran que la aplicación se vea bien.
    *   Existe una **coherencia visual** (colores, fuentes, espaciados) que se mantiene a través de las secciones de Cartelera, Alimentos y Otros.
