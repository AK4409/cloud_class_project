import React, { useEffect, useState } from 'react'

function CharCount() {
    const [charCount, setCharCount]=useState(0)
    const [text, setText]= useState("")
    useEffect(()=>{
        // console.log("Characters:", setCharCount(text.length));
        setCharCount(text.length);
        
    },[text])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      
        <input type="text" className='border-2 rounded p-1' placeholder='input' onChange={(e)=>setText(e.target.value)} />
        {/* <input type="text" name='charr' id='id1' placeholder='input text' onChange={(e)=>e.length.value} /> */}
        <h2>Characters: {charCount} </h2>
    </div>
  )
}

export default CharCount;