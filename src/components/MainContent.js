import React,{Component} from 'react'
import TodoItem from './TodoItem'
import ContactCard from './ContactCard';
import Joke from './Joke';
import JokesData from '../models/JokesData';
import ProductData from '../models/ProductData';
import Product from './Product';
import TodoData from '../models/TodoData';
import EventHandling from './EventHandling';
import ConditionalRendering from './ConditionalRendering';

class MainContent extends Component{
  constructor(){
    super();
    this.state={
      todos:TodoData,
      isLoading: true
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(id){
    this.setState(prevState=>{
      const todos2=prevState.todos.map(item=>{
        if(item.id===id){
          item.completed=!item.completed
        }
        return item
      })
      return{
        todos:todos2
      }

    })
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },5000)
    //actually component is already rendered, but we are just faking time lag and changing state,
    // to test conditional rendering
  }

  render(){
    const jokesData2=JokesData.map(joke=><Joke key={joke.id} joke={joke}/>)
    const productData2=ProductData.map(product=><Product key={product.id} product={product}/>)
    const todoData2=this.state.todos.map(todoitem=><TodoItem key={todoitem.id} item={todoitem} handleChange={this.handleChange}/>)
  
      return (
          <main className="todo-list">
             {/* Conditional rendering component */}
             <div className="box-wrapper">
                  <h1 className="component-title">Conditional Rendering component. (This component will render based on timer set: 3000)</h1>
                  <ConditionalRendering isLoading={this.state.isLoading}/>
              </div>

            {/* To do list component: This is written in a loop. */}
              <div className="box-wrapper">
                  <h1 className="component-title">Todo list component</h1>
                  {todoData2}
              </div>
  
            {/* Contact card component : This is written without loop just for demonstration purposes. */}
              <div className="box-wrapper">
                  <h1 className="component-title">Contact card component</h1>
                  <ContactCard contact={{name:"Mr.Whiskerson",phone:"Phone: (212) 555-1234", email:"mr.whiskaz@catnap.meow",src:"http://placekitten.com/100/200"}}/>
                  <ContactCard contact={{name:"Mr.flyffykins",phone:"Phone: (212) 555-5678", email:"mr.fluffy@catnap.meow",src:"http://placekitten.com/200/300"}}/>
                  <ContactCard contact={{name:"Mr.destroyer",phone:"Phone: (212) 142-1234", email:"mr.destroyer@catnap.meow",src:"http://placekitten.com/300/400"}}/>
                  <ContactCard contact={{name:"Mr.felix",phone:"Phone: (122) 555-1234", email:"mr.felix@catnap.meow",src:"http://placekitten.com/400/500"}}/>
              </div>
  
            {/* Jokes component: This is written in a loop. */}
              <div className="box-wrapper">
                  <h1 className="component-title">Jokes component(Using loop)</h1>
                  {jokesData2}
              </div>
  
            {/* Product component: This is written in a loop. */}
              <div className="box-wrapper">
                  <h1 className="component-title">Product component(Using loop)</h1>
                  {productData2}
              </div>
  
              {/* Event handling */}
              <div className="box-wrapper">
                  <h1 className="component-title">Event handling component.</h1>
                  <EventHandling/>
              </div>

             
          </main>
      )
  }
 
}

export default MainContent