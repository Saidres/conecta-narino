"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProposalCard from "../../components/proposalCard";
import { PropuestaService } from "../../service/services";

export default function ProposalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [propuestas, setPropuestas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPropuestas = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await PropuestaService.readAll();
      setPropuestas(data);
    } catch (err) {
      console.error("Error fetching propuestas:", err);
      setError("No se pudo cargar las propuestas. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropuestas();
  }, []);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto mt-20">
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
          Propuestas de Agroturismo
        </h1>
        <p className="max-w-[700px] text-lg sm:text-xl text-accent-foreground text-center z-10">
          Explora las mejores experiencias de agroturismo en Colombia
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Input
          type="search"
          placeholder="Buscar propuestas..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="region">Región</SelectItem>
            <SelectItem value="activity">Actividad</SelectItem>
            <SelectItem value="price">Precio</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="default">Buscar</Button>
      </div>

      <div className="flex flex-col gap-6 mt-8 max-w-3xl mx-auto">
        {isLoading && <p className="text-center">Cargando propuestas...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && propuestas.length === 0 && (
          <p className="text-center">No se encontraron propuestas.</p>
        )}
        {!isLoading &&
          !error &&
          propuestas.map((propuesta) => (
            <ProposalCard key={propuesta.id} {...propuesta} />
          ))}
      </div>
    </section>
  );
}
