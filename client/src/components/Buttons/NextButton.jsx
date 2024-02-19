import React from 'react'

const NextButton = ({displayFormValue, value}) => {
  return (
    <button className='flex justify-center items-center h-[40px]  bg-gradient-to-r hover:from-orange-300 hover:to-pink-500  from-pink-500 to-orange-300 text-white px-6 py-4 rounded-md mt-3 transition-all ease-in-out hover:duration-700' type="button" onClick={()=>displayFormValue(value)}>Next</button>
    // <button className='flex justify-center items-center h-[40px]  bg-gradient-to-r hover:from-orange-300 hover:to-pink-500  from-pink-500 to-orange-300 text-white px-6 py-4 rounded-md mt-3 transition-all ease-in-out hover:duration-700' type="button">Next</button>
  )
}

export default NextButton
