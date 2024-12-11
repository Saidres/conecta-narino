'use client'

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const handleContinue = () => {
    if (selectedCategory) {
      console.log(`Continuing with category: ${selectedCategory}`)
      // Aquí puedes agregar la lógica para continuar
    } else {
      alert('Por favor, selecciona una categoría antes de continuar.')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <TypeAnimation
            sequence={[
              'Bienvenido a nuestra aplicación',
              1000,
              'Selecciona una categoría para continuar',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        
        <Select onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="categoria1">Categoría 1</SelectItem>
            <SelectItem value="categoria2">Categoría 2</SelectItem>
            <SelectItem value="categoria3">Categoría 3</SelectItem>
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

