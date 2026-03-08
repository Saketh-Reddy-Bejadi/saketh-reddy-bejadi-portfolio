import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background decoration - subtle and positioned */}
            <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gray-50/50 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4"></div>

            <div className="container-custom">
                <div className="max-w-5xl mx-auto text-center md:text-left pl-0 md:pl-4">
                    <p className="text-gray-500 mb-6 text-lg font-medium tracking-wide animate-fade-in-up">
                        Hi, I'm Saketh Reddy Bejadi
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up delay-100">
                        Building digital experiences with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">purpose</span> and
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600"> precision</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-200">
                        MERN Stack Web Developer & UI/UX Designer. I create modern, responsive, and user-centric web applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-fade-in-up delay-300">
                        <a
                            href="#projects"
                            className="px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl shadow-gray-200/50"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-4 border border-gray-200 bg-white rounded-full font-medium text-lg hover:border-black hover:bg-gray-50 transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
