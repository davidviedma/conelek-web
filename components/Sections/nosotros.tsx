import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  FlashIcon,
  Location01Icon,
  Shield01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { COMPANY } from "@/lib/site"

const valores: { icon: IconSvgElement; value: string; label: string }[] = [
  {
    icon: FlashIcon,
    value: "3 en 1",
    label: "Electricidad, climatización y gas con un solo equipo",
  },
  {
    icon: Location01Icon,
    value: "Navarra",
    label: "Trabajamos en toda la comunidad foral",
  },
  {
    icon: UserGroupIcon,
    value: "Trato directo",
    label: "Hablas con quien hace el trabajo, sin intermediarios",
  },
  {
    icon: Shield01Icon,
    value: "Normativa",
    label: "Instalaciones seguras y conforme a la normativa vigente",
  },
]

export function Nosotros() {
  return (
    <section id="nosotros" className="bg-zinc-900 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="mb-12 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-400">
            <p className="text-sm font-semibold tracking-widest text-brand-primary-light uppercase">
              Sobre nosotros
            </p>
            <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl">
              Instalaciones bien hechas,{" "}
              <span className="text-brand-primary-light">
                relaciones que duran
              </span>
              .
            </h2>
            <p>
              En{" "}
              <span className="font-medium text-white">
                {COMPANY.legalName}
              </span>{" "}
              nos dedicamos a las instalaciones eléctricas y de climatización de
              primera calidad, con la satisfacción del cliente como prioridad.
            </p>
            <p>
              Llevamos años trabajando en Navarra y lo hacemos con un enfoque
              personalizado: escuchamos lo que necesitas, te proponemos la
              solución técnica más eficaz y{" "}
              <span className="font-medium text-white">
                cuidamos cada trabajo como si fuera para nuestra casa
              </span>
              . Por eso muchos clientes nos vuelven a llamar.
            </p>
          </div>

          {/* Placa con el logo */}
          <div className="relative flex items-center justify-center py-8">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-zinc-800/60" />
            <div className="relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-3xl border border-zinc-700/60 bg-white px-8 py-14 text-zinc-950 shadow-2xl sm:px-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <Logo className="relative h-auto w-full max-w-md" />
              <p className="relative text-center text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase sm:text-sm sm:tracking-[0.25em]">
                Electricidad · Clima · Gas
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {valores.map(({ icon, value, label }) => (
            <div
              key={value}
              className="flex flex-col gap-2 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 transition-colors duration-300 hover:border-brand-primary"
            >
              <HugeiconsIcon
                icon={icon}
                size={22}
                className="text-brand-accent-light"
              />
              <p className="text-xl font-bold text-white md:text-2xl">
                {value}
              </p>
              <p className="text-sm leading-snug text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
