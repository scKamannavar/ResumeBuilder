import React,{useState} from 'react'
import SectionContainer from '../components/SectionContainer'
import FormContainer from '../components/FormContainer'
import DIsplayDataContainer from '../components/DIsplayDataContainer'

const HomeLayout = ({dispatch, resumeinfo,printDesign,updatePrintDesign}) => {
    const [displayform, setDisplayform] = useState(1)
    function displayFormValue(value)
    {
      setDisplayform(value)
    }
  return (
    <div className='flex flex-col w-full h-full bg-bgPink bg-top bg-[length:100vw_60vh] lg:bg-[length:100vw_38vh] bg-no-repeat print:hidden'>
        {/* HEADER START*/}
      <div className='flex flex-row h-[70px] items-center px-4'>
        <div className='flex flex-1 text-white text-[30px] font-extrabold'>
            RESUME BUILDER
        </div>
        {/* <div className='flex  gap-6'>
            <div>
                Text
            </div>
            <div>
                TEXTINGER 
            </div>
        </div> */}
      </div>
      {/* HEADER END */}
      <div className='flex flex-col lg:flex-row justify-between h-full ' id="body">
    
            <SectionContainer displayform={displayform} displayFormValue={displayFormValue}></SectionContainer>
     
        
            <FormContainer dispatch={dispatch} resumeinfo={resumeinfo} displayform={displayform} displayFormValue={displayFormValue} printDesign={printDesign} updatePrintDesign={updatePrintDesign}></FormContainer>
        
        
            <DIsplayDataContainer resumeinfo={resumeinfo} displayform={displayform} dispatch={dispatch}></DIsplayDataContainer>
        
      </div>
    </div>
  )
}

export default HomeLayout
