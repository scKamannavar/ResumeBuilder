import React from 'react'

const SectionContainerSquare = ({iconImage, iconText, activeStyle, displayFormValue, value}) => {
  return (
    <div className={`flex justify-center items-center flex-col p-2 hover:bg-pink-100 rounded-lg shadow-md cursor-pointer
    h-[60px] w-[60px] gap-1
    sm:h-[70px] sm:w-[70px]
    md:h-[80px] md:w-[80px]
    ${activeStyle?'border-2 border-solid border-pink-400 bg-white':'bg-white'}`}
    onClick={()=>displayFormValue(value)}
    >
      <img src={iconImage}  alt="" className='w-[50%] flex-1' />
      {/* <h1>Q</h1> */}
      <h1 className='text-[8px] md:text-[12px]'>{iconText}</h1>
    </div>
  )
}

export default SectionContainerSquare
