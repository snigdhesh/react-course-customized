import React,{Component} from 'react'

class MessagesComponent extends Component{
    render(){
        
        return(
            <div>
                {
                    this.props.messages.length > 0 ?
                        <h6>You have {this.props.messages.length} unread messages </h6> :
                        null
                }
            </div>
            
        )
    }
}

export default MessagesComponent