import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Hero3D from './Hero3D';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
        <motion.p 
          className='text-pink-600'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tomas Sanchez
        </motion.h1>
        <motion.h2 
          className='text-4xl sm:text-7xl font-bold text-[#8892b0]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I'm a Full Stack Developer.
        </motion.h2>
        <motion.p 
          className='text-[#8892b0] py-4 max-w-[700px]'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a Full stack developer specializing in building exceptional digital experiences. 
          Currently, I am focused on creating interactive and innovative web applications 
          for users, both on the server and client side.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className='absolute inset-0 z-0'>
        <Hero3D />
      </div>
    </div>
  );
};

export default Home;

