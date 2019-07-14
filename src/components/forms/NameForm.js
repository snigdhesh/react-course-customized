// This forms is used in FormsComponent.js

import React,{Component} from 'react'
import '../css/nameform.css';

class NameForm extends Component{
    constructor(){
        super();
        this.state={
            nameValue:'',
            emailValue:'',
            messageValue:''
        }
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleMessageChange=this.handleMessageChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleNameChange(event){
        this.setState({nameValue:event.target.value});        
    }
    handleMessageChange(event){
        this.setState({messageValue:event.target.value});        
    }
    handleEmailChange(event){
        this.setState({emailValue:event.target.value});
    }

    handleSubmit(){
        alert("You entered name as : " + this.state.nameValue
            +"\nYou entered email as: "+this.state.emailValue
            +"\nYou entered message as: "+this.state.messageValue);   
    }

    render(){
        return(
            <div className="container">
                <h1>Name Form Component</h1><hr/>
                <form onSubmit={this.handleSubmit}>                    
                    <div className="row">
                        <div className="col-md-6">
                            <h6>Name</h6>
                            <input type="text" className="form-control" value={this.state.naveValue} placeholder="naga"
                                onChange={this.handleNameChange} />
                        </div>
                        <div className="col-md-6"> <span>{this.state.nameValue}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h6>Email</h6>
                            <input type="text" className="form-control" value={this.state.emailValue} placeholder="example@naga.com"
                                onChange={this.handleEmailChange} />
                        </div>
                        <div className="col-md-6"> <span>{this.state.emailValue}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h6>Message</h6>
                            <textarea value={this.state.messageValue} className="form-control" placeholder="You can contact me for any questions regarding this sample react project I developed."
                                onChange={this.handleMessageChange}></textarea>
                        </div>
                        <div className="col-md-6">
                            {this.state.messageValue}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-dark" value="submit" />
                        </div>
                    </div>
                </form>
           </div>
        )
    }
}

export default NameForm

