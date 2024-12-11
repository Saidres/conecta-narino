"use client";

import { cn } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0.2,  // Centrado en Nariño
  theta: -0.4,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [1.2136, -77.2817], size: 0.1 },  // Pasto
    { location: [1.5678, -77.2812], size: 0.05 },  // Ipiales
    { location: [0.9501, -77.1438], size: 0.05 },  // Tumaco
    { location: [1.0235, -77.2231], size: 0.05 },  // La Unión
    { location: [1.3399, -77.3007], size: 0.05 },  // La Florida
    { location: [40.7128, -74.0060], size: 0.1 },  // Nueva York
    { location: [48.8566, 2.3522], size: 0.1 },  // París
    { location: [34.0522, -118.2437], size: 0.1 },  // Los Ángeles
    { location: [35.6895, 139.6917], size: 0.1 },  // Tokio
    { location: [-33.8688, 151.2093], size: 0.1 },  // Sídney
    // Nuevas ubicaciones agregadas
    { location: [51.5074, -0.1278], size: 0.1 },  // Londres
    { location: [39.9042, 116.4074], size: 0.1 },  // Pekín
    { location: [55.7558, 37.6173], size: 0.1 },  // Moscú
    { location: [40.7306, -73.9352], size: 0.1 },  // Brooklyn (Nueva York)
    { location: [19.4326, -99.1332], size: 0.1 },  // Ciudad de México
    { location: [-23.5505, -46.6333], size: 0.1 },  // São Paulo
    { location: [48.8566, 2.3522], size: 0.1 },  // París
    { location: [41.9028, 12.4964], size: 0.1 },  // Roma
  ],
};


export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const [width, setWidth] = useState(0);
  let phi = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  // Limitar el movimiento manual del globo
  const updatePointerInteraction = (value: number) => {
    pointerInteracting.current = value;
    if (pointerInteracting.current !== null) {
      canvasRef.current!.style.cursor = "grabbing";
    } else {
      canvasRef.current!.style.cursor = "grab";
    }
  };

  const updateMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current !== null && canvasRef.current) {
      const deltaX = clientX - pointerInteracting.current;
      const deltaY = clientY - pointerInteractionMovement.current;

      // Restringir el movimiento a la región de Nariño
      const maxPhi = 0.6;  // Limitar la latitud
      const minPhi = 0.1;  // Ajustar límite inferior
      const maxTheta = -0.2; // Limitar longitud
      const minTheta = -0.6; // Ajustar límite inferior

      phi += deltaY / 500;  // Ajuste de latitud
      phi = Math.max(minPhi, Math.min(maxPhi, phi));  // Restringir latitud

      let theta = r.get() || 0;  // Verifica que r.get() no sea undefined
      theta += deltaX / 500;  // Ajuste longitud
      theta = Math.max(minTheta, Math.min(maxTheta, theta));  // Restringir longitud

      api.start({ r: theta });
    }
  };

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005;
      state.phi = phi + r.get();
      state.width = width * 2;
      state.height = width * 2;
    },
    [pointerInteracting, phi, r, width],
  );

  const onResize = () => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, [width, onRender, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX - pointerInteractionMovement.current);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX, e.clientY)}
        onTouchMove={(e) => {
          if (e.touches[0]) updateMovement(e.touches[0].clientX, e.touches[0].clientY);
        }}
      />
    </div>
  );
}
