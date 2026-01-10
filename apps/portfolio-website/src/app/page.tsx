import React from 'react';
import '@shared/ui/globals.css';
import MainPage from '../MainPage';
import BackgroundHost from '@shared/ui/BackgroundHost';

export default function Home() {
  return (
    <React.StrictMode>
      <BackgroundHost />
      <MainPage />
    </React.StrictMode>
  );
}
