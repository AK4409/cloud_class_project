//useEffect is a special function in react that is used to run side effects whenever the components render.

//eg: loading effect.

//useEffect syntax

// useEffect(()=>{

// }, [])

import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [count, setCount]= useState(0);
    useEffect(()=>{
        // alert("Hello World");
        console.log("Current value of count: ", count);
        
    },[count])
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((count) => count + 1)} className='border-2 p-1 justify-center align-middle gap-3'>Increase</button>
        {/* <button onClick={Count} className=' border-2 m-2 p-1'>Decrease</button> */}
        <button onClick={()=> count>0 && setCount(count-1)} className=' border-2 m-2 p-1'>Decrease</button>

        <button onClick={()=>setCount(0)} className='border-2 m-2.5 p-1'>Reset</button>
    </div>
  )
}

export default Useeffect