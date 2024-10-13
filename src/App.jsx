import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import { LanguageProvider } from './Context/LanguageContext';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;