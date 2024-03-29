import React,{Component} from 'react'

class MessagesComponent extends Component{
    render(){
        
        return(
            <div className="container">
                <h1>Messages Component</h1>
                <hr/>
                {
                    this.props.messages.length > 0 ? <h4>You have {this.props.messages.length} unread messages </h4>:null
                }
                <p>Here length of unread messages is coming from mocked server response, if length is greater than 0, you will see number of unread messages, else you will see null.</p>
            </div>            
        )
    }
}

export default MessagesComponent