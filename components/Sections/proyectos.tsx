import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  Home01Icon,
  School01Icon,
} from "@hugeicons/core-free-icons"
import ElectricBorder from "@/components/reactbits/ElectricBorder"
import { SectionHeading } from "@/components/section-heading"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Escala = {
  icon: IconSvgElement
  label: string
  title: string
  text: string
  items: string[]
  cta: { label: string; message: string }
  color: string
  accent: "primary" | "accent"
}

const escalas: Escala[] = [
  {
    icon: School01Icon,
    label: "Grandes instalaciones",
    title: "Colegios, naves y comunidades",
    text: "Instalaciones completas de electricidad y climatización. Coordinamos con el resto de la obra y cumplimos los plazos.",
    items: [
      "Colegios y edificios públicos",
      "Naves industriales y locales comerciales",
      "Comunidades de vecinos y garajes",
      "Climatización de oficinas y aulas",
    ],
    cta: {
      label: "Hablar de un proyecto",
      message:
        "Hola Conelek, os escribo por un proyecto de instalación para una empresa/edificio.",
    },
    color: "#9b6cf0",
    accent: "primary",
  },
  {
    icon: Home01Icon,
    label: "En tu casa",
    title: "Arreglos y reformas en casa",
    text: "Ningún trabajo es demasiado pequeño. Venimos, lo arreglamos y lo dejamos todo limpio.",
    items: [
      "Enchufes, interruptores y lámparas",
      "Averías y saltos del diferencial",
      "Cambio de cuadro eléctrico",
      "Montaje de aire acondicionado y calderas",
    ],
    cta: {
      label: "Pedir un arreglo",
      message: "Hola Conelek, necesitaría un arreglo en casa.",
    },
    color: "#5fd17a",
    accent: "accent",
  },
]

function EscalaCard({ escala }: { escala: Escala }) {
  const isPrimary = escala.accent === "primary"

  return (
    <ElectricBorder
      color={escala.color}
      speed={0.8}
      chaos={0.45}
      thickness={1.4}
      glow={0.5}
      intensity={0.7}
      borderRadius={28}
      className="h-full"
    >
      <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900/80 p-8 lg:p-10">
        <div
          className={cn(
            "pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-3xl",
            isPrimary ? "bg-brand-primary/25" : "bg-brand-accent/20"
          )}
        />
        <div className="relative flex items-center gap-4">
          <span
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl",
              isPrimary
                ? "bg-brand-primary text-white"
                : "bg-brand-accent text-white"
            )}
          >
            <HugeiconsIcon icon={escala.icon} size={28} />
          </span>
          <p
            className={cn(
              "text-sm font-semibold tracking-widest uppercase",
              isPrimary ? "text-brand-primary-light" : "text-brand-accent-light"
            )}
          >
            {escala.label}
          </p>
        </div>

        <div className="relative flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-white">{escala.title}</h3>
          <p className="text-lg leading-relaxed text-zinc-400">{escala.text}</p>
        </div>

        <ul className="relative flex flex-col gap-3">
          {escala.items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-zinc-200">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                size={20}
                className={
                  isPrimary
                    ? "text-brand-primary-light"
                    : "text-brand-accent-light"
                }
              />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(escala.cta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative mt-auto inline-flex w-fit items-center gap-2 font-semibold transition-colors",
            isPrimary
              ? "text-brand-primary-light hover:text-white"
              : "text-brand-accent-light hover:text-white"
          )}
        >
          {escala.cta.label}
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
        </a>
      </div>
    </ElectricBorder>
  )
}

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-zinc-900 py-16 lg:py-24"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <SectionHeading
          align="center"
          label="Grandes y pequeños"
          title="Ningún trabajo es demasiado grande"
          highlight="ni demasiado pequeño"
          intro="El mismo equipo que electrifica un colegio entero te cambia la lámpara del salón. Con el mismo cuidado."
          className="max-w-3xl"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {escalas.map((escala) => (
            <EscalaCard key={escala.label} escala={escala} />
          ))}
        </div>
      </div>
    </section>
  )
}
