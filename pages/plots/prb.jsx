import React from 'react'

import PCA3D from '../../components/PCA3D'

import prb from '../../data/prb.json'

const PRB = () => (
    <div className="w-screen h-full p-4 pt-24">
        <PCA3D data={prb} title="PRB PCA 3D Bi-Plot (n=532)" />
    </div>
)

export default PRB