import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { SectionHeading } from "@/components/section-heading"
import { services, type Service } from "@/lib/services"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

function ServiceCta({
  service,
  light = false,
}: {
  service: Service
  light?: boolean
}) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "w-fit",
        !light &&
          "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover"
      )}
    >
      <a
        href={whatsappLink(service.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedir presupuesto
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
      </a>
    </Button>
  )
}

// Tarjeta con foto: el CTA aparece al pasar el ratón en escritorio
function PhotoCard({
  service,
  className,
}: {
  service: Service
  className?: string
}) {
  const { image } = service
  if (!image) return null

  return (
    <article
      className={cn(
        "group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-zinc-800 p-8",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        className={cn(
          "object-cover transition-transform duration-700 group-hover:scale-105",
          image.position
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/5" />

      <div className="relative flex flex-col gap-3">
        <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white transition-transform duration-300 md:group-hover:-translate-y-4">
          <HugeiconsIcon icon={service.icon} size={24} />
        </span>
        <div className="transition-transform duration-300 md:group-hover:-translate-y-4">
          <h3 className="text-2xl font-bold text-white">{service.name}</h3>
          <p className="mt-1 max-w-md leading-relaxed text-zinc-300">
            {service.description}
          </p>
        </div>
        <div className="max-h-16 overflow-hidden pt-1 opacity-100 transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-16 md:group-hover:-translate-y-4 md:group-hover:opacity-100">
          <ServiceCta service={service} light />
        </div>
      </div>
    </article>
  )
}

// Tarjeta sin foto: React Bits · SpotlightCard + llama animada
function SpotlightServiceCard({ service }: { service: Service }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(155, 108, 240, 0.35)"
      className="!p-0"
      style={{ "--spotlight-card-surface": "#18181b" } as React.CSSProperties}
      intensity={0.25}
    >
      <div className="relative flex h-full min-h-[360px] flex-col justify-between gap-8 overflow-hidden p-8">
        <Flame />
        <div className="relative z-10 flex flex-col gap-3">
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white">
            <HugeiconsIcon icon={service.icon} size={24} />
          </span>
          <h3 className="text-2xl font-bold text-white">{service.name}</h3>
          <p className="leading-relaxed text-zinc-400">{service.description}</p>
          <div className="pt-2">
            <ServiceCta service={service} />
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}

// Llama de gas en SVG (decorativa)
function Flame() {
  return (
    <svg
      viewBox="0 0 120 160"
      aria-hidden
      className="pointer-events-none absolute -top-4 -right-4 h-36 w-auto opacity-60 sm:-top-6 sm:-right-6 sm:h-56 sm:opacity-80"
    >
      <defs>
        <radialGradient id="flame-outer" cx="0.5" cy="0.75" r="0.7">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="0.45" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#4c1d95" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame-inner" cx="0.5" cy="0.8" r="0.6">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="origin-bottom animate-[flicker_2.4s_ease-in-out_infinite]">
        <path
          d="M60 8C68 40 100 58 100 100a40 40 0 0 1-80 0c0-22 12-34 20-46 2 14 8 22 14 26C56 58 52 34 60 8Z"
          fill="url(#flame-outer)"
        />
        <path
          d="M60 66c6 16 22 24 22 42a22 22 0 0 1-44 0c0-12 8-18 12-26 2 8 6 12 10 14 0-10-2-20 0-30Z"
          fill="url(#flame-inner)"
        />
      </g>
    </svg>
  )
}

export function Servicios() {
  const [electricidad, aire, calderas, iluminacion] = services

  return (
    <section id="servicios" className="bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <SectionHeading
          label="Qué hacemos"
          title="Tres oficios,"
          highlight="un solo equipo"
          intro="Electricidad, clima y gas bajo el mismo techo: una sola llamada y un único responsable para toda la instalación."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <PhotoCard
            service={electricidad}
            className="md:row-span-2 md:min-h-[600px] lg:min-h-[720px]"
          />
          <PhotoCard service={aire} />
          <SpotlightServiceCard service={calderas} />
          <PhotoCard
            service={iluminacion}
            className="md:col-span-1 lg:col-span-2"
          />
        </div>
      </div>
    </section>
  )
}
