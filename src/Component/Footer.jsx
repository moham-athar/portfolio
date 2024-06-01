import React from 'react'
import {GrTwitter} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className= 'md:mr-20 md:ml-20 pt-8  border-t-[0.5px] border-black  md:flex md:justify-around md:pt-32 md:mt-20 md:overflow-x-hidden'>
        <div className='pl-4 flex flex-col text-left md:flex md:flex-col'>
            <h1 className= 'font-bold text-xl mb-2 md:font-semibold '>Phone</h1>
            <p className='pb-8' >+91-7091174159</p>
        </div>
        <div className='pl-4'>
            <h1  className='font-bold text-xl mb-2 md:font-semibold'>Email</h1>
            <p className='pb-8'>mohammed_a_@outlook.com</p>
        </div>
        <div className='pl-4'>
            <h1  className='font-bold text-xl mb-2  md:font-semibold'>Follow Me</h1>
            <div className='flex text-lg pb-8 md:text-base'>
            <a href='https://twitter.com/mohammed_a_thar' target='_blank'>{<GrTwitter />}</a>
            <a href='https://www.linkedin.com/in/mohammed-athar-67893b23a/' target='_blank'>{<BsLinkedin />}</a>
            <a href='https://github.com/moham-athar' target='_blank'>{<BsGithub />}</a>
            </div>
        </div>
        <div className='pl-4'>
            <p className='font-light'>© 2035 By Mohammed Athar.</p>
        </div>
    </footer>
  )
}

export default Footer