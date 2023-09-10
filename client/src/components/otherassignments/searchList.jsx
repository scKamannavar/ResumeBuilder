import React, { useState } from 'react'

const searchList = () => {

    const [searchele, setSearchele] = useState('')
    // console.log(searchele)
    const list =['Apple', 'Ball', 'Mall', 'fall', 'laal', 'maal', 'gaal']

    const filteredlist = list.filter(listele => {
        return listele.toLowerCase().includes(searchele.toLowerCase());
      });
  return (
    <div className='flex justify-center px-10 py-4 bg-slate-500 print:hidden'>
      <div className='bg-slate-300 w-[50%] p-4 rounded-md'>
        <input className='p-2 font-mono' type="text" name="search" placeholder="Search"id="" onChange={(e)=>setSearchele(e.currentTarget.value)} />
        <ul>
            {filteredlist.map((li,index)=>{
                // if(li.includes({searchele}))
                    // {
                        return <li key={index}>{li}</li>
                    // }                    
            })}
            
        </ul>
        </div>
    </div>
  )
}

export default searchList
