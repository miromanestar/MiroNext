import React, { useState, useEffect } from 'react'

import Template from '../../components/Template'

const Youtube = () => {
    
    useEffect(() => {
        // Fetch data from Youtube API
        const fetchData = async () => {
            const result = await fetch('/api/test');

            console.log(await result.json())
        }

        fetchData()
    }, [])

    return (
        <Template title="Youtube Gallery">
        </Template>
    )
}

export default Youtube