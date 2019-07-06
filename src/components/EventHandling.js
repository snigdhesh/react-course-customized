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
                        <label>Hovering mouse over this image will print something to console, via event handling.</label>
                        <img src="https://www.fillmurray.com/100/200" alt="sample" onMouseOver={()=>console.log("You hovered on image!!!")}/>
                    </div>
                </section>
                <section>
                    <div>
                        <div>
                            Increasing count by "changing state."<br/>
                            <h1 style={{"fontSize":"72px","marginLeft":"20%"}}>{this.state.count}</h1><br/><br/>
                        <button className="btn btn-primary" onClick={this.handleClick}>Increase count by 1</button>
                        <span style={{"padding":"5px"}}></span>
                        <button className="btn btn-primary" type="reset" onClick={this.reset}>reset</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
        )
    }
}

export default EventHandling;