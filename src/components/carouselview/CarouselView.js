import React, { Component } from 'react';
import './CarouselView.css';
import { Carousel } from "react-responsive-carousel";
import YouTube from 'react-youtube';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselView extends Component {

 render(){

   const opts = {
     height: '360',
     width: '640',
     playerVars: { // https://developers.google.com/youtube/player_parameters
       autoplay: 1
     }
   };

   return (
     <div className="carousel-view">

     <YouTube
       videoId="3HQeRJTJU2c"
       opts={opts}
       className="Youtubevideo"
       onReady={this._onReady}
     />

      </div>
   )
 }
}
