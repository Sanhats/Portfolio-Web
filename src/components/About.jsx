import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section 
      className='site-section screen-section site-canvas flex items-center justify-center'
      aria-label="Sección sobre mí"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className='section-title'>
            {t('about.title')}
          </h2>
          <div className="max-w-3xl mx-auto mt-8">
            <p className='text-xl site-ink leading-relaxed mb-4'>
              {t('about.description1')}
            </p>
            <p className='text-lg site-muted leading-relaxed'>
              {t('about.description2')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

