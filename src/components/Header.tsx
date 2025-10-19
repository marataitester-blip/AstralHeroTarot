import { useTranslation } from 'react-i18next'

export default function Header() {
  const { i18n, t } = useTranslation('common')
  const switchLang = (lng: 'en' | 'ru') => i18n.changeLanguage(lng)
  return (
    <header className="header">
      <h1 className="logo">{t('appTitle', { defaultValue: 'Astral Hero Tarot' })}</h1>
      <div className="lang-switch">
        <button aria-label="Russian" onClick={() => switchLang('ru')}>RU</button>
        <button aria-label="English" onClick={() => switchLang('en')}>EN</button>
      </div>
    </header>
  )
}
