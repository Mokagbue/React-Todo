import React from 'react';

function Todo(props) {
    return 
        <div>
            onClick={() => props.handleToggleComplete(props.todo.id)}
            <li>{props.todo}</li>
        </div>
            
}
export default Todo;