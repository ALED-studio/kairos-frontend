import type { CardRarity } from '../CardRarity'
import { Gem, Star, Sparkles, Crown, Circle } from 'lucide-react'

const rarityConfig: Record<
  CardRarity,
  { icon: React.ElementType; color: string }
> = {
  Common: { icon: Circle, color: 'var(--color-rarity-common)' },
  Uncommon: { icon: Gem, color: 'var(--color-rarity-uncommon)' },
  Rare: { icon: Star, color: 'var(--color-rarity-rare)' },
  Epic: { icon: Sparkles, color: 'var(--color-rarity-epic)' },
  Legendary: { icon: Crown, color: 'var(--color-rarity-legendary)' },
}

interface CardTypeBarProps {
  type: string
  rarity: CardRarity
}

export function CardTypeBar({ type, rarity }: CardTypeBarProps) {
  const { icon: RarityIcon, color } = rarityConfig[rarity]
  return (
    <div className="shrink-0 bg-surface-raised rounded-md px-2 py-1 border border-border flex items-center justify-center gap-2">
      <RarityIcon
        className="w-3.5 h-3.5 shrink-0"
        style={{ color }}
        fill="currentColor"
      />
      <span className="font-accent italic text-white text-xs md:text-base xl:text-xl truncate">
        {type}
      </span>
    </div>
  )
}
