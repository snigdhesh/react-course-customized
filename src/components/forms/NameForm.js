// This forms is used in FormsComponent.js

import React,{Component} from 'react'
import '../css/nameform.css';

class NameForm extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            message:'',
            course:'',
            clientTech:'',
            serverTech:''
        }
        // this.handleNameChange=this.handleNameChange.bind(this);
        // this.handleEmailChange=this.handleEmailChange.bind(this);
        // this.handleMessageChange=this.handleMessageChange.bind(this);
        // this.handleCourseChange=this.handleCourseChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputElement=this.handleInputElement.bind(this);
    }

    handleInputElement(event){
        this.setState({
            [event.target.name]: event.target.type==="checkbox" ? event.target.checked : event.target.value
        })
    }

    //***************************** For reference, do not delete ************************************/
    // handleNameChange(event){
    //     this.setState({nameValue:event.target.value});        
    // }
    // handleMessageChange(event){
    //     this.setState({messageValue:event.target.value});        
    // }
    // handleEmailChange(event){
    //     this.setState({emailValue:event.target.value});
    // }
    // handleCourseChange(event){
    //     this.setState({courseValue:event.target.value});
    // }

    handleSubmit(){
        let clientTech, serverTech;
        if(this.state.clientTech){clientTech="You know client technologies"}else{serverTech="You don't know client technologies"}
        if(this.state.serverTech){serverTech="You know server technologies"}else{serverTech="You don't know sever technologies"}
        alert("You entered name as : " + this.state.name
            +"\nYou entered email as: "+this.state.email
            +"\nYou entered message as: "+this.state.message
            +"\nYour favourite course is: "+this.state.course
            +"\n"+clientTech+" and "+serverTech);   
            event.preventDefault(); //sometimes page will refresh after submit, this will avoid that
    }

    render(){
        let labelStyle={
            border: "0px solid black",
            padding: "1.5%",//This makes text align to vertical center
            color: ""
        }
        let clientTech, serverTech;
        if(this.state.clientTech){clientTech="clientTechnologies"}
        if(this.state.serverTech){serverTech="serverTechnologies"}
        return(
            <div className="container">
                <h1>Name Form Component</h1><hr/>
                <form onSubmit={this.handleSubmit}>                    
                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Name</h6></div>
                        <div className="col-md-4"><input name="name" type="text" className="form-control" value={this.state.name} onChange={this.handleInputElement} placeholder="naga"/></div>
                        <div className="col-md-4" style={labelStyle}> <span>{this.state.name}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Email</h6></div>
                        <div className="col-md-4"><input name="email" type="text" className="form-control" value={this.state.email} onChange={this.handleInputElement} placeholder="naga@example.com"/></div>
                        <div className="col-md-4" style={labelStyle}> <span>{this.state.email}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Message</h6></div>
                        <div className="col-md-4"><textarea name="message" value={this.state.message} className="form-control" placeholder="You can contact me for any questions regarding this sample react project I developed." onChange={this.handleInputElement}></textarea></div>
                        <div className="col-md-4" style={labelStyle}>{this.state.message}</div>
                    </div>

                    
                    <div className="row" style={{border: "0px solid black",marginTop:"1.5%"}}>
                        <div className="col-md-2" style={labelStyle}><h6>Known technologies</h6></div>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input name="clientTech" className="form-check-input" type="checkbox" id="clientTech" checked={this.state.clientTech} onChange={this.handleInputElement}/>
                                <label className="form-check-label">Client side technologies</label>
                            </div>
                            <div className="form-check">
                                <input name="serverTech" className="form-check-input" type="checkbox" id="serverTech" checked={this.state.serverTech} onChange={this.handleInputElement}/>
                                <label className="form-check-label">Server side technologies</label>
                            </div>
                        </div>
                        <div className="col-md-4">{clientTech}<br/>{serverTech}</div>
                    </div>

                    <div className="row" style={{border: "0px solid black",marginTop:"1.5%"}}>
                        <div className="col-md-2" style={labelStyle}><h6>Select your favourite course</h6></div>
                        <div className="col-md-4">
                            <select name="course" value={this.state.course} className="form-control" onChange={this.handleInputElement}>
                                <option value="">Select</option>
                                <option value="react">React</option>
                                <option value="angular">Angular</option>
                                <option value="redux">Redux</option>
                            </select>
                        </div>
                        <div className="col-md-4">{this.state.course}</div>
                    </div>

                    <br/><br/><br/>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"><input type="submit" className="btn btn-dark" value="submit" /></div>
                        <div className="col-md-4"></div>
                    </div>

                </form>               
           </div>
        )
    }
}

export default NameForm

