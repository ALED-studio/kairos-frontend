import { Settings, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { toast } from 'sonner'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 bg-surface backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/">
          <span className="font-display text-2xl text-on-surface-accent hover:text-primary transition-colors">
            {t('layout.header.title')}
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <button
            className="btn-ghost px-3 sm:px-4 py-2"
            onClick={() => toast.info('Settings coming soon!')}
          >
            <Settings className="w-6 h-6" />
          </button>
          <button
            className="btn-secondary px-3 sm:px-4 py-2"
            onClick={() => toast.error("Can't connect right now")}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">
              {t('layout.header.connection')}
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}
