import React from 'react'
import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

import Template from '../components/Template'

import pca from '../data/pca.json'

const Test = () => {

    const mappedColors = pca.clusters.map((cluster) => {
        const t = { 1: 'blue', 2: 'red', 3: 'green' }
        return t[cluster]
    })

    const clusteredData = {}
    for (let i = 0; i < pca.clusters.length; i++) {
        const cluster = pca.clusters[i]

        const keys = Object.keys(pca.x)

        if (!clusteredData[cluster]) {
            clusteredData[cluster] = {}
            keys.forEach((key) => {
                clusteredData[cluster][key] = []
            })
        }

        keys.forEach((key) => {
            clusteredData[cluster][key].push(pca.x[key][i])
        })
    }

    const loadingLines = pca.features.map((f, i) => {
        return {
            type: 'line',
            x0: 0,
            y0: 0,
            z0: 0,
            x1: pca.rotation.PC1[i] * 10,
            y1: pca.rotation.PC2[i] * 10,
            z1: pca.rotation.PC3[i] * 10,
            line: {
                color: 'black',
                width: 2,
            },
            label: {
                text: f,
                textposition: 'end',
            },
            showarrow: true
        }
    })

    const features3d = []
    pca.features.forEach(f => features3d.push('', f))

    const scale = (arr) => arr.map((val) => val * 8)

    const lines3d = {
        PC1: scale(pca.lines.PC1),
        PC2: scale(pca.lines.PC2),
        PC3: scale(pca.lines.PC3),
    }

    return (
        <Template title='Testing Page'>
            <Plot
                data={[
                    {
                        x: clusteredData[1].PC1,
                        y: clusteredData[1].PC2,
                        z: clusteredData[1].PC3,
                        type: 'scatter3d',
                        mode: 'markers',
                        name: 'Cluster 1',
                        marker: {
                            size: 4,
                            color: 'blue',
                        },
                    },
                    {
                        x: clusteredData[2].PC1,
                        y: clusteredData[2].PC2,
                        z: clusteredData[2].PC3,
                        type: 'scatter3d',
                        mode: 'markers',
                        name: 'Cluster 2',
                        marker: {
                            size: 4,
                            color: 'red',
                        },
                    },
                    {
                        x: clusteredData[3].PC1,
                        y: clusteredData[3].PC2,
                        z: clusteredData[3].PC3,
                        type: 'scatter3d',
                        mode: 'markers',
                        name: 'Cluster 3',
                        marker: {
                            size: 4,
                            color: 'green',
                        },
                    },
                    {
                        x: lines3d.PC1,
                        y: lines3d.PC2,
                        z: lines3d.PC3,
                        showlegend: false,
                        type: 'scatter3d',
                        mode: 'lines+markers+text',
                        marker: {
                            size: 2,
                            color: 'black',
                        },
                        text: features3d,
                    }
                ]}
                layout={{
                    title: {
                        text: 'PCA 3D',
                        yref: 'paper',
                        automargin: true,
                    },
                    scene: {
                        xaxis: { title: 'Dim1' },
                        yaxis: { title: 'Dim2' },
                        zaxis: { title: 'Dim3' },
                    },
                    modebar: { orientation: 'h' },
                    
                }}
            />

            <Plot
                data={[
                    {
                        x: clusteredData[1].PC1,
                        y: clusteredData[1].PC2,
                        type: 'scatter',
                        mode: 'markers',
                        name: 'Cluster 1',
                        marker: {
                            size: 4,
                            color: 'blue',
                        },
                    },
                    {
                        x: clusteredData[2].PC1,
                        y: clusteredData[2].PC2,
                        type: 'scatter',
                        mode: 'markers',
                        name: 'Cluster 2',
                        marker: {
                            size: 4,
                            color: 'red',
                        },
                    },
                    {
                        x: clusteredData[3].PC1,
                        y: clusteredData[3].PC2,
                        type: 'scatter',
                        mode: 'markers',
                        name: 'Cluster 3',
                        marker: {
                            size: 4,
                            color: 'green',
                        },
                    },
                ]}
                layout={{
                    shapes: loadingLines
                }}
            />
        </Template>
    )
}

export default Test