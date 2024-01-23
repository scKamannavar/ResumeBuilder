import React,{useState} from 'react'

const SkillsForm = ({dispatch,displayFormValue}) => {
    const [skill, setSkill] = useState('');
    function handleClickSkil(){
        // addSkill(skill)  
        // setSkill('')
        dispatch({ type: 'ADD_SKILL', payload: skill });
        setSkill('')
    }
  return (
    <div className='flex flex-1 flex-col w-full '>
        {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Skills</h1> */}
            <div className='flex flex-1 flex-col w-full '>
            <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' placeholder='Type your skill here (Eg: "Javascript")' type="text" name="skills" value={skill} id="skills" onChange={(e)=>setSkill(e.target.value)} />
            <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={handleClickSkil}  >ADD</button>
            </div>
            <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(3)}>Previous</button>
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(5)}>Next</button>
                
            </div>
        </div>  
  )
}

export default SkillsForm
