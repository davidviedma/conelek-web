"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Add01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { faqs } from "./faqs-data"

function FaqItem({
  id,
  pregunta,
  respuesta,
  isOpen,
  onToggle,
}: {
  id: string
  pregunta: string
  respuesta: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-zinc-950/90">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
        >
          <span className="text-lg font-semibold text-white">{pregunta}</span>
          <HugeiconsIcon
            icon={Add01Icon}
            size={22}
            className={cn(
              "shrink-0 text-brand-primary-light transition-transform duration-300",
              isOpen && "rotate-45"
            )}
          />
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={cn(
          "grid transition-[grid-template-rows] duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-relaxed text-zinc-400 md:px-7">
            {respuesta}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-brand-primary py-16 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative container mx-auto grid grid-cols-1 gap-12 px-6 sm:px-12 lg:grid-cols-[1fr_1.6fr] lg:px-24">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            Dudas
          </p>
          <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="text-base text-white/75">
            ¿No encuentras la tuya? Escríbenos y te respondemos enseguida.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.pregunta}
              id={`faq-${index}`}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
