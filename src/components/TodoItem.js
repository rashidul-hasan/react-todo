import React, {useState} from 'react';


export const TodoItem = (props) => {

    const i = props.todo;

    const [editButtonVisble, setEditButtonState] = useState(false);
    const [editing, setEditingState] = useState(false);
    const [editedTodo, setEditedTodo] = useState({});

    const onTodoStateChange = (e) => {
    	const id = e.target.value;
      	const isChecked = e.target.checked;
      	props.onTodoStateChange(id, isChecked);
    }

    const onMouseEnter = (e) => {
        setEditButtonState(true);
    }

    const onMouseLeave = (e) => {
        setEditButtonState(false);
    }

    const onEditTodo = () => {
        props.onTodoEdited(editedTodo);
        setEditingState(false);
    }

    const onEditButtonPress = () => {
        setEditingState(true);
    }

    
    return (
        <div className="list-group-item" key={i.id} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="form-check">
            <div class="custom-control custom-checkbox">
                { !editing &&
                    <>
                        <input type="checkbox" class="custom-control-input" id={`todo-${i.id}`} defaultChecked={i.done}
                        onClick={onTodoStateChange} value={i.id} />
                        <label className={i.done ? "custom-control-label todo-item strike-through" : "todo-item custom-control-label"} 
                            for={`todo-${i.id}`}>{i.text}
                        </label>
                    </>
                }
                { editing &&
                    <>
                        <input type="text" class="form-control" 
                        onClick={onTodoStateChange} defaultValue={i.text} id={i.id} onChange={ e => setEditedTodo({id: e.target.id, text: e.target.value})}/>
                        <button className="btn btn-link" onClick={onEditTodo}>Save</button>
                    </>
                }
                {(editButtonVisble && !editing) &&
                    <button className="btn btn-link" onClick={() => onEditButtonPress(i)}>Edit</button>
                }
                </div>
            </div>

        </div>
    )
}
