import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoStyle from './components/TodoComponents/TodoStyling.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  //properties

  addTodo = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo:""});
  };

  changeTodo = event => this.setState({
    [event.target.name]: event.target.value});
    
    toggleTodoComplete = id => {
      let todos = todos.map(todo => { //this is copying the State array aka(let todos = [...this.state.todos];)
        if (todo.id === id) { //find the todo with matching ids
          todo.completed = !todo.completed;//Toggle Maker here: toggle completed property
          return todo; //whichever it is return it
        } else {  
          return todo; //whichever it is return it
        }
      });
      this.setState({ todos }); //setting it up to change the state
    };

    clearCompleteTodos = event => {
      event.preventDefault();
      let todos = this.state.todos.slice();
      todos = todos.filter(todo => !todo.completed);
      this.setState({ todos});
    };

    render() {
      return (
        <div className="todoListStyles">
          <TodoStyle />
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todos={this.state.todos}
          />
          <TodoForm
            value={this.state.todo}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            handleClearTodos={this.clearCompletedTodos}
          />
        </div>
      );
    }
  }

export default App;
