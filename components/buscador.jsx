"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function ProposalsPage() {
  const [filter, setFilter] = useState("");
  const router = useRouter();

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
          placeholder="Buscar propuestas..."
          className="max-w-sm"
          value={searchTerm}
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
        <Button onClick={() => router.push('/login')} variant="default">Buscar</Button>
      </div>
    </section>
  );
}
