import React, { useState } from 'react'
import { useFormik } from 'Formik'
import * as Yup from 'yup'
import NextButton from '../Buttons/NextButton';
import PreviousButton from '../Buttons/PreviousButton';


const AboutForm = ({dispatch, abtData, displayFormValue})=>{

    const [aboutTxt, setAboutTxt] = useState(abtData.aboutText);
    const [phone, setPhone] = useState(abtData.phone);
    const [email, setEmail] = useState(abtData.email);
    const [name, setName] = useState(abtData.name);

    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      aboutTxt: Yup.string().required('About You is required'),
      phone: Yup.string().required('Phone is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    });
    const formik = useFormik({
      initialValues: {
        name: abtData.name,
        aboutTxt: abtData.aboutText,
        phone: abtData.phone,
        email: abtData.email,
      },
      validationSchema,
    });

  //   function handleClickAbout(){
  //     const newAbt = {
  //       aboutText : aboutTxt,
  //       phone: phone,
  //       email:email,
  //       name : name,
  //     }
  //     // addAbt(newAbt) 
  //     dispatch({type:'ADD_ABOUT', payload : newAbt})
  // } 

  const handleClickAbout = () => {
    // Check if the form is valid before dispatching the values
    if (formik.isValid) {
            const newAbt = {
          aboutText : formik.values.aboutTxt,
          phone: formik.values.phone,
          email:formik.values.email,
          name : formik.values.name,
      }
      dispatch({ type: 'ADD_ABOUT', payload: newAbt });
      // console.log('formik errors',formik.errors  )
    } else {
      // Handle invalid form case if needed
      console.log('Form is invalid');
      console.log('formik errors',formik.errors)
    }
  };
  
    return(
      <>
              
                 <div className='flex flex-1 flex-col w-full'>
                    {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>About</h1> */}
                    <div className='flex flex-1 flex-col w-full '>

                      <h1>Name</h1>
                      <div className='flex flex-col h-[70px] mt-2'>
                        <input className='h-12 p-2   border border-gray-300 rounded-md bg-[#FBFBFC] outline-none ' value={formik.values.name} type="text" name="name" id="name"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.name && formik.errors.name  &&(
                            <div className='text-red-500'>{formik.errors.name}</div>
                          )}
                      </div>

                      <h1 >About You</h1>
                      <textarea className='p-2 border border-gray-300 rounded-md bg-[#FBFBFC] outline-none mt-2'value={formik.values.aboutTxt} type="text" name="aboutTxt" id="aboutTxt" rows="4" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.aboutTxt && formik.errors.aboutTxt && (
                          <div className='text-red-500'>{formik.errors.aboutTxt}</div>
                        )}
                      <h1 >Phone</h1>
                      <div className='flex flex-col h-[70px] mt-2'>
                        <input className='h-12 p-2 border border-gray-300 rounded-md bg-[#FBFBFC] outline-none'value={formik.values.phone} type="text" name="phone" id="phone"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.phone && formik.errors.phone && (
                            <div className='text-red-500'>{formik.errors.phone}</div>
                          )}
                      </div>
                      
                      <h1 >Email</h1>
                      <div className='flex flex-col h-[70px] mt-2'>
                        <input className='h-12 p-2 border border-gray-300 rounded-md bg-[#FBFBFC] outline-none' value={formik.values.email} type="text" name="email" id="email"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email && (
                            <div className='text-red-500'>{formik.errors.email}</div>
                          )}
                      </div>
                      
                      <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={(e)=>handleClickAbout(e)}>Add</button>
                    </div>
                    <div className='flex justify-end px-6 gap-6'>
                      {/* <button className='flex justify-center items-center h-[40px]  text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500  hover:to-orange-300 to-pink-300 border border-solid px-6 py-4 rounded-md mt-3 transition-all ease-in-out hover:duration-300' type="button" onClick={()=>displayFormValue(1)}>Previous</button> */}
                      <PreviousButton displayFormValue={displayFormValue} value={1}></PreviousButton>
                      {/* <button className='flex justify-center items-center h-[40px]  bg-gradient-to-r hover:from-orange-300 hover:to-pink-500  from-pink-500 to-orange-300 text-white px-6 py-4 rounded-md mt-3 transition-all ease-in-out hover:duration-700' type="button" onClick={()=>displayFormValue(2)}>Next</button> */}
                      <NextButton displayFormValue={displayFormValue} value={2}> </NextButton>
                    </div>
                  </div>
                  </>
    )
}

export default AboutForm