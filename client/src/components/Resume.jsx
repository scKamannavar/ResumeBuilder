import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Hobbies from './hobbies'
import Border from './border'
import Counter from './otherassignments/counter'
import Clock from './otherassignments/clock'
import Events from './otherassignments/events'
import Dropdown from './otherassignments/dropdown'
import SearchList from './otherassignments/searchList'
import About from './About'


const Resume = ({skillData, eduData, expData, abtData, hobbiesData, deleteSkill}) => {
  return (
    <div className='flex justify-center flex-col'>
        <div className=' w-full h-full bg-slate-700 rounded-xl text-slate-300 font-medium p-8 '>
            <div className='pl-10 text-6xl'>
                <h1>Sagar C K</h1>
            </div>
            <About abtData = {abtData}/> 
            <Skills skillData = {skillData} deleteSkill={deleteSkill}/>   
            <Education list="list-decimal" eduData={eduData}/>
            <Experience expData = {expData}/>
            <Hobbies hobbiesData={hobbiesData}/>

 
        </div>

        <Border>
          <Clock/>
        </Border>
        <Border>
          <Events/>
        </Border>

        <Border>
          <Counter/>
        </Border>
        <Border>
          <Dropdown/>
        </Border>
        <SearchList/>
    </div>
  )
}

export default Resume
