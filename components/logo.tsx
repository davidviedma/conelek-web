import { useId } from "react"
import { cn } from "@/lib/utils"
import {
  LOGO_RING,
  LOGO_SPHERE,
  LOGO_SPHERE_TEXT_PATH,
  LOGO_TEXT_PATH,
  LOGO_VIEWBOX,
} from "@/lib/logo-paths"

// Logo CONELEK en vectorial: esfera morada detrás de "ON", anillo verde y
// letras en `currentColor` (blanco sobre fondo oscuro, negro sobre claro).
export function Logo({
  className,
  title = "Conelek",
}: {
  className?: string
  title?: string
}) {
  const gradientId = `${useId()}-sphere`

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label={title}
      className={cn("h-10 w-auto", className)}
    >
      <defs>
        <SphereGradient id={gradientId} />
      </defs>
      <circle {...LOGO_SPHERE} fill={`url(#${gradientId})`} />
      <path d={LOGO_TEXT_PATH} fill="currentColor" />
      <path d={LOGO_SPHERE_TEXT_PATH} fill="#ffffff" />
      <ellipse
        {...LOGO_RING}
        fill="none"
        stroke="var(--color-brand-accent)"
        strokeWidth={9}
      />
    </svg>
  )
}

function SphereGradient({ id }: { id: string }) {
  return (
    <radialGradient id={id} cx="0.36" cy="0.3" r="0.78">
      <stop offset="0" stopColor="#f4effb" />
      <stop offset="0.22" stopColor="#cdb9ea" />
      <stop offset="0.55" stopColor="#9467cc" />
      <stop offset="0.82" stopColor="#6b3ba5" />
      <stop offset="1" stopColor="#4a2479" />
    </radialGradient>
  )
}
