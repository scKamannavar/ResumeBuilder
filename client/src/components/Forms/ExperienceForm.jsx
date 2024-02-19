import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';

import { useFormik } from 'Formik'
import * as Yup from 'yup'

const ExperienceForm = ({dispatch, displayFormValue}) => {
  const [year, setYear] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
 

  const validationSchema = Yup.object().shape({
    company: Yup.string().required('company is required'),
    role: Yup.string().required('role is required'),
    // description: Yup.string().required('description is required'),
    year: Yup.string().required('Duration are required'),
  });

  const formik = useFormik({
    initialValues: {
      company: '',
      role: '',
      description: description,
      year: '',
    },
    validationSchema,
    // validateOnMount: true,
    validateOnChange: true,
  });

  function handleClickExperience(){
    if (formik.isValid) {
      if (formik.values.company === '') {
        formik.setFieldError('company', 'company is required');
        return; 
    }
      if (formik.values.description === '<p><br></p>') {
        formik.setFieldError('description', 'description not to be empty');
        return; 
    }
      const newExp = {
        'id' : uuidv4(),
        'company': formik.values.company,
        'role' : formik.values.role,
        'year' : formik.values.year,
        'description' : description,
    }
    console.log('formik values true block',formik.values)
    dispatch({type:'ADD_EXPERIENCE', payload:newExp})
    formik.values.company = ''
    formik.values.role =''
    formik.values.year =''
    setDescription('')

    }
    else{
      console.log('formik values false block',formik.errors)

    }
   
}
  return (
          <div className='flex flex-1 flex-col w-full '>
            {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Experience</h1> */}
            <div className='flex flex-1 flex-col w-full'>
              <h1>Company</h1>
              <div className='flex flex-col h-[70px] mt-2'>
                <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="company" id="company"  value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                { formik.values.company == '' ?
                  <div className='text-red-500'>{formik.errors.company}</div>:''
                }
              </div>
             
              <div className='flex sm:flex-row sm:gap-4 flex-col justify-center w-full'>
                <div className='flex-1 '>
                  <h1>Role</h1>
                  <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="role" id="role"  value={formik.values.role}onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                      {formik.touched.role && formik.errors.role  &&(
                                <div className='text-red-500'>{formik.errors.role}</div>
                    )}

                  </div>
                  
                </div>
                <div className='flex-1'>
                  <h1>Year</h1>
                  <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type='text' name="year" id="year" value={formik.values.year} onChange={formik.handleChange} onBlur={formik.handleBlur}
                    placeholder='Enter Experience year (e.g., 2001-2021)'/>
                    {formik.touched.year && formik.errors.year  &&(
                              <div className='text-red-500'>{formik.errors.year}</div>
                  )}

                  </div>

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
                          ['bold', 'italic', 'underline'],
                        ],
                      }}
                      // name = 'description'
                      // id = 'description'
                      // value={formik.values.description}
                      // onChange={formik.handleChange} onBlur={formik.handleBlur}
                      value={description}
                      onChange={(value)=>{setDescription(value);console.log('`````````````````',description)}}
              />
              {formik.touched.description && formik.errors.description  &&(
                            <div className='text-red-500'>{formik.errors.description}</div>
                )}
                {/* <input className='h-[8%] w-full p-2 border-b-2 border-blue-500 outline-none ' type='text' name="description" id="description" value={description}  onChange={(value)=>{setDescription(value)}} /> */}
              <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={(e)=>handleClickExperience(e)}>Add</button>
            </div>
          <div className='flex justify-end px-6 gap-6'>
            {/* <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(2)}>Previous</button> */}
            <PreviousButton displayFormValue={displayFormValue} value={2}></PreviousButton>
            {/* <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(4)}>Next</button> */}
            <NextButton displayFormValue={displayFormValue} value={4}></NextButton>
          </div>
        </div>
  )
}

export default ExperienceForm
