import { HugeiconsIcon } from "@hugeicons/react"
import {
  Facebook01Icon,
  InstagramIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { services } from "@/lib/services"
import {
  COMPANY,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
  SOCIALS,
  whatsappLink,
} from "@/lib/site"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Grandes y pequeños proyectos", href: "#proyectos" },
  { label: "Trabajos realizados", href: "#trabajos" },
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Preguntas frecuentes", href: "#faqs" },
]

const serviceLinks = services.map(({ name }) => ({
  label: name,
  href: "#servicios",
}))

const socials = [
  { label: "WhatsApp", href: whatsappLink(), icon: WhatsappIcon },
  { label: "Instagram", href: SOCIALS.instagram, icon: InstagramIcon },
  { label: "Facebook", href: SOCIALS.facebook, icon: Facebook01Icon },
].filter((social) => social.href)

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm font-semibold tracking-widest text-brand-primary-light uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="container mx-auto px-6 py-16 sm:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 xl:grid-cols-[1.4fr_1fr_1fr_1.2fr] xl:gap-12">
          {/* Marca */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <Logo className="h-12 self-start text-white" />
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              {COMPANY.tagline}. Grandes instalaciones y pequeños arreglos, con
              el mismo cuidado.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors duration-200 hover:border-brand-primary hover:text-white"
                >
                  <HugeiconsIcon icon={icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Navegación" links={navLinks} />
          <LinkColumn title="Servicios" links={serviceLinks} />

          {/* Contacto */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <p className="text-sm font-semibold tracking-widest text-brand-primary-light uppercase">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li>
                <a
                  href={PHONE_HREF}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
              <li>{COMPANY.region}, España</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-800/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {COMPANY.legalName} Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-zinc-600">
            Electricidad · Climatización · Calderas de gas · Navarra
          </p>
        </div>
      </div>
    </footer>
  )
}
