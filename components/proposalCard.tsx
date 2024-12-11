'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./map'), { ssr: false })

interface Activity {
  Calificación: number;
  Etiquetas: string[];
  Itinerario: string;
  Descripción: string;
  Fotos: string[];
}

interface ProposalCardProps {
  id: string;
  Descripción: string;
  Actividades: Activity[];
  AgenteTuristicoID: string;
  Fotos: string[];
  Calificación: number;
}

export default function ProposalCard(props: ProposalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const actividad = props.Actividades[0]; // Tomar la primera actividad del array

  // Coordenadas de ejemplo para el mapa (reemplaza con las coordenadas reales)
  const position: [number, number] = [4.6097, -74.0817] // Bogotá, Colombia

  return (
    <Card 
      className={`w-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
        isExpanded ? 'shadow-lg' : 'shadow'
      }`}
      style={{ maxHeight: isExpanded ? '1000px' : '400px' }}
      onClick={toggleExpand}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleExpand();
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
    >
      <CardHeader>
        <CardTitle className="font-pixel text-2xl">Propuesta {props.Descripción}</CardTitle>
        <CardDescription className="text-lg">Calificación: {props.Calificación} ★</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        <div className="relative w-full h-60">
          <Image
            src={`/${props.Fotos[0]}`} // Primera foto del array de Fotos
            alt="Imagen de la propuesta"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 transition-opacity duration-300 ${
            isExpanded ? 'opacity-0' : 'opacity-90'
          }`} />
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
        } overflow-hidden`}>
          <div className="flex">
            <div className="flex-1 pr-4">
              <p className="text-accent-foreground text-lg mb-4">
                {props.Descripción}
              </p>
              <div>
                <h3 className="text-xl font-bold mb-2">Itinerario:</h3>
                <p>{actividad.Itinerario}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-4 mb-2">Actividades:</h3>
                <p>{actividad.Descripción}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {actividad.Etiquetas.map((tag: string, index: number) => (
                  <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/3 h-64">
              {isExpanded && <Map position={position} />}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="font-bold text-2xl">Desde $XXX.XXX COP</p>
          <p className="text-sm text-muted-foreground">por persona</p>
        </div>
        <Button 
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
          className="transition-all duration-300 ease-in-out"
          aria-hidden="true"
        >
          {isExpanded ? (
            <>
              Ver menos
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Ver más
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

