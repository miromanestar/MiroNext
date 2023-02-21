import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import Template from '../../components/Template'
import DelayedTransition from '../../components/DelayedTransition'

const Wordsearch = () => {
    const [searchR, setSearchR] = useState(20)
    const [searchC, setSearchC] = useState(20)
    const [wordList, setWordList] = useState(['COMPUTER', 'PROGRAM', 'PYTHON', 'TEST', 'RECURSION', 'ITERATIVE'])
    const [solButton, setSolButton] = useState(false)

    const [puzzle, setPuzzle] = useState([])
    const [sol, setSol] = useState([])

    const createPuzzle = (r, c, list) => {
        list = list || wordList
        if (list[0] === '') {
            toast.error('Please enter some words separated by commas', {
                style: {
                    background: '#434C5E',
                    color: '#FFF',
                }
            })
            return
        }

        setPuzzle([])
        setSolButton(false)

        setTimeout(() => {
            const tempList = list.map((word) => word.toUpperCase().trim())
            const ws = new WordSearch(tempList, r || searchR, c || searchC)
            setPuzzle(ws.puzzle)
            setSol(ws.solution)
        }, 100)

    }

    const resetPuzzle = () => {
        setSearchC(20)
        setSearchR(20)
        const tempList = ['COMPUTER', 'PROGRAM', 'PYTHON', 'TEST', 'RECURSION', 'ITERATIVE']
        setWordList(tempList)
        createPuzzle(20, 20, tempList)
    }

    useEffect(() => {
        createPuzzle()
    }, [])

    return (
        <Template title="Wordsearch">
            <div className="flex flex-col items-center w-full gap-8 text-white text-center">
                <input
                    type="text"
                    className="bg-tertiaryBg appearance-none border-2 border-secondaryBg rounded-lg w-full py-2 px-4 text-white leading-tight focus:outline-none focus:bg-secondaryBg focus:border-highlight"
                    placeholder="Enter words seperated by commas"
                    value={wordList.join(', ')}
                    onChange={(e) => setWordList(e.target.value.split(', '))}
                />
                <div className="flex items-center justify-center w-full gap-8">
                    <div className="flex-1">
                        <label>Rows</label>
                        <div className="flex gap-2">
                            <input className="w-full" type="range" min="4" max="35" value={searchR} onChange={(e) => setSearchR(e.target.value)} />
                            <output>{searchR}</output>
                        </div>
                    </div>

                    <div className="flex-1">
                        <label>Columns</label>
                        <div className="flex gap-2 flex-1">
                            <input className="w-full" type="range" min="4" max="35" value={searchC} onChange={(e) => setSearchC(e.target.value)} />
                            <output>{searchC}</output>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-8 flex justify-center rounded-md">
                <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md border border-highlight2 px-4 py-2 text-sm bg-highlight text-white font-medium  cursor-pointer p-4 w-fit duration-200 hover:brightness-110"
                    onClick={() => createPuzzle()}
                >
                    Generate
                </button>
                <button
                    type="button"
                    className="relative inline-flex items-center border-t border-b border-highlight2 px-4 py-2 text-sm bg-highlight text-white font-medium  cursor-pointer p-4 w-fit duration-200 hover:brightness-110"
                    onClick={resetPuzzle}
                >
                    Reset
                </button>
                <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md border border-highlight2 px-4 py-2 text-sm bg-highlight text-white font-medium  cursor-pointer p-4 w-fit duration-200 hover:brightness-110"
                    onClick={() => setSolButton(!solButton)}
                >
                    {solButton ? 'Hide Solution' : 'Show Solution'}
                </button>
            </div>

            <div className="overflow-x-auto" style={{ height: `${sol.length * 2}em` }}>
                {puzzle.map((row, i) => (
                    <div key={`row-${i}`} className="flex w-min mx-auto">
                        {row.map((col, j) => (
                            <div
                                key={`col-${j}`}
                                className="w-8 h-8 font-bold justify-center rounded-md text-white duration-200"
                                style={{
                                    color: solButton && sol[i][j] !== '' ? 'red' : ''
                                }}
                            >
                                <DelayedTransition
                                    key={`fcard-${i}`}
                                    delay={i * 30}
                                    enter={`transition duration-[400ms]`}
                                    enterFrom="opacity-0 scale-50"
                                    enterTo="opacity-100 scale-100"
                                    leave="duration-200 transition ease-in-out"
                                    leaveFrom="opacity-100 rotate-0 scale-100 "
                                    leaveTo="opacity-0 scale-95 "
                                >{col}</DelayedTransition>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <Toaster position="bottom-right" />
        </Template>
    )
}

const WordSearch = class {
    constructor(wordList, rows, columns, filler) {
        this.wordList = wordList || [];
        this.filler = filler || '';
        this.rows = Number(rows) || 20;
        this.columns = Number(columns) || 20;
        this.puzzle = [];
        this.solution = [];

        this.directions = [
            [0, -1],  //Up
            [0, 1],   //Down
            [-1, 0],  //Left
            [1, 0],   //Right
            [1, -1],  //Up-Right
            [-1, -1], //Up-Left
            [1, 1],   //Down-Right
            [-1, 1],  //Down-Left
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
        this.puzzle = Array.from({ length: this.rows }, e => Array(this.columns).fill(this.filler));
        //Place words inside 2d array
        for (let word of this.wordList)
            this.placeWord(word, this.rows, this.columns, 0);


        this.fillPuzzle();
    }

    //Places the words from wordList inside the puzzle
    placeWord(word, rows, columns, iteration) {
        if (iteration > 30) {
            toast(`Could not find place for word ${word} after 30 attempts.`, { 
                type: 'error',
                style: {
                    background: '#434C5E',
                    color: '#FFF',
                }
            })
            return;
        }

        let x = this.getRandInt(columns);
        let y = this.getRandInt(rows);

        let choice = this.directions[this.getRandInt(this.directions.length)];
        let dx = choice[0]; let dy = choice[1];

        //If direction checks out, add word as capital letters
        if (this.checkDir(x, y, dx, dy, word)) {
            for (let i = 0; i < word.length; i++)
                this.puzzle[y + (i * dy)][x + (i * dx)] = word[i];
        } else {
            this.placeWord(word, rows, columns, iteration + 1);
        }
    }

    //Checks the direction to ensure a placed word won't go out of bounds or overwrite another word
    checkDir(x, y, dx, dy, word) {
        for (let i = 0; i < word.length; i++) {

            //Ensure that the coordinates are within range
            let nextX = x + (i * dx);
            let nextY = y + (i * dy);
            if (nextY >= 0 && nextY < this.rows && nextX >= 0 && nextX < this.columns) {
                let tempValue = this.puzzle[nextY][nextX];
                if (tempValue !== word[i] && tempValue !== this.filler)
                    return false;
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
        this.solution = Array.from({ length: this.rows }, e => Array(this.columns).fill(this.filler));
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
        if (this.puzzle[y][x] !== word[0])
            return [-1];

        let dx = dir[0], dy = dir[1];

        for (let i = 1; i < word.length; i++) { //Iterate over every letter except first (since already checked)
            let nextX = x + (i * dx);
            let nextY = y + (i * dy);
            if (nextY >= 0 && nextY < this.rows && nextX >= 0 && nextX < this.columns) {
                let tempValue = this.puzzle[nextY][nextX];
                if (tempValue !== word[i])
                    break;
                else if (i === word.length - 1) //Successfully reached end of word in puzzle, we've found it!
                    return [x, y, dx, dy];
            } else {
                break;
            }
        }

        return [-1];
    }

    fillSolution(x, y, dx, dy, word) {
        for (let i = 0; i < word.length; i++)
            this.solution[y + (i * dy)][x + (i * dx)] = word[i];
    }

    /*
        -------------- UTILITY FUNCTIONS --------------
    */

    //Returns random integer from 0 to max - 1
    getRandInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

export default Wordsearch