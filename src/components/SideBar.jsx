import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SideBar = () => {
    
    const socLinks = [
        {id:1, child:(<>LinkedIn<FaLinkedin size={30}/></>), link:'https://linkedin.com/', style: 'rounded-tr-md'},
        {id:2, child:(<>GitHub<FaGithub size={30}/></>), link:'https://github.com/'},
        {id:3, child:(<>Instagram<AiFillInstagram size={30}/></>), link:'https://instagram.com/'},
        {id:4, child:(<>Facebook<AiFillFacebook size={30}/></>), link:'https://facebook.com/'},
        {id:5, child:(<>Mail <HiOutlineMail size={30}/></>), link:'mailto:jan.karlo.s.consul@gmail.com'},
        {id:6, child:(<>Resume <BsFillPersonLinesFill size={30}/></>), link:'/resume.pdf', style: 'rounded-br-md',download: true}

      ]

    return (
        <div className='lg:flex capitalize flex-col top-[35%] left-0 fixed'>
           
            <ul className=''>
                {socLinks.map( ({id, child, link,style,download})=> (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  bg-gray-600 hover:ml-[-10px] ml-[-90px] hover:rounded-md duration-300 hover:bg-opacity-90 bg-opacity-70 ' + style}>
                        <a href={link} download={download} target='_blank' className='flex justify-between items-center w-full text-white' rel="noreferrer">{child}</a>
                    </li>))}
            </ul>

        </div>
    )
}

export default SideBar