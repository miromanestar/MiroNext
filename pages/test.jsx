import React from "react";
import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

import Template from "../components/Template";
import PCA2D from "../components/PCA2D";

import hawaii from "../data/hawaii.json";
import prb from "../data/prb.json";

const Test = () => {
  return (
    <Template title="Testing Page">
      <div className="flex flex-col gap-3 md:flex-row">
        <PCA2D
          data={hawaii}
          title="Hawaii PCA Bi-Plot"
          xaxis="PC1"
          yaxis="PC2"
        />
        <PCA2D data={prb} title="PRB PCA Bi-Plot" xaxis="PC1" yaxis="PC2" />
      </div>
    </Template>
  );
};

export default Test;
