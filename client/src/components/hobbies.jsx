import React, { useState } from 'react'
import ResumeData from '../data/info'

const Hobbies = ({hobbiesData,deleteHobby, dispatch}) => {
  
 const handleDelete =(id)=>{
  dispatch({type:'DELETE_HOBBY', payload:id})
    // deleteHobby(id)
 } 

//   console.log('inside hobbies component',hobbiesData) //  check
  return ( 
    <div className={`border-b-2 py-10 flex text-md`}>
      {/* <div className={`flex-2 text-2xl w-[30%] pl-10`}>
        <h1>Hobbies</h1>
      </div> */}
      <div className='flex-1 '>
          {
            hobbiesData.map((hobby, index)=>
            <div key={index} className='list-disc p-4'>{hobby}<span onClick={()=>handleDelete(index)}>🚫</span></div>
            )
          }
      </div>  
    </div>
  )
}

export default Hobbies
