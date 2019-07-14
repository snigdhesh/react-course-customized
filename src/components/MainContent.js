import React,{Component} from 'react'
import Messages from '../models/Messages';
import TodolistComponent from './Todolist/TodolistComponent';
import ContactCardListComponent from './contact-cards/ContactCardListComponent';
import JokeListComponent from './Jokes/JokeListComponent';
import ProductListComponent from './products/ProductListComponent';

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

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },1000)
    //actually component is already rendered, but we are just faking time lag and changing state,
    // to test conditional rendering
  }

  render(){
    
      return (
          <main className="todo-list">
              <h1>MainContent Component</h1><hr/>

              <div>Source for dummy images:
                <a href="http://placekitten.com/" target="_blank"> place kitten</a>,
                <a href="http://www.fillmurray.com/" target="_blank"> fill murray</a>
              </div>

              <TodolistComponent/>
              <ContactCardListComponent/>
              <JokeListComponent/>
              <ProductListComponent/>
          </main>
      )
    }
}

export default MainContent