import React from 'react';
/* eslint-disable  */
class TodoItem extends React.Component {

  render() {
    return (
      <li>{this.props.todo.title}</li>
    );
  }
}
export default TodoItem;
