import React,{Component} from 'react'

class ChallengesComponent extends Component{
    render(){
        return(
            <div className="container">
                <h1>Challenges I resolved</h1><p style={{opacity:0.5,color:"maroon"}}>I thought it would be good, to put all my challenges here. But it was too late in the game when this idea came to my mind. So I will try to update all my challenges if possible.</p><hr/>
                <h6>Tried to implement component level css, but it is conflicting with global css</h6>
                <p>So I tried to write every css in a global css file i.e, index.css > and wrote every css as class > prefixed every class name with their respective component names.</p>

                <h6>Page repositions itself automatically when scoll bar is generated.</h6>
                <p><b>overflow : scroll</b> property in css > body tag, worked like charm !!!</p>
            </div>
        )
    }
}

export default ChallengesComponent