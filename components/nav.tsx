"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Dudas", href: "#faqs" },
]

const sectionIds = links.map((link) => link.href.slice(1)).concat("contacto")

export function Nav() {
  // La isla empieza recogida y, una vez se despliega, se queda desplegada
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    const onScroll = () => {
      if (window.scrollY > 24) setExpanded(true)

      const threshold = window.innerHeight * 0.25
      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }

    onResize()
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    const expand = setTimeout(() => setExpanded(true), 600)
    return () => clearTimeout(expand)
  }, [])

  const islandWidth = isMobile ? (expanded ? 196 : 152) : expanded ? 820 : 152

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center">
      <div className="pointer-events-auto relative flex flex-col items-center">
        {/* ── La isla ── */}
        <nav
          aria-label="Navegación principal"
          onMouseEnter={() => setExpanded(true)}
          className={cn(
            "relative flex h-15 items-center overflow-hidden rounded-full",
            "border border-white/10",
            "bg-zinc-900/90 backdrop-blur-2xl",
            "shadow-[0_4px_32px_rgba(0,0,0,0.30),0_1px_0_rgba(255,255,255,0.06)_inset]",
            "transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]"
          )}
          style={{ width: islandWidth }}
        >
          <a
            href="#inicio"
            aria-label="Conelek – inicio"
            className={cn(
              "flex shrink-0 items-center text-white",
              expanded ? "pr-2 pl-5" : "pr-5 pl-5",
              "transition-[padding] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]"
            )}
          >
            <Logo className="h-7" />
          </a>

          {/* Enlaces escritorio */}
          <ul
            className={cn(
              "hidden flex-1 items-center justify-center gap-0.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[15px] whitespace-nowrap transition-colors",
                    activeSection === link.href.slice(1)
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA escritorio */}
          <div
            className={cn(
              "hidden shrink-0 pr-1.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <a
              href="#contacto"
              className="inline-flex h-11 items-center rounded-full bg-brand-primary px-5 text-[15px] font-medium whitespace-nowrap text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
            >
              Pedir presupuesto
            </a>
          </div>

          {/* Hamburguesa móvil */}
          <div
            className={cn(
              "ml-auto flex shrink-0 pr-2 md:hidden",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex size-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={18}
              />
            </button>
          </div>
        </nav>

        {/* ── Desplegable móvil ── */}
        <div
          className={cn(
            "absolute top-full mt-2 w-56 overflow-hidden rounded-2xl md:hidden",
            "border border-white/10 bg-zinc-900/95 backdrop-blur-2xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.30)]",
            "flex flex-col gap-0.5 p-1.5",
            "origin-top transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-y-95 opacity-0"
          )}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-2.5 text-sm transition-colors",
                activeSection === link.href.slice(1)
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-0.5 rounded-xl bg-brand-primary px-3 py-2.5 text-center text-sm font-medium text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
          >
            Pedir presupuesto
          </a>
        </div>
      </div>
    </div>
  )
}
