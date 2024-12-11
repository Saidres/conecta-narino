'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
    "/images/Slider-seis.jpg",    
    "/images/Slider-uno.jpg",
    "/images/Slider-dos.jpg",
    "/images/Slider-tres.jpg",    
    "/images/Slider-cuatro.jpg",
    "/images/Slider-cinco.jpg"    
  
  ]

export function ImageSlider({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-spring-green-950 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="h-full w-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-spring-green-950/50 to-transparent" />
      
      <button 
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-spring-green-50/20 p-2 text-spring-green-50 backdrop-blur-sm transition-all hover:bg-spring-green-50/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-spring-green-50/20 p-2 text-spring-green-50 backdrop-blur-sm transition-all hover:bg-spring-green-50/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-spring-green-50 w-4' : 'bg-spring-green-50/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

