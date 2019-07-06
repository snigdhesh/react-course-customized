import React from 'react';

function TodoItem(props){
    return (
            <div>
                {/* <div className="todo-item">
                    <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
                    <p>{props.item.text}</p>
                </div> */}
                <div className="form-check">
                    <label className="form-check-label" >
                        <input type="checkbox" className="form-check-input" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>{props.item.text}
                    </label>
                </div>
            </div>


    )
}

export default TodoItem
