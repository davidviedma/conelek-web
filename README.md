# Conelek – web

Web de **Electricidad Conelek S.L.**: instalaciones eléctricas, aire acondicionado y calderas de gas en Navarra.

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

## Cambios habituales

- **Teléfono, email, WhatsApp, Instagram/Facebook:** `lib/site.ts`.
- **Añadir fotos de trabajos:** copia la imagen a `public/trabajos/` y añade una entrada en la lista `trabajos` de `components/Sections/trabajos.tsx`.
- **Textos de servicios:** `lib/services.ts`. Preguntas frecuentes: `components/Sections/faqs-data.ts`.
- **Colores de marca:** bloque `@theme inline` de `app/globals.css`.

Efectos visuales de [React Bits](https://reactbits.dev) en `components/reactbits/`.
