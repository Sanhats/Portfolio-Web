import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
    const project = data;
    
    return (
        <div name='work' className='w-full min-h-screen bg-[#D3D3D3] text-[#2c2c2c]'>
            <div className='max-w-[1000px] mx-auto px-8 pt-[100px] pb-32 flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2c2c2c]'>
                        Work
                    </p>
                    <p className='py-6 text-xl'>Check out some of my recent projects</p>
                </div>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg shadow-[#2c2c2c]/20 h-[200px] bg-[#2c2c2c]"
                        >
                            {/* Project Image */}
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover object-center group-hover:opacity-10 transition-opacity duration-300"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#2c2c2c]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">
                                    {item.name}
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border border-gray-300 text-gray-300 rounded hover:bg-gray-300 hover:text-[#2c2c2c] transition-colors duration-300"
                                    >
                                        Code
                                    </a>
                                    <a
                                        href={item.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 border border-gray-300 text-gray-300 rounded hover:bg-gray-300 hover:text-[#2c2c2c] transition-colors duration-300"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;