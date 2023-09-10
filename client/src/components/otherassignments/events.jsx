import React, { useRef } from 'react'

const events = () => {
const imageEle = useRef()
function handleMouse(){
   //  console.log(imageEle.current.classList);
    imageEle.current.classList.add('bg-green-600','transform','scale-75')
}

function handleMouseOut(){
   // console.log(imageEle.current.classList);
   imageEle.current.classList.remove('bg-green-600','transform','scale-75')
}


 function handleDbClick(){
    alert('Double and double clicked')
 }

 const handleClick = ()=>{
   
    console.log('Single clicked')
 }
 const handleFocus = ()=>{
    console.log('Focused')
 }
 const handleBlur = ()=>{
    console.log('Not Focused')
 }
 const handleCopy = ()=>{
    console.log('Text Copied')
 }
 const handlePaste = ()=>{
    console.log('Text Pasted')
 }
 const handleCut = (e)=>{
    console.log('Text Cut', e)
 }
 
  return (
    <div className='flex justify-around print:hidden' onClick={()=>console.log('ooo')}>
      <img ref={imageEle}  src="https://www.shareicon.net/data/2016/01/05/232816_naruto_256x256.png" alt="test Image"
      onMouseOver={handleMouse} onMouseOut={handleMouseOut}
      />
      <button onDoubleClick={handleDbClick} onClick={handleClick}>Button</button>
      <input onFocus={handleFocus} onBlur={handleBlur} type="text" name="" id="" className='border-blue-400 border-2 self-center h-10'  />
    <p onCopy={handleCopy} onPaste={handlePaste} onCut={handleCut}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo maiores placeat ullam! Ab in harum, voluptas dolor at iure beatae assumenda officiis consectetur cumque natus iusto maxime mollitia aliquam quia veritatis voluptatibus debitis consequuntur, voluptatum amet dolorum? Incidunt, tempora!</p>
    </div>
  )
}

export default events
