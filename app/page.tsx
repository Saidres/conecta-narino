"use client";
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import AnimatedListDemo from "./landing/animatedlist-demo/page"
import GlobePage from "./landing/globe-section/page"
import GameCard from "./landing/game-card/page"

export default function IndexPage() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Header section with animated background image */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/bgg.jpg"
            alt="Agroturismo background"
            fill
            className="absolute inset-0 object-cover z-0 
              animate-ken-burns-zoom 
              origin-center 
              transition-transform 
              duration-[20s] 
              ease-in-out"
          />
        </div>

        {/* Darker animated gradient overlay */}
        <div className="absolute inset-0 
          bg-gradient-to-r 
          from-black/70 
          to-black/60 
          animate-gradient-shift 
          z-1">
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <div className="max-w-[980px] flex flex-col items-center gap-6 
            transform 
            transition-all 
            duration-1000 
            ease-out 
            hover:scale-[1.02]">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-pixel 
              font-bold 
              leading-tight 
              tracking-wider 
              text-white 
              text-center
              animate-subtle-float">
              Agroturismo en Colombia: Vive la naturaleza y la cultura local
            </h1>
            <p className="max-w-[700px] text-lg sm:text-xl text-white text-center
              animate-subtle-float 
              animation-delay-300">
              Descubre la magia de los paisajes colombianos mientras exploras sus fincas y tradiciones, una experiencia única de agroturismo.
            </p>

            <div className="flex gap-4 justify-center mt-6">
              <Link
                href="/login"
                rel="noreferrer"
                className={`${buttonVariants({ variant: "default" })} 
                  animate-subtle-float`}
              >
                Aprende más sobre el Agroturismo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page content */}
      <section className="container relative z-10 justify-items-center grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto justify-center mt-20">
        <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <GlobePage />
          <AnimatedListDemo />
        </div>
        <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <GameCard />
        </div>
      </section>
    </div>
  )
}