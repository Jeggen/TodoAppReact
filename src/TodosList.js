import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

class TodoList extends React.Component {
  constructor() {
    super();
  }

  createTodo(event) {
    event.preventDefault();

    jQuery.ajax({
      type: "POST",
      url: "https://young-depths-68050.herokuapp.com/todos.json",
      data: JSON.stringify({
          todo: newTodo
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.newTodoInput.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
    } {...todo} />);
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}


export default TodosList;
