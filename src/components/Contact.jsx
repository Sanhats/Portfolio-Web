import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  const { t } = useTranslation();
  const miCorreoElectronico = 'tomassanchez2101@gmail.com';

  return (
    <section 
      name='contact' 
      className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center'
      aria-label="Sección de contacto"
    >
      <div className='max-w-[1000px] w-full p-4 flex flex-col items-center'>
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl font-bold inline-block border-b-4 border-purple-600 pb-2 mb-4'>
            {t('contact.title')}
          </h2>
          <p className='text-xl mt-6 text-gray-300'>{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div 
          className='flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-[600px]'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href='https://linkedin.com/in/tomas-emanuel-sanchez-72670427b'
            target="_blank"
            rel="noopener noreferrer"
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]'
            aria-label="Visitar perfil de LinkedIn"
          >
            <FaLinkedin className='text-xl' aria-hidden="true" />
            <span>{t('contact.linkedin')}</span>
          </a>

          <a
            href={`mailto:${miCorreoElectronico}`}
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]'
            aria-label={`Enviar correo electrónico a ${miCorreoElectronico}`}
          >
            <HiOutlineMail className='text-xl' aria-hidden="true" />
            <span>{t('contact.email')}</span>
          </a>

          <a
            href='/curriculum.pdf'
            target="_blank"
            rel="noopener noreferrer"
            download="Tomas-Sanchez-CV.pdf"
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0a192f]'
            aria-label="Descargar currículum vitae en PDF"
          >
            <BsFillPersonLinesFill className='text-xl' aria-hidden="true" />
            <span>{t('contact.resume')}</span>
          </a>
        </motion.div>

        <motion.div 
          className='text-center mt-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className='text-lg text-gray-300'>
            {t('contact.message')}
          </p>
          <p className='text-sm mt-2 text-gray-400'>
            {t('contact.location')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

