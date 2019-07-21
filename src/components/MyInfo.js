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
import TodolistComponent from './Todolist/TodolistComponent';
import ContactCardListComponent from './contact-cards/ContactCardListComponent';
import JokeListComponent from './Jokes/JokeListComponent';
import ProductListComponent from './products/ProductListComponent';
import SourceListComponent from './sources/SourceListComponent';
import CapstoneMainComponent from '../capstone-project/CapstoneMainComponent';
import ChallengesComponent from './ChallengesComponent';
import HomeComponent from './HomeComponent';

function MyInfo(){
  return(
    <Router>
    <div>
        <Header/>
        <NavbarComponent/>
              <Route path="/pieces" component={ClassComponent}/>
              <Route path="/pieces" component={State}/>        
              <Route path="/pieces" component={Auth}/> 
          <Switch>     
              <Route exact path="/home" component={HomeComponent}/>
              <Route path="/main" component={MainContent}/>
              <Route path="/conditional" component={ConditionalRendering}/>
              <Route path="/forms" component={FormsComponent}/>
              <Route path="/api" component={ApiComponent}/>
              <Route path="/event" component={EventHandling}/>
              <Route path="/todolist" component={TodolistComponent}/>
              <Route path="/contacts" component={ContactCardListComponent}/>
              <Route path="/jokes" component={JokeListComponent}/>
              <Route path="/products" component={ProductListComponent}/>
              <Route path="/sources" component={SourceListComponent}/>
              <Route path="/capstone" component={CapstoneMainComponent}/>
              <Route path="/challenges" component={ChallengesComponent}/>
          </Switch>
      
        <Footer/>
      </div>
   </Router>
  )
  }

export default MyInfo