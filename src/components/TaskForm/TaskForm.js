import React from "react";

class TaskForm extends React.Component {
  render() {
    return (
      <div>
        <label>New Task:</label>
        <input type="text" placeholder="Enter New Task" />
        <button>Add New Task</button>
      </div>
    );
  }
}

export default TaskForm;
