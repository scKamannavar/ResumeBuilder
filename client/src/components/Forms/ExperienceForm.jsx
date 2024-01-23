import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';

const ExperienceForm = ({dispatch, displayFormValue}) => {
  const [year, setYear] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');

  function handleClickExperience(){
    const newExp = {
        'id' : uuidv4(),
        'company': company,
        'role' : role,
        'year' : year,
        'description' : description,
    }
    // addExp(newExp)
    dispatch({type:'ADD_EXPERIENCE', payload:newExp})
    setYear('')
    setRole('')
    setCompany('')
    setDescription('')
}
  return (
          <div className='flex flex-1 flex-col w-full '>
            {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Experience</h1> */}
            <div className='flex flex-1 flex-col w-full'>
              <h1>Company</h1>
              <input className='h-[8%]  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="company" id="company"  value={company} onChange={(e)=>setCompany(e.target.value)} />
              <div className='flex sm:flex-row sm:gap-4 flex-col justify-center w-full'>
                <div className='flex-1 '>
                  <h1>Role</h1>
                  <input className='h-[8%] w-full  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="role" id="year"  value={role}onChange={(e)=>setRole(e.target.value)}/>
                </div>
                <div className='flex-1'>
                  <h1>Year</h1>
                  <input className='h-[8%] w-full p-2 border-b-2 border-blue-500 outline-none ' type='text' name="year" id="role" value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
              </div>
            
              <h1>Description</h1>
              {/* <textarea className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type='text' name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea> */}
              <ReactQuill
                      className='h-20 mb-10'
                      theme="snow"
                        modules={{
                        toolbar: [
                          [{ list: 'bullet' }],
                          // ['bold', 'italic', 'underline'],
                        ],
                      }}
                      value={description}
                      onChange={(value)=>setDescription(value)}
              />
              <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2  rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
            </div>
          <div className='flex justify-end px-6'>
            <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(1)}>Previous</button>
            
            <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(3)}>Next</button>
          </div>
        </div>
  )
}

export default ExperienceForm
