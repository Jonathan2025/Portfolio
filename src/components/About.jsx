import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#005f69] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                {/* when the screen gets small, the text will jump to the right */}
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                        About
                    </p>
                </div>
                <div> </div>
                {/* When the screen gets smaller then the text will become one column */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'> 
                        <p> Hey, I'm Jonathan nice to meet you please take a look around</p>
                    </div>
                </div>
                <div>
                    <p> 
                        As a software engineer, I want to share my knowledge in investing and martial arts by building full stack applications 
                        that help others achieve their financial and physical goals. I LOVE helping others achieve the better version of themselves.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About