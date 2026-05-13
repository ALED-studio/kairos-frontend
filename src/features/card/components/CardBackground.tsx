interface CardBackgroundProps {
  elements: string[]
}

export function CardBackground({ elements }: CardBackgroundProps) {
  if (elements.length < 2) return null
  const color1 = `var(--color-${elements[0].toLowerCase()})`
  const color2 = `var(--color-${elements[1].toLowerCase()})`
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        background: `linear-gradient(90deg, ${color1} 0%, ${color1} 45%, ${color2} 55%, ${color2} 100%)`,
      }}
    />
  )
}
