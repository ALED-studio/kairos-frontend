import { useTranslation } from 'react-i18next'

interface CardTooltipProps {
  mechanics: string[]
}

export function CardTooltip({ mechanics }: CardTooltipProps) {
  const { t } = useTranslation()
  return (
    <div className="absolute left-[calc(100%+8px)] top-0 z-50 w-48 flex flex-col gap-2 pointer-events-none">
      {mechanics.map((mechanic) => (
        <div
          key={mechanic}
          className="bg-surface border border-border rounded-lg px-3 py-2 shadow-xl"
        >
          <p className="font-accent font-semibold text-on-surface-accent text-base mb-0.5">
            {t(`glossary.${mechanic}.name`)}
          </p>
          <p className="font-accent italic text-on-surface-muted text-sm leading-relaxed">
            {t(`glossary.${mechanic}.description`)}
          </p>
        </div>
      ))}
    </div>
  )
}
