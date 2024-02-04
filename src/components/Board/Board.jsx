import React, { useState } from 'react'
import Square from '../Square/Square'

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};
const Board = () => {
    const [squares, SetSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    }
    else {
        status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }//after getting winner we will not be able to put any cross or O

        const nextSquares = squares.slice();//new array created

        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        SetSquares(nextSquares);
        setXIsNext(!xIsNext);
        // squares[0] = 'X';
        // SetSquares([...squares]);

    };
    return (
        <>
            <div>{status}</div>
            <div className='flex'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} s />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='flex'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='flex'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>

    )
}

export default Board