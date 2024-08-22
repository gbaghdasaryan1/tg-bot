
interface WebAppUser {
    language_code: string;
  }
  
  interface TelegramWebApp {
    initDataUnsafe: {
      user: WebAppUser;
    };
  }
  
  interface Telegram {
    WebApp: TelegramWebApp;
  }
  
  interface Window {
    Telegram: Telegram;
  }
  