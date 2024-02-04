import React from 'react'

const History = ({ history, currentMove, handleJumpTo }) => {

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
    return (
        <ol className='border border-gray-600 p-2 text-lg'>{moves}</ol>
    )
}

export default History