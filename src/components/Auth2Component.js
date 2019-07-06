import React,{Component} from 'react'

class Auth2Component extends Component{
    render(){
        
        return(
            
            <div>
                <div className="col-sm-9" style={{"float":"left"}}>
                    {
                        this.props.session ?
                            <label>You are logged in.</label> :
                            <label>You are logged out.</label>
                    }
                    {console.log("current session", this.props.session)}
                </div>
                <div className="col-sm-3" style={{"float":"left"}}>
                    <button className="btn btn-primary" onClick={()=>this.props.handleSession(this.props.session)}>
                        {
                            this.props.session ? <span>Logout</span> : <span>Login</span>
                        }
                    </button>
                </div>
            </div>
        )
    }
}

export default Auth2Component