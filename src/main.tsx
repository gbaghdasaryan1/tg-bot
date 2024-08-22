import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const KEY = "7220104216:AAEo8CD_RfHZagjlIHFZMClBHnwjjmrmylE";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
