import React, { Component } from 'react';
import './Engineering.css';
import $ from 'jquery';

export default class Engineering extends Component {

componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".engineering-frame").scroll(function() {
        $(".engineering-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".engineering-frame").animate({
        scrollTop: $(".engineering-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="engineering-frame">
        <main>
        <div className="engineering-wrapper-background">
	<header>งานด้านวิศวกรรม</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-engineering">
  <section className="engineering-step">
	<h1>ขั้นตอนการศึกษาทางด้านสิ่งแวดล้อม และกระบวนการมีส่วนร่วมของประชาชน</h1>
  <a href="https://drive.google.com/uc?export=download&id=1gugNXElrfdVc58lNbXYPx9E3wYLqqFcc" className="effect1"></a>
  </section>
  </div>
</main>

        </div>
    );
  }
}
