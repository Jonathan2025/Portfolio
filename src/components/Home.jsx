import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#6082B6]">

        {/* container for all the elements in the home page, note "px" stands for padding*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className="text-white">Hey there, my name is </p>
            {/* text will change size depending on size of the screen */}
            <h1 className="text-4xl sm:text-7xl font-bold text-[white]">Jonathan Liang</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#a0aec0]">Full Stack Software Engineer</h2>
            {/* on larger screens this is so that the p tag doesnt take the full page */}
            <p className ="text-[#a0aec0] py-4 max-w-[700px]">I am a full stack software engineer that specializes and loves to 
              build full stack applications that empower users financially and physically.</p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-400  hover:border-orange-400'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>



    </div>
  )
}

export default Home