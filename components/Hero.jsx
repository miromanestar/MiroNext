import React, { useEffect, useRef } from 'react'
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
        <div className="relative h-screen shadow-lg flex justify-center items-center px-10 md:px-24 text-center">
            <div className="relative z-30 text-white">
                <div className="text-4xl md:text-6xl font-medium">
                    <div className="animated-title drop-shadow-md">
                        <div className="text-top">
                            <div>
                                <span>Transforming</span>
                                <span>lines of code into works of art</span>
                            </div>
                        </div>
                        <div className="text-bottom">
                            <div>one keystroke at a time.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <canvas ref={canvasRef} id="gradient-canvas" className="absolute z-0 h-[70vh] w-full lg:h-[75vh] drop-shadow-sm"></canvas>
        </div>
    )
}

export default Hero