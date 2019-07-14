import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Auth from './Auth';
import ClassComponent from './ClassComponent';
import State from './State';
import NavbarComponent from './NavbarComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ConditionalRendering from './ConditionalRendering';
import FormsComponent from './forms/FormsComponent';
import ApiComponent from './ApiComponent';
import EventHandling from './EventHandling';

function MyInfo(){
  return(
    <Router>
    <div>
        <Header/>
        <NavbarComponent/>
      
          <Switch>
              <Route path="/pieces" component={ClassComponent}/>
              <Route path="/pieces" component={State}/>        
              <Route path="/pieces" component={Auth}/>       
              <Route path="/main" component={MainContent}/>
              <Route path="/conditional" component={ConditionalRendering}/>
              <Route path="/forms" component={FormsComponent}/>
              <Route path="/api" component={ApiComponent}/>
              <Route path="/event" component={EventHandling}/>
          </Switch>
      
        <Footer/>
      </div>
   </Router>
  )
  }

export default MyInfo