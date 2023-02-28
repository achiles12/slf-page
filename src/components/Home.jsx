import React from 'react';
import { CgArrowRightR } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import largeHeroImage from '../assets/lrgScreenHero1.png';
import smlHeroImage from '../assets/smlScreenHero1.png';
//<img src={smlHeroImage} alt='Hero' className='md:hidden w-full fixed'/>
//bg-gradient-to-b from-amber-600 to-yellow-400

const Home = () => {
  return (
    <div name="home"  className="w-auto h-auto p-2">
        <div >
            <img src={smlHeroImage} alt='Hero' className='md:hidden w-full'/>
            <img src={largeHeroImage} alt='Hero' className='hidden md:block md:mx-auto w-4/5 ' />
        </div>
        <div className='lg:absolute lg:top-20 lg:left-1/4 lg:w-[35%] m-auto font-bold bg-white bg-opacity-70 rounded-xl px-4 py-2 mt-8 border-2 border-black'>
            <p className='text-black text-5xl font-blocky'>
                Financial Security:
            </p><br/>
            <p className='text-black text-4xl font-written border-b-4 border-black inline '>
                We're with you all the way.
            </p><br/>
            <p className='text-gray-600 pt-6'>
            Our Purpose is clear: Help our clients achieve lifetime financial security and live healthier lives.
            Anchored by our proud history, we continuously look for ways to bring innovative, insightful and simple solutions to our clients, so they can feel confident that they have a financial partner that cares about their well-being and that they can trust.
            </p> <br/>
            <div>
                <NavLink to='contact'>
                    <button className='group text-black w-fit px-6 my-2 flex items-center
                                    rounded-md bg-gradient-to-r from-yellow-500 bg-amber-600 h-10 hover:scale-105'>
                        Discuss your options
                        <span>
                            <CgArrowRightR size={20} className='ml-2 text-white group-hover:rotate-180 duration-700'/>
                        </span>
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home;