'use client'

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import YouTube from 'react-youtube'
import {useRouter} from 'next/navigation'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const router = useRouter()

  

  const handleContinue = () => {
    if (selectedCategory) {
      console.log(`Continuing with category: ${selectedCategory}`)
      // Aquí puedes agregar la lógica para continuar
      switch (selectedCategory) {
        case "operarioTuristico":
          router.push('/')
          break;
        case "productorAgricola":
          router.push('/')
          break;
        case "turista":
          router.push('/')
          break;
        default:

          break;
      }
    } else {
      alert('Por favor, selecciona una categoría antes de continuar.')
    }
  }

  // Configuraciones de YouTube
  const youtubeOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, // Auto reproducir
      mute: 1, // Silenciar
      loop: 1, // Bucle
      controls: 0, // Ocultar controles
      showinfo: 0,
      modestbranding: 1,
      playlist: 'up5z3CfFZ_U' // ID del video para loop
    }
  }


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 overflow-hidden">
      {/* Fondo de YouTube */}
      <div className="absolute inset-0 z-0">
        <YouTube
          videoId="up5z3CfFZ_U"
          opts={youtubeOpts}
          className="absolute inset-0 w-full h-full"
          iframeClassName="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Capa de oscurecimiento para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 w-full max-w-md space-y-8">
        <div className="text-center text-white">
          <TypeAnimation
            sequence={[
              'Vive Nariño',
              1000,
              'Selecciona un rol para continuar',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
            className="text-white"
          />
        </div>
        
        <Select onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm">
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="operarioTuristico">Operario turístico</SelectItem>
            <SelectItem value="productorAgricola">Productor agrícola</SelectItem>
            <SelectItem value="turista">Turista</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          className="w-full" 
          onClick={handleContinue}
          disabled={!selectedCategory}
        >
          Continuar
        </Button>
      </div>
    </main>
  )
}