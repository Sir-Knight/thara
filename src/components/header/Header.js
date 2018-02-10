import React, { Component } from 'react';
import $ from 'jquery';
import logo_orange from './logo_orange.png';
import { Link } from "react-router-dom";
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

      $('.link').click( function() {
        $('.menu-burger').click();
      });
    });


}

  render() {
    return (
        <div className="Frame-header">
          <nav className="navigation">
              <a className="nav-brand above-overlay" href="/">

                    <img src={logo_orange}  className="logo" alt="logo" />

              </a>
              <div className="menu-burger above-overlay">
                  <div className="menu-text">เมนู</div>
                  <div className="bar"></div>
              </div>
          </nav>

          <div className="overlay">
              <ul className="menu-options-list">
                <li className="menu-option option-1"><Link className="link link--surinami" to='/'><span data-letters-l="หน้า" data-letters-r="หลัก">หน้าหลัก</span></Link></li>
                <li className="menu-option option-2"><Link className="link link--surinami" to='/about'><span data-letters-l="เกี่ยวกับ" data-letters-r="โครงการ">เกี่ยวกับโครงการ</span></Link></li>
                <li className="menu-option option-8"><Link className="link link--surinami" to='/contact'><span data-letters-l="ติด" data-letters-r="ต่อ">ติดต่อ</span></Link></li>
              </ul>
          </div>
        </div>
    );
  }
}
