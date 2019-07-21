import React,{Component} from 'react'
import CapstoneHeaderComponent from './CapstoneHeaderComponent';
import CapstoneMemeGeneratorComponent from './CapstoneMemeGeneratorComponent';

class CapstoneMainComponent extends Component{

    render(){
        return(
          <div className="capstone-body">
            <CapstoneHeaderComponent/>
            <CapstoneMemeGeneratorComponent/>
          </div>
        )
    }

}

export default CapstoneMainComponent