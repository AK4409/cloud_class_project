import React from 'react'

function ProjectChild(props) {
  return (
    <div className='border-2 rounded bg-blue-200 m-2 p-2 hover:scale-102 transition duration-700 ease-in-out'>
        
        <img className='size-50 m-2' src={props.images} alt="" />
        <h1 className='font-bold text-3xl text-white m-2'>{props.titles}</h1>
        
        <p className='m-2 text-justify leading-8'>{props.descriptions}</p>
        <a href={props.urls} target='blank'>
        <button className='border-0 rounded bg-blue-400 p-2 m-2 cursor-pointer '>{props.buttons}</button>
        </a>


        
    </div>
  )
}

export default ProjectChild