import React from 'react'
import img from '../assets/pic.jpg'
import { Link } from 'react-router-dom'
import resume from '../assets/resume_athar.pdf'

const Body = () => {
  return (
    <div className='flex flex-col-reverse m-4 pb-10 md:flex md:flex-row md:pb-32 '>
        <div className=''>
            <img src = {img}  className='w-auto md:max-w-lg md:mt-24 md:ml-20 rounded-full'/>
        </div>
        <div className='md:pl-14 md:pt-36'>
            <h1 className='text-4xl  md:text-8xl p-2 font-extrabold'>Hello!</h1>
            <h2 className='text-lg font-semibold p-2'>A bit about me</h2>
            <p className='mb-2 font-light pb-4 md:pr-32 pl-2 md:font-extralight'>I'm a passionate developer at the crossroads of two dynamic worlds - frontend development and machine learning. With a strong foundation in frontend technologies, including React and Redux Toolkit, I have honed my skills in crafting captivating user interfaces and seamless user experiences. But that's just one face of my journey.</p>
            <div className='text-center pb-4 mb-2 md:pt-10 md:mr-96'>
                <a href={resume} download>
                <button className = 'p-3 pr-5 pl-5 w-22 text-black bg-white rounded-full mr-5 border border-black hover:bg-black hover:text-white'>Resume</button>
                </a>
                <Link to = '/contact'>
                <button className= 'p-3 pr-5 pl-5 bg-gray-900 text-white rounded-full mr-5 hover:bg-black'> Contact
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Body