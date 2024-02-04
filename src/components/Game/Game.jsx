import React, { useState } from 'react'
import Board from '../Board/Board'
import History from '../History/History';

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


    const handleJumpTo = (move) => {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    };
    return (
        <div className='flex justify-center p-4
        '>
            <div className='mr-16'>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <History history={history} currentMove={currentMove} handleJumpTo={handleJumpTo} />
            </div>
        </div>
    )
}

export default Game