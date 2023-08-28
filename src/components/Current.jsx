import BestTKDOnline from '../assets/work/TkdOnline.jpeg'

const Current = () => {
  return (
    <div name='current' className='w-full h-auto text-gray-300 bg-[#0284c7]'>
    <br></br>
    <br></br>
    <br></br>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'> 
        <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 text-gray-300  border-indigo-400'>Current Work</p>
                <p className ='py-6'>See what I am currently working on</p>
            </div>
        </div>

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto place-items-center'> 
        {/* card container */}
        <div className='grid grid-cols-1 gap-4 max-w-[700px] '> 
            
            
            {/* card item */}
            <div style={{backgroundImage: `url(${BestTKDOnline})`, height: '400px'}} className='shadow-lg shadow-[#6082B6] group container rounded-md flex justify-center items-center mx-auto content-div'> 
                
    
  
                {/* hover effects */}
                <div className='opacity-0 group-hover:opacity-100 text-center'> 
                    <span className='text-2xl fond-bold text-white tracking-wider'>
                        Best Taekwondo Online App
                    </span>
                        <div className='pt-8 text-center'> 
                         
                            <a href="https://github.com/Jonathan2025/best-tkd-frontend" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <div class="px-5 pt-2 pb-2">
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">JavaScript</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">NextJS</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Amazon Web Services AWS</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">MongoDB</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">TailwindCSS </span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Next Auth </span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Stripe Payment API</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Google Cloud</span>

                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML</span>
                                <span class="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS</span>
                             </div>

                             <div className='bg-blue-500 p-4 rounded-lg text-white text-left'> 
                            <p>I take every opportunity to use technology to improve the lives of people around me. Best Taekwondo Online is an ongoing 2 part application for my martial arts school that has a frontend to allows members to 
                                buy products and renew their memberships powered by Stripe API. In addition, it has an admin dashboard to track inventory and revenue.

                            </p>
                            </div>
                        </div>
                    </div>
                </div>

          
                            
                        </div>
                    </div>
                </div>
        
  )
}

export default Current