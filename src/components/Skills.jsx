import React from 'react'


import JavaScript from '../assets/javascript.png'
import ReactJS from '../assets/react.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Python from '../assets/python.png'
import SQL from '../assets/sql.png'
import Flask from '../assets/flask.png'
import Django from '../assets/django.png'
import NodeJS from '../assets/node.png'
import GitHub from '../assets/github.png'
import Java from '../assets/java.png'
import MongoDB from '../assets/mongo.png'
import PostGreSQL from '../assets/postgre.png'
import PowerBI from '../assets/powerbi.jpeg'
import Alteryx from '../assets/alteryx.png'
import Tableau from '../assets/tableau.webp'
//bg-[#36454F] 

const Skills = () => {
  return (
    <div name="skills" className='w-full h-auto bg-[#6082B6]  text-gray-300'>
      {/* container of skills */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Technical Skills</p>
          <p className='py-4'>These are the technologies that I use</p>
        </div>
     

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={JavaScript} alt="JS Icon"/>
          <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={ReactJS} alt="react"/>
          <p className='my-4'>ReactJS</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={SQL} alt="SQL"/>
          <p className='my-4'>SQL</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={HTML} alt="HTML"/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={CSS} alt="CSS"/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Python} alt="Python"/>
          <p className='my-4'>Python</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Flask} alt="Flask"/>
          <p className='my-4'>Flask</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Django} alt="Django"/>
          <p className='my-4'>Django</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={NodeJS} alt="NodeJS"/>
          <p className='my-4'>NodeJS</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={GitHub} alt="GitHub"/>
          <p className='my-4'>GitHub</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Java} alt="Java"/>
          <p className='my-4'>Java</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={MongoDB} alt="Mongo DB"/>
          <p className='my-4'>MongoDB</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={PostGreSQL} alt="PostGre"/>
          <p className='my-4'>PostgreSQL</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={PowerBI} alt="PowerBI"/>
          <p className='my-4'>PowerBI</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Alteryx} alt="Alteryx"/>
          <p className='my-4'>Alteryx</p>
        </div>
        <div className='shadow-md shadow-[#6082B6] hover:scale-110 duration 500'>
          <img className='w-20 mx-auto' src={Tableau} alt="Tableau"/>
          <p className='my-4'>Tableau</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Skills