import React,{Component} from 'react';
import MessagesComponent from './MessagesComponent';
import Auth2Component from './Auth2Component';
import Messages from '../models/Messages';

class ConditionalRendering extends Component{
    constructor(){
        super();
        this.state={
            isLoading: true,
            unreadMessages: Messages,
            isUserLoggedIn: false
        }
        this.handleSession=this.handleSession.bind(this);
    }

    componentDidMount(){
        setTimeout(()=>{this.setState({isLoading: false})},2000)
    }

    handleSession(){
        this.setState({isUserLoggedIn:!this.state.isUserLoggedIn})
    }

    render(){        
        return(            
            
             <div >
                 <div className="box-wrapper">
                    {
                        this.state.isLoading ? 
                            <span><h4>Loading ... </h4></span> :
                            <h1>Conditional Component loaded !!!</h1>
                    }
                    <p>This displays "Loading..." while we fetch data from mocked server response.If loading is not done, it displays "Loading..." else it displays "component loaded". This is condition based rendering.</p>
                </div>
                <MessagesComponent messages={this.state.unreadMessages}/>
                <Auth2Component session={this.state.isUserLoggedIn} handleSession={this.handleSession}/>
              </div>
            
        )
    }
}

export default ConditionalRendering
