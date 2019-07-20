import React,{Component} from 'react'

class TravelForm extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            destination:'',
            veg:'',
            nonVeg:'',
            lactoseFree:'',
            kosher:''
        }
        this.handleInputElement=this.handleInputElement.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputElement(event){
        const {name, value, checked, type}=event.target;
        this.setState({
            [name]: type==="checkbox" ? checked : value
        })
    }

    handleSubmit(){
        let passengerDiet=[];
        if(this.state.veg){passengerDiet.push("Vegeterian")}
        if(this.state.nonVeg){passengerDiet.push("Non Vegeterian")}
        if(this.state.kosher){passengerDiet.push("Kosher")}
        if(this.state.lactoseFree){passengerDiet.push("Lactose free")}

        let passengerDetails={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
            destination: this.state.destination,
            gender: this.state.gender,
            diet: passengerDiet
            
        }
       alert(JSON.stringify(passengerDetails));
       
       event.preventDefault(); //sometimes page will refresh after submit, this will avoid that
    }

    handleReset(){
        document.getElementById("travelForm").reset();
    }


    render(){
        let labelStyle={
            border: "0px solid red",
            padding: "1%" //This makes text align to vertical center
        }

        //Generating text for checkbox values
        let veg,nonVeg,kosher,lactoseFree;
        veg = this.state.veg ? "Vegeterian" : null
        nonVeg = this.state.nonVeg ? "Non Vegeterian" : null
        lactoseFree = this.state.lactoseFree ? "Lactose Free" : null
        kosher = this.state.kosher ? "Kosher" : null

        return(
            <div className="container">
                <h1>Travel Form</h1> <hr/>
                <form id="travelForm" onSubmit={this.handleSubmit}>                    
                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>First name</h6></div>
                        <div className="col-md-4"><input name="firstName" type="text" className="form-control" value={this.state.firstName} onChange={this.handleInputElement} placeholder="First Name"/></div>
                        <div className="col-md-4" style={labelStyle}> <span>{this.state.firstName}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Last name</h6></div>
                        <div className="col-md-4"><input name="lastName" type="text" className="form-control" value={this.state.lastName} onChange={this.handleInputElement} placeholder="Last Name"/></div>
                        <div className="col-md-4" style={labelStyle}> <span>{this.state.lastName}</span></div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Age</h6></div>
                        <div className="col-md-4"><input name="age" type="number" className="form-control" value={this.state.age} onChange={this.handleInputElement} placeholder="Age"/></div>
                        <div className="col-md-4" sytle={labelStyle}>{this.state.age}</div>
                    </div>

                    <div className="row">
                        <div className="col-md-2" style={labelStyle}><h6>Gender</h6></div>
                        <div className="col-md-6">
                            <div className="col-sm-3 radio" style={{float:"left", border: "0px solid black",padding:"1%"}}><input type="radio" name="gender" id="male" value={"male"} checked={this.state.gender === "male"} onChange={this.handleInputElement}/><label>Male</label></div>
                            <div className="col-sm-3 radio"style={{float:"left",border: "0px solid black",padding:"1%"}}><input type="radio" name="gender" id="female" value={"female"} checked={this.state.gender === "female"} onChange={this.handleInputElement}/><label>Female</label></div> 
                        </div>                        
                        <div className="col-md-4">{this.state.gender}</div>
                    </div>

                    


                    <div className="row" style={{border: "0px solid black",marginTop:"1.5%"}}>
                        <div className="col-md-2" style={labelStyle}><h6>Select your destination</h6></div>
                        <div className="col-md-4">
                            <select name="destination" value={this.state.destination} className="form-control" onChange={this.handleInputElement}>
                                <option value="">Select</option>
                                <option value="atlanta">ATL</option>
                                <option value="new york">NYC</option>
                                <option value="california">CA</option>
                            </select>
                        </div>
                        <div className="col-md-4" style={labelStyle}>{this.state.destination}</div>
                    </div>

                    <div className="row">
                            <div className="col-md-2" style={labelStyle}><h6>Dietery restrictions</h6></div>
                            <div className="col-md-4">
                                <div className="form-check">
                                    <input name="veg" className="form-check-input" type="checkbox" id="clientTech" checked={this.state.veg} onChange={this.handleInputElement}/>
                                    <label className="form-check-label">Vegeterian</label>
                                </div>
                                <div className="form-check">
                                    <input name="nonVeg" className="form-check-input" type="checkbox" id="serverTech" checked={this.state.nonVeg} onChange={this.handleInputElement}/>
                                    <label className="form-check-label">Non-Vegeterian</label>
                                </div>
                                <div className="form-check">
                                    <input name="lactoseFree" className="form-check-input" type="checkbox" id="clientTech" checked={this.state.lactoseFree} onChange={this.handleInputElement}/>
                                    <label className="form-check-label">lactose free</label>
                                </div>
                                <div className="form-check">
                                    <input name="kosher" className="form-check-input" type="checkbox" id="serverTech" checked={this.state.kosher} onChange={this.handleInputElement}/>
                                    <label className="form-check-label">kosher</label>
                                </div>
                            </div>
                            <div className="col-md-4" >{veg}<br/>{nonVeg}<br/>{lactoseFree}<br/>{kosher}</div>
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