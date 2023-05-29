import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-auto bg-[#0C2340] text-gray-300'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

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
                    As a former Technology Risk Consultant at EY, I delivered exceptional services and expertise to clients. I'm a passionate lifelong learner with a strong fascination for technology and coding. My software engineering journey has led me to develop impactful full stack applications that empower others financially or physically.
                    My projects have achieved significant positive outcomes. For example, my JX-Funds App helped nearly 10 users familiarize themselves with investing concepts and begin investing for retirement. These projects also reflect my enthusiasm for sharing knowledge. During my time at UMass Boston, I led technical workshops, including Excel, Power BI, and Alteryx, as the presenter for the College of Management workshops.
                    Outside of work, I find joy in teaching Taekwondo and continuously enhancing my techniques. I take pride in delivering exceptional results and I'm confident that I would be a valuable addition to your team! Please explore my recent projects below.
                    </p>
                </div>

            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    
  
    </div>
    
  )
}

export default About