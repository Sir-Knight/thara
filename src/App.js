import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import Header from "./components/header/Header";
import CarouselView from "./components/carouselview/CarouselView";
import About from './components/about/About';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <div id="left"></div>
        	<div id="right"></div>
        	<div id="top"></div>
        	<div id="bottom"></div>
       <div className="header_app" >
        <Header />
        </div>
        <div className="carousel_app" >
        <CarouselView />
        </div>
      </div>
    );
  }
}

export default App;
