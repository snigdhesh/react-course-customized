import React from 'react';

function ContactCard(props){
    return (
        <div className="side-by-side cell-md">
            <img src={props.contact.src} alt="cat logo"/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )

}

export default ContactCard