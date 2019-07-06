import React from 'react';

function Product(props){
    return (
        <div>
            <h5>{props.product.name}</h5>
            <p>{props.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}
               - {props.product.description}</p>
        </div>
    )
}


export default Product