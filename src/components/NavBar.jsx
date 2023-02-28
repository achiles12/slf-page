import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



const NavBar = () => {

  const [nav, setNav] = useState(false);

  const navBarItems = [
    {id:0, item: 'home', goto: '/'},
    {id:1, item: 'insurance', goto: '/insurance'},
    {id:2, item: 'investments', goto: '/investments'},
    {id:3, item: 'life goals', goto: '/lifegoals'},
    {id:4, item: 'contact', goto: '/contact'}
  ]

  return (
    <div className='flex justify-between w-full items-center h-20 px-5 text-white bg-slf-900 initial'>
        <div>
            <h1 className='font-signature text-5xl text-slf-700 inline flex flex-row' >Niko Consul</h1>
        </div>

        <ul className='hidden md:flex'>

            {navBarItems.map( ({id, item, goto})=> (
                <NavLink key={id} to={goto}>
                  <li key={id} className='px-4 py-2 mx-0.5 bg-blue-500 cursor-pointer 
                                          capitalize font-medium
                                          text-slf-700 hover:scale-105
                                          duration-200 hover:bg-slf-700 hover:text-black rounded-lg  bg-transparent'>{item}</li>
                </NavLink>))}
            
        </ul>

        <div onClick={()=> setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden'>
           {!nav ? <FaBars size={30} className='text-slf-700'/> : <FaTimes size={30} className='text-slf-800'/>}
        </div>

        {nav && (

            <ul className='flex flex-col
                        justify-center items-center
                        absolute top-0 left-0 w-full
                        h-screen bg-gradient-to-b
                        from-black via-black to-gray-800 text-slf-800'>

                {navBarItems.map( ({id, item,goto})=> (
                    <NavLink to={goto} onClick={()=> setNav(!nav)}>
                      <li key={id} className='px-4 cursor-pointer
                                              capitalize py-6 text-4xl'>{item}</li>
                    </NavLink>))}
                

            </ul>
        )}

    </div>  
  )
} 

export default NavBar;