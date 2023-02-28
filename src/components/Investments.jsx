import React from 'react';
import Pic4 from '../assets/scroll08.png';
import Pic2 from '../assets/scroll11.png';
import Pic1 from '../assets/scroll24.png';
import Pic3 from '../assets/scroll29.png';

import Body from './Body';

const Investments = () => {

  const Heading = 'Preserve your wealth and build it over time';

  const ContentData = [
    {id:1,title:'Living Benefits',content:[`Access to guaranteed cash value`,`Earn dividends`]},
    {id:2,title:'Lifetime Guaranteed Cash Benefits',content:[`Receive annual guaranteed cash benefit equal to 2.15% or 2.25%.`]},
    {id:3,title:'Short-term Payment Options',content:[`Settle in full or up to 5 easy annual installments`,`Whichever is convenient for you.`]},
    {id:4,title:'Lifetime Insurance Coverage',content:[`Comes with guaranteed life insurance protection equal to 125% of premiums.`,`Coverage upto age 100.`]},
  ];

  const Pics = [Pic1, Pic2, Pic3, Pic4];

  return (
    <div className='pr-2'>
      <Body cData = {ContentData} heading={Heading} picAssets={Pics}/>
    </div>
  )
}

export default Investments