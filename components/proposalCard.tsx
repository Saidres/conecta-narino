'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ActividadService, ProductorService } from "../service/services";

const Map = dynamic(() => import('./map'), { ssr: false });

interface Activity {
  Calificacion: number;
  Etiquetas: string[];
  Itinerario: string;
  Descripcion: string;
  Fotos: string[];
  ProductorID: string; // Nuevo atributo para enlazar con Productor
}

interface ProposalCardProps {
  id: string;
  Descripcion: string;
  Actividades: string[]; // IDs de actividades
  AgenteTuristicoID: string;
  Fotos: string[];
  Calificacion: number;
}

export default function ProposalCard(props: ProposalCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoadingActivities, setIsLoadingActivities] = useState(false);
  const [activitiesError, setActivitiesError] = useState<string | null>(null);
  const [producerLocation, setProducerLocation] = useState<[number, number] | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchActivities = async () => {
    if (activities.length > 0 || isLoadingActivities) return; // Evitar múltiples llamadas
    setIsLoadingActivities(true);
    setActivitiesError(null);

    try {
      const fetchedActivities = await Promise.all(
        props.Actividades.map(async (id) => {
          return await ActividadService.readById(id); // Obtener datos de actividades
        })
      );
      setActivities(fetchedActivities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setActivitiesError('No se pudieron cargar las actividades.');
    } finally {
      setIsLoadingActivities(false);
    }
  };

  const fetchProducerLocation = async () => {
    if (producerLocation || isLoadingLocation || !activities.length) return; // Evitar llamadas redundantes
    setIsLoadingLocation(true);

    try {
      const producerIds = activities.map((activity) => activity.ProductorID);
      console.log(producerIds);
      const uniqueProducerIds = [...new Set(producerIds)];

      // Obtener datos del primer productor (puedes ajustar si hay múltiples productores)
      const producer = await ProductorService.readById(uniqueProducerIds[0]);
      if (producer && producer.Ubicacion) {
        setProducerLocation([producer.Ubicacion.latitud, producer.Ubicacion.longitud]);
      }
    } catch (error) {
      console.error('Error fetching producer location:', error);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      fetchActivities();
    }
  }, [isExpanded]);
  
  useEffect(() => {
    if (isExpanded && activities.length > 0) {
      fetchProducerLocation();
    }
  }, [isExpanded, activities]);

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
        <CardTitle className="font-pixel text-2xl">Propuesta {props.Descripcion}</CardTitle>
        <CardDescription className="text-lg">Calificación: {props.Calificacion} ★</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 relative">
        <div className="relative w-full h-60">
          <Image
            src={props.Fotos[0]} // Primera foto del array de Fotos
            alt="Imagen de la propuesta"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'
          } overflow-hidden`}
        >
          <div className="flex">
            <div className="flex-1 pr-4">
              <p className="text-accent-foreground text-lg mb-4">{props.Descripcion}</p>
              <div>
                <h3 className="text-xl font-bold mb-2">Actividades:</h3>
                {isLoadingActivities ? (
                  <p className="text-center h-16 flex items-center justify-center">Cargando actividades...</p>
                ) : activitiesError ? (
                  <p className="text-center text-red-500 h-16 flex items-center justify-center">{activitiesError}</p>
                ) : (
                  activities.map((activity, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-semibold">{activity.Descripcion}</h4>
                      <p>{activity.Itinerario}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activity.Etiquetas.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="w-1/3 h-64">
              {isExpanded && producerLocation ? (
                <Map key={producerLocation?.toString()} position={producerLocation} />
              ) : (
                <div className="bg-gray-200 w-full h-full rounded-md animate-pulse" />
              )}
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
