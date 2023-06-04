import React from 'react'

import Cards from '../components/Cards'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Institutions from '../components/Institutions'

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

            <div className='bg-secondaryBg'>
                <Experience />
                <Institutions institutions={schools} />
            </div>
        </div>
    )
}

const schools = [
    {
        institution: 'Southern Adventist University',
        degree: 'Computer Science',
        level: 'MS & BS',
        website: 'https://southern.edu',
        date: 'August 2020 - May 2023',
        imageUrl:
            'https://www.thestudentloancalculator.com/wp-content/uploads/2020/08/mzi.gteaeddn-removebg-preview.png',
    },
    {
        institution: 'University of North Georgia',
        degree: 'Computer Science',
        level: 'Associate of Science',
        website: 'https://ung.edu',
        date: 'August 2018 - May 2020',
        imageUrl:
            'https://i.imgur.com/FANSBxD.png',
    }
]

export default Home