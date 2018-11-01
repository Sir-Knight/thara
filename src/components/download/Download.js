import React, { Component } from 'react';
import './Download.css';
import $ from 'jquery';

export default class Download extends Component {


componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".download-frame").scroll(function() {
        $(".download-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".download-frame").animate({
        scrollTop: $(".download-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="download-frame">
        <main>
        <div className="download-wrapper-background">
	<header>เอกสารประชาสัมพันธ์</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-download">
  <section className="download-step">
	<h1>รายการดาวน์โหลด เอกสารประชาสัมพันธ์</h1>
  <div className="container-downloadable">
    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/ecLpAx/Cover.jpg" alt="Cover" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1Y9iDezOb1piiBBkjp5qIqROq6xuOq9-f/view" target="_blank">แผ่นพับของโครงการ</a></div>
    </div>
    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/hpTbqx/1_Cover.jpg" alt="1_Cover" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/0B9joCKMnKZ6oMnlmNFB3THJFay1ENjBzbWVldE52QktsUTF3/view" target="_blank">เอกสารประกอบการประชุม ครั้งที่ 1</a></div>
    </div>

    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/ePCxyS/PR_PP01_2.jpg" alt="PR_PP01_2" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1_kqedYRRUOFKWe0Rsh8YVgK8SSCoUPep/view" target="_blank">สรุปผลของการประชุม ครั้งที่ 1</a></div>
    </div>

    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/kVHuoe/PR_PP_02.jpg" alt="PR_PP_02" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/12erefZ50hClcfuP0v0PlNOL0U-fKWiRM/view" target="_blank">สรุปผลของการประชุม ครั้งที่ 2</a></div>
    </div>

    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/eVLdYL/3.jpg" alt="เอกสารประกอบการประชุมครั้งที่3" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1ctNCy3G16_o5Nw_GVK-swQrIXHtzi8Wy/view" target="_blank">เอกสารประกอบการประชุม ครั้งที่ 3</a></div>
    </div>

    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/k7W7Sf/PRPP03.jpg" alt="PR_PP_03" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1RKFD3bRA15L7H4s9L6hnsuNA9Usc_4pp/view" target="_blank">สรุปผลของการประชุม ครั้งที่ 3</a></div>
    </div>

    <div className="row-download">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/dQR7Sf/Beochure-M3.jpg" alt="BrochureM3" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1vinjBcueqMcGsZmGNNovVjmvuy7y8UaL/view" target="_blank">โบรชัวร์</a></div>
    </div>

</div>
  </section>
  </div>
</main>

        </div>
    );
  }
}
