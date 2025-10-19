import { useTranslation } from 'react-i18next'

export default function MainPage() {
  const { t } = useTranslation('common')
  
  return (
    <div className="main-page">
      <div className="hero-section">
        <h1>{t('home.title', 'Astral Hero Tarot')}</h1>
        <p>{t('home.subtitle', '3D Tarot card reader with daily Arcana')}</p>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>{t('home.feature1', 'Daily Card')}</h3>
          <p>{t('home.feature1Desc', 'Get your daily tarot reading')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('home.feature2', 'Multilingual')}</h3>
          <p>{t('home.feature2Desc', 'Available in multiple languages')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('home.feature3', '3D Experience')}</h3>
          <p>{t('home.feature3Desc', 'Interactive 3D tarot cards')}</p>
        </div>
      </div>
    </div>
  )
}
