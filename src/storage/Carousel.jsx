import React, { useState } from 'react';
import Pic1 from '../assets/scroll01.jpg';
import Pic2 from '../assets/scroll02.jpg';
import Pic3 from '../assets/scroll03.jpg';
import Pic4 from '../assets/scroll04.jpg';

import { FaBars, FaTimes } from 'react-icons/fa';
import CarouselItem from './CarouselItem';

const Carousel = () => {

    const [index, setIndex] = useState(0);
    
    const slideLeft = () => {
        
        index <= 0 ? setIndex(CardData.length-1) : setIndex(index-1);
    };
    
    const slideRight = () => {
        
        index >= CardData.length-1 ? setIndex(0) : setIndex(index+1);
        console.log('here niko: '+CardData.length);
    };
    
    const CardData = [
        {   id: 1,
            name: "simon",
            img: Pic1,
        },
        {   id: 2,
            name: "neo",
            img: Pic2,
        },
        {   id: 3,
            name: "morpheus",
            img: Pic3,
        },
        {   id: 4,
            name: "trinity",
            img: Pic4,
        },
        ];

  return (
    <div>Carousel
        <FaBars onClick={slideLeft}  className="leftBtn"/>
        <FaTimes onClick={slideRight} className="rightBtn"/>
        <div className="container">
            <div className="card-container">
                
                {CardData.map((person,i) => {
                    let position =
                    i > index ? "nextCard" :
                    i === index ? "activeCard" : "prevCard";
                    console.log('position: '+position)
                    console.log('index: '+index)
                    console.log('array: '+i)
                    console.log('length: '+CardData.length);
                return <CarouselItem {...person} cardStyle={position}/>;
                })}
            </div>
        </div>

    </div>
  )
}

export default Carousel