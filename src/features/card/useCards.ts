import { useQuery } from '@tanstack/react-query'
import { getCards } from './cardService'

export function useCards() {
  const FIVE_MINUTES = 1000 * 60 * 5
  return useQuery({
    queryKey: ['cards'],
    staleTime: FIVE_MINUTES,
    queryFn: getCards,
  })
}
