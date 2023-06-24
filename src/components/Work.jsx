import React from 'react'
import jxfunds from "../assets/work/jxfunds.png"
import tillow from "../assets/work/Tillow.png"
import Newegg from "../assets/work/Newegg.png"
import earlyAlert from "../assets/work/EarlyAlert.png"
import starwars from "../assets/work/StarWars.png"
import kickflix from "../assets/work/kickflix.png"




const Work = () => {
  return (
    <div name='work' className='w-full h-auto text-gray-300 bg-[#0C2340]'>
        <br></br>
        <br></br>
        <br></br>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'> 
            <div className='pb-8'> 
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300  border-blue-500'>Projects</p>
                    <p className ='py-6'>See some of my recent projects</p>
                </div>
            </div>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto place-items-center'> 
          
            
         
        
            {/* card container */}
            <div className='grid grid-cols-1 gap-4 max-w-[700px] '> 
                
                
                {/* card item */}
                <div style={{backgroundImage: `url(${kickflix})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
        
      
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
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
                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JavaScript</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Microsoft Azure</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Django</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Python </span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JWT Web Tokens Authentication </span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Open Layers Map API</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">PostgreSQL</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">SQL</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                                 </div>

                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                <p>Full-stack application that allows users to create and upload martial arts videos to the cloud. Additionally, users can learn from tutorials and interact by viewing user bios and commenting on videos.
                                As a martial arts instructor at Best Taekwondo, I invited my students to use this app which has led to a 21% increase in pass rate in examinations since 2022.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* card item */}
                <div style={{backgroundImage: `url(${jxfunds})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
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
                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JavaScript</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Microsoft Azure</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">MongoDB</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Alpha Vantage Finance API</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Auth0 Authentication</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Express</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Node JS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                                 </div>
                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                <p>Full-stack application that allows users to learn about investing in index funds and recommend investment ideas to others. The application pulls in current financial data from Alpha Vantage API and successfully allowed more than 10 users to interact with each other and open retirement accounts to begin propelling their financial futures forward.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                

                <div style={{backgroundImage: `url(${tillow})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            Tillow! Real Estate App
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://github.com/Jonathan2025/RealEstateApp" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JavaScript</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">EJS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">MongoDB</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">OpenLayers Map API</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Node JS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Express</span>
                                 </div>
                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                    <p>Full stack application that allows users to add, edit and delete houses that they are interested in investing in or buying. Users can track the location of the house with the OpenLayers Map API and they are able to see the ammenities of the house. </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${Newegg})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            Video Game Python Webcrawler
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://docs.google.com/presentation/d/1pLeC2WbqrkuZYQ_AsRJPdZeOMOiDsNzi/edit?usp=sharing&ouid=101182582783772589811&rtpof=true&sd=true" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Presentation</button>
                                </a>
                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Python</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Tableau</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">SQL</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Microsoft SQL Server</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Machine Learning Analysis (NLP)</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Webcrawling</span>
                          
                                 </div>
                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                    <p>Python webcrawler that scoured throught nearly 2000 gaming products on Newegg and then performed sentiment analysis on product reviews using tableau, Microsoft SQL Server, and Python machine learning methods.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${earlyAlert})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
                        <span className='text-2xl fond-bold text-white tracking-wider'>
                            UMass Boston Early Alert Analysis 
                        </span>
                            <div className='pt-8 text-center'> 
                                <a href="https://docs.google.com/presentation/d/1w5MM_960-KMUW7zobMixEJyMLxpTDtt1/edit?usp=sharing&ouid=101182582783772589811&rtpof=true&sd=true" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Presentation</button>
                                </a>

                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Excel</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Microsfot SQL Server</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">SQL</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Data Cubes</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Data Visualization</span>
                                 </div>
                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                    <p>Data warehousing project that analyzed data from thousands of students since 2017 to show that UMass Boston's Early Grade Alert System Initiative helped students make better decisions about their classes earlier on such as continuing in a course or withdrawing. The project helped convinced the UMass Boston administation to continue with the initiative.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div style={{backgroundImage: `url(${starwars})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'> 
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
                                <div class="px-5 pt-2 pb-2">
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JavaScript</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">GitHub</span>
                                    <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Node JS</span>
                                   
                                 </div>
                                 <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                                    <p>Inspired by the game Battleship, two players faceoff trying to find and eliminate their opponent's LEGO mini-figures from the board before it is too late. The game uses object oriented programming, classes, the DOM, and query selectors to solidify concepts learned in class.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            






                    </div>
                </div>
            </div>
  
  )
}

export default Work