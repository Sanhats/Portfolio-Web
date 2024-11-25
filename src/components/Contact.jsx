import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  const miCorreoElectronico = 'tomassanchez2101@gmail.com';

  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center'>
      <div className='max-w-[1000px] w-full p-4 flex flex-col items-center'>
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl font-bold inline-block border-b-4 border-pink-600 pb-2 mb-4'>
            Contact
          </h2>
          <p className='text-xl mt-6'>Let's connect and create something amazing together</p>
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
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-pink-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-pink-600'
          >
            <FaLinkedin className='text-xl' />
            <span>LINKEDIN</span>
          </a>

          <a
            href={`mailto:${miCorreoElectronico}`}
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-pink-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-pink-600'
          >
            <HiOutlineMail className='text-xl' />
            <span>EMAIL</span>
          </a>

          <a
            href='https://funny-pixie-075.notion.site/TOMAS-EMANUEL-SANCHEZ-RESUME-2817caa582ed474984bc48c5e66e770a'
            target="_blank"
            rel="noopener noreferrer"
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-pink-600 bg-transparent font-medium text-gray-300 transition-colors duration-300 hover:bg-pink-600'
          >
            <BsFillPersonLinesFill className='text-xl' />
            <span>RESUME</span>
          </a>
        </motion.div>

        <motion.div 
          className='text-center mt-12'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className='text-lg'>
            Looking forward to discussing potential opportunities and collaborations
          </p>
          <p className='text-sm mt-2 text-gray-400'>
            Based in Argentina • Available for remote work worldwide
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

