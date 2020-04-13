import React from "react";

class TaskList extends React.Component {
  render() {
    const taskElements = this.props.taskList.map((task, index) => {
      return (
        <div key={index}>
          <p>{task.task}</p>
          <button
            onClick={(event) => this.props.clickCompleteButton(event, task.id)}
          >
            Complete
          </button>
          <button>Delete</button>
        </div>
      );
    });
    return <div>{taskElements}</div>;
  }
}

export default TaskList;
