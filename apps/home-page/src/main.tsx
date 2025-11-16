import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@shared/ui/themes.css';
import LandingPage from './LandingPage.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeSwitcher from '@shared/ui/ThemeSwitcher';
import BackgroundHost from '@shared/ui/BackgroundHost';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeSwitcher />
      <BackgroundHost />
      <LandingPage />
    </BrowserRouter>
  </StrictMode>,
)
