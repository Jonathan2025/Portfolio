import React from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { useEffect, useState } from 'react';


const Experience = () => {

  // we will use reactUseState to toggle the visibility of the experience description 
  const [isHidden, setIsHidden] = useState(true)
  const [isHidden2, setIsHidden2] = useState(true)
  const [isHidden3, setIsHidden3] = useState(true)
  const [isHidden4, setIsHidden4] = useState(true)

  const toggleDescription = () => {
    setIsHidden(!isHidden);
  }
  const toggleDescription2 = () => {
    setIsHidden2(!isHidden2);
  }
  const toggleDescription3 = () => {
    setIsHidden3(!isHidden3);
  }
  const toggleDescription4 = () => {
    setIsHidden4(!isHidden4);
  }

  return (
    <div name="experience" className='w-full h-auto bg-[#0284c7]  text-gray-300'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

  
    {/* container For experience */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-indigo-400'>Experience</p>
          <p className='py-4'>Though various professional positions, I gained software-engineer related experience</p>
        </div>
        
        {/* Each experience */}

        <div className='accordion-item cursor-pointer ' onClick={toggleDescription3}> 
          <div className={`rounded-lg p-4 flex justify-between ${isHidden3 ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
              <span className="text-x1">Software Engineer, Business Partner at Best Taekwondo [2021-Present]</span>
                  {isHidden3 ? <FaPlus size={20}/> : <FaMinus size={20} />}
              </div>  
              <div className={`rounded-lg p-4 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden3 ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px] mb-3'}`} style={{ overflow: 'hidden' }}>
                <div className="flex items-center">
                  <img src='https://www.pngkit.com/png/detail/767-7675046_martial-arts-clipart-karate-kick-martial-arts-kick.png' className="w-20 h-20 mr-4" />
                  <span>
                    I pioneered efforts with Grandmaster Gyo Sun Seo to improve the school's website, advertisements, and outreach which increased revenues 46% from 2021 to 2022. 
                    Additionally, my new KickFlix app has given students the opportunities to perfect their martial arts techniques and help them prepare for their belt examinations.
                    My current project focuses on creating "Best Taekwondo Online" which is a platform that will allow our members to renew their memberships and buy equipment seemlessly without having to come to the school physically.
                    Additionally, it will include an admin panel where business partners can view logistics and track revenue and inventory.
                  </span>
                </div>
              </div>
            </div>
      
          <div className='accordion-item cursor-pointer ' onClick={toggleDescription}> 
          <div className={`rounded-lg p-4 flex justify-between ${isHidden ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
            <span className="text-x1">Software Engineer at General Assembly [2022-2023]</span>
                  {isHidden ? <FaPlus size={20}/> : <FaMinus size={20} />}
              </div>  
              <div className={`rounded-lg p-4 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px] mb-3'}`} style={{ overflow: 'hidden' }}>
                <div className="flex items-center">
                    <img src='https://ww1.freelogovectors.net/wp-content/uploads/2016/12/general-assembly_logo.png' className="w-20 h-20 mr-4" />
                    <span>
                      General Assembly's Software Engineering Immersive is a 500+ hour software engineering bootcamp that teaches the fundamentals of front end web development and full-stack technologies. 
                      I was able to quickly learn new technologies like JavaScript, HTML, CSS, ReactJS, MongoDB, and Python to build apps that empower users financially and physically. Additionally, outside of class I taught myself technologies that I was very interested in 
                      such as Microsoft Azure and Django.
                      I also led a team of 3 engineers in to debug problems and successfully deploy our JX-Funds App. 
                    </span>
                </div>
              </div>
          </div>

          <div className='accordion-item cursor-pointer ' onClick={toggleDescription2}> 
          <div className={`rounded-lg p-4 flex justify-between ${isHidden2 ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
              <span className="text-x1">EY Technology Risk Consultant [2022-2023]</span>
              {isHidden2 ? <FaPlus size={20}/> : <FaMinus size={20} />}
              </div>  
              <div className={`rounded-lg p-4 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden2 ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px] mb-3'}`} style={{ overflow: 'hidden' }}>
                <div className="flex items-center">
                  <img src='https://assets.website-files.com/5d03b4dadc6c674bbfa2fc3c/61b95ff959ee627f047f02e0_ernst-young-ey.svg' className="w-20 h-20 mr-4" />
                  <span>
                    Despite the position being heavily business and audit focused, I took every oppotunity I had to use my coding skills to help my teams at EY. 
                    I coached various EY teams from IT Audit to SOC Reporting on how to read code evidence written in Python, JavaScript, and SQL to determine the risks in program scripts on clients' application.
                    My thorough 
                  </span>
                </div>
              </div>
          </div>

          

          <div className='accordion-item cursor-pointer ' onClick={toggleDescription4}> 
          <div className={`rounded-lg p-4 flex justify-between ${isHidden4 ? 'bg-[#005A9C]' : 'bg-[#0076CE]'}`}>
              <span className="text-x1">Presenter for Technical Workshops [2020-2022]</span>
                  {isHidden4 ? <FaPlus size={20}/> : <FaMinus size={20} />}
              </div>  
              <div className={`rounded-lg p-4 transition-all duration-1000 ease-in-out text-black bg-[#E5E4E2] ${isHidden4 ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[1000px] mb-3'}`} style={{ overflow: 'hidden' }}>
                <div className="flex items-center">
                  <img src='https://assets.website-files.com/5b315ecc278ab93f80e38713/5ff764c7fc5ef345e4dd8805_UMASS%20Logo.png' className="w-20 h-20 mr-4" />
                  <span>
                    I presented over 100 workshops for the College of Management as Presenter of BGS Workshops, and I absolutely loved the freedom I had to pioneer new workshops for students. After mastering new technologies, I decided to create workshops on Excel, Power BI and Alteryx which has given more than 200 students exposure to powerful applications and the ability to succeed in their academic careers.
                  </span>
                </div>
              </div>
            </div>






    </div>
  </div>

  )
}

export default Experience