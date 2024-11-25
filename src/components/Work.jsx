import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { data } from "../data/data.js";

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="relative group rounded-lg overflow-hidden shadow-lg shadow-purple-500/50 bg-purple-900 h-[300px]"
    >
      <img 
        src={project.image} 
        alt={project.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            {project.name}
          </h3>
          <p className="text-purple-200 mb-4 text-center">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-300"
            >
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-purple-600 text-white rounded hover:bg-purple-600 transition-colors duration-300"
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
  return (
    <div name='work' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ProjectCard key={index} project={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

