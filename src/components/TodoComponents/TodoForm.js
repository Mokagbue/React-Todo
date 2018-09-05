import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addUser}>Add to List</button>
        </form>
    );
}
export default TodoForm;