import React, { Component } from 'react';
import './CarouselView.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselView extends Component {

 render(){
   return (
     <div className="carousel-view">

     <div className="image-wrapper-carousel">
        <img src="https://image.ibb.co/nh7yLf/M302A3.jpg" alt="M302A3" border="0" />
    </div>

    <div className="scroll-left">
      <p>*ประกาศ* ขอเรียนเชิญเข้าร่วมการประชุมสรุปผลการศึกษาผลกระทบสิ่งแวดล้อม ในวันอังคาร ที่ 30 ต.ค. 2561 เวลา 08.30 - 12.00 น.
       ณ ห้องประชุม วี-วัน 2 (V-ONE 2) โรงแรม วี-วัน โคราช อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา</p>
     </div>

      </div>
   )
 }
}
