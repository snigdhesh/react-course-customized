import React,{Component} from 'react'

class Auth2Component extends Component{
    render(){
        let buttonText=this.props.session ? <span>logout</span> : <span>login</span>
        let sessionText= this.props.session ? <span> You are logged in</span> : <span> You are logged out</span>
        return(
            
            <div>
                <div className="col-sm-9" style={{"float":"left"}}>
                    {sessionText}
                    {console.log("current session", this.props.session)}
                </div>
                <div className="col-sm-3" style={{"float":"left"}}>
                    <button className="btn btn-primary" onClick={this.props.handleSession}>{buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Auth2Component