import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { data } from "../data/data.js";

const WorkItem = ({ item, index, scrollYProgress }) => {
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * (index % 3), -100 * (index % 3)]
  );

  return (
    <motion.div
      style={{ y: translateY }}
      className="relative group rounded-lg overflow-hidden shadow-lg shadow-[#040c16] h-[200px] bg-[#0a192f]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-300 mb-2 text-center">
            {item.name}
          </h3>
          <p className="text-gray-400 mb-4 text-center">{item.description}</p>
          <div className="flex gap-4">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300"
            >
              Code
            </a>
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-pink-600 text-white rounded hover:bg-pink-600 transition-colors duration-300"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div 
      name='work' 
      className='relative w-full min-h-screen bg-transparent text-gray-300 pt-[80px]'
      ref={containerRef}
    >
      <div className='max-w-[1000px] mx-auto px-4 py-16 flex flex-col justify-center'>
        <motion.div 
          className='pb-8'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <WorkItem key={index} item={item} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

