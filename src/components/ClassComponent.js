import React,{Component} from 'react';

class ClassComponent extends Component{
    render(){
        return(
           <div className="container">
               <h1>Class Component</h1><hr/>
                <Header username="naga"/>
                <Greeting/>
           </div>
        )
    }    
}

class Header extends Component{
    render(){
        return (
            <div className="container">
                <h1>Internal Header Component (this is not imported)</h1>
                <p>You are in header of ClassComponent: {this.props.username} (Passing props in class component demo)</p>
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
        <div className="container">
            <h1>Internal Greeting Component (this is not imported)</h1>
            <p>Hey !! Good {timeOfDay}! (Greeting Class component demo)</p>
        </div>
    )
  }
}

export default ClassComponent