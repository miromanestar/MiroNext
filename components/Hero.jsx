import React from 'react'
import Link from 'next/link'

const Hero = () => (
    <div className="relative w-screen h-[65vh] flex justify-center items-center px-10 md:px-24 text-center">
        <div className='relative z-30 text-white'>
            <div className="text-4xl md:text-6xl">Ever improving the spaghetti, one line at a time.</div>
            <button
                type="button"
                className="inline-flex p-4 items-center mt-6 ==rounded-md border-4 border-highlight rounded-lg text-highlight md:text-4xl border-transparent shadow-sm focus:outline-none"
            >
                View all my projects
            </button>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-transparent z-10" />
        <img src="https://picsum.photos/1920/1080" alt="hero" className="absolute w-full h-full object-cover z-0" />
    </div>
)

export default Hero