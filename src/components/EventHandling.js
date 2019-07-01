import React,{Component} from 'react';

class EventHandling extends Component{
    render(){
        return(
            <img src="https://www.fillmurray.com/100/200" alt="sample" onMouseOver={()=>console.log("You hovered on image!!!")}/>
        )
    }
}

export default EventHandling;