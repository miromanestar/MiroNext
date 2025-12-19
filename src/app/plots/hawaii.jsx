import React from "react";

import PCA3D from "../../components/PCA3D";

import hawaii from "../../data/hawaii.json";

const Hawaii = () => (
  <div className="h-full w-screen p-4 pt-24">
    <PCA3D data={hawaii} title="Hawaii PCA 3D Bi-Plot (n=10,476)" />
  </div>
);

export default Hawaii;
