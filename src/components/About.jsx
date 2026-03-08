import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            I am a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
                            With a keen eye for UI/UX design, I strive to build applications that are not only functional but also aesthetically pleasing.
                        </p>
                        <p>
                            Currently, I am diving deep into System Design to enhance my ability to build scalable and efficient solutions.
                            I enjoy collaborating on projects that solve real-world problems and am always eager to learn new technologies.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
