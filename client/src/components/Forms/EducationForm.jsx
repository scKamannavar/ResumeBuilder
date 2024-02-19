import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'Formik'
import * as Yup from 'yup'
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';

const EducationForm = ({dispatch, displayFormValue}) => {

    const [institute, setInstitute] = useState('')
    const [course, setCourse] = useState('')
    const [eduyear, setEduyear] = useState('')
    const [grades, setGrades] = useState('')

    const validationSchema = Yup.object().shape({
        institute: Yup.string().required('Institute is required'),
        course: Yup.string().required('Course is required'),
        eduyear: Yup.string().required('Date is required'),
        grades: Yup.string().required('Grades are required'),
      });

      const formik = useFormik({
        initialValues: {
            institute: '',
            course: '',
            eduyear: '',
            grades: '',
        },
        validationSchema,
        // validateOnMount: true,
        validateOnChange: true,
      });
    function handleClickEducation(){
        if (formik.isValid) {
            if (formik.values.institute === '') {
                formik.setFieldError('institute', 'Institute is required');
                return; 
            }
            else if (formik.values.course === '') {
                formik.setFieldError('course', 'course is required');
                return; 
            }
            else if (formik.values.eduyear === '') {
                formik.setFieldError('eduyear', 'eduyear is required');
                return; 
            }
            else if (formik.values.grades === '') {
                formik.setFieldError('grades', 'grades is required');
                return; 
            }
            const newEdu = {
                'id' : uuidv4(),
                'institute' : formik.values.institute,
                'course' : formik.values.course,
                'year' : formik.values.eduyear,
                'grades': formik.values.grades,
            }
            // addEdu(newEdu) 
            dispatch({type : 'ADD_EDUCATION',payload : newEdu})
            console.log('formik values true block',formik.values)
            formik.values.course = '';
            formik.values.eduyear = '';
            formik.values.grades = '';
            formik.values.institute = '';
        }
        else{
            console.log('Form is invalid');
            console.log('formik errors',formik.errors)
            console.log('formik values',formik.values)
        }
       
        // setInstitute('')
        // setCourse('')
        // setEduyear('')
        // setGrades('')
    } 
  return (
        <div className='flex flex-1 flex-col w-full '>
            {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>Education</h1> */}
            <div className='flex flex-1 flex-col w-full '>
                <h1>Institution</h1>
                <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="institute" value={formik.values.institute} id="institute" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {/* {formik.touched.institute && formik.errors.institute  &&(
                                <div className='text-red-500'>{formik.errors.institute}</div>
                    )} */}

                    { formik.values.institute == '' ?
                    <div className='text-red-500'>{formik.errors.institute}</div>:''
                    
                    }
                </div>
                
                <h1>Course</h1>
                <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="course" value={formik.values.course} id="course"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.course && formik.errors.course  &&(
                                <div className='text-red-500'>{formik.errors.course}</div>
                    )}

                </div>
                
                <h1>Year</h1>
                <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="eduyear" value={formik.values.eduyear} id="eduyear"onChange={formik.handleChange} onBlur={formik.handleBlur} 
                    placeholder='Enter education year (e.g., 2001-2021)'/>
                    {formik.touched.eduyear && formik.errors.eduyear  &&(
                                <div className='text-red-500'>{formik.errors.eduyear}</div>
                    )}
                </div>
                
                <h1>Grades</h1>
                <div className='flex flex-col h-[70px] mt-2'>
                    <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' type="text" name="grades" value={formik.values.grades} id="grades"onChange={formik.handleChange} onBlur={formik.handleBlur}
                    placeholder='Enter your grades (e.g., 65% or 3.3 CGPA)' />
                    {formik.touched.grades && formik.errors.grades  &&(
                                <div className='text-red-500'>{formik.errors.grades}</div>
                    )}

                </div>
               
                {/* <input type="text" value="value" name = 'hidden' hidden /> */}
                <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={(e)=>handleClickEducation()}>Add</button>
            
        </div>
            <div className='flex justify-end px-6 gap-6'>
                {/* <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(1)}>Previous</button> */}
                <PreviousButton displayFormValue={displayFormValue} value={1}></PreviousButton>
                {/* <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(3)}>Next</button> */}
                <NextButton displayFormValue={displayFormValue} value={3}> </NextButton>
            </div>
        </div>
  )
}

export default EducationForm
