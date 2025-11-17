import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experience } from '../data/experience';
import { FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ exp, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-[#112240] rounded-lg p-6 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 border border-purple-900/50 hover:border-purple-600/50"
      role="article"
      aria-label={`Experiencia en ${exp.company}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
          <p className="text-purple-400 text-lg font-semibold mb-2">{t(`experience.experiences.${exp.key}.position`)}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-purple-500" />
              {exp.location === 'Remoto' ? t('experience.remote') : exp.location}
            </span>
            <span className="text-purple-500">•</span>
            <span>{t(`experience.experiences.${exp.key}.period`)}</span>
          </div>
        </div>
        {exp.url && (
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-4 sm:mb-0"
            aria-label={`Visitar sitio web de ${exp.company}`}
          >
            <FaExternalLinkAlt />
            <span className="text-sm">{t('experience.viewSite')}</span>
          </a>
        )}
      </div>

      <ul className="text-gray-300 mb-4 leading-relaxed space-y-2 list-disc list-inside">
        {t(`experience.experiences.${exp.key}.bullets`, { returnObjects: true }).map((bullet, idx) => (
          <li key={idx} className="ml-2">{bullet}</li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="text-sm text-purple-400 font-semibold mb-2">{t('experience.technologies')}</p>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm border border-purple-700/50"
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
      name='experience' 
      className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'
      aria-label="Sección de experiencia laboral"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600 mb-4'>
            {t('experience.title')}
          </h2>
          <p className='text-lg text-gray-400 mt-4'>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

