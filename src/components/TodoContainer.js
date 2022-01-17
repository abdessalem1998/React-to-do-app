import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

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
      <div>
        <Header />
        <TodosList todos={
          this.state.todos// eslint-disable-line
      } />
      </div>
    );
  }
}
export default TodoContainer;
