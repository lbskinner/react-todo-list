import React from "react";

class TaskForm extends React.Component {
  render() {
    return (
      <div>
        <label>New Task:</label>
        <input
          type="text"
          placeholder="Enter New Task"
          onChange={this.props.enterNewTask}
        />
        <button
          onClick={(event) =>
            this.props.clickAddButton(event, this.props.newTask)
          }
        >
          Add New Task
        </button>
      </div>
    );
  }
}

export default TaskForm;
