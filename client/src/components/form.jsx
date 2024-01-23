import React, { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'
import About from './About'
import { AnimatePresence, motion, spring } from "framer-motion"
import FormHeader from './FormHeader'
import AboutForm from './Forms/AboutForm'
import ExperienceForm from './Forms/ExperienceForm'
import EducationForm from './Forms/EducationForm'
import HobbiesForm from './Forms/HobbiesForm'
import SkillsForm from './Forms/SkillsForm'

const form = ({resumeinfo,deleteSkill, deleteExp, deleteEdu, deleteHobby, dispatch, printDesign, updatePrintDesign }) => {

  // console.log('all data in form.jsx', resumeinfo,addSkill,  addEdu,addHobbies, addAbt)

    const [displayform, setDisplayform] = useState(1)



  function handleDesignClick(value){
    updatePrintDesign(value)
  }

  function displayFormValue(value)
  {
    setDisplayform(value)
  }

  return (
    <div className='flex items-center lg:justify-center print:hidden bg-blue-400 lg:h-screen flex-col shadow-xl'>
              <div className='flex justify-center text-4xl font-Outfit pb-6 font-extrabold pt-6 rounded-xl'>
                <h1>BUILD YOUR RESUME</h1>
              </div>
      <form className='flex flex-col items-center pt-0 rounded-md p-4 h-[100%]  w-full sm:w-[70%] md:w-[70%] lg:w-[70%]' action="">
        <div className='w-full p-6 bg-white rounded-xl shadow-xl '> 


          <FormHeader displayform={displayform}/>
{/* Experience */}
          <div  className={`flex flex-col lg:flex-row gap-6 ${displayform===2?'block':'hidden'} pt-2`}>
            <ExperienceForm dispatch={dispatch}  displayFormValue = {displayFormValue}/>
            <div className='flex-1 lg:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 lg:h-[400px] shadow-[inset_0px_0px_10px_grey]'>
              <Experience expData = {resumeinfo.experience} dispatch={dispatch} deleteExp={deleteExp}/>
            </div>
             
          </div>
          
{/* Education */}
          <div className={`flex flex-col lg:flex-row gap-6 ${displayform===3?'block':'hidden'} pt-2`}>
            <EducationForm dispatch={dispatch}  displayFormValue = {displayFormValue}/>
            <div className='flex-1 lg:overflow-y-scroll lg:h-[400px] shadow-[inset_0px_0px_10px_grey]'>
              <Education list="list-decimal" eduData={resumeinfo.education} dispatch={dispatch} deleteEdu={deleteEdu}/>
            </div> 
            
          </div>
          
{/* About */}
          {/* <AnimatePresence> */}
            {displayform===1 && 
            <motion.div 
            key='about'
            // animate={{ x: 0, opacity:1 }}
            // initial = {{x:0, opacity:0}}
            // // exit={{ opacity: 0, scale: 0.5,}}
            // transition={{duration:0.5, type:"tween"}}
            >
               <div className={`flex flex-col lg:flex-row gap-6 ${displayform===1?'block':'hidden'}`} >                 
                 <AboutForm dispatch={dispatch} abtData = {resumeinfo.about} displayFormValue = {displayFormValue}/>
                    <div className='flex-1 lg:overflow-y-scroll lg:h-[400px]'>
                      <About abtData = {resumeinfo.about}/> 
                    </div>
                </div>
            </motion.div>
            }
         
          {/* </AnimatePresence> */}
          
{/*Hobbies */}
          <div className={`flex flex-col lg:flex-row gap-6 ${displayform===5?'block':'hidden'} pt-2`} >
           <HobbiesForm dispatch={dispatch} displayFormValue={displayFormValue}/>
            <div className='flex-1 lg:overflow-y-scroll lg:h-[400px] shadow-[inset_0px_0px_10px_grey]'>
              <Hobbies hobbiesData={resumeinfo.hobbies} dispatch={dispatch} deleteHobby={deleteHobby}/>
            </div>
             
          </div>
{/* Skills */}
            <div className={`flex flex-col lg:flex-row gap-6 ${displayform===4?'block':'hidden'} pt-2`}>
              <SkillsForm dispatch={dispatch} displayFormValue={displayFormValue}/>
              <div className='flex-1 lg:overflow-y-scroll lg:h-[400px] shadow-[inset_0px_0px_10px_grey]'>
                <Skills skillData = {resumeinfo.skills} dispatch={dispatch} deleteSkill= {deleteSkill} />
              </div>  
          </div>
{/* print */}
            <div className={`flex flex-col  gap-6 ${displayform===6?'block':'hidden'}`}>
              <div className=' h-full py-2 print:hidden'>
                <div className='flex justify-center p-6 text-4xl'>
                  <h1>Select a design</h1>
                </div>
                <div className='flex justify-center items-start'>
                  {/* <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 hover:bg-blue-400 ${printDesign === 1 ? 'border border-blue-600':''} `} onClick={()=>setPrintdesign(1)}>
                        Design 1
                  </div> */}
                  <div className={`flex justify-center items-center w-24 h-24 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 mr-10 ${printDesign === 2 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>handleDesignClick(2)}>
                    Design 1
                  </div>
                  <div className={`flex justify-center items-center w-24 h-24 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 ${printDesign === 3 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>handleDesignClick(3)}>
                      Design 2
                  </div>
                </div>
                <div className='flex justify-center p-4 print:hidden'>
                  <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-none border-2 border-blue-700 text-2xl px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-xl'  />
                </div>
            </div>   
              <button className='bg-green-400 text-white w-28 px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>setDisplayform(displayform - 1)}>Previous</button>
            </div>
        </div>
        
      </form>
    </div>
  )
}

export default form
