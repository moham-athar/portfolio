import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.sendForm('service_m61yzey', 'template_hgdg7nx', form.current, '0Vv08Zk5GqvOoQGd7')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='md:flex md:justify-between md:pt-28 md:pb-36 md:pl-40 ml-4'>
    <section className='md:pl-44'>
        <div>
            <h1 className='font-semibold text-5xl pb-5'>Contact</h1>
            <p className='font-light pb-8'>Looking forward to hearing from you</p>
        </div>
        <div>
            <h1 className='text-lg pb-1 font-semibold'>Phone</h1>
            <p className='font-light pb-8'>+91-7091174159</p>
        </div>
        <div>
            <h1 className='text-lg pb-1 font-semibold'>Email</h1>
            <p className='font-light pb-8'>mohammed_a_thar@outlook.com</p>
        </div>
    </section>
    <section className=' pr-44 pt-4 flex flex-col align-middle'>
        <form ref= {form} onSubmit={sendEmail} className='flex flex-col justify-center' >
        <div className='md:pb-5'>
        <label className='md:relative md:left-20 md:bottom-12'>First Name</label>
        <input type='text' name = 'fname' className='pt-3  pl-1 pb-3 pr-10'/>
        <label className='md:relative md:left-10 md:bottom-12'>Last Name</label>
        <input type='text' name = 'lname'  className='pt-3 pb-3 pl-1 pr-10 md:relative md:right-10'/>
        </div>
        <div className='md:pt-2 md:pb-10'>
        <label className='md:relative md:left-20 md:bottom-7'>Email*</label>
        <input type='email' name = 'email'  className='pt-3 pb-3 pl-1 pr-10 md:relative md:top-4 md:left-8'/>
        <label className='md:relative md:left-16 md:bottom-8'>Subject</label>
        <input type='text' name = 'subject'className='pt-3 pl-1 pb-3 pr-10 md:relative md:top-4 md:left-4'/>
        </div>
        <div className='pt-5 md:flex'>
        <label className='md:relative md:left-20 md:bottom-7'>Message</label>
        <textarea type='text' name = 'message' className='md:relative left-3 pb-40 pr-12 pl-1 border border-black'/>
        <div className=''><button className='mb-4 mt-8 md:m-16 p-10 md:mb-2 bg-orange-500 rounded-full border border-black hover:bg-white'>Submit</button></div>
        
        </div>
        </form>
    </section>
    </div>
  )
}

export default Contact