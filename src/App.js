import React, { Component } from 'react';
import Header from "./components/header/Header";
import './App.css';

export default class App extends Component {
  constructor(props) {
  super(props);
}
  propTypes: {
     route: React.PropTypes.object,
     location: React.PropTypes.object
   }

   contextTypes :{
     router: React.PropTypes.object
   }
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
        {this.props.children}
        </div>
      </div>
    );
  }
}
