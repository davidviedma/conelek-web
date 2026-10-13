"use client"

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  BulbIcon,
  Building03Icon,
  ElectricPlugsIcon,
  Factory01Icon,
  FastWindIcon,
  FireIcon,
  FlashIcon,
  Home01Icon,
  School01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop"

const items: { icon: IconSvgElement; label: string }[] = [
  { icon: FlashIcon, label: "Instalaciones eléctricas" },
  { icon: FastWindIcon, label: "Aire acondicionado" },
  { icon: FireIcon, label: "Calderas de gas" },
  { icon: School01Icon, label: "Colegios" },
  { icon: BulbIcon, label: "Iluminación LED" },
  { icon: Factory01Icon, label: "Naves y locales" },
  { icon: ElectricPlugsIcon, label: "Cuadros eléctricos" },
  { icon: Building03Icon, label: "Comunidades" },
  { icon: Wrench01Icon, label: "Averías" },
  { icon: Home01Icon, label: "Reformas en casa" },
]

const logos: LogoItem[] = items.map(({ icon, label }, i) => ({
  title: label,
  node: (
    <span className="flex items-center gap-3 text-xl font-semibold whitespace-nowrap text-zinc-300 md:text-2xl">
      <HugeiconsIcon
        icon={icon}
        size={26}
        className={
          i % 2 === 0 ? "text-brand-primary-light" : "text-brand-accent-light"
        }
      />
      {label}
    </span>
  ),
}))

export function Ticker() {
  return (
    <div className="border-y border-zinc-800/60 bg-zinc-900 py-8">
      <LogoLoop
        logos={logos}
        speed={60}
        direction="left"
        logoHeight={32}
        gap={56}
        pauseOnHover
        fadeOut
        fadeOutColor="#18181b"
        ariaLabel="Servicios de Conelek"
      />
    </div>
  )
}
