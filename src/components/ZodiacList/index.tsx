import React from 'react';
import { zodiacSigns } from '../../constants';

interface ZodiacListProps {
  onSignClick: (sign: string) => void;
  language: string;
}


const ZodiacList: React.FC<ZodiacListProps> = ({ onSignClick, language }) => {
  return (
    <div className="zodiac-list">
      {zodiacSigns.map((sign) => (
        <div key={sign.name} className="zodiac-item" onClick={() => onSignClick(sign.name.toLowerCase())}>
          <h3 style={{textTransform: "capitalize"}}>{sign.name} ({language === 'ru' ? sign.date.replace('Mar', 'Март').replace('Apr', 'Апрель') : sign.date})</h3>
        </div>
      ))}
    </div>
  );
};

export default ZodiacList;
