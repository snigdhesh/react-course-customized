import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Auth from './Auth';
import ClassComponent from './ClassComponent';
import State from './State';

function MyInfo(){
  return(
   <div>    
    <Header/>
    <ClassComponent/>
    <State/>
    <Auth/>
    <MainContent/>
    <Footer/>
   </div>
  )
  }

export default MyInfo