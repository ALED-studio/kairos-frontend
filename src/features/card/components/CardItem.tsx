import { useState } from 'react'
import type { Card } from '../card'
import { CardBackground } from './CardBackground'
import { CardName } from './CardName'
import { CardImage } from './CardImage'
import { CardTypeBar } from './CardTypeBar'
import { CardBody } from './CardBody'
import { CardTooltip } from './CardTooltip'

interface CardItemProps {
  card: Card
}

export default function CardItem({ card }: CardItemProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const mechanics = card.mechanics ?? []
  const color1 = `var(--color-${card.elements[0].toLowerCase()})`

  return (
    <div
      className="group relative w-full aspect-2.5/4 flex flex-col gap-1.5 p-1.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-visible"
      style={card.elements.length < 2 ? { backgroundColor: color1 } : undefined}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <CardBackground elements={card.elements} />

      {showTooltip && mechanics.length > 0 && (
        <CardTooltip mechanics={mechanics} />
      )}

      <div className="relative z-10 flex flex-col gap-1.5 h-full min-h-0">
        <CardName name={card.name} />
        <CardImage imageUrl={card.imageUrl} name={card.name} />
        <CardTypeBar type={card.type} rarity={card.rarity} />
        <CardBody
          mechanics={card.mechanics}
          effects={card.effects}
          attack={card.attack}
          armor={card.armor}
          hp={card.hp}
        />
      </div>
    </div>
  )
}
