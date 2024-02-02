import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2c2c2c] text-gray-200'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-200'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello, nice to meet you. Please look around.</p>
            </div>
            <div>
              <p className='font-light text-2xl sm:text-right'>I am passionate about creating great software that improves the lives of those around me. I 
                enthusiast in creating interactive software for clients. What would you do if you had a developer
                 with these features available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;