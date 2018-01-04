import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import './CarouselView.css';
import picturemain from './picturemain.jpg';
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import picture4 from './picture4.jpg';
import picture5 from './picture5.jpg';
import picture6 from './picture6.jpg';
import picture7 from './picture7.jpg';



export default class CarouselView extends Component {
  constructor(props) {
   super(props);
   this.state = {
     items: [
       picturemain,
       picture1,
       picture2,
       picture3,
       picture4,
       picture5,
       picture6,
       picture7
     ],
     current: 0,
     isNext: true
   };

   this.handlerPrev = this.handlerPrev.bind(this);
   this.handlerNext = this.handlerNext.bind(this);
   this.goToHistoryClick = this.goToHistoryClick.bind(this);
 }

 handlerPrev() {
   let index = this.state.current,
       length = this.state.items.length;

   if( index < 1 ) {
     index = length;
   }

   index = index - 1;

   this.setState({
     current: index,
     isNext: false
   });
 }

 handlerNext() {
   let index = this.state.current,
       length = this.state.items.length - 1;

   if( index === length ) {
     index = -1;
   }

   index = index + 1;

   this.setState({
     current: index,
     isNext: true
   });
 }

 goToHistoryClick( curIndex, index ) {
   let next = (curIndex < index);
   this.setState({
     current: index,
     isNext: next
   });
 }

 render(){
   let index = this.state.current,
       isnext = this.state.isNext,
       src = this.state.items[index];

   return (
     <div className="carousel-view">
       <div className="carousel">
        <ReactCSSTransitionGroup
           transitionName={{
           enter: isnext ? 'enter-next' : 'enter-prev',
           enterActive: 'enter-active',
           leave: 'leave',
           leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
         }}
         transitionEnterTimeout={500}
         transitionLeaveTimeout={500}
          >
            <div className="carousel_slide" key={index}>
              <img src={src}/>
            </div>
          </ReactCSSTransitionGroup>
          <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
          <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
         <div className="carousel_history">
           <History
             current={this.state.current}
             items={this.state.items}
             changeSilde={this.goToHistoryClick}
           />
          </div>
         </div>
     </div>
   )
 }
}

class History extends React.Component {

 render() {
   let current = this.props.current;
   let items = this.props.items.map( (el, index) => {
     let name = (index === current) ? 'active' : '';
     return (
       <li key={index}>
         <button
           className={name}
           onClick={ () => this.props.changeSilde(current, index) }
         ></button>
       </li>
     )
   });

   return (
     <ul>{items}</ul>
   )
 }
}
