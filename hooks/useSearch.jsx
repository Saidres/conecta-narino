import { useState, useMemo } from "react";

/**
 * Hook personalizado para realizar búsquedas de texto en una lista de propuestas.
 * @param {Array} initialPropuestas - Lista inicial de propuestas.
 * @returns {Object} - Objeto con query, setQuery y resultados filtrados.
 */
export function useSearch(initialPropuestas) {
  const [query, setQuery] = useState("");

  // Filtrar propuestas basadas en la query
  const results = useMemo(() => {
    if (!query.trim()) return initialPropuestas;

    return initialPropuestas.filter((propuesta) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        propuesta.Descripcion.toLowerCase().includes(lowerCaseQuery) ||
        propuesta.Titulo?.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [query, initialPropuestas]);

  return {
    query,
    setQuery,
    results,
  };
}
