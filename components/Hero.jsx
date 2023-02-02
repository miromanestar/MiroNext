import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Gradient } from './Gradient'
import { TypeAnimation } from 'react-type-animation'

const gradient = new Gradient()

const Hero = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            gradient.initGradient('#gradient-canvas')
        }
    })

    return (
        <div className="relative h-screen flex justify-center items-center px-10 md:px-24 text-center">
            <div className="relative z-30 text-white">
                <div className="text-4xl md:text-6xl font-medium">
                    {/* <TypeAnimation
                        cursor={true}
                        sequence={[
                            "Turning lines of code into works of art, one keystroke at a time.",
                        ]}
                    /> */}
                    <div className="animated-title">
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

            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-background z-10" />
            {/* <img src="https://picsum.photos/1920/1080" alt="hero" className="absolute w-full h-full object-cover z-0" /> */}
            <canvas ref={canvasRef} id="gradient-canvas" className="absolute z-0 h-[70vh] w-full lg:h-[75vh] drop-shadow-sm"></canvas>
        </div>
    )
}

export default Hero