import React,{useState} from 'react'
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';
import { useFormik } from 'Formik'
import * as Yup from 'yup'

const HobbiesForm = ({dispatch, displayFormValue}) => {
const [hobbies, setHobbies] = useState('');

const validationSchema = Yup.object().shape({
    hobby: Yup.string().required('Dont have any Hobby?'),
  });

  const formik = useFormik({
    initialValues: {
        hobby: '',
    },
    validationSchema,
    // validateOnMount: true,
    validateOnChange: true,
  });
function handleClickHobby(){
    if (formik.isValid){
        if (formik.values.hobby === '') {
            formik.setFieldError('hobby', 'hobby is required');
            return; 
        }
            console.log('hobbie done')
            dispatch({type:'ADD_HOBBBIES', payload:formik.values.hobby})
            formik.values.hobby = '';
    }
    else{
        console.log('hobbie eeerrrrrrrrrrrrrr')
    }
    // addHobbies(hobbies)
   
  }
  return (
        <div className='flex flex-1 flex-col w-full'>
        {/* <h1 className='text-4xl text-slate-900 self-center font-bold font-Poppins'>Hobbies/Intersest</h1> */}
            <div className='flex flex-1 flex-col w-full'>
            <h1>Hobbies/Interests</h1>
            <div className='flex flex-col h-[70px] mt-2'>
                <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="hobby" value={formik.values.hobby} id="hobby" onChange={formik.handleChange} onBlur={formik.handleBlur} 
                placeholder='Type your Hobby here (Eg: "Blogging")'/>
                {formik.touched.hobby && formik.errors.hobby  &&(
                                <div className='text-red-500'>{formik.errors.hobby}</div>
                    )}

            </div>
           
            <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={(e)=>handleClickHobby(e)}>Add</button>
            </div>
            <div className='flex justify-end px-6 gap-6'>
                {/* <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(4)}>Previous</button> */}
                <PreviousButton displayFormValue={displayFormValue} value={4}></PreviousButton>
                {/* <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(6)}>Next</button> */}
                <NextButton displayFormValue={displayFormValue} value={6}></NextButton>
            </div>
        </div>
  )
}

export default HobbiesForm
