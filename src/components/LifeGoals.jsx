import React from 'react';
import Pic4 from '../assets/scroll10.png';
import Pic1 from '../assets/scroll25.png';
import Pic2 from '../assets/scroll27.png';
import Pic3 from '../assets/scroll28.png';

import Body from './Body';

const LifeGoals = () => {

  const Heading = 'Have Peace of Mind While You Aim for Your Life Goals';
  
  const ContentData = [
    {id:1,title:'Life insurance coverage',content:[`Guaranteed life insurance benefit to assist the family's financial needs in the event of untimely demise`,`Providing coverage until age 100 or maturity`]},
    {id:2,title:'Lifetime guaranteed cash benefits',content:[`Enjoy regular guaranteed cash benefits throughout your lifetime.`,`Starting at the end of the sixth year of your plan and every two years afterwards.`]},
    {id:3,title:'Living benefits',content:[`Earn dividends from your plan which you may use to increase your insurance coverage or receive in cash.`,`In case of emergencies, money also comes in handy via a policy loan against your plan’s cash value.`]},
    
  ];

  const Pics = [Pic1, Pic2, Pic3, Pic4];

  return (
    <div className='pr-2'>
        <Body cData = {ContentData} heading={Heading} picAssets={Pics}/>
    </div>
  )
}

export default LifeGoals