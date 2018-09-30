import React, { Component } from 'react';
import './CarouselView.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselView extends Component {

 render(){
   return (
     <div className="carousel-view">


     <Carousel className="carousel-wrapper" autoPlay showThumbs={false} transitionTime={700} infiniteLoop={true} showStatus={false} showIndicators={false} stopOnHover={false}>
                <div>
                  <img src="https://image.ibb.co/kd3GoH/resized_resized_1.jpg" alt="resized_resized_1" border="0" />
                </div>
                <div>
                  <img src="https://image.ibb.co/fsnLFx/resized_resized_2.jpg" alt="resized_resized_2" border="0" />
                </div>
                <div>
                 <img src="https://image.ibb.co/hgMQhc/resized_resized_3.jpg" alt="resized_resized_3" border="0" />
                </div>
                <div>
                 <img src="https://image.ibb.co/d65khc/resized_resized_4.jpg" alt="resized_resized_4" border="0" />
                </div>
                <div>
                 <img src="https://image.ibb.co/fZEd2c/resized_resized_5.jpg" alt="resized_resized_5" border="0" />
                </div>
             </Carousel>

      </div>
   )
 }
}
