"use client";
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import AnimatedListDemo from "./landing/animatedlist-demo/page"
import GlobePage from "./landing/globe-section/page"
import GameCard from "./landing/game-card/page"
import { useRouter } from 'next/navigation'
// import { NostalgiaPage } from "./nostalgia-section/page";


export default function IndexPage() {
  const router = useRouter();

  return (
    <section className="container justify-items-center grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto justify-center mt-20">
      
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
         Agroturismo en Colombia: Vive la naturaleza y la cultura local
        </h1>
        <p className="max-w-[700px] text-lg sm:text-xl text-accent-foreground text-center z-10">
          Descubre la magia de los paisajes colombianos mientras exploras sus fincas y tradiciones, una experiencia única de agroturismo.
        </p>
      
      </div>
      
      <div className="flex gap-4 justify-center">
        <Link
          href="/login"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Aprende más sobre el Agroturismo
        </Link>
      </div>

      {/* Componentes adicionales fuera del children */}
      <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/*<GlobePage />*/}
          <AnimatedListDemo />
          </div>
      <div className="pt-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      <GameCard />

          </div>
      
      
    
    </section>
    
  )
}

