import React,{useState} from 'react'
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';

import { useFormik } from 'Formik'
import * as Yup from 'yup'


const SkillsForm = ({dispatch,displayFormValue}) => {
    const [skill, setSkill] = useState('');

    const validationSchema = Yup.object().shape({
        skill: Yup.string().required('Dont have any Skill?'),
      });

      const formik = useFormik({
        initialValues: {
            skill: '',
        },
        validationSchema,
        // validateOnMount: true,
        validateOnChange: true,
      });

      function handleClickSkil(){
        if (formik.isValid){
            if (formik.values.skill === '') {
                formik.setFieldError('skill', 'skill is required');
                return; 
            }
                console.log('dkill done')
                dispatch({type:'ADD_SKILL', payload:formik.values.skill})
                formik.values.skill = '';
        }
        else{
            console.log('hobbie eeerrrrrrrrrrrrrr')
        }
        // addHobbies(hobbies)
      }


   
  return (
    <div className='flex flex-1 flex-col w-full '>
        {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Skills</h1> */}
            <div className='flex flex-1 flex-col w-full '>
            <h1>Hobbies/Interests</h1>
            <div className='flex flex-col h-[70px] mt-2'>
                <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' placeholder='Type your skill here (Eg: "Javascript")' type="text" name="skill"  value={formik.values.skill} id="skill" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.skill && formik.errors.skill  &&(
                                <div className='text-red-500'>{formik.errors.skill}</div>
                    )}

            </div>
           
            <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={handleClickSkil}  >ADD</button>
            </div>
            <div className='flex justify-end px-6 gap-6'>
                {/* <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(3)}>Previous</button> */}
                <PreviousButton displayFormValue={displayFormValue} value={3}></PreviousButton>
                {/* <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(5)}>Next</button> */}
                <NextButton displayFormValue={displayFormValue} value={5}></NextButton>
                
            </div>
        </div>  
  )
}

export default SkillsForm
