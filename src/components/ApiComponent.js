import React,{Component} from 'react';

class ApiComponent extends Component{

    constructor(){
        super();
        this.state={
            isLoading: true,
            character:{},
            content: []
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            fetch("https://swapi.dev/api/people/1")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    isLoading: false,
                    content: data})
            }); 
        },2000);       
    }

    render(){     
    console.log("In api component !!");
    console.log("current page is loading: ",this.state.isLoading);
         
        let content = this.state.isLoading ? null :this.state.content;
        let contentName= this.state.isLoading ? <span>Loading...</span> : <span>{content.name}</span>
        let films=this.state.isLoading? <span>Loading...</span>: content.films.map((item,index)=><div key={index}>{item}</div>)
        return(
            <div className="container">
                <h1>API Component</h1>
                <h5>Calls starwars API to get info and display name and films below, each time you get to this component</h5>
                <h6>Loading text is deomstrated on purpose, to show delayed response from API</h6>
                <hr/><br/><br/>
                <h5>Name </h5><hr/>
                <label>{contentName}</label><br/><br/>
                <h5>Films</h5><hr/>
                <label>{films}</label>
            </div>
        )
    }
}

export default ApiComponent;