import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Configuración de los íconos de Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  position: [number, number]; // Coordenadas iniciales
  zoom: number; // Zoom inicial
}

export default function MapWithClick({ position, zoom }: MapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const currentMarkerRef = useRef<L.Marker | null>(null); // Referencia para el marcador actual

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Inicializar el mapa
      mapRef.current = L.map(mapContainerRef.current).setView(position, zoom);

      // Añadir capa base
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Añadir evento de clic
      mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;

        // Registrar en consola
        console.log(`Latitud: ${lat}, Longitud: ${lng}`);

        // Eliminar marcador anterior si existe
        if (currentMarkerRef.current) {
          mapRef.current!.removeLayer(currentMarkerRef.current);
        }

        // Crear y añadir un nuevo marcador
        const newMarker = L.marker([lat, lng])
          .addTo(mapRef.current!)
          .bindPopup(`Marcador en<br>Lat: ${lat.toFixed(5)}<br>Lng: ${lng.toFixed(5)}`)
          .openPopup();

        // Actualizar referencia del marcador actual
        currentMarkerRef.current = newMarker;
      });
    }

    return () => {
      // Limpiar mapa y referencias en desmontaje
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [position, zoom]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: '100%', width: '100%' }}
    />
  );
}
