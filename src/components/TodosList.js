import React from 'react';
/* eslint-disable  */
class TodosList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}
export default TodosList;
