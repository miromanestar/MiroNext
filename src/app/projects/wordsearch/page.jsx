"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Template from "../../../components/Template";
import DelayedTransition from "../../../components/DelayedTransition";

const toastStyle = {
  background: "rgba(46, 52, 64, 0.88)",
  color: "#eceff4",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "0.75rem",
  backdropFilter: "blur(12px)",
};

const Wordsearch = () => {
  const [searchR, setSearchR] = useState(20);
  const [searchC, setSearchC] = useState(20);
  const [wordList, setWordList] = useState([
    "COMPUTER",
    "PROGRAM",
    "PYTHON",
    "TEST",
    "RECURSION",
    "ITERATIVE",
  ]);
  const [solButton, setSolButton] = useState(false);

  const [puzzle, setPuzzle] = useState([]);
  const [sol, setSol] = useState([]);

  const createPuzzle = (r, c, list) => {
    list = list || wordList;
    if (list[0] === "") {
      toast.error("Please enter some words separated by commas", {
        style: toastStyle,
      });
      return;
    }

    setPuzzle([]);
    setSolButton(false);

    setTimeout(() => {
      const tempList = list.map((word) => word.toUpperCase().trim());
      const ws = new WordSearch(tempList, r || searchR, c || searchC);
      setPuzzle(ws.puzzle);
      setSol(ws.solution);
    }, 100);
  };

  const resetPuzzle = () => {
    setSearchC(20);
    setSearchR(20);
    const tempList = [
      "COMPUTER",
      "PROGRAM",
      "PYTHON",
      "TEST",
      "RECURSION",
      "ITERATIVE",
    ];
    setWordList(tempList);
    createPuzzle(20, 20, tempList);
  };

  useEffect(() => {
    createPuzzle();
  }, []);

  return (
    <Template title="Wordsearch">
      <div className="bg-background/35 relative w-full rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(136,192,208,0.14),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(129,161,193,0.12),transparent_55%)] p-3 text-white shadow-lg backdrop-blur-md sm:p-5">
        <label className="block text-left text-xs font-semibold tracking-wide text-white/70 uppercase">
          Words
        </label>
        <input
          type="text"
          className="bg-background/50 focus:border-highlight/70 mt-1.5 w-full appearance-none rounded-xl border border-white/15 px-3 py-2 text-sm leading-tight text-white shadow-inner backdrop-blur-sm transition placeholder:text-white/40 focus:bg-white/5 focus:outline-none sm:px-4"
          placeholder="Enter words seperated by commas"
          value={wordList.join(", ")}
          onChange={(e) => setWordList(e.target.value.split(", "))}
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="min-w-0 flex-1 text-left">
            <label className="text-xs font-semibold tracking-wide text-white/70 uppercase">
              Rows
            </label>
            <div className="mt-1.5 flex items-center gap-3">
              <input
                className="accent-highlight h-2 w-full cursor-pointer"
                type="range"
                min="4"
                max="35"
                value={searchR}
                onChange={(e) => setSearchR(e.target.value)}
              />
              <output className="bg-background/50 min-w-9 rounded-xl border border-white/10 px-2 py-1 text-center text-sm font-semibold tabular-nums backdrop-blur-sm">
                {searchR}
              </output>
            </div>
          </div>

          <div className="min-w-0 flex-1 text-left">
            <label className="text-xs font-semibold tracking-wide text-white/70 uppercase">
              Columns
            </label>
            <div className="mt-1.5 flex items-center gap-3">
              <input
                className="accent-highlight h-2 w-full cursor-pointer"
                type="range"
                min="4"
                max="35"
                value={searchC}
                onChange={(e) => setSearchC(e.target.value)}
              />
              <output className="bg-background/50 min-w-9 rounded-xl border border-white/10 px-2 py-1 text-center text-sm font-semibold tabular-nums backdrop-blur-sm">
                {searchC}
              </output>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:mx-auto sm:w-fit sm:grid-cols-3">
          <button
            type="button"
            className="bg-highlight text-background border-highlight/80 col-span-2 inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold shadow-sm transition duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 sm:col-span-1"
            onClick={() => createPuzzle()}
          >
            Generate
          </button>
          <button
            type="button"
            className="bg-background/50 hover:border-highlight/50 inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            onClick={resetPuzzle}
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-background/50 hover:border-highlight/50 inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            onClick={() => setSolButton(!solButton)}
          >
            {solButton ? "Hide Solution" : "Show Solution"}
          </button>
        </div>
      </div>

      <div className="bg-background/35 mt-4 overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(136,192,208,0.1),transparent_55%)] p-2 shadow-xl backdrop-blur-md sm:mt-6 sm:p-4">
        <div
          className="overflow-x-auto"
          style={{ height: `${sol.length * 2}em` }}
        >
          {puzzle.map((row, i) => (
            <div key={`row-${i}`} className="mx-auto flex w-min">
              {row.map((col, j) => (
                <div
                  key={`col-${j}`}
                  className="h-8 w-8 justify-center rounded-md font-bold text-white/90 duration-200"
                  style={{
                    color: solButton && sol[i][j] !== "" ? "#bf616a" : "",
                  }}
                >
                  <DelayedTransition
                    key={`fcard-${i}`}
                    delay={i * 30}
                    enter={`transition duration-400`}
                    enterFrom="opacity-0 translate-y-1 scale-[0.98]"
                    enterTo="opacity-100 scale-100"
                    leave="duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                  >
                    {col}
                  </DelayedTransition>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: toastStyle,
          error: {
            iconTheme: {
              primary: "#bf616a",
              secondary: "#eceff4",
            },
          },
        }}
      />
    </Template>
  );
};

const WordSearch = class {
  constructor(wordList, rows, columns, filler) {
    this.wordList = wordList || [];
    this.filler = filler || "";
    this.rows = Number(rows) || 20;
    this.columns = Number(columns) || 20;
    this.puzzle = [];
    this.solution = [];

    this.directions = [
      [0, -1], //Up
      [0, 1], //Down
      [-1, 0], //Left
      [1, 0], //Right
      [1, -1], //Up-Right
      [-1, -1], //Up-Left
      [1, 1], //Down-Right
      [-1, 1], //Down-Left
    ];

    this.makeWordSearch();
    this.solveWordSearch();
  }

  /*
        -------------- WORD SEARCH GENERATOR PORTION --------------
    */

  //Places words randomly inside the 2d array then adds random capital letters in between.
  makeWordSearch() {
    //console.log(this.wordList);
    //Create empty 2d array for the word search
    this.puzzle = Array.from({ length: this.rows }, (e) =>
      Array(this.columns).fill(this.filler),
    );
    //Place words inside 2d array
    for (let word of this.wordList)
      this.placeWord(word, this.rows, this.columns, 0);

    this.fillPuzzle();
  }

  //Places the words from wordList inside the puzzle
  placeWord(word, rows, columns, iteration) {
    if (iteration > 30) {
      toast(`Could not find place for word ${word} after 30 attempts.`, {
        type: "error",
        style: toastStyle,
      });
      return;
    }

    let x = this.getRandInt(columns);
    let y = this.getRandInt(rows);

    let choice = this.directions[this.getRandInt(this.directions.length)];
    let dx = choice[0];
    let dy = choice[1];

    //If direction checks out, add word as capital letters
    if (this.checkDir(x, y, dx, dy, word)) {
      for (let i = 0; i < word.length; i++)
        this.puzzle[y + i * dy][x + i * dx] = word[i];
    } else {
      this.placeWord(word, rows, columns, iteration + 1);
    }
  }

  //Checks the direction to ensure a placed word won't go out of bounds or overwrite another word
  checkDir(x, y, dx, dy, word) {
    for (let i = 0; i < word.length; i++) {
      //Ensure that the coordinates are within range
      let nextX = x + i * dx;
      let nextY = y + i * dy;
      if (
        nextY >= 0 &&
        nextY < this.rows &&
        nextX >= 0 &&
        nextX < this.columns
      ) {
        let tempValue = this.puzzle[nextY][nextX];
        if (tempValue !== word[i] && tempValue !== this.filler) return false;
      } else {
        return false;
      }
    }

    return true;
  }

  fillPuzzle() {
    for (let i = 0; i < this.rows; i++) {
      for (let k = 0; k < this.columns; k++) {
        if (this.puzzle[i][k] == this.filler)
          this.puzzle[i][k] = String.fromCharCode(this.getRandInt(26) + 65);
      }
    }
  }

  /*
        -------------- WORD SEARCH SOLVER PORTION --------------
    */

  //For each word, checks every direction of each cell. If it finds it, write it to the solution array
  solveWordSearch() {
    this.solution = Array.from({ length: this.rows }, (e) =>
      Array(this.columns).fill(this.filler),
    );
    let pos = []; //Will store the position of word like so: [x, y, dx, dy]

    for (let word of this.wordList) {
      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.columns; x++) {
          for (let dir of this.directions) {
            pos = this.findWord(x, y, word, dir);

            if (pos[0] != -1)
              this.fillSolution(pos[0], pos[1], pos[2], pos[3], word);
          }
        }
      }
    }

    //console.log(this.solution);
  }

  findWord(x, y, word, dir) {
    //If the first letter doesn't match, move on
    if (this.puzzle[y][x] !== word[0]) return [-1];

    let dx = dir[0],
      dy = dir[1];

    for (let i = 1; i < word.length; i++) {
      //Iterate over every letter except first (since already checked)
      let nextX = x + i * dx;
      let nextY = y + i * dy;
      if (
        nextY >= 0 &&
        nextY < this.rows &&
        nextX >= 0 &&
        nextX < this.columns
      ) {
        let tempValue = this.puzzle[nextY][nextX];
        if (tempValue !== word[i]) break;
        else if (i === word.length - 1)
          //Successfully reached end of word in puzzle, we've found it!
          return [x, y, dx, dy];
      } else {
        break;
      }
    }

    return [-1];
  }

  fillSolution(x, y, dx, dy, word) {
    for (let i = 0; i < word.length; i++)
      this.solution[y + i * dy][x + i * dx] = word[i];
  }

  /*
        -------------- UTILITY FUNCTIONS --------------
    */

  //Returns random integer from 0 to max - 1
  getRandInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
};

export default Wordsearch;
