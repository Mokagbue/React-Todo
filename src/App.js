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
