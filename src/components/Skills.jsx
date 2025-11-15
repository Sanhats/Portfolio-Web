import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next-js-icon-seeklogo.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import Vue from '../assets/vue.png';
import Python from '../assets/python.png';
import Firebase from '../assets/firebase.png';

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    // Frontend Frameworks
    { name: 'REACT', image: ReactImg },
    { name: 'VUE.JS', image: Vue },
    { name: 'NEXT JS', image: Next },
    { name: 'TYPESCRIPT', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'TAILWIND CSS', image: Tailwind },
    
    // Backend & Databases
    { name: 'PYTHON', image: Python },
    { name: 'MONGODB', image: MongoDB },
    { name: 'MYSQL', image: MySQL },
    { name: 'FIREBASE', image: Firebase },
    
    // APIs & Services
    { name: 'OPENAI', image: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
    { name: 'MERCADO PAGO', image: 'https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo-0.png' },
    { name: 'AFIP', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/AFIP_logo.svg/256px-AFIP_logo.svg.png' },
    { name: 'GOOGLE MAPS API', image: 'https://developers.google.com/static/maps/images/maps-icon.svg' },
    
    // Tools
    { name: 'GIT', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'JIRA', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'TRELLO', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg' },
    { name: 'GITHUB', image: GitHub },
  ];

  return (
    <section 
      name='skills' 
      className='w-full min-h-screen bg-[#0a192f] text-gray-300'
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
          <h2 className='text-4xl font-bold inline border-b-4 border-purple-600'>{t('skills.title')}</h2>
          <p className='py-4 text-gray-400'>{t('skills.subtitle')}</p>
        </motion.div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center py-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='shadow-lg rounded-xl overflow-hidden bg-[#112240] p-6 hover:bg-[#1a2f52] transition-all duration-300'
              role="article"
              aria-label={`Tecnología: ${skill.name}`}
            >
              <div className='relative group'>
                <img 
                  className='w-20 h-20 mx-auto object-contain filter drop-shadow-lg' 
                  src={skill.image} 
                  alt={`Logo de ${skill.name}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className='w-20 h-20 mx-auto hidden items-center justify-center bg-purple-900/50 rounded-lg'
                  style={{ display: 'none' }}
                >
                  <span className='text-purple-300 text-xs font-bold'>{skill.name.charAt(0)}</span>
                </div>
                <motion.div 
                  className='mt-4 text-sm font-semibold tracking-wider'
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {skill.name}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

