import React from 'react';

class TodoItem extends React.Component{
   render(){
    const completedTaskStyle={
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div>
            {/* <div className="todo-item">
                <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
                <p>{props.item.text}</p>
            </div> */}
            <div className="form-check">
                <label className="form-check-label" >
                    <input type="checkbox" className="form-check-input" checked={this.props.item.completed} onChange={()=>this.props.handleChange(this.props.item.id)}/>
                    <span style={this.props.item.completed ? completedTaskStyle : null}>{this.props.item.text}</span>
                </label>
            </div>
        </div>


)
   }
}

export default TodoItem
