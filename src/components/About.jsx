import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section 
      name='about' 
      className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center'
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
          <h2 className='text-4xl font-bold inline border-b-4 border-purple-600 mb-8'>
            {t('about.title')}
          </h2>
          <div className="max-w-3xl mx-auto mt-8">
            <p className='text-xl text-gray-300 leading-relaxed mb-4'>
              {t('about.description1')}
            </p>
            <p className='text-lg text-gray-400 leading-relaxed'>
              {t('about.description2')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

