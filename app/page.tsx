import { Nav } from "@/components/nav"
import { Hero } from "@/components/Sections/hero"
import { Ticker } from "@/components/ticker"
import { Servicios } from "@/components/Sections/servicios"
import { Proyectos } from "@/components/Sections/proyectos"
import { Trabajos } from "@/components/Sections/trabajos"
import { Proceso } from "@/components/Sections/proceso"
import { Nosotros } from "@/components/Sections/nosotros"
import { Faqs } from "@/components/Sections/faqs"
import { Contacto } from "@/components/Sections/contacto"
import { Footer } from "@/components/Sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { faqs } from "@/components/Sections/faqs-data"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ pregunta, respuesta }) => ({
    "@type": "Question",
    name: pregunta,
    acceptedAnswer: { "@type": "Answer", text: respuesta },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <div className="flex min-h-svh flex-col">
          <Hero />
        </div>
        <Ticker />
        <Servicios />
        <Proyectos />
        <Trabajos />
        <Proceso />
        <Nosotros />
        <Faqs />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
