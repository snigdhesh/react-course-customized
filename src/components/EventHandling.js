import React,{Component} from 'react';

class EventHandling extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this);
        this.reset=this.reset.bind(this);
    }
    handleClick(){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }

    reset(){
        this.setState({count: 0})
    }

    render(){
        return(
        <div className="container">  
        <h2>Event Handling Component</h2> <hr/>
            <div>
                <h4>Hovering mouse over this image will print something to console, via event handling.</h4>
                <img src="https://www.fillmurray.com/100/200" alt="sample" onMouseOver={()=>console.log("You hovered on image!!!")}/>
            </div>
            <br/><br/>
            <div>
                <h4>Increasing count by "changing state."</h4>
                <h1 style={{"fontSize":"72px"}}>{this.state.count}</h1>
                <button className="btn btn-dark btn-lg" onClick={this.handleClick}>Increase count by 1</button>
                <span style={{"padding":"5px"}}></span>
                <button className="btn btn-dark btn-lg" type="reset" onClick={this.reset}>reset</button>
            </div>    
        </div>
        )
    }
}

export default EventHandling;