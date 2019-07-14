import React,{Component} from 'react'
import NameForm from './NameForm';

class FormsComponent extends Component{
    render(){
      console.log("In forms component !!!");
        return(
          <div className="container">
            <h1>Forms Component</h1>
            <hr/>
            <p>An input form element whose value is controlled by React, is called a <b>controlled component</b>.</p>            
            <p><b>regular forms:</b> all form data is in match with state, ex: input box data, is updated to state.</p>
            <p><b>controlled forms:</b> Here state directs what to show in input box.</p>
            <p>To put is simply, in reg forms, form data is passed to state, and in controlled forms state decides what to show in form.</p>
            <NameForm/>
          </div>
        )
    }
}

export default FormsComponent