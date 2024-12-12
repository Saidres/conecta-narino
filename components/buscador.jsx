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
import { TypeAnimation } from "react-type-animation";

export default function Buscador() {
  const [filter, setFilter] = useState("");
  const router = useRouter();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 mx-auto mt-24"> 
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-white text-center z-10">
          <TypeAnimation
            sequence={[
              "Propuestas de Agroturismo",
              1000,
              "Explora las mejores experiencias de agroturismo en Colombia",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "0.5em", display: "inline-block" }}
          />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Input placeholder="Buscar propuestas..." className="max-w-sm text-black" />
        <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] text-black">
                <SelectValue placeholder="Filtrar por..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="region" className="text-black">Región</SelectItem>
                <SelectItem value="activity" className="text-black">Actividad</SelectItem>
                <SelectItem value="price" className="text-black">Precio</SelectItem>
            </SelectContent>
        </Select>
        <Button onClick={() => router.push("/login")} variant="default" className="text-black">
            Buscar
        </Button>
      </div>

    </section>
  );
}
