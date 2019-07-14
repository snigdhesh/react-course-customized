import React,{Component} from 'react';
import TodoData from '../../models/TodoData';
import TodoItem from './TodoItem';


class TodolistComponent extends Component{
    constructor(){
        super();
        this.state={
            todos:TodoData
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
          return{todos:todos2}
        })
      }

    render(){
        const todoData2=this.state.todos.map(todoitem=><TodoItem key={todoitem.id} item={todoitem} handleChange={this.handleChange}/>)
        return(
             <div className="todo-list">
                <h1>Todolist Component</h1>
                <hr/>
                <div className="box-wrapper">{todoData2}</div>
            </div>
        )
    }
}

export default TodolistComponent