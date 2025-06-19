"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Star, Sparkles, Feather, ChevronRight, CheckCircle } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { ProductCard } from "@/components/product-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { SocialLinks } from "@/components/social-links"
import { MainNav } from "@/components/main-nav"
import { MobileMenu } from "@/components/mobile-menu"
import { useRef } from "react"
import emailjs from "@emailjs/browser"


export default function Home() {
  const form = useRef<HTMLFormElement>(null)

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault()

  if (!form.current) return

  emailjs
    .sendForm(
      'service_velure',           // ← substitua pelo seu Service ID
      'template_jgorfrr',         // ← substitua pelo seu Template ID
      form.current,
      'v924ChdHLFGIR-aM5'       // ← sua Public Key
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!')
      form.current?.reset()
    })
    .catch((error) => {
      console.error(error)
      alert('Erro ao enviar mensagem.')
    })
}

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
 <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
  <div className="container flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
    <Link href="/" className="flex items-center">
      <Image
        src="/LogoComum.png"
        alt="Logo Velure"
        width={80}
        height={80}
        className="mr-2"
      />
    </Link>

    <MainNav />

    {/* Espaçador para manter o MainNav centralizado */}
    <div className="w-[96px] hidden lg:block" />
  </div>
</header>






      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-[#0a2342] text-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/fundo.png?height=1080&width=1920"
              alt="Vellure Intimate"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 sm:px-6 flex flex-col items-center text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              O íntimo do seu bem-estar.
            </h1>
            <p className="max-w-[90%] sm:max-w-[600px] text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Descubra o equilíbrio perfeito entre conforto, estilo e sensualidade em cada peça.
            </p>
            <Button
              size="lg"
              className="bg-[#f2e9e4] text-[#0a2342] hover:bg-[#f2e9e4]/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <Link href="#products">
                Conheça a coleção
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Link
            href="#about"
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-[#f2e9e4] transition-colors"
            aria-label="Rolar para baixo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-[#f2e9e4] scroll-mt-14 sm:scroll-mt-16">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-[#0a2342] rounded-full transform -rotate-6"></div>
                  <div className="absolute inset-3 sm:inset-4 overflow-hidden rounded-full">
                    <Image
                      src="/logodetail.png?height=600&width=600"
                      alt="Sobre Vellure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="inline-block bg-[#0a2342] px-3 sm:px-4 py-1 rounded-full">
                  <span className="text-white text-xs sm:text-sm font-medium">Nossa História</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Sobre a Vellure Intimate
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Vellure Intimate é uma marca que une sensualidade, conforto e performance. Voltada para moda íntima,
                  pijamas e fitness, oferece estilo e bem-estar tanto para homens quanto para mulheres. Inspirada na
                  palavra francesa "velours", transmite a suavidade e a elegância do veludo em cada detalhe.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-[#0a2342]" />
                    <span className="font-medium text-sm sm:text-base">Conforto</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#0a2342]" />
                    <span className="font-medium text-sm sm:text-base">Estilo</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#0a2342]" />
                    <span className="font-medium text-sm sm:text-base">Autenticidade</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Feather className="h-4 w-4 sm:h-5 sm:w-5 text-[#0a2342]" />
                    <span className="font-medium text-sm sm:text-base">Sofisticação</span>
                  </div>
                </div>
                <Button className="bg-[#0a2342] hover:bg-[#0a2342]/90 text-white w-full sm:w-auto" asChild>
                  <Link href="#products">Conheça nossos produtos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-12 sm:py-16 lg:py-20 scroll-mt-14 sm:scroll-mt-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Nossos Produtos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
                Descubra nossa coleção completa de peças que combinam design exclusivo, materiais premium e o conforto
                que você merece.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              <ProductCard
                title="Moda íntima feminina"
                description="Peças delicadas que unem conforto e sensualidade para o dia a dia."
                image="/mulheres.jpg?height=400&width=300"
                href="/produtos/feminino"
              />
              <ProductCard
                title="Moda íntima masculina"
                description="Conforto e estilo para o homem moderno em todos os momentos."
                image="/homem.jpg?height=100&width=100"
                href="/produtos/masculino"
              />
              <ProductCard
                title="Pijamas"
                description="O melhor do conforto para seus momentos de descanso e relaxamento."
                image="/pijama.jpg?height=400&width=300"
                href="/produtos/pijamas"
              />
              <ProductCard
                title="Moda íntima infantil"
                description="Conforto, segurança e delicadeza para os pequenos em todas as fases do dia"
                image="/pijamaInf.jpg?height=400&width=300"
                href="/produtos/fitness"
              />
              <ProductCard
                title="Fitness"
                description="Performance e estilo para suas atividades físicas diárias."
                image="/fitness.jpg?height=400&width=300"
                href="/produtos/fitness"
              />
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section
          id="diferenciais"
          className="py-12 sm:py-16 lg:py-20 bg-[#0a2342] text-white scroll-mt-14 sm:scroll-mt-16"
        >
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Diferenciais da Vellure
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4">
                O que torna nossas peças únicas e especiais para você.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: "Materiais premium",
                  description: "Selecionamos os melhores produtos para garantir conforto e durabilidade.",
                  icon: <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-[#f2e9e4]" />,
                  href: "/sobre/materiais",
                },
                {
                  title: "Melhores Marcas",
                  description: "Criações exclusivas que valorizam a individualidade de cada pessoa.",
                  icon: <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-[#f2e9e4]" />,
                  href: "/sobre/design",
                },
                {
                  title: "Conforto no dia a dia",
                  description: "Peças pensadas para acompanhar todos os seus momentos com bem-estar.",
                  icon: <Feather className="h-8 w-8 sm:h-10 sm:w-10 text-[#f2e9e4]" />,
                  href: "/sobre/conforto",
                },
                {
                  title: "Moda sem gênero",
                  description: "Acreditamos que o conforto e o estilo são para todos, sem distinção.",
                  icon: <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-[#f2e9e4]" />,
                  href: "/sobre/inclusividade",
                },
              ].map((differential, index) => (
                <Link
                  key={index}
                  href={differential.href}
                  className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-[#0a2342] border border-white/10 hover:border-white/20 transition-all hover:bg-[#0a2342]/80 hover:transform hover:scale-105"
                >
                  <div className="mb-3 sm:mb-4">{differential.icon}</div>
                  <h3 className="font-medium text-base sm:text-lg mb-2">{differential.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{differential.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 scroll-mt-14 sm:scroll-mt-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                O que dizem sobre nós
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                A experiência de quem já descobriu o conforto e a qualidade Vellure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <TestimonialCard
                name="Ana Clara"
                text="As peças da Vellure transformaram minha relação com moda íntima. Nunca encontrei tanto conforto e beleza ao mesmo tempo."
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Ricardo Mendes"
                text="Finalmente uma marca que entende que homens também merecem conforto e estilo nas peças íntimas. Não uso outra marca."
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Juliana Santos"
                text="Os pijamas da Vellure são um sonho! O tecido é tão macio que parece um abraço. Indico para todos os meus amigos."
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-12 sm:py-16 lg:py-20 bg-[#0a2342] text-white scroll-mt-14 sm:scroll-mt-16">
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              Vista o que te faz sentir bem.
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed px-4">
              Descubra o prazer de vestir peças que foram feitas pensando no seu conforto e bem-estar.
            </p>
            <Button
              size="lg"
              className="bg-[#f2e9e4] text-[#0a2342] hover:bg-[#f2e9e4]/90 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <Link href="#products">Comece sua experiência Vellure</Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 scroll-mt-14 sm:scroll-mt-16">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                    Entre em contato
                  </h2>
                  <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                    Estamos sempre disponíveis para ajudar você a encontrar as peças perfeitas para o seu estilo e
                    conforto.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-[#0a2342] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Telefone</p>
                      <Link
                        href="tel:+5511999999999"
                        className="text-muted-foreground hover:text-[#0a2342] text-sm sm:text-base"
                      >
                        +55 (00) 00000-0000
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-[#0a2342] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <Link
                        href="mailto:velureintimate@gmail.com"
                        className="text-muted-foreground hover:text-[#0a2342] text-sm sm:text-base break-all"
                      >
                        velureintimate@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-[#0a2342] p-2 sm:p-3 rounded-full flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Endereço</p>
                      <Link
                        href="https://maps.app.goo.gl/kGD3uGZcYiKPZLiV9"
                        target="_blank"
                        className="text-muted-foreground hover:text-[#0a2342] text-sm sm:text-base"
                      >
                        Av. Sul Brasil, 95 - Centro, Maravilha - SC, 89874-000
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pt-4 sm:pt-6">
                  <p className="font-medium mb-3 text-sm sm:text-base">Siga-nos</p>
                  <SocialLinks />
                </div>
              </div>
              <div className="bg-[#f2e9e4]/30 p-4 sm:p-6 rounded-lg border">
                <h3 className="font-serif text-lg sm:text-xl font-medium mb-4 sm:mb-6">Envie uma mensagem</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
  <div className="space-y-4">
    <div className="space-y-2">
      <label htmlFor="name" className="text-xs sm:text-sm font-medium">
        Nome
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className="w-full px-3 py-2 border rounded-md text-sm"
        placeholder="Seu nome"
        required
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-xs sm:text-sm font-medium">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className="w-full px-3 py-2 border rounded-md text-sm"
        placeholder="seu@email.com"
        required
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="subject" className="text-xs sm:text-sm font-medium">
        Assunto
      </label>
      <input
        id="subject"
        name="title"
        type="text"
        className="w-full px-3 py-2 border rounded-md text-sm"
        placeholder="Assunto da mensagem"
        required
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-xs sm:text-sm font-medium">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-3 py-2 border rounded-md min-h-[100px] sm:min-h-[120px] text-sm resize-none"
        placeholder="Sua mensagem"
        required
      ></textarea>
    </div>
  </div>

  <Button
    type="submit"
    className="w-full bg-[#0a2342] hover:bg-[#0a2342]/90 text-sm sm:text-base"
  >
    Enviar mensagem
  </Button>
</form>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-8 sm:py-12">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <Link href="/LogoComum.png" className="flex items-center">
                {/* Placeholder for logo - to be replaced later */}
                <div className="relative h-6 w-6 sm:h-8 sm:w-8 mr-2 border border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Logo</span>
                </div>
                <span className="font-serif text-base sm:text-lg">Vellure Intimate</span>
              </Link>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Moda íntima que une sensualidade, conforto e performance.
              </p>
              <SocialLinks />
            </div>
            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Menu</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Informações</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <Link href="/termos" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/entregas" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    Entregas
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-[#0a2342] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Newsletter</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                Receba novidades e ofertas exclusivas.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-muted-foreground">
            <p>Vellure Intimate © Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
