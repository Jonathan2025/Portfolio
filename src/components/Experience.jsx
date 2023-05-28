import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { useEffect, useState } from 'react';


const Experience = () => {

  // we will use reactUseState to toggle the visibility of the experience description 
  const [isHidden, setIsHidden] = useState(true)
  const [isHidden2, setIsHidden2] = useState(true)
  const [isHidden3, setIsHidden3] = useState(true)

  const toggleDescription = () => {
    setIsHidden(!isHidden);
  }
  const toggleDescription2 = () => {
    setIsHidden2(!isHidden2);
  }
  const toggleDescription3 = () => {
    setIsHidden3(!isHidden3);
  }

  return (
    <div name="Experience" className='w-full h-screen bg-[#6082B6]  text-gray-300'>
    {/* container For experience */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experience</p>
          <p className='py-4'>Though various professional positions, I gained software-engineer related experience</p>
        </div>
        
        {/* Each experience */}
      
          <div className='accordion-item cursor-pointer ' onClick={toggleDescription}> 
          <div className={`rounded-full p-4 text-x1 flex justify-between ${isHidden ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
                  EY Technology Risk Consultant [2022-2023]
                  {isHidden ? <FaPlus size={20} /> : <FaMinus size={20} />}
              </div>  
              <div className={` p-2 mb-3 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px]'}`} style={{ overflow: 'hidden' }}>
                  Jonathan is a beast master who has helped his team lead them to victory
              </div>
          </div>

          <div className='accordion-item cursor-pointer ' onClick={toggleDescription2}> 
          <div className={`p-2 text-x1 flex justify-between ${isHidden2 ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
                  EY Technology Risk Consultant [2022-2023]
                  {isHidden ? <FaPlus size={20} /> : <FaMinus size={20} />}
              </div>  
              <div className={`p-2 mb-3 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden2 ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px]'}`} style={{ overflow: 'hidden' }}>
                  Jonathan is a beast master who has helped his team lead them to victory
              </div>
          </div>

          <div className='accordion-item cursor-pointer ' onClick={toggleDescription3}> 
          <div className={`p-2 text-x1 flex justify-between ${isHidden3 ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
                  EY Technology Risk Consultant [2022-2023]
                  {isHidden ? <FaPlus size={20} /> : <FaMinus size={20} />}
              </div>  
              <div className={`p-2 mb-3 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden3 ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px]'}`} style={{ overflow: 'hidden' }}>
                  Jonathan is a beast master who has helped his team lead them to victory
              </div>
          </div>
    






    </div>
  </div>

  )
}

export default Experience