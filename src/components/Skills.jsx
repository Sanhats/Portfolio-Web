import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next-js-icon-seeklogo.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-300 text-[#2c2c2c]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#2c2c2c] '>Skills</p>
              <p className='py-4'> These are the technologies I've worked with</p>
          </div>

          <div className='text-gray-300 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Next} alt="HTML icon" />
                  <p className='my-4'>NEXT JS</p>
              </div>
              
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='bg-[#2c2c2c] shadow-md shadow-[#2c2c2c] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;