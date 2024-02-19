import React from 'react'

const design2 = ({resumeinfo}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-1 '>
        <div className='flex flex-1 h-[150px] items-center  '>
               <h1 className='text-6xl'>{resumeinfo.about.name}</h1>
        </div>
        <div className='flex flex-col items-start justify-center w-[220px] '>
            <h1 className='font-semibold'>Gmail : <span className='font-normal'>{resumeinfo.about.email}</span></h1>
            <h1 className='font-semibold'>Contact : <span className='font-sans font-normal'>{resumeinfo.about.phone}</span></h1>
        </div>
      </div>
      <div className=' flex flex-1 '>
        <div className='w-[230px] border-r-2 '>{/*  first column */}
            <div className='pb-2'>{/*  education */}
                <h1 className='font-semibold text-2xl '>Education:</h1>

                {resumeinfo.education.map((edu, index)=>{
                    return  <div className='flex' key={index} >
                                <div className='w-4 flex justify-start pt-2'>
                                ●
                                </div>

                                <div className='flex-1'>
                                    <div className='flex flex-col pt-2 text-1xl'>
                                        <h1 className='flex-1 '>{edu.institute}</h1>
                                        <h1 className='flex-1 '>{edu.year}</h1>
                                    </div>
                                    <div className='flex flex-col pt-2 text-1xl'>
                                        <h1 className='flex-1 '>{edu.course}</h1>
                                        <h1 className='flex-1 '>{edu.grades}</h1>
                                    </div>
                                </div>
                            </div> 
                })} 
            </div>

            <div className='pb-2'> {/* Skills */}
                <h1 className='font-semibold text-2xl '>Skills:</h1>
                    <div className='flex flex-col flex-wrap'>
                    {resumeinfo.skills.map((skill, index)=>
                        <div className='bg-gray-200 rounded-full py-1 px-2 mr-2' key={index}>
                            {skill}
                        </div>
                )}
                </div>
            </div>

            <div className='pb-2'> {/* Interests */}
                <h1 className='font-semibold text-2xl '>Interests:</h1>
                <div className='flex flex-col flex-wrap'>
                    {resumeinfo.hobbies.map((hobby, index)=>
                        <div className='bg-gray-200 rounded-full py-1 px-2 mr-2' key={index}>
                            {hobby}
                        </div>
                     )}
                </div>
            </div>
            
        </div>
        {/* Second Column */}
        {/* About */}
        <div className='flex-auto w-10 pl-6'>
            <div className='py-2'>
                <h1 className='font-semibold text-2xl'>About:</h1>
                <p>{resumeinfo.about.aboutText}</p>
            </div>

             {/* Experience */}
            <div className='py-2'>
                <h1 className='font-semibold text-2xl py-2'>Experience:</h1>
                {resumeinfo.experience.map((exp, index)=>
                <div key={index}>
                    <div className='flex flex-col pt-2'>
                        <h1 className='flex-1 font-semibold'>{exp.role}</h1>
                        <div className='flex  text-1xl'>                       
                            <h1 className='flex-1 font-semibold'>{exp.company}</h1>
                            <h1 className='flex-1 font-semibold'>{exp.year}</h1>
                        </div>
                    </div>
                    {/* <p>{exp.description}</p> */}
                    <p className='ql-editor pl-0 [&>ul]:pl-0' dangerouslySetInnerHTML={{ __html: exp.description}} ></p>
                </div>
                )}
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default design2
