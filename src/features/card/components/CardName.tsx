interface CardNameProps {
  name: string
}

export function CardName({ name }: CardNameProps) {
  return (
    <div className="shrink-0 bg-surface-raised rounded-md px-2 py-1.5 text-center border border-border">
      <span className="text-base md:text-lg xl:text-2xl font-semibold text-on-surface-accent whitespace-nowrap block">
        {name}
      </span>
    </div>
  )
}
