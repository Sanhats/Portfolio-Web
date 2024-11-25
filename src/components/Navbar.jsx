import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const miCorreoElectronico = 'tomassanchez2101@gmail.com';

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <h1 className='font-bold text-4xl text-pink-600'>TS</h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500} className='hover:text-pink-600 cursor-pointer capitalize px-4'>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-50'
        }
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500} className='capitalize'>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-40'>
        <ul>
          {[
            { name: 'Linkedin', icon: <FaLinkedin size={30} />, href: 'https://linkedin.com/in/tomas-emanuel-sanchez-72670427b' },
            { name: 'Github', icon: <FaGithub size={30} />, href: 'https://github.com/Sanhats' },
            { name: 'Email', icon: <HiOutlineMail size={30} />, href: `mailto:${miCorreoElectronico}` },
            { name: 'Resume', icon: <BsFillPersonLinesFill size={30} />, href: 'https://funny-pixie-075.notion.site/TOMAS-EMANUEL-SANCHEZ-RESUME-2817caa582ed474984bc48c5e66e770a' },
          ].map((item) => (
            <li
              key={item.name}
              className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'
            >
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name} {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

