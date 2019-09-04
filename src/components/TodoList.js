import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = (props) => {

    return (
        <ul className="list-group">
          {props.todos.map (i  => <TodoItem todo={i} 
                                    onTodoEdited={props.onTodoEdited}
                                    onTodoStateChange={props.onTodoStateChange} />)}
      </ul>
    )
}
