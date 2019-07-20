import React,{Component} from 'react'

class TravelForm extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            Age:'',
            course:'',
            clientTech:'',
            serverTech:''
        }
    }
    render(){
        let labelStyle={
            border: "0px solid red"
        }
        let clientTech, serverTech;
        if(this.state.clientTech){clientTech="clientTechnologies"}
        if(this.state.serverTech){serverTech="serverTechnologies"}

        return(
            <div className="container">
                <h1>Travel Form</h1> <hr/>
                <form onSubmit={this.handleSubmit}>                    
                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>First name</h6></div>
                        <div className="col-md-4"><input name="firstName" type="text" className="form-control" value={this.state.name} onChange={this.handleInputElement} placeholder="First Name"/></div>
                        <div className="col-md-4"> <span>{this.state.name}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Last name</h6></div>
                        <div className="col-md-4"><input name="lastName" type="text" className="form-control" value={this.state.email} onChange={this.handleInputElement} placeholder="Last Name"/></div>
                        <div className="col-md-4"> <span>{this.state.email}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Age</h6></div>
                        <div className="col-md-4"><input name="age" type="number" className="form-control" value={this.state.name} onChange={this.handleInputElement} placeholder="Age"/></div>
                        <div className="col-md-4">{this.state.message}</div>
                    </div>



                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Gender</h6></div>
                        <div className="col-md-4">

                        <div class = "radio"><label><input type = "radio" name = "optionsRadios" id = "optionsRadios1" value = "male" checked/> Suits</label></div>
                        <div class = "radio"><label><input type = "radio" name = "optionsRadios" id = "optionsRadios2" value = "female"/>House of Cards</label></div> 


                        </div>
                        
                        <div className="col-md-4">{this.state.message}</div>
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
                                <option value="not available">Select</option>
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

export default TravelForm