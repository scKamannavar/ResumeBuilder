import React,{useState} from 'react'

const HobbiesForm = ({dispatch, displayFormValue}) => {
const [hobbies, setHobbies] = useState('');
function handleClickHobby(){
    // addHobbies(hobbies)
    dispatch({type:'ADD_HOBBBIES', payload:hobbies})
    setHobbies('')
  }
  return (
        <div className='flex flex-1 flex-col w-full'>
        {/* <h1 className='text-4xl text-slate-900 self-center font-bold font-Poppins'>Hobbies/Intersest</h1> */}
            <div className='flex flex-1 flex-col w-full'>
            <input className='h-12  p-2 border-b-2 border-blue-500 outline-none ' type="text" name="Hobbies" value={hobbies} id="Hobbies"onChange={(e)=>setHobbies(e.target.value)} />
            <button className='bg-none text-xl font-Outfit hover:text-white border-2 border-blue-500 px-6 py-2 rounded-md hover:bg-blue-400 mt-3' type="button" onClick={(e)=>handleClickHobby(e)}>Add</button>
            </div>
            <div className='flex justify-end px-6'>
                <button className='bg-green-400 text-white px-6 py-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(4)}>Previous</button>
                
                <button className='bg-green-400 text-white px-6 py-4 ml-4 rounded-md hover:bg-green-800 mt-3' type="button" onClick={()=>displayFormValue(6)}>Next</button>
            </div>
        </div>
  )
}

export default HobbiesForm
