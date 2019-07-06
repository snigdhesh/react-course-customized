import React,{Component} from 'react';

class ClassComponent extends Component{
    render(){
        return(
           <div>
                <Header username="naga"/>
                <Greeting/>
           </div>
        )
    }    
}

class Header extends Component{
    render(){
        return (
            <div>
                <h4>You are in header of ClassComponent: {this.props.username} (Passing props in class component demo)  <label className="label"> :ClassComponent</label></h4>
            </div>
        )
    }
   
}

class Greeting extends Component{
  render(){
    const date=new Date();
    const hours=date.getHours();

    let timeOfDay;
    if(hours<12){
        timeOfDay="Morning";
    }
    else if(hours>=12 && hours < 17){
        timeOfDay="Noon";
    }
    else{
        timeOfDay="Night";
    }

    return(
        <h4>Hey !! Good {timeOfDay}! (Greeting Class component demo)  <label className="label"> :ClassComponent</label></h4>
    )
  }
}

export default ClassComponent