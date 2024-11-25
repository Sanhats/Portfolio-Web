import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full p-4'>
        <motion.div 
          className='max-w-[1000px] w-full grid grid-cols-2 gap-8'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </motion.div>
        <motion.div 
          className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hello, nice to meet you. Please look around.</p>
          </div>
          <div>
            <p className='text-xl'>
              I am passionate about creating great software that improves the lives of those around me. I 
              am enthusiastic about creating interactive software for clients. What would you do if you had a developer
              with these features available at your fingertips?
            </p>  
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

