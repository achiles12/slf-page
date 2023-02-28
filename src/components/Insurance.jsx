import React from 'react';
import Pic3 from '../assets/scroll21.jpg';
import Pic4 from '../assets/scroll22.jpg';
import Pic1 from '../assets/scroll23.jpg';
import Pic2 from '../assets/scroll26.png';
import Body from './Body';

const Insurance = () => {

  const Heading = 'Ensuring Money For Life';

  const ContentData = [
    {id:1,title:'Life Coverage',content:[`Guaranteed life insurance benefit to assist the family's financial needs in the event of untimely demise`,`Fulfill the dreams you have planned together`]},
    {id:2,title:'Health Coverage',content:[`Receive cash benefits upon diagnosis of any of the 100+ critical conditions across minor and major stages.`,`Avail of special access and privileges to premium workouts and various wellness activities that will help you stay fit and healthy.`]},
    {id:3,title:'Funds For Future Needs',content:[`Build funds for your own personal milestones.`,`In case of an emergency, money comes in handy via a partial fund withdrawal.`]},
    {id:4,title:'Special Bonus And Dividend Earnings',content:[`Bonus at the end of the premium paying period.`,`Earn annual dividends thereafter.`]},
  ];

  const Pics = [Pic1, Pic2, Pic3, Pic4];

  return (
    <div className='pr-2'>
      <Body cData = {ContentData} heading={Heading} picAssets={Pics}/>
    </div>
  )
}

export default Insurance