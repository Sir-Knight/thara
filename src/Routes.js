import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import App from './App';
import './Routes.css';
import CarouselView from './components/carouselview/CarouselView';
import About from './components/about/About';
import Test from './components/test/Test';
import Contact from './components/contact/Contact';



const Routes = (props) => {

    return(
     <div>
       <Router>
          <App>
              <Route render={({location, history, match}) => {
                return (
                    <Switch key={location.key} location={location}>
                      <Route exact path="/" component={CarouselView} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                );
              }} />
            </App>
        </Router>
     </div>
 );

};

export default Routes;
