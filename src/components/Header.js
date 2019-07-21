import React from 'react';
import {Link} from 'react-router-dom';
// import { Redirect } from 'react-router';
// import PropTypes from 'prop-types';

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            isRedirect: false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        console.log("image clicked");
        this.setState({isRedirect:true})
        
           
    }
    render(){
        return (
            <header className="header">
                <Link to="/home"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="banner-logo"/></Link>
                <p>Header</p>
                <p style={{opacity: 0.5}}>This project is assembled and customized by Naga Vadlapudi</p>
            </header>
    
        )
    }
}

export default Header