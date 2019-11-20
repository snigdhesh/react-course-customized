import React,{Component} from 'react'
import CapstoneHeaderComponent from './CapstoneHeaderComponent';
import CapstoneMemeGeneratorComponent from './CapstoneMemeGeneratorComponent';

class CapstoneMainComponent extends Component{

    render(){
        return(
          <div className="capstone-body">
            <CapstoneHeaderComponent/>
            <div>
            <p>What is a capstone project? </p>
            <p>Source: Internet</p>
            <p>A capstone project is a multifaceted assignment that serves as a culminating academic and intellectual experience for students, typically during their final year of high school or middle school, or at the end of an academic program or learning-pathway experience.</p>
            </div>
            <CapstoneMemeGeneratorComponent/>
          </div>
        )
    }

}

export default CapstoneMainComponent