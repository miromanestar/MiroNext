import React from 'react'

import Template from '../../components/Template'

const RayCalc = () => (
    <Template title="AutoAttend" names={['', 'RayCalc']}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-highlight">A cross-platform radiation dosimetry app for emergency situations!</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">RayCalc</p>
                <a href="https://github.com/miromanestar/AutoAttend" className='mt-2 text-md leading-7 text-gray-400 mx-auto'>View Source</a>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    RayCalc is a lightweight, simple calculator for radiation dosimetry calculations when on call. 
                    Its purpose is not to replace professional software, but to provide a verification solution during emergency situations to aid against human error. 
                    The calculator utilizes data tables taken directly from Northside Forsyth hospital, and uses industry-standard formulas, along with some minor interpolation to 
                    obtain answers that have been tested to be with a less than 1% error margin.
                </p>

                <p className="text-lg leading-8 text-gray-300">
                    View this <a href="https://raycalc.com/" className="text-highlight">link</a> for a demo of Raycalc.
                </p>

                <p className="mt-10 text-2xl font-bold tracking-tight text-white">RayCalc 1.0</p>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    Raycalc originally was built with Swift in XCode, and exclusive to iOS. (It's also not polished at all and no longer developed).
                    <br />
                    Visit this <a href="https://github.com/miromanestar/DosimetryCalculator" className="text-highlight">link</a> to see the repository for the original version.
                </p>
            </div>
        </div>
    </Template>
)

export default RayCalc