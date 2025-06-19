import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ProductCard({ title, description, image, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-all block"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={400}
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-medium text-base sm:text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {description}
        </p>
        <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
          Ver mais
        </Button>
      </div>
    </Link>
  )
}
