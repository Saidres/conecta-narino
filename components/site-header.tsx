'use client'

import {loadData} from "../test/data";

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"


export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <button
            onClick={loadData}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost"                  
                })}
              >
                <Icons.menu className="h-5 w-5 fill-current text-spring-green-700" />
                <span className="sr-only">Menu</span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
