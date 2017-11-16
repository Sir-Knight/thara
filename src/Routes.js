import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import App from './App';
import './Routes.css';
import CarouselView from './components/carouselview/CarouselView';
import About from './components/about/About';
import Info from './components/info/Info';
import Test from './components/test/Test';
import Contact from './components/contact/Contact';



const Routes = (props) => {

    return(
     <div>
       <Router>
          <App>
              <Route render={({location, history, match}) => {
                return (
                  <CSSTransitionGroup
                  transitionName="cross-fade"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}>
          <Route location={location} key={location.key}>
            <Switch>
                      <Route exact path="/" component={CarouselView} />
                      <Route path="/about" component={About} />
                      <Route path="/info" component={Info} />
                      <Route path="/contact" component={Contact} />
                      </Switch>
            </Route>
          </CSSTransitionGroup>
                );
              }} />
            </App>
        </Router>
     </div>
 );

};

export default Routes;
