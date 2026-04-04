import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const modules = import.meta.glob<{ default: Record<string, unknown> }>(
  './locales/**/*.json',
  { eager: true }
)

const resources: Record<string, { translation: Record<string, unknown> }> = {}

for (const filePath in modules) {
  const match = filePath.match(/\.\/locales\/(\w+)\/(\w+)\.json$/)
  if (!match) continue

  const [, lng, ns] = match

  if (!resources[lng]) {
    resources[lng] = { translation: {} }
  }

  resources[lng].translation[ns] = modules[filePath].default
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith('fr') ? 'fr' : 'en',
  fallbackLng: 'en',
  defaultNS: 'translation',
  interpolation: { escapeValue: false },
})

export default i18n
