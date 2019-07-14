import React,{Component} from 'react'

class Auth2Component extends Component{
    render(){
        
        let buttonText=this.props.session ? <span>logout</span> : <span>login</span>
        let sessionText= this.props.session ? <span> You are logged in :)</span> : <span> You are logged out !!!</span>
        return(            
            <div className="box-wrapper">
                <div style={{float:"left"}}><h1>{sessionText}</h1></div>
                <div style={{float:"right",paddingLeft:"25%"}}>
                    <button className="btn btn-primary" onClick={this.props.handleSession}>{buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Auth2Component