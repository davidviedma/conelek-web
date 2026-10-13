"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MouseScroll02Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import Lightning from "@/components/reactbits/Lightning"
import RotatingText from "@/components/reactbits/RotatingText"
import ShinyText from "@/components/reactbits/ShinyText"
import { PHONE, PHONE_HREF, whatsappLink } from "@/lib/site"

const stackImages = [
  {
    src: "/trabajos/aire-acondicionado-cubierta.webp",
    alt: "Técnico de Conelek revisando un equipo de aire acondicionado en una cubierta",
    objectPosition: "object-top",
  },
  {
    src: "/trabajos/iluminacion-led-jardin.webp",
    alt: "",
    objectPosition: "object-center",
  },
  {
    src: "/trabajos/iluminacion-salon.webp",
    alt: "",
    objectPosition: "object-center",
  },
]

// transform por posición en la pila (delante → detrás)
const positions = [
  "z-30 rotate-0 translate-x-0 translate-y-0 scale-100 opacity-100 shadow-2xl border border-zinc-700/60",
  "z-20 rotate-[5deg] translate-x-[72px] translate-y-[56px] scale-[0.90] opacity-100",
  "z-10 rotate-[-6deg] -translate-x-[60px] -translate-y-[48px] scale-[0.80] opacity-100",
]

const especialidades = [
  "instalaciones eléctricas",
  "aire acondicionado",
  "calderas de gas",
  "iluminación LED",
]

const checks = [
  "Presupuesto sin compromiso",
  "Particulares y empresas",
  "Toda Navarra",
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [order, setOrder] = useState([0, 1, 2])

  function cycle() {
    setOrder((prev) => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  useEffect(() => {
    const id = setInterval(cycle, 5500)
    return () => clearInterval(id)
  }, [])

  function setGlow(x: string, y: string) {
    sectionRef.current?.style.setProperty("--glow-x", x)
    sectionRef.current?.style.setProperty("--glow-y", y)
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlow(`${e.clientX - rect.left}px`, `${e.clientY - rect.top}px`)
  }

  function hideGlow() {
    setGlow("-9999px", "-9999px")
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative flex flex-1 flex-col overflow-hidden bg-zinc-950 [--glow-x:-9999px] [--glow-y:-9999px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #27272a 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideGlow}
    >
      {/* Puntos morados que siguen al cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-brand-primary-light) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(200px circle at var(--glow-x) var(--glow-y), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(200px circle at var(--glow-x) var(--glow-y), black 0%, transparent 100%)",
        }}
      />

      {/* Rayo (React Bits · Lightning) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-60 lg:w-[62%] lg:opacity-100">
        <Lightning
          color="#9b6cf0"
          bolts={2}
          spread={0.5}
          branches={0.6}
          size={1}
          glow={1.1}
          intensity={0.9}
          speed={0.8}
          fade={0.25}
          mouseStrength={0.6}
          clickStrike={false}
          dpr={1.5}
        />
      </div>

      {/* Viñeta para que el texto se lea sobre el rayo */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent lg:via-zinc-950/40" />

      <div className="relative z-10 container mx-auto grid flex-1 grid-cols-1 items-center gap-12 px-6 pt-32 pb-12 sm:px-12 lg:grid-cols-2 lg:px-24 lg:py-24">
        {/* Izquierda — texto */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-accent-light opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-accent-light" />
              </span>
              <ShinyText
                text="Electricistas y climatización en Navarra"
                color="#a1a1aa"
                shineColor="#ffffff"
                speed={3}
              />
            </span>

            <h1 className="text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              De colegios enteros al{" "}
              <span className="text-brand-primary-light">
                enchufe de tu cocina
              </span>
              .
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-zinc-300 md:text-xl">
              <span>Especialistas en</span>
              <RotatingText
                texts={especialidades}
                mainClassName="overflow-hidden rounded-lg bg-brand-primary px-3 py-1 font-semibold text-white"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2600}
              />
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-400">
              Hacemos grandes instalaciones para colegios, naves y comunidades…
              y también ese arreglo en casa que llevas meses posponiendo.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3" onMouseEnter={hideGlow}>
            <Button asChild size="xl">
              <a
                href={whatsappLink(
                  "Hola Conelek, me gustaría pedir presupuesto para un trabajo."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <HugeiconsIcon icon={WhatsappIcon} size={20} />
                Pedir presupuesto
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover"
            >
              <a href={PHONE_HREF}>
                <HugeiconsIcon icon={Call02Icon} size={20} />
                {PHONE}
              </a>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={18}
                  className="text-brand-accent-light"
                />
                {check}
              </li>
            ))}
          </ul>
        </div>

        {/* Derecha — pila de fotos animada */}
        <div className="hidden h-[520px] items-center justify-center lg:relative lg:flex xl:h-[600px]">
          {order.map((imgIdx, stackPos) => {
            const img = stackImages[imgIdx]
            return (
              <div
                key={imgIdx}
                onClick={stackPos === 0 ? cycle : undefined}
                className={`absolute inset-y-0 left-1/2 -ml-[39%] w-[78%] overflow-hidden rounded-3xl transition-transform duration-[1400ms] ease-in-out ${positions[stackPos]} ${stackPos === 0 ? "cursor-pointer" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1280px) 40vw, 480px"
                  className={`object-cover ${img.objectPosition}`}
                  priority={imgIdx === 0}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="relative z-10 hidden flex-col items-center gap-1 pb-6 text-zinc-600 sm:flex">
        <span className="text-xs font-medium tracking-widest uppercase">
          Desliza
        </span>
        <HugeiconsIcon
          icon={MouseScroll02Icon}
          size={18}
          className="animate-bounce"
        />
      </div>
    </section>
  )
}
