import React from 'react'
import { useState } from 'react';

const Square = () => {

    const [value, setValue] = useState(null);
    const handleClicked = () => {
        setValue('X');
    }

    return (
        <>
            <button className='bg-white border border-gray-600 h-12 w-12 m-1 leading-9 text-lg' onClick={handleClicked}>{value}</button>
        </>
    )
}

export default Square