"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function MainNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "diferenciais", "depoimentos", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden md:flex gap-4 lg:gap-6">
      <Link
        href="#home"
        className={`text-sm font-medium transition-colors ${
          activeSection === "home" ? "text-[#0a2342]" : "hover:text-[#0a2342]"
        }`}
      >
        Home
      </Link>
      <Link
        href="#about"
        className={`text-sm font-medium transition-colors ${
          activeSection === "about" ? "text-[#0a2342]" : "hover:text-[#0a2342]"
        }`}
      >
        Sobre
      </Link>
      <Link
        href="#products"
        className={`text-sm font-medium transition-colors ${
          activeSection === "products" ? "text-[#0a2342]" : "hover:text-[#0a2342]"
        }`}
      >
        Produtos
      </Link>
      <Link
        href="#contact"
        className={`text-sm font-medium transition-colors ${
          activeSection === "contact" ? "text-[#0a2342]" : "hover:text-[#0a2342]"
        }`}
      >
        Contato
      </Link>
    </nav>
  )
}
