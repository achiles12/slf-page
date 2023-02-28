import React from 'react';
import { NavLink } from 'react-router-dom';

const BlockInfo = () => {

  const itemTheme = 'h-full text-center items-center cursor-pointer hover:scale-110 duration-500 rounded-lg p-2 border-2 border-black'
  const ContentItems = [
        {id:0, goto: '/insurance', item: 'life & health insurance', style:'bg-orange-400', content:'Life and health insurance plans to meet your financial needs. From getting started with simple and affordable protection plans, to building funds with investment-linked products to fulfill life goals.'},
        {id:1, goto: '/investments', item: 'investments', style:'bg-yellow-500',content:'As Filipinos, we are hardworking and resourceful with our money. This makes investing a viable opportunity to build and grow wealth for our financial goals.'},
        {id:2, goto: '/lifegoals', item: 'life goals', style:'bg-amber-600',content:'Live, Shine, Prosper: tips and ideas on how to reach your dreams, achieve financial security, and live a brighter life.'}
      ]
    

  return (
    <div name='BlockInfo' className='px-2'>
                <div className='w-full md:w-3/5 justify grid grid-cols-3 gap-6 self-auto text-white mx-auto py-4 '>

                    {ContentItems.map( ({id, item,style,content,goto})=> (
                        <NavLink key={id} to={goto}>
                          <div key={id} className={itemTheme +' '+ style}>
                            <p className='p-1 text-xl font-bold text-black capitalize'>{item}</p>
                            <p className='p-3 text-black'>{content}</p>
                          </div>
                        </NavLink>
                        
                        ))}

                </div>
    </div>
  )
}

export default BlockInfo