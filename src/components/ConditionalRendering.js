import React,{Component} from 'react'

class ConditionalRendering extends Component{
    render(props){
        return(
            <div>
                {this.props.isLoading ? <span><h1>Loading ... </h1><img src="https://www.creditmutuel.fr/cmne/fr/banques/webservices/nswr/images/loading.gif" alt="loading"/></span> :<h1>Component loaded</h1>}
            </div>
        )
    }
}

export default ConditionalRendering
