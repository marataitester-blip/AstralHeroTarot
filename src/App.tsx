import { Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MainPage from './pages/MainPage'
import Readings from './pages/Readings'
import Encyclopedia from './pages/Encyclopedia'
import Header from './components/Header'

export default function App() {
  const { t } = useTranslation('common')
  
  return (
    <div className="app">
      <Header />
      <nav className="nav">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/readings">{t('nav.readings')}</Link>
        <Link to="/encyclopedia">{t('nav.encyclopedia')}</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
      </Routes>
    </div>
  )
}
