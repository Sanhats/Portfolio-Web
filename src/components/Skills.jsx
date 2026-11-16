import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skillGroups = [
    { label: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { label: 'Backend & datos', items: ['Node.js', 'Python', 'MongoDB', 'MySQL', 'Firebase'] },
    { label: 'Integraciones', items: ['OpenAI', 'Mercado Pago', 'AFIP', 'Google Maps API'] },
    { label: 'Workflow', items: ['Git', 'GitHub', 'Jira', 'Trello'] },
  ];

  return (
    <section 
      className='site-section screen-section site-canvas'
      aria-label="Sección de habilidades técnicas"
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='pb-8'
        >
          <h2 className='section-title'>{t('skills.title')}</h2>
          <p className='py-4 site-muted'>{t('skills.subtitle')}</p>
        </motion.div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='skill-card text-left'
              role="article"
              aria-label={`Categoría: ${group.label}`}
            >
              <div className='flex items-center justify-between gap-4 mb-4'>
                <h3 className='text-lg font-semibold site-ink'>{group.label}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {group.items.map((item) => <span key={item} className='site-chip'>{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

