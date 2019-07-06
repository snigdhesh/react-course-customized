import React,{Component} from 'react';

class Auth extends Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        let wordDisplay;
        if(this.state.isLoggedIn){
            wordDisplay="in"
        }else{
            wordDisplay="out"
        }
        return(
            <div>
                <h4>You are currently logged {wordDisplay}(Simple authentication message demo via switching state) <label className="label"> :AuthComponent</label></h4> 
            </div>
        )
    };
}

export default Auth