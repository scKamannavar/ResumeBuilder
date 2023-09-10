import React from 'react'
import ResumeData from '../data/info'

const Education = ({list, eduData, deleteEdu, dispatch}) => {
  // console.log(list)

const handleDelete = (id)=>{
  // deleteEdu(id)
  dispatch({type:'DELETE_EDUCATION', payload:id})
}

  return (
    <div className={`${ResumeData.education.length ? '': 'hidden'} border-b-2 py-10 flex text-md`}>
      {/* <div className='flex-2 text-2xl w-[30%] pl-10'>
          <h1>Education:</h1>
      </div> */}
      <div className='flex-1 '> 
          {eduData.map((edu, index)=>
                    <div className="p-4" key={index}>
                      <h1 className='' >{edu.institute}</h1>   
                      <h1 className='' >{edu.course}</h1> 
                      <h1 className=''>{edu.year}</h1>
                      <h1 className=''>{edu.grades}</h1>
                      <span onClick={()=>handleDelete(edu.id)}>🚫</span>
                  </div>
          )}
        
      </div>
      
    </div>
  )
}

export default Education
