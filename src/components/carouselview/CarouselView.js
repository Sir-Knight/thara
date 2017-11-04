import React, { Component } from 'react';
import './CarouselView.css';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class CarouselView extends Component {
  componentDidMount(){
      $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        arrows: false
      });
  }
  render() {
    return (
      <div className="carousel-view">
      <div className="carousel">
          <div className="item">
          <div className="imageContainer">
            <img src="https://cdni.condenast.co.uk/1566x878/s_v/suki-film-vogue-9jul15-grab_b2.jpg" />
          </div>
          </div>
          <div className="item">
          <div className="imageContainer">
            <img src="https://cdni.condenast.co.uk/1566x878/o_r/Olivia-Vestiaire-HOLDING-Still-02-36-vogue-1jul15-grab_878.jpg" />
          </div>

          </div>
          <div className="item">
          <div className="imageContainer">
            <img src="https://cdni.condenast.co.uk/1566x878/s_v/tennis-film-still-1-vogue-29jun15-grab_b.jpg" />
          </div>
          </div>


          </div>

      </div>

    );
  }
}
