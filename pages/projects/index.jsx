import React, { useEffect, useRef, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
import { Gradient } from '../../components/Gradient'

import Card from '../../components/Card'

import data from '../../data/data.json'

const gradient = new Gradient()

const Projects = () => {
    const [width, setWidth] = useState(0)

    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            gradient.initGradient('#gradient-canvas')
        }

        setWidth(window.innerWidth)
    })

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[25vh]">
                <h2 className="z-10 mt-16 text-4xl font-bold tracking-tight text-secondaryBg sm:text-5xl lg:text-6xl">My Projects</h2>
                <canvas ref={canvasRef} id="gradient-canvas" className="absolute z-0 w-full !h-[inherit] drop-shadow-sm"></canvas>
            </div>

            <div className="px-4 my-12 mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">

                <Zoom
                    triggerOnce
                    cascade
                    damping={width < 1024 ? 0 : 0.2}
                >
                    {data.projects.map((p, i) => (
                        <Card key={`fcard-${i}`} data={p} />
                    ))}
                </Zoom>

            </div>

        </div>
    )
}

export default Projects