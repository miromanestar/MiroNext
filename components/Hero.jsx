import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Gradient } from './Gradient'

const gradient = new Gradient()

const Hero = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            gradient.initGradient('#gradient-canvas')
        }
    })

    return (
        <div className="relative w-screen h-screen flex justify-center items-center px-10 md:px-24 text-center">
            <div className='relative z-30 text-white'>
                <div className="text-4xl md:text-6xl">Ever improving the spaghetti, one line at a time.</div>
                {/* <button
                    type="button"
                    className="inline-flex p-4 items-center mt-6 border-4 border-highlight rounded-lg text-highlight md:text-4xl border-transparent shadow-sm focus:outline-none"
                >
                    View all my projects
                </button> */}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-background z-10" />
            {/* <img src="https://picsum.photos/1920/1080" alt="hero" className="absolute w-full h-full object-cover z-0" /> */}
            <canvas ref={canvasRef} id="gradient-canvas" className="absolute z-0 h-[70vh] w-full lg:h-[75vh] drop-shadow-sm"></canvas>
        </div>
    )
}

export default Hero