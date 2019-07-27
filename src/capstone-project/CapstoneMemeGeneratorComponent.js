import React,{Component} from 'react'

class CapstoneMemeGeneratorComponent extends Component{
    constructor(){
        super();
        this.state={
            topText:'',
            bottomText:'',
            randomImage: 'https://i.imgflip.com/360srk.jpg',
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.generateRandomMeme=this.generateRandomMeme.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(jsonres=>{
                //"jsonres.data.memes" can be written as const{memes} = jsonres.data
                const{memes}=jsonres.data;
                this.setState({allMemeImgs:memes});
            })
    }

    handleChange(event){
        const {name, value}=event.target
        this.setState({
            [name]:value
        })

    }

    generateRandomMeme(){
        let rand=Math.floor(Math.random()*this.state.allMemeImgs.length);        
        this.setState(prevState=>{
            return{                
                randomImage: prevState.allMemeImgs[rand].url
            }
        })
        event.preventDefault(); //Sometimes this will refresh page on submit, so preventDefault() method avoids that.
    }

    render(){
        return(
            <div>
                <form className="capstone-meme-form" onSubmit={this.generateRandomMeme}>
                    <input name="topText" type="text" placeholder="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input name="bottomText" type="text" placeholder="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button>Gen</button>
                </form>
                <div className="capstone-meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }

}

export default CapstoneMemeGeneratorComponent