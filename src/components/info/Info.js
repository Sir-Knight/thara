import React, { Component } from 'react';
import './Info.css';
import $ , { jQuery } from 'jquery';

export default class Info extends Component {
  constructor(props) {
  super(props);
}

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
        scrollTop: $(".info-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="info-frame">
        <main>
        <div className="info-wrapper-background">
	<header>ความคืบหน้าโครงการ</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-info">
  <section className="info-step">
	<h1>ขั้นตอนการศึกษาทางด้านสิ่งแวดล้อม และกระบวนการมีส่วนร่วมของประชาชน</h1>
  <a href="https://drive.google.com/uc?export=download&id=1gugNXElrfdVc58lNbXYPx9E3wYLqqFcc" className="effect1"></a>
  </section>
  </div>
</main>

        </div>
    );
  }
}
