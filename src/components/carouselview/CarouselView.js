import React, { Component } from 'react';
import './CarouselView.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselView extends Component {

 render(){
   return (
     <div className="carousel-view">

     <div className="image-wrapper-carousel">
     <img src="https://image.ibb.co/jeL7up/A3_optimized.jpg" alt="A3_2" border="0" />
     </div>

       <div className="scroll-left">
        <p>*ประกาศ* ขอเรียนเชิญเข้าร่วมการประชุมเพื่อหารื่อมาตรการป้องกัน แก้ไข และลดผลกระทบสิ่งแวดล้อม ในวันพฤหัสบดี ที่ 20 ก.ย. 2561 เวลา 09.00 - 12.00 น.
         ณ ห้องประชุม วี-วัน 1 (V-ONE 1) โรงแรม วี-วัน โคราช อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา </p>
       </div>

      </div>
   )
 }
}
