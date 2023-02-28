import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = (props) => {

  return (
    <div className="">
            <Carousel  infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>

                {props.picAssets.map( (image)=>(
                    <div>
                    <img src={image} alt='popular' />
                    </div>
                )
                )}


            </Carousel>
        </div>
  );
}
export default MyCarousel;