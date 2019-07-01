import React from 'react'
import TodoItem from './TodoItem'
import ContactCard from './ContactCard';
import Joke from './Joke';
import JokesData from '../models/JokesData';
import ProductData from '../models/ProductData';
import Product from './Product';
import TodoData from '../models/TodoData';
import EventHandling from './EventHandling';

function MainContent(){
  const jokesData2=JokesData.map(joke=><Joke key={joke.id} joke={joke}/>)
  const productData2=ProductData.map(product=><Product key={product.id} product={product}/>)
  const todoData2=TodoData.map(todoitem=><TodoItem key={todoitem.id} item={todoitem}/>)

    return (
        <main className="todo-list">
          {/* To do list component */}
            <div className="box-wrapper">
                <h1 className="component-title">Todo list component</h1>
                {todoData2}
            </div>

          {/* Contact card component */}
            <div className="box-wrapper">
                <h1 className="component-title">Contact card component</h1>
                <ContactCard contact={{name:"Mr.Whiskerson",phone:"Phone: (212) 555-1234", email:"mr.whiskaz@catnap.meow",src:"http://placekitten.com/100/200"}}/>
                <ContactCard contact={{name:"Mr.flyffykins",phone:"Phone: (212) 555-5678", email:"mr.fluffy@catnap.meow",src:"http://placekitten.com/200/300"}}/>
                <ContactCard contact={{name:"Mr.destroyer",phone:"Phone: (212) 142-1234", email:"mr.destroyer@catnap.meow",src:"http://placekitten.com/300/400"}}/>
                <ContactCard contact={{name:"Mr.felix",phone:"Phone: (122) 555-1234", email:"mr.felix@catnap.meow",src:"http://placekitten.com/400/500"}}/>
            </div>

          {/* Jokes component */}
            <div className="box-wrapper">
                <h1 className="component-title">Jokes component(Using loop)</h1>
                {jokesData2}
            </div>

          {/* Product component */}
            <div className="box-wrapper">
                <h1 className="component-title">Product component(Using loop)</h1>
                {productData2}
            </div>

            <div className="box-wrapper">
                <h1 className="component-title">Event handling component(Hovering on this image will print something to console.)</h1>
                <EventHandling/>
            </div>
        </main>
    )
}

export default MainContent