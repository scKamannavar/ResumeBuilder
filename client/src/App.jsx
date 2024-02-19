import { useState, useEffect, useReducer  } from 'react'
import './App.css'
import Resume from './components/Resume'
import Form from './components/form'
import ResumeData from './data/info'
import Experience from './components/Experience'
import Design1 from './components/design1'
import Design2 from './components/design2'
import HomeLayout from './Pages/HomeLayout'


function App() {

const template = {
  experience : [],
  education:[],
  skills : [],
  about : {
    aboutText : '',
    phone : '',
    email : '',
    name : '',
  },
  hobbies : [],
  }
  var storedResumeData = localStorage.getItem('resumeData');
  
   if (storedResumeData == null) {
     
     localStorage.setItem('resumeData', JSON.stringify(template));
     console.log('template', template)
   }

  //  const [resumeinfo, setResumeinfo] = useState(JSON.parse(storedResumeData))

  const resumeReducer = (state, action) => {
    switch (action.type) {
      // add
      case 'ADD_SKILL':
      return { ...state, skills: [...state.skills, action.payload] };
      case 'ADD_EDUCATION':
        return { ...state, education: [...state.education, action.payload] };
      case 'ADD_EXPERIENCE':
        return {...state,experience:[...state.experience,action.payload]};
      case 'ADD_ABOUT':
        return {...state,about:action.payload}
      case 'ADD_HOBBBIES':
        return {...state,hobbies:[...state.hobbies,action.payload]}
      // delete
      case 'DELETE_SKILL':
        const updatedSKills = [...state.skills];
        updatedSKills.splice(action.payload, 1)
        return { ...state, skills: updatedSKills };
      case 'DELETE_EXPERIENCE':
        const updatedExperience = state.experience.filter((exp) => exp.id !== action.payload);
        return { ...state, experience: updatedExperience };
      case 'DELETE_EDUCATION':
        const updatedEducation = state.education.filter((exp) => exp.id !== action.payload);
        return {...state,education:updatedEducation};
      case 'DELETE_HOBBY':
        const updatedHobbbies= [...state.hobbies];
        updatedHobbbies.splice(action.payload, 1)
          return {...state,hobbies :updatedHobbbies};
         
      default:
        return state;
    }
  };

   const [resumeinfo, dispatch] = useReducer(resumeReducer, JSON.parse(storedResumeData));
 

 

  const[printDesign, setPrintdesign] = useState(0)
 

 useEffect(() => {
        localStorage.setItem('resumeData', JSON.stringify(resumeinfo));
  },[resumeinfo]);

  function updatePrintDesign(value){
    setPrintdesign(value)
  }

  return (
    <div className='bg-[#EDF0F5]'>
      <HomeLayout dispatch = {dispatch} resumeinfo = {resumeinfo} printDesign={printDesign} updatePrintDesign={updatePrintDesign}></HomeLayout>

      {/* <Form  dispatch = {dispatch} resumeinfo = {resumeinfo} printDesign={printDesign} updatePrintDesign={updatePrintDesign}/> */}

      <div className={`hidden ${printDesign === 1? 'print:block ':'print:hidden '} `}>
        {/* <Resume skillData={skills} eduData={education} expData = {experience} abtData={about} hobbiesData={hobbies} deleteSkill={deleteSkill}></Resume> */}
      </div>
      <div className={`hidden ${printDesign === 2? 'print:block ':'print:hidden '} `}>
        <Design1 resumeinfo = {resumeinfo}/>
      </div>
      <div className={`hidden ${printDesign === 3? 'print:block ':'print:hidden '} `}>
        <Design2 resumeinfo = {resumeinfo}/>
      </div>
      
      {/* <div className=' h-full py-28 print:hidden'>
        <div className='flex justify-center p-6 text-4xl'>
          <h1>Select a design</h1>
        </div>
        <div className='flex justify-center items-start'>
           <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 hover:bg-blue-400 ${printDesign === 1 ? 'border border-blue-600':''} `} onClick={()=>setPrintdesign(1)}>
                Design 1
          </div> s
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 mr-10 ${printDesign === 2 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>setPrintdesign(2)}>
            Design 1
          </div>
          <div className={`flex justify-center items-center w-48 h-48 bg-blue-100 rounded-md shadow-xl hover:bg-blue-400 ${printDesign === 3 ? 'border border-blue-600 bg-blue-400':''} `} onClick={()=>setPrintdesign(3)}>
              Design 2
          </div>
        </div>
        <div className='flex justify-center p-4 print:hidden'>
          <input type="button" value="Print" onClick={()=>{window.print()}} className='bg-none border-2 border-blue-700 text-2xl px-4 py-2 text-black hover:text-white hover:bg-blue-700 rounded-xl'  />
        </div>
      </div> */}
     

    </div>
  )
}

export default App
