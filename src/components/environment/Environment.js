import React, { Component } from 'react';
import './Environment.css';
import $ , { jQuery } from 'jquery';

export default class Environment extends Component {
  constructor(props) {
  super(props);
}

componentDidMount() {

    var head = $("header");
    var stick = "sticky";
    var bottom = $(".bottom");
    var disappear = "sticky-bottom";

    $(".environment-frame").scroll(function() {
        $(".environment-frame").scrollTop() > 300
            ? head.addClass(stick) + bottom.addClass(disappear)
            : head.removeClass(stick) + bottom.removeClass(disappear)
    })

    $(".scroll-indicator").click(function() {
    $(".environment-frame").animate({
        scrollTop: $(".environment-step").offset().top-200
    }, 1500);
});
}

  render() {

    return (
        <div className="environment-frame">
        <main>
        <div className="environment-wrapper-background">
	<header>งานด้านสิ่งแวดล้อม</header>
        </div>
<div className="bottom">
  <div className="scroll-indicator"></div>
</div>
  <div className="content-wrapper-environment">
  <section className="environment-step">
	<h1>ขั้นตอนการศึกษาทางด้านสิ่งแวดล้อม และกระบวนการมีส่วนร่วมของประชาชน</h1>
  <a href="https://drive.google.com/uc?export=download&id=1gugNXElrfdVc58lNbXYPx9E3wYLqqFcc" className="effect1"></a>
  </section>
  </div>
</main>

        </div>
    );
  }
}
