import React,{Component} from 'react'

class ConditionalRendering extends Component{
    render(props){
        return(
            <div className="side-by-side cell-md">
                <div>
                    {
                        this.props.isLoading 
                        ? 
                            <span><h4>Loading ... </h4><img src="https://www.creditmutuel.fr/cmne/fr/banques/webservices/nswr/images/loading.gif" alt="loading"/></span> 
                        :
                            <label>Component loaded</label>
                    }
                </div>
            </div>
        )
    }
}

export default ConditionalRendering
