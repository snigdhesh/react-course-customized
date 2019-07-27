import React,{Component} from 'react'
import SourceComponent from './SourceComponent';
import SourceData from '../../models/SourcesData';

class SourceListComponent extends Component{
    render(){
        let sources=SourceData.map(source=><SourceComponent key={source.id} source={source}/>)
        return(
            <div className="container">
                <h1>Source List Component</h1><hr/>
                {sources}
            </div>
        )
    }
}

export default SourceListComponent