import React from 'react';
import { CgArrowRightR } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import MyCarousel from './MyCarousel';

const Body = (props) => {
      
  return (
    <div className='grid lg:grid-cols-9 grid-cols-1 lg:gap-2 gap-4 px-2 py-5 w-full h-full'>
            <div className=''></div>
            <div className='lg:col-span-3 p-2'>

                <h1 className=' text-slf-800 text-5xl font-display'>{props.heading}</h1>
            
                <div className='grid grid-cols-2 gap-4 pt-5 place-items-start'>
                    
                   {props.cData.map((index,id, title, content) => (
                        <div key={index} className=''>
                            <p className='text-gray-200 font-blocky font-extrabold text-2xl '>{index.title}</p>
                            <ul className='text-gray-300 p-2 list-disc'>
                                <li>{index.content[0]}</li>
                                <li>{index.content[1]}</li>
                            </ul>
                        </div>
                   )
                   )}


                </div>
                
                <NavLink exact path to='/contact'>
                        <button className='group text-black w-fit px-6 my-2 flex items-center font-bold
                                        rounded-md bg-gradient-to-r from-yellow-500 bg-amber-600 h-10 hover:scale-105'>
                            Get Your Free Plan
                            <span>
                                <CgArrowRightR size={20} className='ml-2 text-white group-hover:rotate-180 duration-700'/>
                            </span>
                        </button>
                </NavLink>
            
            </div >

            <div className='lg:col-span-5'>
                <div className=''>
                    <MyCarousel picAssets={props.picAssets}/>
                </div>
            </div>

    </div>
  )
}

export default Body