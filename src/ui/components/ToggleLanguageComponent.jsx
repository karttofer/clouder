// Dependencies
import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
// language
import i18n from '../../utils/i18n/index'

const ToggleLanguageComponent = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en')

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLanguage(lng)
    }

    i18n.on('languageChanged', handleLanguageChanged)

    return () => {
      i18n.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  return (
    <Button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? 'EN' : 'ES'}
    </Button>
  )
}

export default ToggleLanguageComponent
