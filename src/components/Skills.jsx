import React from 'react';
import { motion } from 'framer-motion';

import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next-js-icon-seeklogo.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import Vue from '../assets/vue.png';
import Python from '../assets/python.png';

const Skills = () => {
  const skills = [
    { name: 'REACT', image: ReactImg },
    { name: 'VUE.JS', image: Vue },
    { name: 'NEXT JS', image: Next },
    { name: 'PYTHON', image: Python },
    { name: 'MONGODB', image: MongoDB },
    { name: 'MYSQL', image: MySQL },
    { name: 'TAILWIND', image: Tailwind },
    { name: 'GITHUB', image: GitHub },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='pb-8'
        >
          <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </motion.div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='shadow-lg rounded-xl overflow-hidden bg-[#112240] p-6 hover:bg-[#1a2f52] transition-all duration-300'
            >
              <div className='relative group'>
                <img 
                  className='w-20 h-20 mx-auto object-contain filter drop-shadow-lg' 
                  src={skill.image} 
                  alt={`${skill.name} icon`}
                />
                <motion.div 
                  className='mt-4 text-lg font-semibold tracking-wider'
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
    </div>
  );
};

export default Skills;

