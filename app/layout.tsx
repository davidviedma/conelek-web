import { Archivo, Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { COMPANY, EMAIL, PHONE_HREF, SITE_URL, SOCIALS } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
})

const title = "Conelek – Electricidad, aire acondicionado y calderas en Navarra"
const description =
  "Instalaciones eléctricas, montaje de aire acondicionado y calderas de gas en Navarra. Desde grandes obras en colegios y naves hasta pequeños arreglos en casa. Presupuesto sin compromiso: 663 01 02 17."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "electricista Navarra",
    "instalaciones eléctricas Navarra",
    "aire acondicionado Navarra",
    "instalación aire acondicionado Pamplona",
    "calderas de gas Navarra",
    "electricista Pamplona",
    "Conelek",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: COMPANY.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: "#09090b",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Electrician", "HVACBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.legalName,
  alternateName: COMPANY.name,
  description,
  url: SITE_URL,
  telephone: PHONE_HREF.replace("tel:", ""),
  email: EMAIL,
  image: `${SITE_URL}/trabajos/aire-acondicionado-cubierta.webp`,
  logo: `${SITE_URL}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Navarra",
    addressCountry: "ES",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Navarra" },
  sameAs: Object.values(SOCIALS).filter(Boolean),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "antialiased",
        archivo.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
