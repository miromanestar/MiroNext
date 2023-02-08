import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import Template from '../../components/Template'
import Card from '../../components/Card'

import data from '../../data/data.json'

const DelayedTransition = (props) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, props.delay)
    }, [])

    return (
        <Transition
            {...props}
            show={show}
        >
            {props.children}
        </Transition>
    )
}

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