import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

export default function HomeFooter() {
  const { t } = useTranslation()

  return (
    <footer className="mt-auto bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="divider mb-5" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-on-surface-muted text-sm">
            <span className="font-display text-xs">
              {t('layout.footer.version')}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-on-surface-muted">
            <Link
              to="/legal"
              className="hover:text-on-surface transition-colors"
            >
              {t('layout.footer.legal')}
            </Link>
            <span className="text-on-surface-muted">·</span>
            <Link
              to="/contact"
              className="hover:text-on-surface transition-colors"
            >
              {t('layout.footer.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
