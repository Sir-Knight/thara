import React, { Component } from 'react';
import $ from 'jquery';
import logo_standard from './logo_standard.png';
import logo_highlight2 from './logo_highlight2.png';
import './Header.css';


export default class Header extends Component {

componentDidMount(){
  $(document).ready(function(){
      $('.menu-burger').click( function() {
        $('.logo').toggleClass('logo-change');
        $('.bar').toggleClass('animate'); // Creates the Hamburger -> X Animation on first click
        $('.overlay').fadeToggle(100, 'linear'); // toggles open the nav overlay // Optionally could change fadeIn & fadeut to both toggleClass
        $('.menu-options-list').delay(100).addClass('slideDownIn');	// Rapidly fades option in upward into place
      });
    });
}

  render() {
    return (
        <div className="Frame-header">
          <nav>
              <a className="nav-brand above-overlay" href="#">

                    <img src={logo_standard}  className="logo" alt="logo" />

              </a>
              <div className="menu-burger above-overlay">
                  <div className="menu-text">เมนู</div>
                  <div className="bar"></div>
              </div>
          </nav>

          <div className="overlay">
              <ul className="menu-options-list">
                <li className="menu-option option-1"><a href="#">หน้าหลัก<span>.</span></a></li>
                <li className="menu-option option-2"><a href="#">เกี่ยวกับโครงการ<span>.</span></a></li>
                <li className="menu-option option-3"><a href="#">ข้อมูล<span>.</span></a></li>
                <li className="menu-option option-5"><a href="#">ติดต่อ<span>.</span></a></li>
              </ul>
          </div>
        </div>
    );
  }
}
