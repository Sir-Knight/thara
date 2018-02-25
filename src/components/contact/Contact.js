import React, { Component } from 'react';
import './Contact.css';
import $ from 'jquery';
import tharaicon from './thara_logo.png';
import tescoicon from './tesco_logo.png';
import officeicon from './office_logo.png';
import lineqr from './line_qr.jpg';
import facebookqr from './facebook_qr.jpg';
import emaillogo from './email_logo.png';


export default class Contact extends Component {


  componentDidMount() {

      var head = $("header");
      var stick = "sticky";
      var bottom = $(".bottom");
      var disappear = "sticky-bottom";

      $(".contact-frame").scroll(function() {
          $(".contact-frame").scrollTop() > 300
              ? head.addClass(stick) + bottom.addClass(disappear)
              : head.removeClass(stick) + bottom.removeClass(disappear)
      })

      $(".scroll-indicator").click(function() {
      $(".contact-frame").animate({
          scrollTop: $(".contact-step").offset().top-200
      }, 1500);
  });
  }

    render() {

      return (
          <div className="contact-frame">
          <main>
          <div className="contact-wrapper-background">
  	<header>ช่องทางติดต่อ</header>
          </div>
  <div className="bottom">
    <div className="scroll-indicator"></div>
  </div>
    <div className="content-wrapper-contact">
    <section className="contact-step">

      <div className="row">
      <h1>ติดต่อสอบถามข้อมูลเพิ่มเติม</h1>
        <div className="left-column">
          <img src={officeicon}  className="office" alt="office" />
        </div>
        <div className="right-column">
            <p>สำนักงานสิ่งแวดล้อมและการมีส่วนร่วมของประชาชน
                2/486 ถนนศรีอยุธยา แขวงทุ่งพญาไท
                เขตราชเทวี กรุงเทพมหานคร  10400</p>
            <p>โทรศัพท์ : 0 2354 2777</p>
            <p>โทรสาร : 0 2354 2777</p>
        </div>
      </div>



      <div className="row">
        <h1>บริษัทที่ปรึกษา</h1>
        <div className="left-column">
           <img src={tescoicon}  className="tesco" alt="tesco" />
        </div>
        <div className="right-column">
            <p>บริษัท เทสโก้ จำกัด
             21/11-14 ซอยสุขุมวิท 18 ถนนสุขุมวิท
             แขวงคลองเตย  เขตคลองเตย กรุงเทพมหานคร 10110</p>
            <p>โทรศัพท์ : 0 2258 1320</p>
            <p>โทรสาร : 0 2258 1313</p>
        </div>
      </div>
      <div className="row">
        <div className="left-column">
          <img src={tharaicon}  className="thara" alt="thara" />
        </div>
        <div className="right-column">
                <p>บริษัท ธารา ไลน์ จำกัด
         113 ซอยรัตนาธิเบศร์ 24 ถนนรัตนาธิเบศร์
         ตำบลบางกะสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 1100</p>
            <p>โทรศัพท์ : 0 2017 7281 – 2</p>
            <p>โทรสาร : 0 2017 7282</p>
        </div>
      </div>




      <div className="row">
        <div className="left-column">
          <h2>ด้านวิศวกรรม</h2>
        </div>
        <div className="right-column">
            <h3>นางสาวจันทศิริ  สายนภา</h3>
            <p>โทรศัพท์ : 0 2258 1320 - 608,</p>
            <p>09 0678 6759</p>
            <p>โทรสาร : 0 258 1313</p>
        </div>
      </div>

      <div className="row">
        <div className="left-column">
          <h2>ด้านการมีส่วนร่วมของประชาชน</h2>
        </div>
        <div className="right-column">
            <h3>นายอภิเชษฐ์  ปานุรัตน์</h3>
            <p>โทรศัพท์ : 0 2017 7281 – 2,</p>
            <p>06 2698 7072</p>
            <p>โทรสาร : 0 2017 7882</p>
        </div>
      </div>

      <div className="row">
        <div className="left-column">
          <h2>ด้านสิ่งแวดล้อม</h2>
        </div>
        <div className="right-column">
              <h3>นายก้องเกียรติ  เรื่องศรี</h3>
              <p>โทรศัพท์ : 0 2017 7281 – 2,</p>
              <p>09 7148 0176</p>
              <p>โทรสาร : 0 2017 7882</p>
        </div>
      </div>

      <div className="row">
      <h1>ติดต่อทางสื่อต่างๆ</h1>
        <div className="left-column">
          <img src={emaillogo}  className="office" alt="office" />
        </div>
        <div className="right-column">
            <h3>Email</h3><p> pradok.underpass@gmail.com</p>
        </div>
      </div>

      <div className="row">
        <div className="left-column">
          <img src={lineqr}  className="office" alt="office" />
        </div>
        <div className="right-column">
            <h3>Line ID</h3><p className="lineid">@qfj4944h</p>
        </div>
      </div>

      <div className="row">
        <div className="left-column">
          <img src={facebookqr}  className="office" alt="office" />
        </div>
        <div className="right-column">
            <h3>Facebook Page</h3><a href="https://www.facebook.com/pradokunderpass" target="_blank">www.facebook.com/pradokunderpass</a>
        </div>
      </div>




    </section>
    </div>
  </main>

          </div>
      );
    }

}
