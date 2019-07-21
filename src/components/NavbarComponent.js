import React,{Component} from 'react'
import './css/navbar.css';
import {Link} from 'react-router-dom';

class NavbarComponent extends Component{

    render(){
        return(
                <ul>
                    <Link to="/main"><li>Main content</li></Link>
                    <Link to="/conditional"><li>Conditional rendering</li></Link>
                    <Link to="/event"><li>Event handling</li></Link>
                    <Link to="/api"><li>API call</li></Link>
                    <Link to="/forms"><li>Forms</li></Link>
                    <Link to="/todolist"><li>Todo list</li></Link>
                    <Link to="/pieces"><li>other concepts</li></Link>
                    <Link to="/contacts"><li>contact cards</li></Link>
                    <Link to="/jokes"><li>Jokes</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                    <Link to="/capstone"><li>Capstone project</li></Link>
                    <Link to="/challenges"><li>Challenges I faced</li></Link>
                    <Link to="/sources"><li>Sources</li></Link>
                </ul>            
        )
    }
    
}

export default NavbarComponent