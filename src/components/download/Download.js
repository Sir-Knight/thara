import React, { Component } from 'react';
import './Download.css';
import $ , { jQuery } from 'jquery';

export default class Download extends Component {
  constructor(props) {
  super(props);
}

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
	<h1>ขั้นตอนการศึกษาทางด้านสิ่งแวดล้อม และกระบวนการมีส่วนร่วมของประชาชน</h1>
  <a href="https://drive.google.com/uc?export=download&id=1gugNXElrfdVc58lNbXYPx9E3wYLqqFcc" className="effect1"></a>
  </section>
  </div>
</main>

        </div>
    );
  }
}
