import React, { Component } from 'react';
import './News.css';
import $  from 'jquery';

export default class News extends Component {


componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".news-frame").scroll(function() {
        $(".news-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".news-frame").animate({
        scrollTop: $(".news-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="news-frame">
        <main>
        <div className="news-wrapper-background">
	<header>ข่าวสารโครงการ</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-news">
  <section className="news-step">
  <h1>ข่าวล่าสุด</h1>
   <hr />
  <h4> 10 มีนาคม 2561 </h4>
  <p>ตามที่กรมทางหลวง โดยสำนักงานสิ่งแวดล้อมและการมีส่วนร่วมของประชาชน ได้จัดประชุมเพื่อหารือแนวทางการศึกษาผลกระทบสิ่งแวดล้อม  ทางแยกต่างระดับจุดตัดทางหลวงหมายเลข 2 (ถนนมิตรภาพ) กับถนนเทศบาลหรือถนนช้างเผือก (แยกประโดก)
   จังหวัดนครราชสีมา เมื่อวันจันทร์ ที่ 26 กุมภาพันธ์ 2560 เวลา 08.30 - 12.00 น. ณ ห้องประชุม วี - วัน 2 โรงแรม วี - วัน โคราช อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา ที่ผ่านมานั้น
   สามารถสรุปผลการประชุมได้ดังเอกสารแนบ </p>
   <a href="https://drive.google.com/file/d/1_kqedYRRUOFKWe0Rsh8YVgK8SSCoUPep/view" target="_blank">สรุปผลของการประชุม ครั้งที่ 1</a>
   <div className="image-wrapper">
   <img src="https://image.ibb.co/ePCxyS/PR_PP01_2.jpg" alt="PR_PP01_2" border="0" />
   </div>

 <hr />
   <h4> 22 กุมภาพันธ์ 2561 </h4>
  <p>ขอเรียนเชิญเข้าร่วมการประชุมเพื่อหารื่อแนวทางการศึกษาผลกระทบสิ่งแวดล้อม ในวันจัน ที่ 26 ก.พ. 2561 เวลา 08.30 - 12.00 น.
   ณ ห้องประชุม วี-วัน 2 (V-ONE 2) โรงแรม วี-วัน โคราช อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา</p>
   <div className="image-wrapper">
   <img src="https://image.ibb.co/eOfG5x/A3.jpg" alt="A3" border="0" />
   </div>
  </section>
  </div>
</main>

        </div>
    );
  }
}
