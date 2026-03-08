import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                        Let's build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">amazing</span> together.
                    </h2>
                    <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
                        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
                        <a
                            href="mailto:saketh.bejadi@example.com"
                            className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
                        >
                            Say Hello
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saketh-reddy-bejadi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-full font-bold text-lg hover:border-gray-600 hover:bg-gray-900 transition-all duration-300"
                        >
                            LinkedIn Profile
                        </a>
                    </div>

                    <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                        <p>
                            © {new Date().getFullYear()} Saketh Reddy Bejadi. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <a href="https://github.com/Saketh-Reddy-Bejadi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/saketh-reddy-bejadi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="mailto:saketh.bejadi@example.com" className="hover:text-white transition-colors">
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
