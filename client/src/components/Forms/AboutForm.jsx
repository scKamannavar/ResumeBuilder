import React, { useState } from 'react'
import { useFormik } from 'Formik'
import * as Yup from 'yup'


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
      // console.log('formik values',formik.values  )
    } else {
      // Handle invalid form case if needed
      console.log('Form is invalid');
    }
  };
  
    return(
      <>

                 <div className='flex flex-1 flex-col w-full '>
                    {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>About</h1> */}
                    <div className='flex flex-1 flex-col w-full '>
                      <h1 >Name</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={formik.values.name} type="text" name="name" id="name"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.name && formik.errors.name && (
                          <div className='text-red-500'>{formik.errors.name}</div>
                        )}
                      <h1 >About You</h1>
                      <textarea className='h-12  p-2 border-b-2 border-blue-500 outline-none 'value={formik.values.aboutTxt} type="text" name="aboutTxt" id="aboutTxt"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.aboutTxt && formik.errors.aboutTxt && (
                          <div className='text-red-500'>{formik.errors.aboutTxt}</div>
                        )}
                      <h1 >Phone</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none 'value={formik.values.phone} type="text" name="phone" id="phone"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.phone && formik.errors.phone && (
                          <div className='text-red-500'>{formik.errors.phone}</div>
                        )}
                      <h1 >Email</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={formik.values.email} type="text" name="email" id="email"onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.email && formik.errors.email && (
                          <div className='text-red-500'>{formik.errors.email}</div>
                        )}
                      <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickAbout(e)}>Add</button>
                    </div>
                    <div className='flex justify-end px-6'>
                      <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(1)}>Previous</button>
                      
                      <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(2)}>Next</button>
                    </div>
                  </div>
                  </>
    )
}

export default AboutForm