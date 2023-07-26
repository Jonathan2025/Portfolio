import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.webp'
import {Link} from 'react-scroll'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav) // basically when clicked we will set it to its opposite



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0C2340] text-white">
        <div>
            <img src ={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>
        
   
    {/* This will be the menu */}
            <ul className="hidden md:flex"> 
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
            </ul>


        {/* The hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {/* Allow the user to click into and out of the hamburger */}
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu, when the nav is not false, then it will show */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0C2340] flex flex-col justify-center items-center'}> 
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>

        </ul>

        {/* social icons */}
        {/* When the screen is too small the social icons will be hidden, otherwise they will show */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0"> 
            <ul>
                {/* this creates a pop up of the linked in when you hover */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-500'> 
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/jonathan-liang7/" target="_blank">
                        LinkedIn <FaLinkedinIn size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[black]'> 
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/Jonathan2025" target="_blank">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#03C03C]'> 
                    <a className='flex justify-between items-center w-full text-white' 
                    href="mailto:Jonathan.Liang75@outlook.com" target="_blank">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#FFBF00]'> 
                    <a className='flex justify-between items-center w-full text-white' 
                    href="https://drive.google.com/file/d/1iAwoCBk2qg-8kSCDJ9BnmSB7ahvBkTO1/view?usp=sharing" target="_blank">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar