import React from 'react';

function Joke(props){
    return (
        <div>
            <span style={{color:"red",display: props.joke.question ? 'block' : 'none'}}><label>que: </label><span>{props.joke.question}</span><br/></span>
            <label>ans: </label><span>{props.joke.punchLine}</span>
            <br/><br/>
        </div>
    )
}

export default Joke