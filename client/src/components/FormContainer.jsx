import React,{useState} from 'react'
import AboutForm from './Forms/AboutForm'
import Education from './Education'
import EducationForm from './Forms/EducationForm'
import ExperienceForm from './Forms/ExperienceForm'
import SkillsForm from './Forms/SkillsForm'
import HobbiesForm from './Forms/HobbiesForm'
import PrintContainer from './PrintContainer'

const FormContainer = ({dispatch, resumeinfo,displayform, displayFormValue, printDesign,updatePrintDesign}) => {
    // const [displayform, setDisplayform] = useState(1)
    // function displayFormValue(value)
    // {
    //   setDisplayform(value)
    // }
  return (
    <div className='flex flex-col w-full h-full lg:w-[50%] p-4 md:p-6 '>
        <div className='flex flex-col h-full w-full mb-6 text-white'>
            <h1 className='font-bold'>
            Fill in Your Details
            </h1>
            <p className='text-[14px]'>
            Complete the forms below to provide your information for each section of your resume. Craft a compelling resume with ease
            </p>
        </div>
        <div className='flex bg-white rounded-md p-4 shadow-xl '>
        {displayform === 1 &&
            <AboutForm dispatch={dispatch} abtData = {resumeinfo.about} displayFormValue = {displayFormValue}/>
        }
        {displayform === 2 &&
            <EducationForm dispatch={dispatch} displayFormValue = {displayFormValue}/>
        }
        {displayform === 3 &&
            <ExperienceForm dispatch={dispatch} displayFormValue = {displayFormValue}/>    
        }
        {displayform === 4 &&
            <SkillsForm dispatch={dispatch} displayFormValue = {displayFormValue}/>
        }
        {displayform === 5 &&
            <HobbiesForm dispatch={dispatch} displayFormValue = {displayFormValue}/> 
        }
        {displayform === 6 &&
            <PrintContainer printDesign={printDesign} updatePrintDesign={updatePrintDesign}></PrintContainer>
        }
        

        </div>
    </div>
  )
}

export default FormContainer
