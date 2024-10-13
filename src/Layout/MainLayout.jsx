import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { useLanguage } from '../Context/LanguageContext';
import { useTranslation } from 'react-i18next';

function MainLayout({ children }) {
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

  function handleLanguageChange(e) {
    setLang(e.target.value);
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
          <div>
            <a href="#" className={`text-3xl font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>LOGO</a>
          </div>
          <nav className="flex-grow">
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className={`hover:text-indigo-600 transition duration-300 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{t('Home')}</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition duration-300 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{t('About')}</a></li>
              <li><a href="#" className={`hover:text-indigo-600 transition duration-300 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{t('Contact')}</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isDark 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {isDark ? t('Light') : t('Dark')}
            </button>
            <select 
              onChange={handleLanguageChange} 
              value={lang} 
              className={`bg-transparent border-b-2 border-transparent hover:border-indigo-600 transition duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <option value="en">English</option>
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8'>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;