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
      className='site-section screen-section site-canvas flex items-center justify-center'
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
          <h2 className='section-title'>
            {t('contact.title')}
          </h2>
          <p className='text-xl mt-6 site-ink'>{t('contact.subtitle')}</p>
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
            className='site-button site-button-outline'
            aria-label="Visitar perfil de LinkedIn"
          >
            <FaLinkedin className='text-xl' aria-hidden="true" />
            <span>{t('contact.linkedin')}</span>
          </a>

          <a
            href={`mailto:${miCorreoElectronico}`}
            className='site-button site-button-outline'
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
            className='site-button site-button-outline'
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
          <p className='text-lg site-ink'>
            {t('contact.message')}
          </p>
          <p className='text-sm mt-2 site-muted'>
            {t('contact.location')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

