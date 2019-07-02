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
            <div>
            <section className="indent-1">        
                <section>
                    <div>
                        <h1>Hovering mouse over this image will print something to console, via event handling.</h1>
                        <img src="https://www.fillmurray.com/100/200" alt="sample" onMouseOver={()=>console.log("You hovered on image!!!")}/>
                    </div>
                </section>
                <section>
                    <div>
                        <div>
                            <h1>Increasing count by "changing state."</h1>
                            <h1 style={{"fontSize":"72px"}}>{this.state.count}</h1>
                        <button onClick={this.handleClick}>Increase count by 1</button>
                        <button type="reset" onClick={this.reset}>reset</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        )
    }
}

export default EventHandling;