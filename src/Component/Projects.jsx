import React from 'react'
import swiggy from '../assets/swiggy.png'
import tube from '../assets/tube.png'
const Projects = () => {

  return (
    <div className='m-4 md:pr-28 md:pl-28'>
      <h1 className='font-semibold text-5xl pb-10'>Projects</h1>
    <section className='md:flex md:justify-evenly pb-20'>
      <div className='mb-8 md:w-1/2'>
        <h1 className='font-semibold text-lg pb-4'>SWIGGY_CLONE</h1>
        <p className='md:pb-10'>I developed a responsive e-commerce website utilizing React, integrating a cart function through Redux Toolkit. Leveraged APIs for real-time data and employed Tailwind CSS to enhance the website's visual appeal.</p>
      </div>
      <div className='w-96 h-52 group'>
       <div className='relative overflow-hidden'>
        <img src = {swiggy} className='w-96 h-full object-cover' />
        <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <a href='https://github.com/moham-athar/swiggy-clone.git' target='_blank'>
          <button className='bg-black text-white py-2 px-5 rounded-full'>Github</button>
          </a>
        </div>
       </div>
      </div>
    </section>
    <section className='flex flex-col-reverse md:flex md:justify-evenly md:flex-row'>
      <div className='w-96 h-52 group'>
       <div className='relative overflow-hidden'>
        <img src = {tube} className='96 h-full object-cover' />
        <div className='absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <a href='https://github.com/moham-athar/swiggy-clone.git' target='_blank'>
          <button className='bg-black text-white py-2 px-5 rounded-full'>Github</button>
          </a>
        </div>
       </div>
      </div>
      <div className='md:w-1/2'>
        <h1 className='font-semibold text-lg md:font-bold md;text-lg pb-4'>YOUTUBE_CLONE</h1>
        <p className='font-light pb-8 md:pb-10 '>I designed and developed a YouTube clone using React, incorporating essential features such as a search function and real-time content updates via APIs. Implemented live chat functionality using Redux Toolkit and enhanced performance through API polling, caching, and lazy loading techniques.</p>
      </div>
    </section>
    </div>
  )
}

export default Projects