// Datos de contacto y enlaces de la empresa. Fuente única: cámbialos aquí.

export const SITE_URL = "https://conelek.es"

export const COMPANY = {
  name: "Conelek",
  legalName: "Electricidad Conelek S.L.",
  tagline: "Electricidad, aire acondicionado y calderas de gas en Navarra",
  region: "Navarra",
}

export const PHONE = "663 01 02 17"
export const PHONE_HREF = "tel:+34663010217"
export const EMAIL = "conelek@conelek.es"
export const EMAIL_HREF = `mailto:${EMAIL}`

// Se asume que el móvil tiene WhatsApp; si no, cambia el número aquí.
const WHATSAPP_NUMBER = "34663010217"

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// Pega aquí las URLs de las redes sociales; las vacías no se muestran.
export const SOCIALS = {
  instagram: "",
  facebook: "",
}
