"use client"

import { useState, type FormEvent } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  Call02Icon,
  Location01Icon,
  Mail01Icon,
  SentIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import ElectricBorder from "@/components/reactbits/ElectricBorder"
import { Button } from "@/components/ui/button"
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, whatsappLink } from "@/lib/site"

const tiposDeTrabajo = [
  "Instalación eléctrica",
  "Avería o arreglo en casa",
  "Aire acondicionado",
  "Caldera de gas",
  "Iluminación LED",
  "Proyecto para empresa / colegio / comunidad",
  "Otro",
]

const canales: {
  icon: IconSvgElement
  label: string
  value: string
  href?: string
  external?: boolean
}[] = [
  { icon: Call02Icon, label: "Teléfono", value: PHONE, href: PHONE_HREF },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: PHONE,
    href: whatsappLink(),
    external: true,
  },
  { icon: Mail01Icon, label: "Email", value: EMAIL, href: EMAIL_HREF },
  { icon: Location01Icon, label: "Zona de trabajo", value: "Toda Navarra" },
]

const fieldClass =
  "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-brand-primary-light focus:ring-2 focus:ring-brand-primary/40"

// El formulario no envía nada a un servidor: compone un mensaje de WhatsApp.
function ContactForm() {
  const [nombre, setNombre] = useState("")
  const [tipo, setTipo] = useState(tiposDeTrabajo[0])
  const [localidad, setLocalidad] = useState("")
  const [mensaje, setMensaje] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const lineas = [
      `Hola Conelek, soy ${nombre.trim()}.`,
      `Trabajo: ${tipo}.`,
      localidad.trim() && `Localidad: ${localidad.trim()}.`,
      mensaje.trim(),
    ].filter(Boolean)
    window.open(
      whatsappLink(lineas.join("\n")),
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Nombre
          <input
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="name"
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Localidad
          <input
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            autoComplete="address-level2"
            placeholder="Pamplona, Tudela…"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        ¿Qué necesitas?
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={fieldClass}
        >
          {tiposDeTrabajo.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        Cuéntanos un poco más
        <textarea
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ej.: quiero instalar aire acondicionado en dos habitaciones."
          className={`${fieldClass} resize-none`}
        />
      </label>
      <Button type="submit" size="xl" className="mt-2 w-full sm:w-fit">
        <HugeiconsIcon icon={SentIcon} size={20} />
        Enviar por WhatsApp
      </Button>
      <p className="text-xs text-zinc-500">
        Se abrirá WhatsApp con tu mensaje listo para enviar. No guardamos ningún
        dato en esta web.
      </p>
    </form>
  )
}

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-zinc-950 py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute top-1/2 -left-40 size-[480px] -translate-y-1/2 rounded-full bg-brand-primary/15 blur-3xl" />
      <div className="relative container mx-auto grid grid-cols-1 items-start gap-12 px-6 sm:px-12 lg:grid-cols-[1fr_1.2fr] lg:px-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-widest text-brand-primary-light uppercase">
              Contacto
            </p>
            <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl">
              ¿Hablamos de{" "}
              <span className="text-brand-primary-light">tu proyecto</span>?
            </h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Cuéntanos qué necesitas y te respondemos lo antes posible con un
              presupuesto sin compromiso.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {canales.map(({ icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary-light transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <HugeiconsIcon icon={icon} size={22} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm text-zinc-500">{label}</span>
                    <span className="text-lg font-semibold text-white">
                      {value}
                    </span>
                  </span>
                </>
              )
              const className =
                "group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition-colors"
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className={`${className} hover:border-brand-primary`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={className}>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <ElectricBorder
          color="#9b6cf0"
          speed={0.7}
          chaos={0.4}
          thickness={1.3}
          glow={0.5}
          intensity={0.7}
          borderRadius={28}
        >
          <div className="rounded-[28px] border border-zinc-800 bg-zinc-900 p-6 sm:p-10">
            <p className="mb-6 text-2xl font-bold text-white">
              Pide tu presupuesto
            </p>
            <ContactForm />
          </div>
        </ElectricBorder>
      </div>
    </section>
  )
}
