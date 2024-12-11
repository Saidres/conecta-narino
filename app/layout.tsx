import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import TextReveal from "@/components/magicui/text-reveal"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import AnimatedListDemo from "./landing/animatedlist-demo/page"
import GlobePage from "./landing/globe-section/page"
import GameCard from "./landing/game-card/page"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "max-h-auto bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen">
              <SiteHeader />
              <div className="justify-center items-center">
                {children}
              </div>
            </div>
            <SiteFooter className=" fixed border-t bottom-0 inset-x-0 sm:static" />
            <TailwindIndicator />
            
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

