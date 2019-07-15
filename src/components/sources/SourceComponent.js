import React,{Component} from 'react'

class SourceComponent extends Component{
    render(){
        let link=this.props.source.link
        return(
            <div>
                <div className="row" style={{marginTop:"3%"}}>
                    <div className="col-sm-12"><h6>{this.props.source.topic}</h6></div>
                    <div className="col-sm-12">
                        <a target="_blank" href={link}>{link}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SourceComponent