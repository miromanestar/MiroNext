import React, { useEffect, useRef } from 'react'
import { Gradient } from './Gradient'

const gradient = new Gradient()

const Banner = ({ title }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            gradient.initGradient('#gradient-canvas')
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-[25vh]">
            <h2 className="z-10 mt-16 text-4xl font-bold tracking-tight text-secondaryBg sm:text-5xl lg:text-6xl drop-shadow-md">{title}</h2>
            <canvas ref={canvasRef} id="gradient-canvas" className="absolute z-0 w-full !h-[inherit] drop-shadow-sm"></canvas>
        </div>
    )
}

export default Banner