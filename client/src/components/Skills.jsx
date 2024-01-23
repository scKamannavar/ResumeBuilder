import React, { useState } from 'react'


const Skills = ({skillData, deleteSkill, dispatch}) => {
  // console.log('Aganaga aganaga skill', skillData)
  function handleDelete(id){
    dispatch({type:'DELETE_SKILL', payload:id})
    // deleteSkill(id)
    // console.log(id)
  }
  // console.log('inside skill component',skillData)  // check
  return (
    <div className={`${skillData.length ? '': 'hidden'} border-b-2 py-10 flex text-md`}>
      {/* <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>Skills</h1>
      </div> */}
      <div className='flex-1 '>
          {
            skillData.map((skill, index)=>
            <div key={index} className='list-disc p-4'>{skill} <span onClick={()=>handleDelete(index)} className='cursor-pointer'>🚫</span> </div>
            )
          }
      </div>  
    </div>
  )
}

export default Skills
