"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Menu">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-serif text-lg">Menu</span>
              <Button variant="ghost" size="icon" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#home"
                    className="block py-2 text-base font-medium hover:text-[#0a2342] transition-colors"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="block py-2 text-base font-medium hover:text-[#0a2342] transition-colors"
                    onClick={closeMenu}
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    className="block py-2 text-base font-medium hover:text-[#0a2342] transition-colors"
                    onClick={closeMenu}
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="block py-2 text-base font-medium hover:text-[#0a2342] transition-colors"
                    onClick={closeMenu}
                  >
                    Contato
                  </Link>
                </li>
                <li className="pt-4 border-t">
                  <Button className="w-full bg-[#0a2342] hover:bg-[#0a2342]/90" asChild onClick={closeMenu}>
                    <Link href="#contact">Entrar</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
