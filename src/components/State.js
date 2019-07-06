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
               <h4>{this.state.name},{this.state.age} years old (Adding state to class demo) <label className="label"> :StateComponent</label></h4>
           </div>
        )
    }
}

export default State