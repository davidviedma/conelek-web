import type { IconSvgElement } from "@hugeicons/react"
import {
  BulbIcon,
  FastWindIcon,
  FireIcon,
  FlashIcon,
} from "@hugeicons/core-free-icons"

export type Service = {
  id: string
  name: string
  summary: string
  description: string
  icon: IconSvgElement
  image?: { src: string; alt: string; position?: string }
  whatsapp: string
}

export const services: Service[] = [
  {
    id: "electricidad",
    name: "Instalaciones eléctricas",
    summary: "Obra nueva, reformas, cuadros, cableado y averías.",
    description:
      "Instalaciones nuevas y reformas, cuadros eléctricos, cableado, enchufes e iluminación. En viviendas, locales, naves y edificios, siempre conforme a normativa.",
    icon: FlashIcon,
    image: {
      src: "/trabajos/iluminacion-salon.webp",
      alt: "Salón con iluminación LED instalada por Conelek",
      position: "object-[50%_80%]",
    },
    whatsapp:
      "Hola Conelek, quería pedir presupuesto para una instalación eléctrica.",
  },
  {
    id: "aire-acondicionado",
    name: "Aire acondicionado",
    summary: "Montaje, sustitución y mantenimiento de equipos.",
    description:
      "Montaje de splits y conductos, cambio de equipos, cargas de gas y mantenimiento. Te ayudamos a elegir el equipo que de verdad necesitas.",
    icon: FastWindIcon,
    image: {
      src: "/trabajos/aire-acondicionado-cubierta.webp",
      alt: "Técnico de Conelek trabajando en un equipo de aire acondicionado",
      position: "object-[50%_35%]",
    },
    whatsapp:
      "Hola Conelek, quería pedir presupuesto para un aire acondicionado.",
  },
  {
    id: "calderas",
    name: "Calderas de gas",
    summary: "Instalación y sustitución de calderas.",
    description:
      "Instalamos y sustituimos calderas de gas, y resolvemos a la vez la parte eléctrica y de climatización. Un solo equipo para todo.",
    icon: FireIcon,
    whatsapp: "Hola Conelek, quería pedir presupuesto para una caldera de gas.",
  },
  {
    id: "iluminacion",
    name: "Iluminación LED",
    summary: "Interior, exterior, cocinas, baños y jardines.",
    description:
      "Tiras LED, iluminación de jardín y fachada, cocinas, baños y espejos retroiluminados. Luz que queda bonita y gasta menos.",
    icon: BulbIcon,
    image: {
      src: "/trabajos/iluminacion-led-jardin.webp",
      alt: "Iluminación LED perimetral en un jardín de noche",
      position: "object-[50%_60%]",
    },
    whatsapp:
      "Hola Conelek, quería pedir presupuesto para un trabajo de iluminación.",
  },
]
