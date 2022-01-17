import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.todos.map((todo) => ( // eslint-disable-line
          <li>{todo.title}</li> // eslint-disable-line
        ))}
      </ul>
    );
  }
}
export default TodoContainer;
