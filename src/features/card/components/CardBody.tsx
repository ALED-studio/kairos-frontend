import { useTranslation } from 'react-i18next'
import { CardStatIcon } from './CardStatIcon'

interface CardBodyProps {
  mechanics?: string[]
  effects?: string
  attack: number
  armor: number
  hp: number
}

export function CardBody({
  mechanics,
  effects,
  attack,
  armor,
  hp,
}: CardBodyProps) {
  const { t } = useTranslation()
  return (
    <div className="grow min-h-0 bg-surface-raised rounded-md px-2 py-2 border border-border flex flex-col justify-between">
      <div className="overflow-hidden">
        {mechanics && mechanics.length > 0 && (
          <p className="font-accent italic text-on-surface text-sm md:text-base leading-relaxed line-clamp-2">
            {mechanics.map((m) => t(`glossary.${m}.name`)).join(', ')}
          </p>
        )}
        {effects && (
          <p className="font-accent italic text-on-surface text-sm md:text-base leading-relaxed line-clamp-3 mt-1">
            {effects}
          </p>
        )}
      </div>
      <div className="flex justify-between items-center gap-1 md:gap-3 xl:gap-5 pt-1 shrink-0">
        <CardStatIcon icon="fist" value={attack} />
        <CardStatIcon icon="shield" value={armor} />
        <CardStatIcon icon="heart" value={hp} />
      </div>
    </div>
  )
}
