import React, { Component } from 'react';
import './Local.css';
import $ from 'jquery';

export default class Local extends Component {

componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".local-frame").scroll(function() {
        $(".local-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".local-frame").animate({
        scrollTop: $(".local-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="local-frame">
        <main>
        <div className="local-wrapper-background">
	<header>งานการมีส่วนร่วมของประชาชน</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-local">
  <section className="local-step">
	<h1>ขั้นตอนการศึกษาทางด้านสิ่งแวดล้อม และกระบวนการมีส่วนร่วมของประชาชน</h1>
  <a href="https://drive.google.com/uc?export=download&id=1gugNXElrfdVc58lNbXYPx9E3wYLqqFcc" className="effect1"></a>
  </section>
  </div>
</main>

        </div>
    );
  }
}
