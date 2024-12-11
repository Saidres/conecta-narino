
"use client";
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import RetroGrid from "@/components/magicui/retro-grid"
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
// import { NostalgiaPage } from "./nostalgia-section/page";

export default function IndexPage() {
  const router = useRouter();

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 mx-auto justify-center mt-20">
      
      <div className="flex max-w-[980px] flex-col items-center gap-6 retro-theme relative">
      <div
        className={cn(
          "group rounded-full border border-gray-200 bg-gray-200 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 z-10",
        )}
      >
        
        </div>
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel font-bold leading-tight tracking-wider text-accent-foreground text-center z-10">
          Retro-inspired UI Template to feel <p className="underline decoration-gray-400 decoration-4 underline-offset-2 mt-0 lg:mt-3 md:mt-0 sm:mt-0 z-10">Nostalgia 🧩</p>
        </h1>
        <p onClick={() => router.push("/login")} className="max-w-[700px] text-lg sm:text-xl text-accent-foreground text-center z-10">
          Step into a world of retro, where simplicity and nostalgia blend to create a timeless experience.
        
        </p>
      
      
      </div>
      <RetroGrid className="z-0 absolute inset-0 max-w-[1000]" /> 
      <div className="flex gap-4 justify-center">
        <Link
          href="/login"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    
    </section>
    
  )
}
