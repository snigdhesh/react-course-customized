import React,{Component} from 'react'
import Joke from './Joke';
import JokesData from '../models/JokesData';
import ProductData from '../models/ProductData';
import Product from './Product';

import Messages from '../models/Messages';
import TodolistComponent from './Todolist/TodolistComponent';
import ContactCardListComponent from './contact-card/ContactCardListComponent';

class MainContent extends Component{
  constructor(){
    super();
    
    this.state={
      isLoading: true,
      unreadMessages:Messages,
      isUserLoggedIn: false
    }
    this.handleSession=this.handleSession.bind(this);
  }

  handleSession(){
    this.setState(prevState=>{
      return {
        isUserLoggedIn:!prevState.isUserLoggedIn
      }
    })
  }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({isLoading:false})
  //   },5000)
  //   //actually component is already rendered, but we are just faking time lag and changing state,
  //   // to test conditional rendering
  // }

  render(){
    const jokesData2=JokesData.map(joke=><Joke key={joke.id} joke={joke}/>)
    const productData2=ProductData.map(product=><Product key={product.id} product={product}/>)
    
  
      return (
          <main className="todo-list">
            <h1>MainContent Component</h1><hr/>
            <div>Source for dummy images:
              <a href="http://placekitten.com/" target="_blank"> place kitten</a>,
              <a href="http://www.fillmurray.com/" target="_blank"> fill murray</a>
            </div>
            <TodolistComponent/>
            <ContactCardListComponent/>
           
            {/* Jokes component: This is written in a loop. */}
              <div className="box-wrapper">
                  <h4 className="component-title">Jokes (Using loop)  <label className="label">:JokeComponent</label></h4>
                  {jokesData2}
              </div>
  
            {/* Product component: This is written in a loop. */}
              <div className="box-wrapper">
                  <h4 className="component-title">Product (Using loop)  <label className="label">:ProductComponent</label></h4>
                  {productData2}
              </div>
          </main>
      )
  }
 
}

export default MainContent