
const Year = new Date().getFullYear()
const Month = new Date().getMonth()
const Day = new Date().getDay()



export const zodiacSigns: { name: string; date: string;  }[] = [
    { name: 'aries', date: `${Day}/${Month}/${Year}` },
    { name: 'taurus', date:  `${Day}/${Month}/${Year}` },
    { name: 'gemini', date:  `${Day}/${Month}/${Year}` },
    { name: 'cancer', date:  `${Day}/${Month}/${Year}` },
    { name: 'leo', date:  `${Day}/${Month}/${Year}` },
    { name: 'virgo', date:  `${Day}/${Month}/${Year}` },
    { name: 'libra', date:  `${Day}/${Month}/${Year}` },
    { name: 'scorpio', date:  `${Day}/${Month}/${Year}` },
    { name: 'sagittarius', date:  `${Day}/${Month}/${Year}` },
    { name: 'capricorn', date:  `${Day}/${Month}/${Year}` },
    { name: 'aquarius', date:  `${Day}/${Month}/${Year}` },
    { name: 'pisces', date:  `${Day}/${Month}/${Year}` },
  ];