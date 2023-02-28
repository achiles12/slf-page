import React from 'react';
import Pic1 from '../assets/Slide4.JPG';

const Contact = () => {
  return (
    <div name="contact" className='text-slf-800'>
        <div className='md:flex justify-center gap-2'>
            <div className='flex flex-col md:w-1/3 p-4'>
                <div className='pb-5'>
                    <p className='text-4xl font-bold inline border-b-4 border-slf-800'>Get Your Plan!</p>
                    <p className='pt-5 mb-1'>Send me a message to get your customized plan for free!</p>
                </div>
                <div className='flex flex-col'>
                        <form  action="" className='flex flex-col w-full p-4'>
                            <input type="text" name="name" placeholder="Name" className='p-2 bg-transparent border-2 border-slf-800 rounded-md text-white focus:outline-none mb-1'/> 
                            <input type="email" name="email" placeholder="Email" className='p-2 bg-transparent border-2 border-slf-800 rounded-md text-white focus:outline-none mb-1'/>
                            <textarea name="message" rows='5' cols='20' placeholder="Message" className='p-2 bg-transparent border-2 border-slf-800 rounded-md text-white focus:outline-none'></textarea>
                            <button className='group text-black font-bold w-fit px-6 my-2 flex items-center
                                            rounded-md bg-gradient-to-r from-yellow-500 bg-amber-600 h-10 hover:scale-110 duration-300'>Get your plan!</button> 
                        </form>
                        
                    </div>
            </div>
            <div className='md:w-1/3 p-4'>
                <img src={Pic1} alt='business card' className='rounded-3xl drop-shadow-[4px_10px_10px_rgba(3,355,355,12)] border-gray-900'/>
            </div>
        </div>
    </div>
  )
}

export default Contact