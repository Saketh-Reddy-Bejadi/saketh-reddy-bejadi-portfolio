import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'PyConf Hyderabad 2025',
            description: 'Official website for PyConf Hyderabad 2025. Built to provide event information, schedule, and registration details.',
            tags: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/HydPy/pyconfhyd2025',
            repo: 'HydPy/pyconfhyd2025'
        },
        {
            title: 'Frontend Domination',
            description: 'A collection of frontend projects and experiments demonstrating modern web development techniques.',
            tags: ['JavaScript', 'React', 'CSS'],
            link: 'https://github.com/Saketh-Reddy-Bejadi/frontend_domination',
            repo: 'Saketh-Reddy-Bejadi/frontend_domination'
        },
        {
            title: 'DSA in Python',
            description: 'Comprehensive collection of Data Structures and Algorithms problems solved in Python across various platforms.',
            tags: ['Python', 'Algorithms', 'Data Structures'],
            link: 'https://github.com/Saketh-Reddy-Bejadi/Python',
            repo: 'Saketh-Reddy-Bejadi/Python'
        }
    ];

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Selected Work</h2>
                        <p className="text-gray-500">A glimpse into my coding journey.</p>
                    </div>
                    <a href="https://github.com/Saketh-Reddy-Bejadi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline hidden md:block">
                        View all on GitHub →
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 rounded-3xl bg-white hover:bg-white transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 group-hover:text-blue-600 transition-colors"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </div>
                                <span className="text-gray-300 group-hover:text-black transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-gray-500 text-base mb-8 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-semibold text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/Saketh-Reddy-Bejadi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                        View all on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
