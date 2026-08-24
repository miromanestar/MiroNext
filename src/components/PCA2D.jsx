"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PCA2D = ({ data, title, xaxis, yaxis }) => {
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

  const loadingLines = pca.features.map((f, i) => {
    return {
      type: "line",
      x0: 0,
      y0: 0,
      x1: pca.rotation[xaxis][i] * 8,
      y1: pca.rotation[yaxis][i] * 8,
      line: {
        color: "white",
        width: 2,
      },
      label: {
        text: f,
        textposition: "end",
      },
      showarrow: true,
    };
  });

  return (
    <div className="bg-background/35 h-full w-full overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
      <Plot
        data={[
          {
            x: clusteredData[1].PC1,
            y: clusteredData[1].PC2,
            type: "scatter",
            mode: "markers",
            name: "Cluster 1",
            marker: {
              size: 4,
              color: "#81a1c1",
            },
          },
          {
            x: clusteredData[2].PC1,
            y: clusteredData[2].PC2,
            type: "scatter",
            mode: "markers",
            name: "Cluster 2",
            marker: {
              size: 4,
              color: "#bf616a",
            },
          },
          {
            x: clusteredData[3].PC1,
            y: clusteredData[3].PC2,
            type: "scatter",
            mode: "markers",
            name: "Cluster 3",
            marker: {
              size: 4,
              color: "#a3be8c",
            },
          },
        ]}
        layout={{
          title: {
            text: title,
            automargin: true,
            pad: { t: 5 },
          },

          margin: { b: 26, t: 26, l: 26, r: 40 },
          shapes: loadingLines,
          modebar: { orientation: "v" },
          legend: {
            bgcolor: "rgba(46, 52, 64, 0.72)",
            bordercolor: "rgba(255, 255, 255, 0.12)",
            itemsizing: "constant",
            orientation: "v",
          },
          plot_bgcolor: "rgba(0, 0, 0, 0)",
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          font: {
            color: "white",
          },
          xaxis: {
            title: xaxis,
            color: "white",
          },
          yaxis: {
            title: yaxis,
            color: "white",
          },
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default PCA2D;
