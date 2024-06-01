import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import resume from '../assets/resume_athar.pdf'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [nav , setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <nav className='flex md:flex justify-between h-20 pt-5'>
      <div className='flex align-middle'>
       <Link>
       <h1 className='pr-2 pl-3 font-bold text-xl'>Mohammed Athar</h1>
       </Link>
        <h2 className='md:pl-1 font-extralight pt-1'>Devloper</h2>
      </div>
      <div className='md:hidden z-10 pl-20' onClick={handleClick}>
        {!nav ? <GiHamburgerMenu className='text-2xl' /> : <FaTimes className='text-2xl'/>}
      </div>
      <div className=''>
        <ul className='hidden md:flex'>
        <a href={resume} download>
        <li className='mr-5 pr-5 font-light border-r border-black hover:text-red-600 cursor-pointer'>Resume</li>
        </a>
        <Link to = 'project'>
        <li className='pr-5 font-light border-r border-black hover:text-red-600 cursor-pointer'>Project</li>
        </Link>
        <Link to = 'contact'>
        <li className='pr-14 font-light pl-5 hover:text-red-600 cursor-pointer'>Contact</li>
        </Link>
        </ul>
      </div>

      {/* Mobile menu */}
      <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f8f8f8] flex flex-col justify-center items-center text-xl'}>
        <a href={resume} download>
        <li className='p-4 hover:text-red-600 cursor-pointer'>Resume</li>
        </a>
        <Link onClick={handleClick} to = 'project'>
        <li className='p-4 hover:text-red-600 cursor-pointer'>Project</li>
        </Link>
        <Link onClick={handleClick} to = 'contact'>
        <li className='p-4 hover:text-red-600 cursor-pointer'>Contact</li>
        </Link>
        </ul>


    </nav>
  )
}

export default Navbar