"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PCA3D = ({ data, title }) => {
  const pca = data;

  const clusteredData = {};
  for (let i = 0; i < pca.clusters.length; i++) {
    const cluster = pca.clusters[i];

    const keys = Object.keys(pca.x);

    if (!clusteredData[cluster]) {
      clusteredData[cluster] = {};
      keys.forEach((key) => {
        clusteredData[cluster][key] = [];
      });
    }

    keys.forEach((key) => {
      clusteredData[cluster][key].push(pca.x[key][i]);
    });
  }

  const features3d = [];
  pca.features.forEach((f) => features3d.push("", f));

  const scale = (arr) => arr.map((val) => val * 8);

  const lines3d = {
    PC1: scale(pca.lines.PC1),
    PC2: scale(pca.lines.PC2),
    PC3: scale(pca.lines.PC3),
  };

  return (
    <div className="bg-background/35 h-full min-h-104 w-full min-w-0 overflow-hidden rounded-2xl border border-white/15 shadow-sm backdrop-blur-sm sm:min-h-128">
      <Plot
        data={[
          {
            x: clusteredData[1].PC1,
            y: clusteredData[1].PC2,
            z: clusteredData[1].PC3,
            type: "scatter3d",
            mode: "markers",
            name: "Cluster 1",
            marker: {
              size: 4,
              color: "#619cff",
            },
          },
          {
            x: clusteredData[2].PC1,
            y: clusteredData[2].PC2,
            z: clusteredData[2].PC3,
            type: "scatter3d",
            mode: "markers",
            name: "Cluster 2",
            marker: {
              size: 4,
              color: "#f8766d",
            },
          },
          {
            x: clusteredData[3].PC1,
            y: clusteredData[3].PC2,
            z: clusteredData[3].PC3,
            type: "scatter3d",
            mode: "markers",
            name: "Cluster 3",
            marker: {
              size: 4,
              color: "#00ba38",
            },
          },
          {
            x: lines3d.PC1,
            y: lines3d.PC2,
            z: lines3d.PC3,
            showlegend: false,
            type: "scatter3d",
            mode: "lines+markers+text",
            marker: {
              size: 2,
              color: "white",
            },
            text: features3d,
          },
        ]}
        layout={{
          title: {
            text: title,
            automargin: true,
            pad: { t: 5 },
          },
          margin: { b: 0, t: 0, l: 0, r: 26 },
          scene: {
            bgcolor: "rgba(0, 0, 0, 0)",
            xaxis: {
              title: "Dim1",
              gridcolor: "#6b7280",
              zerolinecolor: "white",
            },
            yaxis: {
              title: "Dim2",
              gridcolor: "#6b7280",
              zerolinecolor: "white",
            },
            zaxis: {
              title: "Dim3",
              gridcolor: "#6b7280",
              zerolinecolor: "white",
            },
          },
          modebar: { orientation: "v" },
          autosize: true,
          legend: {
            x: 0,
            y: 0,
            bgcolor: "rgba(46, 52, 64, 0.35)",
            bordercolor: "rgba(255, 255, 255, 0.1)",
            itemsizing: "constant",
            orientation: "v",
          },
          plot_bgcolor: "rgba(0, 0, 0, 0)",
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          font: {
            color: "#d1d5db",
          },
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PCA3D;
