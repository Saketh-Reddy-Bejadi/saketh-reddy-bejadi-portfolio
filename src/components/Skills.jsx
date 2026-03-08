import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    ];

    // Duplicate the array to create the seamless infinite loop
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                <p className="text-gray-500">Technologies I work with.</p>
            </div>

            <div className="relative w-full">
                {/* Gradient masks for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex animate-marquee whitespace-nowrap">
                    {duplicatedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center mx-8 min-w-[100px] group"
                        >
                            <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                                {skill.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
