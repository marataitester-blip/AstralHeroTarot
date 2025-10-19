import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Readings() {
  const { t } = useTranslation('common')
  const [selectedReading, setSelectedReading] = useState<string | null>(null)
  
  const readings = [
    { id: 'daily', name: t('readings.daily', 'Daily Card'), description: t('readings.dailyDesc', 'Single card reading for guidance') },
    { id: 'three-card', name: t('readings.threeCard', 'Three Card Spread'), description: t('readings.threeCardDesc', 'Past, Present, Future') },
    { id: 'celtic-cross', name: t('readings.celticCross', 'Celtic Cross'), description: t('readings.celticCrossDesc', 'Comprehensive 10-card reading') },
  ]
  
  return (
    <div className="readings-page">
      <h1>{t('readings.title', 'Tarot Readings')}</h1>
      <p>{t('readings.subtitle', 'Choose your reading type')}</p>
      
      <div className="readings-grid">
        {readings.map((reading) => (
          <div 
            key={reading.id}
            className={`reading-card ${selectedReading === reading.id ? 'selected' : ''}`}
            onClick={() => setSelectedReading(reading.id)}
          >
            <h3>{reading.name}</h3>
            <p>{reading.description}</p>
          </div>
        ))}
      </div>
      
      {selectedReading && (
        <div className="reading-area">
          <p>{t('readings.comingSoon', 'Reading functionality coming soon...')}</p>
        </div>
      )}
    </div>
  )
}
