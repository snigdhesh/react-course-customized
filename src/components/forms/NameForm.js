// This forms is used in FormsComponent.js

import React,{Component} from 'react'

class NameForm extends Component{
    constructor(){
        super();
        this.state={
            inputValue:'',
            textAreaValue:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleTextAreaChange=this.handleTextAreaChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleInputChange(event){
        this.setState({inputValue:event.target.value});        
    }
    handleTextAreaChange(event){
        this.setState({textAreaValue:event.target.value});        
    }

    handleSubmit(){
        alert("You entered first name as : " + this.state.inputValue
            +"\nYou entered description as: "+this.state.textAreaValue);
        
    }

    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               Enter your name: <input type="text" value={this.state.inputValue} placeholder="firstName" onChange={this.handleInputChange}/>
                <p>{this.state.inputValue}</p>
               
               <p>Enter description:</p>
               <textarea value={this.state.textAreaValue} onChange={this.handleTextAreaChange}></textarea>
               <p>{this.state.textAreaValue}</p>
               <input type="submit" value="submit"/>
           </form>
        )
    }
}

export default NameForm

