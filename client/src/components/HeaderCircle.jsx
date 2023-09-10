import React from 'react'

const HeaderCircle = ({iconImage, iconText, activeStyle}) => {
    console.log('active Style',activeStyle )
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className={`flex justify-center items-center h-10 w-10 rounded-full p-3 bg-blue-300  ${activeStyle}`}>
            <img src={iconImage} alt="" />
            <iconImage/>
        </div>
        <h1 className='flex justify-center'>{iconText}</h1>
    </div>
  )
}

export default HeaderCircle
