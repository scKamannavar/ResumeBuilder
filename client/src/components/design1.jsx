import React from 'react'

const design1 = ({resumeinfo}) => {
  return (
    <div className={`flex flex-col justify-start font-serif `}>
      <div className='flex-1 border-slate-600 border-b'>
        <h1 className='text-4xl'>{resumeinfo.about.name}</h1>
      </div>
      <div className='py-2'>
        <h1 className='font-semibold'>Email : <span className='font-normal'>{resumeinfo.about.email}</span></h1>
        <h1 className='font-semibold'>Contact : <span className='font-sans font-normal'>{resumeinfo.about.phone}</span></h1>
      </div>
      {/* About/Objective */}
      <div className='py-2'>
        <h1 className='font-semibold text-2xl'>About:</h1>
        <p>{resumeinfo.about.aboutText}</p>
      </div>
      {/* Experience */}
      <div className='py-2'>
            <h1 className='font-semibold text-2xl'>Experience:</h1>

            {resumeinfo.experience.map((exp)=>{
                return <div>
                            <div className='flex py-2 text-1xl'>
                                <h1 className='flex-1 font-semibold'>{exp.role}</h1>
                                <h1 className='flex-1 font-semibold'>{exp.company} </h1>
                                <h1 className='flex-1 font-semibold'>{exp.year}</h1>
                            </div>
                                {/* <p >{exp.description}</p> */}
                                <p className='ql-editor pl-0 [&>ul]:pl-0' dangerouslySetInnerHTML={{ __html: exp.description}} ></p>
                        </div>
            }
            )}
           
      </div>
        {/* Education */}
        <div className='py-2'>
            <h1 className='font-semibold text-2xl '>Education:</h1>

            {resumeinfo.education.map((ed)=>
             <div className='flex'>
                <div className='w-4 flex justify-start pt-2'>
                ●
                </div>

                <div className='flex-1'>
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>{ed.institute}</h1>
                        <h1 className='flex-1 '>{ed.year}</h1>
                    </div>
                    <div className='flex pt-2 text-1xl'>
                        <h1 className='flex-1 '>{ed.course}</h1>
                        <h1 className='flex-1 '>{ed.grades}</h1>
                    </div>
                </div>
            </div>
            )}
      </div>
      <div className='flex flex-col'>{/* skills */}
        <h1 className='font-semibold text-2xl '>Skills:</h1>
        <div className='flex flex-1'>
            {resumeinfo.skills.map((skill)=>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        {skill}
                    </div>
            )}
        </div>
      </div>
      <div className='flex flex-col'>{/* Hobbies */}
        <h1 className='font-semibold text-2xl '>Hobbies/Interests:</h1>
        <div className='flex flex-1'>
        {resumeinfo.hobbies.map((hobby)=>
                    <div className='bg-gray-200 rounded-full py-1 px-2 mr-2'>
                        {hobby}
                    </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default design1
