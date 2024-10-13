import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import pin from '../assets/pin.svg';  
import phone from '../assets/phone.png'; 
import { useTranslation } from 'react-i18next';

function Home() {
    const { isDark } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={`container mx-auto px-4 py-8 rounded-3xl ${isDark ? 'bg-gray-800 text-white' : 'bg-blue-100'}`}>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className="first w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h3 className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{t('title')}</h3>
                    <h1 className={`font-black leading-tight text-4xl lg:text-5xl mb-6 ${isDark ? 'text-[#A1A9FF]' : 'text-blue-950'}`}>
                        {t('slogan')} <br className="hidden lg:inline" />
                        <span className="lg:block mt-2">{t('slogan_2')}</span>
                    </h1>
                    <div className="pin mb-6 flex gap-5">
                        <img src={pin} alt="pin" className="mb-4" />
                        <p className={`font-medium w-[460px] ${isDark ? 'text-gray-300' : 'text-blue-950'}`}>{t('description')}</p>
                    </div>
                    <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('join_us')}</h2>
                    <p className={`mb-4 font-medium ${isDark ? 'text-gray-300' : 'text-blue-950'}`}>{t('notification')}</p>
                    <div className="relative max-w-md">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder={t('email_placeholder')}
                            className={`w-full px-4 py-3 pr-28 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                                isDark ? 'bg-gray-700 text-white border-0' : 'bg-white text-gray-900 border'
                            }`}
                        />
                        <button className="absolute right-1 top-1 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                            {t('join_button')}
                        </button>
                    </div>
                </div>
                <div className="second w-full lg:w-1/2">
                    <img src={phone} alt="phone" />
                </div>
            </div>
        </div>
    );
}

export default Home;