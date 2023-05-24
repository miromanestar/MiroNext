import React from 'react'
import { Fade, Bounce } from 'react-awesome-reveal'

const About = () => (
    <section className="relative bg-background">
        <div className="z-10 absolute h-[15%] w-full bottom-0 bg-gradient-to-b from-transparent to-secondaryBg" aria-hidden="true" />
        
        <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16">
            <div className="font-light sm:text-lg text-gray-300 px-4 lg:px-0 lg:pl-8">
                <Bounce triggerOnce={true} direction="left">
                    <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
                    <p className="mb-4">
                        I&apos;m a full-stack software engineer with a passion for creating beautiful, intuitive, and functional web applications.
                        Whether it be a simple landing page or a complex web application, I take each as an opportunity to learn and grow.
                        
                    </p>
                    <p>
                        I love to challenge myself, and am always working on personal projects to hone my skills.
                    </p>
                </Bounce>
            </div>
            <div className="relative z-20 grid grid-cols-2 gap-4 mt-8 px-4 lg:px-0 lg:pr-8">
                <Fade 
                    triggerOnce={true}
                    direction="right"
                    cascade={true}
                >
                    <img className="w-full rounded-lg" src="https://i.imgur.com/WZAyzsW.jpg" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://i.imgur.com/SpcWLGN.jpg" alt="office content 2" />
                </Fade>
            </div>
        </div>
        
    </section>
)

export default About