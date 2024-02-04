import React, { useState } from 'react'
import Board from '../Board/Board'

const Game = () => {
    const [history, SetHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const currentSquares = history[currentMove];//latest move

    const handlePlay = (nextSquares) => {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        SetHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Go to the move # ${move}`
        }
        else {
            description = `Go to start the Game!`
        }

        return (
            <li key={move}>
                <button onClick={() => handleJumpTo(move)}>{description}</button>
            </li>
        );
    });

    const handleJumpTo = (move) => {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    };
    return (
        <div>
            <div>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

export default Game