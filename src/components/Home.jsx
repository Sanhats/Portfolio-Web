import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section 
      className='site-section site-hero site-canvas relative overflow-hidden'
      aria-label="Sección de inicio"
    >
      <div className='max-w-[1100px] mx-auto px-6 sm:px-10 flex flex-col justify-center min-h-full relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='site-accent mb-5 text-sm font-semibold uppercase tracking-[0.2em]'>{t('home.greeting')} · Argentina</p>
          <h1 className='text-5xl sm:text-7xl font-bold site-ink tracking-tight max-w-[850px]'>{t('home.headline')}</h1>
          <p className='site-muted text-xl sm:text-2xl mt-5 max-w-[680px] leading-relaxed'>
            {t('home.description')}
          </p>
          <div className='flex flex-wrap items-center gap-4 mt-8'>
            <Link to='contact' smooth={true} duration={450} offset={-16}>
              <span className='site-button site-button-primary group' role="button" aria-label={t('home.cta')}>
                {t('home.cta')}
                <span className='group-hover:rotate-90 duration-300'>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </Link>
          </div>
          <div className='flex flex-wrap gap-x-5 gap-y-2 mt-7 text-sm site-muted'>
            <span>React · Vue · Next.js · Node.js</span>
            <span className='site-accent'>Disponible para nuevas oportunidades</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

