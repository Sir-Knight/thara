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
    <div className="row">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/ecLpAx/Cover.jpg" alt="Cover" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/1Y9iDezOb1piiBBkjp5qIqROq6xuOq9-f/view" target="_blank">แผ่นพับของโครงการ</a></div>
    </div>
    <div className="row">
        <div className="col-sm-6 picture"><img src="https://image.ibb.co/hpTbqx/1_Cover.jpg" alt="1_Cover" border="0" /></div>
        <div className="col-sm-6 text"><a href="https://drive.google.com/file/d/0B9joCKMnKZ6oMnlmNFB3THJFay1ENjBzbWVldE52QktsUTF3/view" target="_blank">เอกสารประกอบการประชุม ครั้งที่ 1</a></div>
    </div>

</div>
  </section>
  </div>
</main>

        </div>
    );
  }
}
