import React,{Component} from 'react';

class ApiComponent extends Component{

    constructor(){
        super();
        this.state={
            isLoading: true,
            character:{}
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            console.log("component loaded");
            fetch("https://swapi.co/api/people/1")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    isLoading: false,
                    character: data})
            }); 
        },3500);
       
       
    }
    render(){
        let content= this.state.isLoading ? <span>Loading...</span> : <span>{this.state.character.name}</span>
        return(
            <div>{content}</div>
        )
    }
}

export default ApiComponent;