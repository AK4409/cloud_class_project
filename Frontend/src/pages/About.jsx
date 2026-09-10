import React from 'react'

function About() {
  return (
    <div>
      <h1 className='font-bold text-blue-500 flex items-center justify-center text-4xl m-2.5 border-b-2 border-gray-300'>About Me</h1>
      <p className='text-center'>Hello, I am Anuj Karn, a passionate full stack developer from Nepal. I enjoy building responsive and user friendly web applications.</p><br/>
      <p className='text-center'>I love learning new technologies. Solving problems and creating modern websites that provide great user experiences.</p>

      <div className='border rounded border-gray-300 m-30'>
        <h1 className='font-bold text-blue-500 flex items-center justify-center m-2'>MY FULL STACK KNOWLEDGE AND SKILLS</h1>
        <ul className='grid grid-cols-2 gap-2 p-2'>
          <li className='border-0 bg-gray-200 rounded p-1'>HTML, CSS AND JAVASCRIPT</li>
          <li className='border-0 bg-gray-200 rounded p-1'>REACT JS AND TAILWIND CSS</li>
          
          <li className='border-0 bg-gray-200 rounded p-1'>USER INTERFACE (UI)</li>
          <li className='border-0 bg-gray-200 rounded p-1'>MONGODB, EXPRESS AND NODEJS</li>
          <li className='border-0 bg-gray-200 rounded p-1'>DATABASE</li>
          
          
          <li className='border-0 bg-gray-200 rounded p-1'>GIT AND GITHUB</li>
        </ul>
      </div>
    </div>
  )
}

export default About