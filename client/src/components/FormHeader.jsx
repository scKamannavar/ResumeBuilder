import React from 'react'
import HeaderCircle from './HeaderCircle'

import AboutIcon from '../assets/icons/About.svg'
import EducationIcon from '../assets/icons/Education.svg'
import ExperienceIcon from '../assets/icons/Experience.svg'
import SkillsIcon from '../assets/icons/skills.svg'
import InterestsIcon from '../assets/icons/Interests.svg'
import PrintIcon from '../assets/icons/Print.svg'

const FormHeader = ({displayform}) => {
    // console.log('formNumber',displayform)
    const gog = displayform === 1?'bg-blue-400':'bg-blue-600'
    // console.log('checking', gog)
  return (
    <div className='flex justify-around'>
        <HeaderCircle iconImage = {AboutIcon} iconText = "About" displayform={displayform} activeStyle={displayform === 1 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {ExperienceIcon} iconText = "Experience" displayform={displayform}  activeStyle={displayform === 2 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {EducationIcon} iconText = "Education" displayform={displayform} activeStyle={displayform === 3 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {SkillsIcon} iconText = "Skills" displayform={displayform} activeStyle={displayform === 4 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {InterestsIcon} iconText = "Interests" displayform={displayform} activeStyle={displayform === 5 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {PrintIcon} iconText = "Print" displayform={displayform} activeStyle={displayform === 6 ?'sm:bg-blue-600 bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
    </div>
  )
}

export default FormHeader
