import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const EducationForm = ({dispatch, displayFormValue}) => {

    const [institute, setInstitute] = useState('')
    const [course, setCourse] = useState('')
    const [eduyear, setEduyear] = useState('')
    const [grades, setGrades] = useState('')

    function handleClickEducation(){
        const newEdu = {
            'id' : uuidv4(),
            'institute' : institute,
            'course' : course,
            'year' : eduyear,
            'grades': grades,
        }
        // addEdu(newEdu) 
        dispatch({type : 'ADD_EDUCATION',payload : newEdu})
        setInstitute('')
        setCourse('')
        setEduyear('')
        setGrades('')
    } 
  return (
        <div className='flex flex-1 flex-col w-full '>
            {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Education</h1> */}
            <div className='flex flex-1 flex-col w-full '>
                <h1>Institution</h1>
                <input className='h-[8%]  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="institution" value={institute} id="education"onChange={(e)=>setInstitute(e.target.value)} />
                <h1>Course</h1>
                <input className='h-[8%]  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="course" value={course} id="education"onChange={(e)=>setCourse(e.target.value)} />
                <h1>Year</h1>
                <input className='h-[8%]  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="year" value={eduyear} id="education"onChange={(e)=>setEduyear(e.target.value)} />
                <h1>Grades</h1>
                <input className='h-[8%]  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="grades" value={grades} id="education"onChange={(e)=>setGrades(e.target.value)} />
                <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2 rounded-md hover:bg-blue-400 hover:border-blue-400 mt-3' type="button" onClick={(e)=>handleClickEducation(e)}>Add</button>
            </div>
            <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(2)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(4)}>Next</button>
            </div>
        </div>
  )
}

export default EducationForm
