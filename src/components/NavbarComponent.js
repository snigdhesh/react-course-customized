import React,{Component} from 'react'
import './css/navbar.css';
import {Link} from 'react-router-dom';

class NavbarComponent extends Component{
    render(){
        return(
                <ul>
                    <Link to="/conditional"><li>Conditional rendering</li></Link>
                    <Link to="/main"><li>Todo-list and loops</li></Link>
                    <Link to="/event"><li>Event handling</li></Link>
                    <Link to="/api"><li>API call</li></Link>
                    <Link to="/forms"><li>Forms</li></Link>
                </ul>            
        )
    }
}

export default NavbarComponent