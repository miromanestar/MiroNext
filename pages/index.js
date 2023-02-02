import React from 'react'

import Cards from '../components/Cards'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'

const Home = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <About />
            <Experience />
            <Education />
        </div>
    )
}

export default Home