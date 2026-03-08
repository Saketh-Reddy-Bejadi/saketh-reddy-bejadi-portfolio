import React from 'react';

const CurrentProject = () => {
    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                            Currently Working On
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">CodeTrackr</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Competitive Programming Leaderboard for students of CMRIT Hyderabad. Track your progress, and compare your performance with peers.
                        </p>
                        <a
                            href="https://codetrackr-cmrit.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                        >
                            Visit Website
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex-1 w-full">
                        <a
                            href="https://codetrackr-cmrit.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 bg-white group"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for preview or iframe if desired, using a nice gradient/icon for now */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="text-center p-8">
                                    <span className="text-4xl font-bold text-gray-300 group-hover:text-blue-500 transition-colors duration-300">CodeTrackr</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentProject;
