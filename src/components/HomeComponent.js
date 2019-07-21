import React,{Component} from 'react'

class HomeComponent extends Component{

    render(){
        return(
            <div className="container">
                <h1>About project</h1><hr/>
                <ul>
                    <li>This project is inspired, assembled and customized from <b>Free code camp</b> tutorial by <b>Bob Ziroll</b>.</li>
                    <li>I faced few challenges while construction, which you can find under <b>Challenges I faced</b> menu item.</li>
                    <li>All sources I referred are under <b>sources</b> menu item.</li>
                </ul>
            </div>
        )
    }
}

export default HomeComponent