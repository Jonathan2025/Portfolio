import React from 'react'
import jxfunds from "../assets/work/jxfunds.png"
import tillow from "../assets/work/Tillow.png"
import Newegg from "../assets/work/Newegg.png"
import earlyAlert from "../assets/work/EarlyAlert.png"
import starwars from "../assets/work/StarWars.png"
import kickflix from "../assets/work/kickflix.png"




const Work = () => {
  return (
    <div name='work' className='w-full h-auto md:h-screen text-gray-300 bg-[#0C2340]'>
        <br></br>
        <br></br>
        <br></br>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'> 
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 text-gray-300  border-blue-500'>Projects</p>
                <p className ='py-6'>See some of my recent projects</p>
            </div>
            
        
            {/* card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'> 
                
                
                {/* card item */}
                <div style={{backgroundImage: `url(${kickflix})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            KickFlix - Martial Arts App
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://kickflix.netlify.app/api/home" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                                </a>
                                <a href="https://github.com/Jonathan2025/FrontendCapstone" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                {/* card item */}
                <div style={{backgroundImage: `url(${jxfunds})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            JX Funds Investing App
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://jxfunds.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                                </a>
                                <a href="https://github.com/Jonathan2025/NewProject3Frontend" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                

                <div style={{backgroundImage: `url(${tillow})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            Tillow! Real Estate App
                        </span>
                            <div className='pt-8 text-center'> 
                                {/* <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                                </a> */}
                                <a href="https://github.com/Jonathan2025/RealEstateApp" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${Newegg})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            Video Game Python Webcrawler
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://docs.google.com/presentation/d/1pLeC2WbqrkuZYQ_AsRJPdZeOMOiDsNzi/edit?usp=sharing&ouid=101182582783772589811&rtpof=true&sd=true" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Presentation</button>
                                </a>
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${earlyAlert})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            UMass Boston Early Alert Analysis 
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://docs.google.com/presentation/d/1w5MM_960-KMUW7zobMixEJyMLxpTDtt1/edit?usp=sharing&ouid=101182582783772589811&rtpof=true&sd=true" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Presentation</button>
                                </a>
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${starwars})`}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            StarWars Battleship Game
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://jonathan2025.github.io/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>App</button>
                                </a>
                                <a href="https://github.com/Jonathan2025/project1_StarWarsBattleship" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
            







                </div>
            </div>
        </div>
  )
}

export default Work