"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProposalCard from "@/components/proposalCard";
import { PropuestaService } from "@/service/services";
import { useSearch } from "@/hooks/useSearch";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Loader2, Search } from 'lucide-react';

const MapWithClick = dynamic(() => import("@/components/MapWithClick"), {
  ssr: false,
});

export default function ProposalsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialPropuestas, setInitialPropuestas] = useState([]);
  const [filter, setFilter] = useState({ type: "all", minPrice: 0, maxPrice: 1000 });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [visibleResults, setVisibleResults] = useState(3);

  const { query, setQuery, results } = useSearch(initialPropuestas, filter);

  const fetchPropuestas = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await PropuestaService.readAll(page);
      setInitialPropuestas(prev => [...prev, ...data]);
      setHasMore(data.length > 0);
    } catch (err) {
      console.error("Error fetching propuestas:", err);
      setError("No se pudo cargar las propuestas. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropuestas();
  }, [page]);

  const handlePriceChange = (type, value) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;

    if (type === 'min') {
      setFilter(prev => ({ ...prev, minPrice: Math.min(numValue, prev.maxPrice) }));
    } else {
      setFilter(prev => ({ ...prev, maxPrice: Math.max(numValue, prev.minPrice) }));
    }
  };

  const loadMore = () => {
    setVisibleResults(prev => prev + 3);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 mt-8"
      >
        <h1 className="text-4xl md:text-5xl font-pixel font-bold text-accent-foreground leading-tight tracking-wide">
          Propuestas de Agroturismo
        </h1>
        <p className="text-lg md:text-xl text-accent-foreground mt-4">
          Explora las mejores experiencias de agroturismo en Nariño
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 mt-2 mb-8">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <div className="relative">
            <Input
              type="search"
              placeholder="Buscar propuestas..."
              className="w-full pl-10 pr-4 py-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar propuestas"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <div className="flex gap-4">
            <Select
              value={filter.type}
              onValueChange={(value) => setFilter(prev => ({ ...prev, type: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de propuesta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="farm">Granja</SelectItem>
                <SelectItem value="eco">Eco-turismo</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4 align-middle">
          <div className="flex w-1/2 gap-4">
            <div className="w-1/2">
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Precio mínimo
              </label>
              <Input
                type="number"
                id="minPrice"
                min={0}
                max={filter.maxPrice}
                value={filter.minPrice}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Precio máximo
              </label>
              <Input
                type="number"
                id="maxPrice"
                min={filter.minPrice}
                value={filter.maxPrice}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex w-1/2 ">
            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Etiquetas" />
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="farm">Granja</SelectItem>
                    <SelectItem value="eco">Eco-turismo</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
          </div>
          </div>
          <Button variant="default" onClick={() => setQuery(query)} className="bg-primary text-white hover:bg-primary-dark transition-colors">
            Buscar
          </Button>
        </div>

        <div className="lg:w-1/2 h-[300px] border rounded-lg shadow-md overflow-hidden">
          <MapWithClick position={[1.526918838498519, -77.86010742187501]} zoom={8} />
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold mr-2">Error:</strong>
            <span className="block sm:inline">{error}</span>
            <Button
              className="absolute top-0 right-0 mt-2 mr-2"
              onClick={() => setError(null)}
              aria-label="Cerrar mensaje de error"
            >
              <AlertCircle className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 p-5">
        {results.slice(0, visibleResults).map((propuesta, index) => (
          <motion.div
            key={propuesta.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProposalCard {...propuesta} />
          </motion.div>
        ))}
      </div>

      {visibleResults < results.length && (
        <div className="flex justify-center mb-2 mt-8">
          <Button
            onClick={loadMore}
            className="bg-secondary text-black hover:bg-secondary-dark transition-colors"
          >
            Cargar más propuestas
          </Button>
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center mt-8">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Cargando más propuestas...</span>
        </div>
      )}

      {!isLoading && !error && results.length === 0 && (
        <p className="text-center mt-8">No se encontraron propuestas.</p>
      )}
    </section>
  );
}

