import React, { useRef,useState } from 'react'

function Counter() {
    const [count, setCount]=useState(0);
      const countRef = useRef(0);
    function handleClick(){
        setCount((count)=>count+1);
    }
    function handleRefClick(){
        countRef.current += 1
        console.log({ countRef })


    }
  return (
    <div>Add Likes
     <button onClick={handleClick}>{count}</button>
     <button onClick={handleRefClick}>{countRef.current}</button>
    </div>
  )
}

export default Counter