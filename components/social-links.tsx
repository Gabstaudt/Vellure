import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex space-x-3 sm:space-x-4">
      <Link
        href="https://instagram.com"
        target="_blank"
        className="text-muted-foreground hover:text-[#0a2342] transition-colors p-1"
        aria-label="Instagram"
      >
        <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        className="text-muted-foreground hover:text-[#0a2342] transition-colors p-1"
        aria-label="Facebook"
      >
        <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className="text-muted-foreground hover:text-[#0a2342] transition-colors p-1"
        aria-label="Twitter"
      >
        <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
    </div>
  )
}
