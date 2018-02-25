import React, { Component } from 'react';
import './Info.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import $ from 'jquery';

export default class Info extends Component {

componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".info-frame").scroll(function() {
        $(".info-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".info-frame").animate({
        scrollTop: $(".info-eng").offset().top-200
    }, 1500);
});
}

  render() {

    return (
    <div className="info-frame">
        <main>
        <div className="info-wrapper-background">
            	<header>ความก้าวหน้าของโครงการ</header>
        </div>
                  <div className="bottom">
                    <div className="scroll-indicator"></div>
                  </div>
        <div className="content-wrapper-info">
                    <section className="info-eng">
                        <h1>ด้านวิศวกรรม</h1>
                        <p>
                        อยู่ระหว่างการศึกษาด้านการจราจรและการระบายน้ำ เพื่อนำไปประกอบการออกแบบรายละเอียด
                       </p>
                    </section>
                    <section className="info-env">
                          <h1>ด้านสิ่งแวดล้อม</h1>
                          <p>
                          อยู่ระหว่างการศึกษาผลกระทบสิ่งแวดล้อมเบื้องต้นเพื่อคัดกรองปัจจัยทางด้านสิ่งแวดล้อมที่คาดว่าจะเกิดผลกระทบอย่างมีนัยสำคัญ เพื่อนำไปศึกษาผลกระทบสิ่งแวดล้อมในขั้นรายละเอียดต่อไป
                         </p>
                         <p>
                         สำหรับงานภาคสนามได้มีการลงพื้นที่เพื่อสำรวจสภาพสิ่งแวดล้อมในด้านต่างๆ เช่น
                         </p>
                         <ul className="list-info">
                         <li>การใช้ประโยชน์ที่ดิน</li>
                         <li>พื้นที่อ่อนไหวสิ่งแวดล้อม</li>
                         <li>แหล่งน้ำในพื้นที่โครงการ</li>
                         </ul>
                         <div className="carousel-view">
                           <Carousel className="carousel-wrapper-info" autoPlay showThumbs={false} transitionTime={700} infiniteLoop={true} showStatus={false} showIndicators={false} stopOnHover={false}>
                               <div>
                                    <img src="https://image.ibb.co/jVJiJH/gen3.jpg" alt="gen3" border="0" />
                                </div>
                               <div>
                                <img src="https://image.ibb.co/hQJiJH/gen2.jpg" alt="gen2" border="0" />
                               </div>
                               <div>
                                <img src="https://image.ibb.co/iSwLyH/gen1.jpg" alt="gen1" border="0" />
                               </div>
                            </Carousel>
                            </div>
                    </section>
                    <section className="info-env">
                        <h1>ด้านการมีส่วนร่วมของประชาชน</h1>
                        <p>
                         การพบปะหารือพบปะหารือ และแนะนำโครงการแก่ ผู้นำชุมชน กำนันและผู้ใหญ่บ้าน
                       </p>
                       <p>เมื่อวันที่ 23 – 24 ธันวาคม 2560</p>
                       <Carousel className="carousel-wrapper-info" autoPlay showThumbs={false} transitionTime={700} infiniteLoop={true} showStatus={false} showIndicators={false} stopOnHover={false}>
                           <div>
                                <img src="https://image.ibb.co/cC1QXc/pe1.jpg" alt="pe1" border="0" />
                            </div>
                           <div>
                            <img src="https://image.ibb.co/d8akXc/pe2.jpg" alt="pe2" border="0" />
                           </div>
                           <div>
                            <img src="https://image.ibb.co/ePy5Xc/pe3.jpg" alt="pe3" border="0" />
                           </div>
                           <div>
                            <img src="https://image.ibb.co/nGBQXc/pe4.jpg" alt="pe4" border="0" />
                           </div>
                        </Carousel>
                    </section>
                    <section className="info-eng">
                        <h1>การพบปะหารือพบปะหารือและแนะนำโครงการเมื่อวันที่ 20 กุมภาพันธ์ 2561</h1>
                        <Carousel className="carousel-wrapper-info" autoPlay showThumbs={false} transitionTime={700} infiniteLoop={true} showStatus={false} showIndicators={false} stopOnHover={false}>
                            <div>
                                 <img src="https://image.ibb.co/jyOxCc/ex0.jpg" alt="ex0" border="0" />
                                 <p className="legend des"> ผู้อำนวยการแขวงทางหลวงนครราชสีมาที่ 1 </p>
                             </div>
                            <div>
                             <img src="https://image.ibb.co/fq74Qx/ex1.jpg" alt="ex1" border="0" />
                             <p className="legend des"> นายมุรธาธีร์  รักชาติเจริญ รองผู้ว่าราชการจังหวัดนครราชสีมา </p>
                            </div>
                            <div>
                             <img src="https://image.ibb.co/jwGaXc/ex2.jpg" alt="ex2" border="0" />
                             <p className="legend des"> นายอำเภอเมืองนครราชสีมา </p>
                            </div>
                            <div>
                             <img src="https://image.ibb.co/fOccdH/ex3.jpg" alt="ex3" border="0" />
                             <p className="legend des">ผู้แทน ทรัพยากรธรรมชาติและสิ่งแวดล้อมจังหวัดนครราชสีมา</p>
                            </div>
                         </Carousel>
                    </section>
       </div>
</main>

        </div>
    );
  }
}
