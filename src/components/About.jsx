import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0C2340] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                {/* when the screen gets small, the text will jump to the right */}
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                        About
                    </p>
                </div>
                <div> </div>
                </div>
                {/* When the screen gets smaller then the text will become one column */}
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right'> 
                        <img src='https://ca.slack-edge.com/T0351JZQ0-U04AP6PSGK1-01c279675f60-512'/>
                    </div>
                <div>
                    <p className='text-4xl font-bold'>Hey! I'm Jonathan</p>
                    <br></br>
                    <p> 
                        As a former Technology Risk Consultant at EY, I enjoyed the services and expertise I was able deliver to our clients.
                        I am a continuous learner who has always been fascinated with technology and coding. My love for software engineering grew and I built and continue to build full stack applications that empower others financially or physically.
                        My apps and projects have proven to provide overwhelmingly positive results, for instance, my JX-Funds App helped nearly 10 users get aquinted with investing concepts and start investing for retirement.
                        In my free time, I find joy in teaching Taekwondo but also continuously improving my techniques.
                        I am proud of the great results that I am able to deliver for others, and I am confident I will make a great addition to your team! See below for my most recent projects!
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About