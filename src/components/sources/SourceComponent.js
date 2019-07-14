import React,{Component} from 'react'

class SourceComponent extends Component{
    render(){
        let link=this.props.source.link
        return(
            <div className="">
                <div className="row">
                    <div className="col-sm-2"><h6>{this.props.source.topic}</h6></div>
                    <div className="col-sm-10">
                        <a target="_blank" href={link}>{link}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SourceComponent