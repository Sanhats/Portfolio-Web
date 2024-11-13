import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  const miCorreoElectronico = 'tomassanchez2101@gmail.com';

  return (
    <div name='contact' className='w-full min-h-screen bg-[#D3D3D3] text-[#2c2c2c] flex items-center justify-center'>
      <div className='max-w-[1000px] w-full p-4 flex flex-col items-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold inline-block border-b-4 border-[#2c2c2c] pb-2 mb-4'>
            Contact
          </h2>
          <p className='text-xl mt-6'>Let's connect and create something amazing together</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-[600px]'>
          <a
            href='https://linkedin.com/in/tomas-emanuel-sanchez-72670427b'
            target="_blank"
            rel="noopener noreferrer"
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2c2c2c] bg-transparent font-medium text-[#2c2c2c] transition-colors duration-300 hover:bg-[#2c2c2c] hover:text-gray-300'
          >
            <FaLinkedin className='text-xl' />
            <span>LINKEDIN</span>
          </a>

          <a
            href={`mailto:${miCorreoElectronico}`}
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2c2c2c] bg-transparent font-medium text-[#2c2c2c] transition-colors duration-300 hover:bg-[#2c2c2c] hover:text-gray-300'
          >
            <HiOutlineMail className='text-xl' />
            <span>EMAIL</span>
          </a>

          <a
            href='https://funny-pixie-075.notion.site/TOMAS-EMANUEL-SANCHEZ-RESUME-2817caa582ed474984bc48c5e66e770a'
            target="_blank"
            rel="noopener noreferrer"
            className='group relative inline-flex items-center gap-2 px-8 py-3 border-2 border-[#2c2c2c] bg-transparent font-medium text-[#2c2c2c] transition-colors duration-300 hover:bg-[#2c2c2c] hover:text-gray-300'
          >
            <BsFillPersonLinesFill className='text-xl' />
            <span>RESUME</span>
          </a>
        </div>

        <div className='text-center mt-12'>
          <p className='text-lg'>
            Looking forward to discussing potential opportunities and collaborations
          </p>
          <p className='text-sm mt-2 text-gray-600'>
            Based in Argentina • Available for remote work worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;