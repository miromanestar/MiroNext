import React, { useEffect, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'

import Template from '../../components/Template'
import Card from '../../components/Card'

import data from '../../data/data.json'

const Projects = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    })

    return (
        <Template
            title="My Projects"
        >
            <div className="my-12 grid gap-8 lg:grid-cols-3">

                {width < 1024 ? (
                    data.projects.map((p, i) => (
                        <Card key={`fcard-${i}`} data={p} />
                    )))
                    : (
                        <Zoom
                            triggerOnce
                            cascade={width < 1024 ? false : true}
                            damping={width < 1024 ? 0 : 0.2}
                        >
                            {data.projects.map((p, i) => (
                                <Card key={`fcard-${i}`} data={p} />
                            ))}
                        </Zoom>
                    )
                }
            </div>
        </Template>
    )
}

export default Projects