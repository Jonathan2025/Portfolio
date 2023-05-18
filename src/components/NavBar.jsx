import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.webp'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) // basically when clicked we will set it to its opposite



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#72a8d5] text-white">
        <div>
            <img src ={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>
        
   
    {/* This will be the menu */}
    
            <ul className="hidden md:flex"> 
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


        {/* The hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {/* Allow the user to click into and out of the hamburger */}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu, when the nav is not false, then it will show */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#72a8d5] flex flex-col justify-center items-center'}> 
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social icons */}
        <div className="flex fixed flex-col top-[35%] left-0"> 
            <ul>
                {/* this creates a pop up of the linked in when you hover */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500'> 
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        LinkedIn <FaLinkedinIn size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[black]'> 
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="/">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#03C03C]'> 
                    <a className='flex justify-between items-center w-full text-white' 
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#FFBF00]'> 
                    <a className='flex justify-between items-center w-full text-white' 
                    href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar