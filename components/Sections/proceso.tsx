import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  Calendar02Icon,
  Message01Icon,
  Shield01Icon,
  ToolboxIcon,
} from "@hugeicons/core-free-icons"
import { SectionHeading } from "@/components/section-heading"

const pasos: { icon: IconSvgElement; title: string; text: string }[] = [
  {
    icon: Message01Icon,
    title: "Nos cuentas qué necesitas",
    text: "Por teléfono, WhatsApp o email. Si puedes, mándanos una foto: ahorra mucho tiempo.",
  },
  {
    icon: Calendar02Icon,
    title: "Visita y presupuesto",
    text: "Vamos a verlo y te damos un presupuesto claro, sin compromiso y sin letra pequeña.",
  },
  {
    icon: ToolboxIcon,
    title: "Hacemos el trabajo",
    text: "En la fecha acordada, con material de calidad y dejando todo limpio al terminar.",
  },
  {
    icon: Shield01Icon,
    title: "Seguimos ahí",
    text: "Si surge cualquier cosa después, nos llamas y respondemos. Así de simple.",
  },
]

export function Proceso() {
  return (
    <section className="border-t border-zinc-800/60 bg-zinc-950 py-16 lg:py-24">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <SectionHeading
          label="Cómo trabajamos"
          title="Sin complicaciones,"
          highlight="de principio a fin"
        />

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map(({ icon, title, text }, i) => (
            <li
              key={title}
              className="group relative flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-7 transition-colors duration-300 hover:border-brand-primary"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl leading-none font-extrabold text-brand-primary-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <HugeiconsIcon
                  icon={icon}
                  size={26}
                  className="text-zinc-600 transition-colors duration-300 group-hover:text-brand-accent-light"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
