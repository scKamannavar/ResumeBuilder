import React,{useEffect, useState} from 'react'

const clock = () => {
    
    const [startdate, setStartdate] = useState(new Date())
    const d = new Date();
    const [time, setTime] = useState(d)  
    const [startButton, setSartButton] = useState(false)

  
            useEffect(()=>{
                const tard = setInterval(()=>{ 
    
                    setTime(new Date())
                },1000)
                // console.log(tard)
            },[])

   
    

    // console.log(updateTime())
  return (
    <div className='flex flex-col print:hidden'>
        <div className='flex flex-1 justify-center text-5xl'>
            {(Math.floor((time-startdate)/(1000*60*60)))%60} : {(Math.floor((time-startdate)/(1000*60)))%60} : {(Math.floor((time-startdate)/1000))%60}
        </div>
        <div className='flex flex-1 justify-center text-4xl'>
            <button className='bg-red-500 rounded-md p-2 text-white hover:bg-red-600' onClick={()=> setStartdate((new Date()))}>Reset</button>
            <button onClick={()=> setSartButton(!startButton)}>Start</button>
        </div>
    </div>
    
  )
}

export default clock
