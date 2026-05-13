import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useCards } from '../card/useCards'
import CardItem from '../card/components/CardItem'
import { useMemo, useState } from 'react'

export default function EncyclopediaPage() {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'nameAsc' | 'nameDesc'>('nameAsc')
  const { data: cards, isLoading, isError } = useCards()

  const filteredCards = useMemo(() => {
    if (!cards) return []

    return cards
      .filter((card) =>
        card.name.toLowerCase().startsWith(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === 'nameAsc') {
          return a.name.localeCompare(b.name)
        }
        return b.name.localeCompare(a.name)
      })
  }, [cards, search, sort])

  return (
    <>
      <Helmet>
        <title>{t('encyclopedia.pageTitle')}</title>
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="mt-8 mb-8 text-center">
          <h1 className="text-3xl mb-1">{t('encyclopedia.title')}</h1>
          <h4>{t('encyclopedia.description')}</h4>
        </div>

        <div className="divider mb-8" />
        <div className="mb-6 flex gap-3 flex-wrap justify-center">
          <input
            placeholder={t('common.actions.search')}
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="input"
            value={sort}
            onChange={(e) => setSort(e.target.value as 'nameAsc' | 'nameDesc')}
          >
            <option value="nameAsc">{t('encyclopedia.nameAsc')}</option>
            <option value="nameDesc">{t('encyclopedia.nameDesc')}</option>
          </select>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          {isLoading && (
            <div className="flex justify-center py-24">
              <p className="font-accent italic text-on-surface-muted animate-pulse">
                {t('encyclopedia.loadingMessage')}
              </p>
            </div>
          )}

          {isError && (
            <div className="flex justify-center py-24">
              <p className="font-accent italic text-danger">
                {t('encyclopedia.errorMessage')}
              </p>
            </div>
          )}

          {filteredCards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-5 xl:gap-8 px-2 md:px-20 xl:px-32 pb-8">
              {filteredCards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>
          )}
          {!isLoading && filteredCards.length === 0 && (
            <div className="flex justify-center py-24">
              <p className="font-accent italic text-on-surface-muted">
                {t('encyclopedia.noResults')}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
