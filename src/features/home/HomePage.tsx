import { useNavigate } from 'react-router'
import { Swords, BookOpen, GraduationCap } from 'lucide-react'
import background from '../../assets/background.png'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isSmallScreen = window.innerWidth < 640

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-text"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="card w-full max-w-3xs sm:max-w-md flex flex-col items-center gap-8 px-4 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col items-center gap-2 text-center">
            {!isSmallScreen && (
              <h1 className="text-4xl tracking-wide">
                {t('layout.header.title')}
              </h1>
            )}
            <h4 className="text-base px-1 py-2">{t('home.description')}</h4>
          </div>

          <div className="divider w-full" />

          <div className="flex flex-col gap-5 w-full">
            <button
              className="btn-primary-ghost w-full gap-3 py-3 text-lg"
              onClick={() => navigate('/lobby')}
            >
              <Swords className="w-5 h-5" />
              {t('home.play')}
            </button>

            <button
              className="btn-primary-ghost w-full gap-3 py-3 text-lg"
              onClick={() => navigate('/tutorial')}
            >
              <BookOpen className="w-5 h-5" />
              {t('home.tutorial')}
            </button>

            <button
              className="btn-primary-ghost w-full gap-3 py-3 text-lg"
              onClick={() => navigate('/encyclopedia')}
            >
              <GraduationCap className="w-5 h-5" />
              {t('home.encyclopedia')}
            </button>
          </div>

          <p className="font-accent italic text-text-muted text-sm">
            {t('home.version')}
          </p>
        </div>
      </div>
    </div>
  )
}
