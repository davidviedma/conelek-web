import { cn } from "@/lib/utils"

export function SectionHeading({
  label,
  title,
  highlight,
  after,
  intro,
  align = "left",
  className,
}: {
  label: string
  title: string
  highlight: string
  after?: string
  intro?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-3 lg:mb-16",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <p className="text-sm font-semibold tracking-widest text-brand-primary-light uppercase">
        {label}
      </p>
      <h2 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-5xl">
        {title} <span className="text-brand-primary-light">{highlight}</span>
        {after ?? "."}
      </h2>
      {intro && (
        <p className="text-lg leading-relaxed text-zinc-400">{intro}</p>
      )}
    </div>
  )
}
