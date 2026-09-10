import React from 'react'
import { ProjectData } from '../constants/ProjectData'
import ProjectChild from './ProjectChild'

function ProjectParent() {
  return (
    <div className='grid grid-cols-2 border-2 rounded border-amber-200 m-4 p-4 mt-3.5'>
        {
           ProjectData.map((datas)=>(
               <ProjectChild
                key={datas.id}
                images={datas.image}
                titles={datas.title}
                descriptions={datas.desc}
                urls={datas.url}
                buttons={datas.button}
               />

           ))
        }
         
    </div>
  )
}

export default ProjectParent