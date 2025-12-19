"use client";

import { useState, useEffect, useRef } from "react";

import Template from "@/components/Template";

class DisjointSet {
  private elements: number;
  private set: number[];
  public cardinality: number;

  constructor(numElements: number) {
    this.elements = numElements;
    this.set = Array(numElements);
    this.cardinality = 0;
    this.split();
  }

  split(): void {
    for (let i = 0; i < this.elements; i++) {
      this.set[i] = i;
    }
    this.cardinality = this.elements;
  }

  union(a: number, b: number): void {
    const set1 = this.find(a);
    const set2 = this.find(b);

    if (set1 !== set2) {
      this.set[set1] = set2;
      this.cardinality--;
    }
  }

  find(i: number): number {
    if (this.set[i] !== i) {
      this.set[i] = this.find(this.set[i]);
    }
    return this.set[i];
  }
}

const getIndex = (c, r, columns) => r * columns + c;

const getRow = (index, columns) => Math.floor(index / columns);

const getColumn = (index, columns) => Math.floor(index % columns);

const drawLine = (x0, y0, x1, y1, color, ctx) => {
  ctx.beginPath();
  ctx.strokeStyle = color || "white";

  if (color === "transparent") ctx.strokeStyle = "rgba(0, 0, 0, 0)";

  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
};

const Maze = () => {
  const [adjacencyList, setAdjacencyList] = useState([]);
  const [solution, setSolution] = useState([]);
  const [mazeR, setMazeR] = useState(10);
  const [mazeC, setMazeC] = useState(10);

  const [solButton, setSolButton] = useState(false);

  const canvasRef = useRef(null);

  const createMaze = (rows, columns) => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    setSolButton(false);

    let adj = [];

    //Make the canvas look nice and sharp
    const styleHeight = +getComputedStyle(c)
      .getPropertyValue("height")
      .slice(0, -2);
    const styleWidth = +getComputedStyle(c)
      .getPropertyValue("width")
      .slice(0, -2);

    const dpi = window.devicePixelRatio;
    c.setAttribute("height", styleHeight * dpi);
    c.setAttribute("width", styleWidth * dpi);

    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.lineWidth = 4;

    const width = Math.floor(c.width / columns);
    const height = Math.floor(c.height / rows);

    //Draw maze as a grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        ctx.strokeRect(c * width, r * height, width, height);
        //ctx.fillText(r * columns + c, c * width + width/2, r * height + height/2);
        adj.push([]);
      }
    }

    //Tells canvas to make transparent the spaces upon which later strokes overlap on any already drawn stroke
    ctx.globalCompositeOperation = "destination-out";

    //Clear an entrance and exit
    drawLine(0, 0, 0, height, "red", ctx);
    drawLine(
      columns * width,
      (rows - 1) * height,
      columns * width,
      rows * height,
      "red",
      ctx,
    );

    let set = new DisjointSet(rows * columns);
    while (set.cardinality > 1) {
      let x = Math.floor(Math.random() * (columns - 1) + 1) * width; //Range: 1 to columns - 1
      let y = Math.floor(Math.random() * (rows - 1) + 1) * height; //Range: 1 to rows - 1
      let dir = Math.floor(Math.random() * 4);

      /*
                Gets coordinates of the top right corner of the two cells connected by the chosen wall
                which is then used to set i0 & i1, the indexes of the cell to check the disjoint set.
            */
      let r0, c0, r1, c1, i0, i1;
      if (dir === 0) {
        //Left
        r0 = y - height;
        c0 = x - width;
        r1 = y;
        c1 = x - width;
      } else if (dir === 1) {
        //Up
        r0 = y - height;
        c0 = x - width;
        r1 = y - height;
        c1 = x;
      } else if (dir === 2) {
        //Right
        r0 = y - height;
        c0 = x;
        r1 = y;
        c1 = x;
      } else if (dir === 3) {
        //Down
        r0 = y;
        c0 = x - width;
        r1 = y;
        c1 = x;
      }

      i0 = getIndex(Math.round(c0 / width), Math.round(r0 / height), columns);
      i1 = getIndex(Math.round(c1 / width), Math.round(r1 / height), columns);

      if (set.find(i0) !== set.find(i1)) {
        set.union(i0, i1);
        adj[i0].push(i1);
        adj[i1].push(i0);

        switch (dir) {
          case 0:
            drawLine(x, y, x - width, y, "red", ctx);
            break; //Left
          case 1:
            drawLine(x, y, x, y - height, "red", ctx);
            break; //Up
          case 2:
            drawLine(x, y, x + width, y, "red", ctx);
            break; //Right
          case 3:
            drawLine(x, y, x, y + height, "red", ctx);
            break; //Down
        }
      }
    }

    //Clean up gaps in walls
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = "#fff";
    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= columns; c++) {
        ctx.strokeRect(
          c * width,
          r * height,
          ctx.lineWidth / 8,
          ctx.lineWidth / 8,
        );
      }
    }

    setAdjacencyList(adj);
    setSolution(findSolution(adj));
  };

  const findSolution = (adj) => {
    //Array of nodes to process
    let queue = [];

    //Array of nodes which have been visited
    let visited = [];

    //Array of distances from source node to each node
    let dist = [];

    //Array which stores predecessor vertices
    let pred = [];

    //Fill the three arrays with starting data
    for (const elem of adj) {
      visited.push(false);
      dist.push(Number.MAX_SAFE_INTEGER);
      pred.push(-1);
    }

    //Set source node values
    visited[0] = true;
    dist[0] = 0;
    queue.push(0);

    //Begin BFS search
    while (queue.length > 0) {
      let v = queue.shift();
      for (const element of adj[v]) {
        const adjE = element;
        if (visited[adjE] === false) {
          visited[adjE] = true;
          dist[adjE] = dist[v] + 1;
          pred[adjE] = v;
          queue.push(adjE);

          //If we found our destination, stop. The adj length is equal to the index of the destination because its equivalent to rows * columns
          if (adjE === adj.length - 1) {
            let j = adj.length - 1;
            let sol = [];

            while (j !== 0) {
              //Push the final path to an array to be drawn later as the solution
              sol.push(j);
              j = pred[j];
            }

            sol.push(0);
            return sol;
          }
        }
      }
    }

    return [];
  };

  const drawSolution = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    const sol = solution;
    const rows = mazeR;
    const columns = mazeC;

    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.lineWidth = 4;

    if (!solButton) {
      ctx.globalCompositeOperation = "source-over";
    } else {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 10;
    }

    let width = Math.floor(c.width / columns);
    let height = Math.floor(c.height / rows);

    for (let i = 1; i < sol.length; i++) {
      let x0 = getColumn(sol[i], columns) * width + width / 2;
      let y0 = getRow(sol[i], columns) * height + height / 2;
      let x1 = getColumn(sol[i - 1], columns) * width + width / 2;
      let y1 = getRow(sol[i - 1], columns) * height + height / 2;

      drawLine(x0, y0, x1, y1, "red", ctx);
      ctx.strokeRect(x1, y1, ctx.lineWidth / 8, ctx.lineWidth / 8);
      ctx.strokeRect(x0, y0, ctx.lineWidth / 8, ctx.lineWidth / 8);
    }

    setSolButton(!solButton);
  };

  useEffect(() => {
    createMaze(mazeR, mazeC);
  }, []);

  return (
    <Template title="Maze Generator" names={["", "Maze Generator"]}>
      <div className="flex w-full items-center justify-center gap-8 text-center text-white">
        <div className="flex-1">
          <label>Rows</label>
          <div className="flex gap-2">
            <input
              className="w-full"
              type="range"
              min="4"
              max="35"
              value={mazeR}
              onChange={(e) => setMazeR(e.target.value)}
            />
            <output>{mazeR}</output>
          </div>
        </div>

        <div className="flex-1">
          <label>Columns</label>
          <div className="flex flex-1 gap-2">
            <input
              className="w-full"
              type="range"
              min="4"
              max="35"
              value={mazeC}
              onChange={(e) => setMazeC(e.target.value)}
            />
            <output>{mazeC}</output>
          </div>
        </div>
      </div>

      <div className="my-8 flex justify-center rounded-md">
        <button
          type="button"
          className="border-highlight2 bg-highlight relative inline-flex w-fit cursor-pointer items-center rounded-l-md border p-4 px-4 py-2 text-sm font-medium text-white duration-200 hover:brightness-110"
          onClick={() => createMaze(mazeR, mazeC)}
        >
          Generate
        </button>
        <button
          type="button"
          className="border-highlight2 bg-highlight relative -ml-px inline-flex w-fit cursor-pointer items-center rounded-r-md border p-4 px-4 py-2 text-sm font-medium text-white duration-200 hover:brightness-110"
          onClick={() => drawSolution()}
        >
          {solButton ? "Hide Solution" : "Show Solution"}
        </button>
      </div>

      <canvas className="min-h-[300px] w-full" ref={canvasRef} />
    </Template>
  );
};

export default Maze;
