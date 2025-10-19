import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Encyclopedia() {
  const { t } = useTranslation('common')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Placeholder data - will be replaced with actual tarot deck data
  const tarotCards = [
    { id: 1, name: t('cards.fool', 'The Fool'), arcana: 'Major' },
    { id: 2, name: t('cards.magician', 'The Magician'), arcana: 'Major' },
    { id: 3, name: t('cards.highPriestess', 'The High Priestess'), arcana: 'Major' },
  ]
  
  const filteredCards = tarotCards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="encyclopedia-page">
      <h1>{t('encyclopedia.title', 'Tarot Encyclopedia')}</h1>
      <p>{t('encyclopedia.subtitle', 'Explore the meanings of tarot cards')}</p>
      
      <div className="search-box">
        <input
          type="text"
          placeholder={t('encyclopedia.search', 'Search cards...')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="cards-grid">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="card-item">
              <h3>{card.name}</h3>
              <span className="arcana-badge">{card.arcana}</span>
            </div>
          ))
        ) : (
          <p>{t('encyclopedia.noResults', 'No cards found')}</p>
        )}
      </div>
      
      <div className="info-section">
        <p>{t('encyclopedia.comingSoon', 'Full card details coming soon...')}</p>
      </div>
    </div>
  )
}
