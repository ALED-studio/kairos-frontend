import type { CardElement } from './CardElement'
import type { CardMechanic } from './CardMechanic'
import type { CardRarity } from './CardRarity'
import type { CardType } from './CardType'

export interface Card {
  id: string
  name: string
  type: CardType
  elements: CardElement[]
  rarity: CardRarity
  hp: number
  armor: number
  attack: number
  effects?: string
  mechanics?: CardMechanic[]
  imageUrl: string
}
