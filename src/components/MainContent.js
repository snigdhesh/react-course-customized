import React from 'react'
import TodoItem from './TodoItem'
import ContactCard from './ContactCard';

function MainContent(){
    return (
        <main className="todo-list">
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <br/><br/>
          <ContactCard contact={{name:"Mr.Whiskerson",phone:"Phone: (212) 555-1234", email:"mr.whiskaz@catnap.meow",src:"http://placekitten.com/100/200"}}/>
          <ContactCard contact={{name:"Mr.flyffykins",phone:"Phone: (212) 555-5678", email:"mr.fluffy@catnap.meow",src:"http://placekitten.com/200/300"}}/>
          <ContactCard contact={{name:"Mr.destroyer",phone:"Phone: (212) 142-1234", email:"mr.destroyer@catnap.meow",src:"http://placekitten.com/300/400"}}/>
          <ContactCard contact={{name:"Mr.felix",phone:"Phone: (122) 555-1234", email:"mr.felix@catnap.meow",src:"http://placekitten.com/400/500"}}/>
        </main>
    )
}

export default MainContent