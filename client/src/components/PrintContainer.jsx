import React from 'react'
import design1 from '../assets/design/design1.png'
import design2 from '../assets/design/design2.png'

const PrintContainer = ({printDesign,updatePrintDesign}) => {
  function handleDesignClick(value){
    updatePrintDesign(value)
  }
  return (
    <div className='flex flex-col h-full w-full'>
      <h1 className='p-4 text-[30px] font-extralight'>
        Choose a design
      </h1>
      <div className='flex  h-full w-full'>
        <div className={`flex h-[150px] w-[120px] bg-gray-100 mr-10 ${printDesign === 2 ? 'border border-blue-600 bg-blue-400':''}`}  onClick={()=>handleDesignClick(2)}>
          <img src={design1} className=' w-full object-conatin' alt="" />
        </div>
        <div className={`flex h-[150px] w-[120px] bg-gray-100 mr-10 ${printDesign === 3 ? 'border border-blue-600 bg-blue-400':''}`} onClick={()=>handleDesignClick(3)}>
          <img src={design2} className='w-full  object-conatin' alt="" />
        </div>
    </div>
      
     
      <button className='bg-none text-xl text-white font-Outfit hover:text-white bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400 mt-3' type="button" onClick={()=>{window.print()}}>GET YOUR RESUME</button>
      
    </div>
  )
}

export default PrintContainer
