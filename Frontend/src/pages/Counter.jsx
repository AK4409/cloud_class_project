import React, { useState } from 'react'
import { captureOwnerStack } from 'react';

function Counter() {
    const [count, setCount]= useState(0);
    function Count(){
        if (count==0) {
           return setCount(0);
        } else {
            return setCount(count-1);
        }
    }
  return (
    <div className='gap-3'>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((count) => count + 1)} className='border-2 p-1 justify-center align-middle gap-3'>Increase</button>
        <button onClick={Count} className=' border-2 m-2 p-1'>Decrease</button>
        <button onClick={()=> count>0 && setCount(count-1)} className=' border-2 m-2 p-1'>Decrease</button>

        <button onClick={()=>setCount(0)} className='border-2 m-2.5 p-1'>Reset</button>

        
    </div>
  )
}

export default Counter