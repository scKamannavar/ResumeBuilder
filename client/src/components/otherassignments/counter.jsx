import React,{useState} from 'react'

const counter = () => {
    var c = 0;
    const [count, setCount] = useState(0)
    const increement = ()=>{
            setCount(1)
            setCount(2)
            setCount(1+count)
        // setCount(count +1)
        // console.log('in',count)
       
    }
    console.log('out', count)
  return (
    <div className='flex flex-row p-10 justify-center print:hidden'>
      <div className='flex-1 text-2xl'>
        {count}
      </div>
      <div className='flex-1'>
        <button onClick={increement} className=''>Click</button>
      </div>
    </div>
  )
}

export default counter
