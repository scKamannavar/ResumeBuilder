import React from 'react'

const PreviousButton = ({displayFormValue, value}) => {
  return (
    <button className='flex justify-center items-center h-[40px]  text-pink-600 hover:text-white hover:bg-gradient-to-r hover:from-pink-500  hover:to-orange-300 to-pink-300 border border-solid px-6 py-4 rounded-md mt-3 transition-all ease-in-out hover:duration-300' type="button" onClick={()=>displayFormValue(value)}>Previous</button>
  )
}

export default PreviousButton
