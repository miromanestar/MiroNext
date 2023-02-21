import React, { useEffect, useState } from 'react'

import Template from '../../components/Template'
import Card from '../../components/Card'
import DelayedTransition from '../../components/DelayedTransition'

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

                {data.projects.map((p, i) => (
                    <DelayedTransition
                        key={`fcard-${i}`}
                        delay={i * 100}
                        enter={`transition duration-[400ms]`}
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 rotate-0 scale-100 "
                        leaveTo="opacity-0 scale-95 "
                    >
                        <Card data={p} />
                    </DelayedTransition>
                ))}
            </div>
        </Template>
    )
}

export default Projects