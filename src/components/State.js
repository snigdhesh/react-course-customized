import React,{Component} from 'react';

class State extends Component{
    constructor(){
        super();
        this.state={
            name:"naga",
            age:"27"
        }
    }
    render(){
        return(
           <div>
               <h1>{this.state.name},{this.state.age} years old (Adding state to class demo)</h1>
           </div>
        )
    }
}

export default State