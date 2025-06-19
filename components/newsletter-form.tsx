"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades no email fornecido.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Seu e-mail"
        className="px-3 py-2 border rounded-md text-xs sm:text-sm"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" size="sm" disabled={isSubmitting} className="text-xs sm:text-sm">
        {isSubmitting ? "Enviando..." : "Assinar"}
      </Button>
    </form>
  )
}
