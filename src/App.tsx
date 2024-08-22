import React, { useState, useEffect } from 'react';
import ZodiacList from './components/ZodiacList';
import HoroscopeDetails from './components/HoroscopeDetails';

// interface ZodiacSign {
//   name: string;
//   date: string;
//   icon: string;
// }

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  useEffect(() => {
    const userLanguage = window.Telegram.WebApp.initDataUnsafe?.user?.language_code ;
    setLanguage(userLanguage === 'ru' ? 'ru' : 'en');
  }, []);

  const handleSignClick = (sign: string) => {
    setSelectedSign(sign);
  };

  const handleBackClick = () => {
    setSelectedSign(null);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className="App">
      {!selectedSign ? (
        <>
          <button onClick={toggleLanguage}>
            {language === 'ru' ? 'Switch to English' : 'Переключить на Русский'}
          </button>
          <ZodiacList onSignClick={handleSignClick} language={language} />
        </>
      ) : (
        <HoroscopeDetails sign={selectedSign} language={language} onBackClick={handleBackClick} />
      )}
    </div>
  );
};

export default App;
