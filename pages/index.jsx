import React from 'react'

import Cards from '../components/Cards'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'

import data from '../data/data.json'

const Home = () => {

    return (
        <div>
            <Hero />
            <Cards 
                className="-mt-[300px]" 
                cards={data.projects.slice(0, 3)} 
            />
            <About />
            <Experience />
            <Education />
        </div>
    )
}

export default Home