import React, { useState } from 'react'

export const Count = () => {

    const [count,setCount] = useState(0);
    const handleIncrement= ()=>{
        setCount((count) => count + 1);
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    }

  return (
    <div>
        <p>COUNTING</p>
        <br />
        <p>{count}</p>
        <button onClick={handleIncrement}>count+</button>
    </div>
  )
}
