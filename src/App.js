import React from 'react';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';

const feedUrl = "https://young-depths-68050.herokuapp.com/todos.json";
const todos = []

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
          <div>
            <h1>TodoList</h1>
            <CreateTodo createTask={this.createTask.bind(this)}/>
            <TodosList
              todos={this.state.todos}
              />
          </div>
        );
    }

    createTask(task) {
      this.state.todos.push({
        task,
        isCompleted: false
      });
      this.setState({todos: this.state.todos});
    }
}

export default App;
