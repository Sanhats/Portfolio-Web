


import '../index.css'
import { Link } from 'react-scroll';





const Home = () => {
  
  return (
    <div name='home' className='w-full h-screen bg-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='[#2c2c2c]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#2c2c2c]' >
          Tomas Sanchez
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2c2c2c]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#2c2c2c] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button  className='relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[] hover:text-white before:hover:scale-x-100'>
        
            view work
          
            
            
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;