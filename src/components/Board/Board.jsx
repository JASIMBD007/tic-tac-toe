import React, { useState } from 'react'
import Square from '../Square/Square'

const Board = () => {
    const [squares, SetSquares] = useState(Array(9).fill(null));

    const handleClick = () => {
        console.log('clicked');
    };
    return (
        <>
            <div className='flex'>
                <Square value={squares[0]} onSquareClick={handleClick} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />
            </div>
            <div className='flex'>
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </div>
            <div className='flex'>
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </div>
        </>

    )
}

export default Board