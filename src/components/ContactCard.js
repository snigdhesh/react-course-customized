import React from 'react';

function ContactCard(props){
    return (
        <div className="contact-card">
            <img src={props.contact.src}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )

}

export default ContactCard