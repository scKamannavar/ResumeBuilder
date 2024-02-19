import React from 'react'
import SectionContainerSquare from './SectionContainerSquare'

import AboutIcon from '../assets/icons/About.svg'
import EducationIcon from '../assets/icons/Education.svg'
import ExperienceIcon from '../assets/icons/Experience.svg'
import SkillsIcon from '../assets/icons/skills.svg'
import InterestsIcon from '../assets/icons/Interests.svg'
import PrintIcon from '../assets/icons/Print.svg'

const SectionContainer = ({displayform, displayFormValue}) => {
  return (
    <div className='flex w-full flex-col  lg:w-[20%] p-4 md:p-6 lg:px-2'>
      <div className='flex flex-col  w-full mb-6 text-white'>
        <h1 className='font-bold'>
          Navigate with Ease
        </h1>
        <p className='text-[14px]'>
           Easily switch between sections and update your resume effortlessly.
        </p>
      </div>

      <div className='flex justify-center gap-4 lg:flex-wrap '>
        {/* <h1 href="" className='p-4 bg-red-500'> TEST BUTTON</h1> */}
        <SectionContainerSquare iconImage = {AboutIcon}  iconText = "About" activeStyle={displayform == '1'?true:false} displayFormValue={displayFormValue} value={1}></SectionContainerSquare>
        <SectionContainerSquare iconImage = {EducationIcon} iconText = "Education" activeStyle={displayform == '2'?true:false } displayFormValue={displayFormValue} value={2}> </SectionContainerSquare>
        <SectionContainerSquare iconImage = {ExperienceIcon} iconText = "Experience" activeStyle={displayform == '3'?true:false } displayFormValue={displayFormValue} value={3}></SectionContainerSquare>
        <SectionContainerSquare iconImage = {SkillsIcon} iconText = "Skills" activeStyle={displayform == '4'?true:false } displayFormValue={displayFormValue} value={4}></SectionContainerSquare>
        <SectionContainerSquare iconImage = {InterestsIcon} iconText = "Interests" activeStyle={displayform == '5'?true:false } displayFormValue={displayFormValue} value={5}></SectionContainerSquare>
        <SectionContainerSquare iconImage = {PrintIcon} iconText = "Print" activeStyle={displayform == '6'?true:false } displayFormValue={displayFormValue} value={6}></SectionContainerSquare>
      </div>
    </div>
  )
}

export default SectionContainer
