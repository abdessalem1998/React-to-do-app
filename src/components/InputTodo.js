import React, { Component } from 'react';
/* eslint-disable  */

class InputTodo extends Component {
  state = {
   title: "";
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo
