import React,{Component} from 'react'

class Auth2Component extends Component{
    render(){        
        let buttonText=this.props.session ? <span>logout</span> : <span>login</span>
        let sessionText= this.props.session ? <span> You are logged in :)</span> : <span> You are logged out !!!</span>

        return(            
            <div className="container">
                <h1>Auth2 Component</h1>
                <hr/>
                <div style={{float:"left"}}><h4>{sessionText}</h4><p>Here button text and session text change based on condition. Ex: if login=true, then button text is displayed as "logout"</p></div>
                <div style={{float:"right",paddingLeft:"25%"}}>
                    <button className="btn btn-dark" onClick={this.props.handleSession}>{buttonText}</button>
                </div>
                
            </div>
        )
    }
}

export default Auth2Component