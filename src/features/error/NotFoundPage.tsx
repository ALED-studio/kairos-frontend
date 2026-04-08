import { useNavigate } from 'react-router'
import { Home, Undo2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Page introuvable · Kairos</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="relative w-28 h-28 mb-8">
          <div className="absolute inset-0 rounded-full border border-border animate-pulse" />
          <div className="absolute inset-5 rounded-full border border-primary opacity-40 animate-pulse [animation-delay:500ms]" />
          <span className="absolute inset-0 flex items-center justify-center font-display text-4xl text-primary">
            Ψ
          </span>
        </div>

        <h1 className="text-7xl tracking-widest mb-2">{t('error.code')}</h1>

        <h2 className="text-xl mb-6">{t('error.message')}</h2>

        <div className="divider w-48 mb-8" />

        <blockquote className="mb-3 max-w-sm">
          <p className="font-accent italic text-on-surface-muted text-base leading-relaxed">
            {t('error.citation')}
          </p>
        </blockquote>

        <div className="flex flex-wrap gap-3 justify-center">
          <button className="btn-primary" onClick={() => navigate('/')}>
            <Home className="w-4 h-4" />
            {t('error.homeButton')}
          </button>
          <button className="btn-ghost" onClick={() => navigate(-1)}>
            <Undo2 className="w-4 h-4" />
            {t('error.backButton')}
          </button>
        </div>
      </div>
    </>
  )
}
