import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { WhatsappIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

// Para añadir fotos: súbelas a /public/trabajos y añade una entrada aquí.
const trabajos = [
  {
    src: "/trabajos/aire-acondicionado-cubierta.webp",
    alt: "Técnico de Conelek con equipo de recuperación de gas en una cubierta",
    title: "Mantenimiento de aire acondicionado",
    tag: "Climatización",
    position: "object-top",
  },
  {
    src: "/trabajos/iluminacion-led-jardin.webp",
    alt: "Muro de jardín con iluminación LED perimetral de noche",
    title: "Iluminación LED en jardín",
    tag: "Iluminación",
    position: "object-[50%_60%]",
  },
  {
    src: "/trabajos/iluminacion-salon.webp",
    alt: "Salón comedor con lámpara LED colgante y plafón",
    title: "Iluminación de salón",
    tag: "Electricidad",
    position: "object-center",
  },
]

export function Trabajos() {
  return (
    <section id="trabajos" className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <SectionHeading
          label="Trabajos reales"
          title="Así queda"
          highlight="nuestro trabajo"
          intro="Fotos de instalaciones hechas por nuestro equipo, sin retoques de catálogo."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((trabajo) => (
            <figure
              key={trabajo.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-800"
            >
              <Image
                src={trabajo.src}
                alt={trabajo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-105",
                  trabajo.position
                )}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-zinc-950/95 via-zinc-950/60 to-transparent p-6 pt-16">
                <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-0.5 text-xs font-medium text-zinc-200 backdrop-blur">
                  {trabajo.tag}
                </span>
                <span className="text-lg font-bold text-white">
                  {trabajo.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-6 rounded-3xl border border-brand-primary/40 bg-zinc-900 bg-[radial-gradient(circle_at_0%_0%,rgba(116,69,196,0.35),transparent_60%)] p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold text-white">
              ¿El siguiente es el tuyo?
            </p>
            <p className="max-w-xl leading-relaxed text-zinc-400">
              Mándanos una foto de lo que necesitas por WhatsApp y te decimos
              cómo lo haríamos y cuánto costaría.
            </p>
          </div>
          <Button asChild size="xl" className="w-fit shrink-0">
            <a
              href={whatsappLink(
                "Hola Conelek, os mando unas fotos de lo que necesito."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon icon={WhatsappIcon} size={20} />
              Enviar fotos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
