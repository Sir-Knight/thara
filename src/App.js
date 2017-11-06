import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/header/Header";
import CarouselView from "./components/carouselview/CarouselView";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="left"></div>
        	<div id="right"></div>
        	<div id="top"></div>
        	<div id="bottom"></div>
       <div className="header-app" >
        <Header />
        </div>
        <div className="carousel-app" >
        <CarouselView />
        </div>
      </div>
    );
  }
}

export default App;
