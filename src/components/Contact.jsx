import React from 'react'

  
const miCorreoElectronico = 'tomassanchez2101@gmail.com';
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-300 text-[#2c2c2c]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-200'>
              Contact
            </p>
          </div>
          <div></div>
          </div>
          <div className=' '>
            <ul>
            <a href='https://linkedin.com/in/tomas-emanuel-sanchez-72670427b'  className='border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[] hover:text-white before:hover:scale-x-100'>
                Linkedin
            </a>
            <a href={`mailto:${miCorreoElectronico}`}  className=' border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[] hover:text-white before:hover:scale-x-100'>
                Email
            </a>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Contact