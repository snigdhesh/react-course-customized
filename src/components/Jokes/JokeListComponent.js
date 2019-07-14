import React,{Component} from 'react'
import JokesData from '../../models/JokesData';
import Joke from './Joke';

class JokeListComponent extends Component{
    render(){
        const jokesData2=JokesData.map(joke=><Joke key={joke.id} joke={joke}/>)
        return(
        <div className="container">
            <h1>Joke List Component</h1><hr/>
            {jokesData2}
        </div>
        )
    }
}

export default JokeListComponent