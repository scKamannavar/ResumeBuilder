import React from 'react'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'

const DIsplayDataContainer = ({resumeinfo,displayform,dispatch}) => {
  return (
    <div className='flex flex-col w-full lg:w-[30%] p-4 md:p-6 lg:max-h-[90vh]'>
         <div className='flex flex-col  w-full mb-6 lg:text-white text-black'>
            <h1 className='font-bold'>
            Review Your Data
            </h1>
            <p className='text-[14px]'>
            Check the details you've entered below. You can delete any section by clicking on the respective icon below 
            </p>
      </div>

      <div className='flex-1 lg:overflow-y-scroll lg:h-[400px] bg-white rounded-md p-4 shadow-xl'>
        {displayform === 1 &&
            <About abtData = {resumeinfo.about}/> 
        }
        {displayform === 2 &&
            <Education eduData = {resumeinfo.education} dispatch={dispatch}></Education>
        }
        {displayform === 3 &&
            <Experience expData = {resumeinfo.experience} dispatch={dispatch}></Experience>
        }
        {displayform === 4 &&
            <Skills skillData = {resumeinfo.skills} dispatch={dispatch}></Skills>
        }
        {displayform === 5 &&
            <Hobbies hobbiesData={resumeinfo.hobbies} dispatch={dispatch}></Hobbies>
        }
        </div>
    </div>
  )
}

export default DIsplayDataContainer
