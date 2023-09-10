import React from 'react'

const dropdown = () => {
  const  nations  = [
    { name:  'India', value:  'IN' },
    { name:  'Pak', value:  'PK' },
    { name:  'Bangladesh', value:  'BG' },
    ] 

    // console.log('hello')

  return (
    <div className='print:hidden'>
      <select name="nations" id="nations"  onChange={(e)=>console.log(e.currentTarget.value)}>
        {nations.map((nat)=><option value={nat.value}>{nat.name}</option>)}
      </select>
    </div>
  )
}

export default dropdown
