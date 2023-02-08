import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {

  const [nav, setNav] = useState(false);

  const navBarItems = [
    {id:1, item: 'home'},
    {id:2, item: 'about'},
    {id:3, item: 'portfolio'},
    {id:4, item: 'experience'},
    {id:5, item: 'contact'}
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-5 text-white bg-black fixed'>
        <div>
            <h1 className='font-signature text-5xl' >Niko</h1>
        </div>

        <ul className='hidden md:flex'>

            {navBarItems.map( ({id, item})=> (
                <li key={id} className='px-4 cursor-pointer 
                                        capitalize font-medium
                                        text-gray-100 hover:scale-105
                                        duration-200'>{item}</li>))}
            
        </ul>

        <div onClick={()=> setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden'>
           {!nav ? <FaBars size={30} className='text-gray-100'/> : <FaTimes size={30} className='text-gray-100'/>}
        </div>

        {nav && (

            <ul className='flex flex-col
                        justify-center items-center
                        absolute top-0 left-0 w-full
                        h-screen bg-gradient-to-b
                        from-black via-black to-gray-800 text-gray-400'>

                {navBarItems.map( ({id, item})=> (
                    <li key={id} className='px-4 cursor-pointer
                                        capitalize py-6 text-4xl'>{item}</li>))}
                

            </ul>
        )}

    </div>  
  )
} 

export default NavBar 