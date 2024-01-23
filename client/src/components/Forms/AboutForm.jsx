import React, { useState } from 'react'

const AboutForm = ({dispatch, abtData, displayFormValue})=>{
    const [aboutTxt, setAboutTxt] = useState(abtData.aboutText);
    const [phone, setPhone] = useState(abtData.phone);
    const [email, setEmail] = useState(abtData.email);
    const [name, setName] = useState(abtData.name);
    function handleClickAbout(){
        const newAbt = {
          aboutText : aboutTxt,
          phone: phone,
          email:email,
          name : name,
        }
        // addAbt(newAbt) 
        dispatch({type:'ADD_ABOUT', payload : newAbt})
    } 

    return(
        
                 <div className='flex flex-1 flex-col w-full '>
                    {/* <h1 className='text-4xl font-bold text-slate-900 self-center font-Poppins'>About</h1> */}
                    <div className='flex flex-1 flex-col w-full '>
                      <h1 >Name</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={name} type="text" name="Name" id="Name"onChange={(e)=>setName(e.target.value)} />
                      <h1 >About You</h1>
                      <textarea className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={aboutTxt} type="text" name="aboutTxt" id="aboutTxt"onChange={(e)=>setAboutTxt(e.target.value)} />
                      <h1 >Phone</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={phone} type="text" name="phone" id="phone"onChange={(e)=>setPhone(e.target.value)} />
                      <h1 >Email</h1>
                      <input className='h-12  p-2   border-b-2 border-blue-500 outline-none ' value={email} type="text" name="email" id="email"onChange={(e)=>setEmail(e.target.value)} />
                      <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickAbout(e)}>Add</button>
                    </div>
                    <div className='flex justify-end px-6'>
                      <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(1)}>Previous</button>
                      
                      <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(2)}>Next</button>
                    </div>
                  </div>
        
    )
}

export default AboutForm