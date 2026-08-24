import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Hero3D from './Hero3D';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section 
      name='home' 
      className='w-full min-h-screen bg-[#0a192f] text-gray-300 relative overflow-hidden'
      aria-label="Sección de inicio"
    >
      <Hero3D />
      <div className='max-w-[1100px] mx-auto px-6 sm:px-10 flex flex-col justify-center min-h-screen relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-purple-400 mb-3'>{t('home.greeting')}</p>
          <h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6] tracking-tight'>{t('home.name')}</h1>
          <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0] mt-2'>{t('home.title')}</h2>
          <p className='text-[#aab4d0] text-lg py-5 max-w-[620px] leading-relaxed'>
            {t('home.description')}
          </p>
          <div>
            <Link to='contact' smooth={true} duration={500}>
              <button 
                className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600 transition-colors duration-300'
                aria-label={t('home.cta')}
              >
                {t('home.cta')}
                <span className='group-hover:rotate-90 duration-300'>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

