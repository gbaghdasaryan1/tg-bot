import React, { useState, useEffect } from 'react';

interface HoroscopeDetailsProps {
  sign: string;
  language: string;
  onBackClick: () => void;
}

const HoroscopeDetails: React.FC<HoroscopeDetailsProps> = ({ sign, language, onBackClick }) => {
  const [horoscope, setHoroscope] = useState<string>('');

  useEffect(() => {
    fetchHoroscope();
  }, [sign, language]);

  const fetchHoroscope = async () => {
    const response = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sign, language: language === 'ru' ? 'original' : 'translated', period: 'today' }),
    });
    const data = await response.json();

    console.log(data);
    
    setHoroscope(data.horoscope);
  };

  return (
    <div className="horoscope-details">
      <button onClick={onBackClick}>
        {language === 'ru' ? 'Назад' : 'Back'}
      </button>
      <div className="horoscope-content">
        <h2>{sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
        <p>{horoscope}</p>
      </div>
    </div>
  );
};

export default HoroscopeDetails;
