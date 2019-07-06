import React from 'react';

function Header(){
    return (
        <div>
            <header className="navbar">Header</header>
            <h6>Source for dummy images:
                <a href="http://placekitten.com/" target="_blank"> place kitten</a>,
                <a href="http://www.fillmurray.com/" target="_blank"> fill murray</a>
                <span className="label"> :HeaderComponent</span>
            </h6> 
        </div>
    )
}


export default Header