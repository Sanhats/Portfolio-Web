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



 
  
  const SkillCard = ({ skill, icon, index }) => {
    return (
      <motion.div
        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#0a192f] p-6 rounded-lg'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
      >
        <img className='w-20 mx-auto' src={icon} alt={`${skill} icon`} />
        <p className='my-4 text-center text-white'>{skill}</p>
      </motion.div>
    );
  };
  
  const Skills = () => {
    const skills = [
        { name: 'REACT', icon: ReactImg },
    { name: 'VUE.JS', icon: Vue },
    { name: 'NEXT JS', icon: Next },
    { name: 'PYTHON', icon: Python },
    { name: 'MONGODB', icon: MongoDB },
    { name: 'MYSQL', icon: MySQL },
    { name: 'TAILWIND', icon: Tailwind },
    { name: 'GITHUB', icon: GitHub },
    ];
  
    return (
      <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
          </div>
  
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  
  