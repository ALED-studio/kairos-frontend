import { api } from '@/axios/api'
import type { Card } from './card'

export async function getCards(): Promise<Card[]> {
  try {
    const response = await api.get<Card[]>('/api/cards')
    return response.data
  } catch {
    // Back pas encore prêt — on retourne les données statiques
    const { MOCK_CARDS } = await import('./cards.mock')
    return MOCK_CARDS
  }
}
