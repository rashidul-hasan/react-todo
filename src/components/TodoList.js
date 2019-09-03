import React from 'react';


export const TodoList = (props) => {

    const onTodoStateChange = (e) => {
    	const id = e.target.value;
      	const isChecked = e.target.checked;
      	props.onTodoStateChange(id, isChecked);
    }

    return (
        <ul className="list-group">
          {props.todos.map (i  => {
            return (
                <div className="list-group-item" key={i.id}>
                    <div className="form-check">
                        <input className="form-check-input"
                               type="checkbox" defaultChecked={i.done}
                               onClick={onTodoStateChange} value={i.id}/>
                            <label className={i.done ? "form-check-label todo-item strike-through" : "todo-item form-check-label"} htmlFor="gridCheck1">
                                {i.text}
                            </label>
                    </div>

                </div>

            )
          })}
      </ul>
    )
}
