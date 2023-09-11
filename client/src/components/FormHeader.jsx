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
        <HeaderCircle iconImage = {AboutIcon} iconText = "About" activeStyle={displayform === 1 ?'sm:bg-blue-600 sm:h-12 sm:w-12 h-10 w-10 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {ExperienceIcon} iconText = "Experience"  activeStyle={displayform === 2 ?'bg-blue-600 h-12 w-12 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {EducationIcon} iconText = "Education" activeStyle={displayform === 3 ?'bg-blue-600 h-12 w-12 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {SkillsIcon} iconText = "Skills" activeStyle={displayform === 4 ?'bg-blue-600 h-12 w-12 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {InterestsIcon} iconText = "Interests" activeStyle={displayform === 5 ?'bg-blue-600 h-12 w-12 shadow-md shadow-gray-600':''}/>
        <HeaderCircle iconImage = {PrintIcon} iconText = "Print" activeStyle={displayform === 6 ?'bg-blue-600 h-12 w-12 shadow-md shadow-gray-600':''}/>
    </div>
  )
}

export default FormHeader
