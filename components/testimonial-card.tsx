import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  text: string
  image: string
}

export function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-[#f2e9e4]/30 p-4 sm:p-6 rounded-lg border hover:shadow-md transition-all">
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-sm sm:text-base">{name}</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic text-xs sm:text-sm leading-relaxed">"{text}"</p>
    </div>
  )
}
