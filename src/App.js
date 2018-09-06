import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoStyle from './components/TodoComponents/TodoStyling.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      inputText: ""
    };
  }

  //properties

  addUser =event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        users: [...this.state.users, this.state.inputText],
        inputText: ""
      });
      }
    };

    handleInput = event => {
      this.setState({
        inputText: event.target.value
      });
    };

    

    toggleTodo = id => {
      const users = users.map(todo => { //this is copying the State array aka(let todos = [...this.state.todos];)
        if (todo.id === id) { //find the todo with matching ids
          todo.completed = !todo.completed;//Toggle Maker here: toggle completed property
          return todo; //whichever it is return it
        } else {  
          return todo; //whichever it is return it
        }
      });
      this.setState({ users }); //setting it up to change the state
    };

    render() {
      return (
        <div className="todoListStyles">
          <TodoStyle />
          <TodoList users={this.state.users} />
          <TodoForm
            addUser={this.addUser}
            inputText={this.state.inputText}
            handleInput={this.handleInput}
          />
        </div>
      );
    }
  }

export default App;
