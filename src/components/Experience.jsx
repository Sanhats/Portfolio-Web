import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ exp, index }) => {
  const { t } = useTranslation();
  const bullets = t(`experience.experiences.${exp.key}.bullets`, { returnObjects: true });
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="experience-card"
      role="article"
      aria-label={`Experiencia en ${exp.company}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold site-ink mb-2">{exp.company}</h3>
          <p className="site-accent text-lg font-semibold mb-2">{t(`experience.experiences.${exp.key}.position`)}</p>
          <div className="flex items-center gap-4 text-sm site-muted mb-3">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="site-accent" />
              {exp.location === 'Remoto' ? t('experience.remote') : exp.location}
            </span>
            <span className="site-accent">•</span>
            <span>{t(`experience.experiences.${exp.key}.period`)}</span>
          </div>
        </div>
        {exp.url && (
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-accent hover:text-[#91b446] transition-colors duration-300 mb-4 sm:mb-0"
            aria-label={`Visitar sitio web de ${exp.company}`}
          >
            <FaExternalLinkAlt />
            <span className="text-sm">{t('experience.viewSite')}</span>
          </a>
        )}
      </div>

      <ul className="site-ink mb-4 text-sm leading-snug space-y-1 list-disc list-inside">
        {bullets.slice(0, 3).map((bullet, idx) => (
          <li key={idx} className="ml-2">{bullet}</li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="text-sm site-accent font-semibold mb-2">{t('experience.technologies')}</p>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="site-chip"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className='site-section screen-section site-canvas'
      aria-label="Sección de experiencia laboral"
    >
      <div className='max-w-[1100px] mx-auto px-6 sm:px-10'>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className='section-title'>
            {t('experience.title')}
          </h2>
          <p className='text-lg site-muted mt-4'>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

