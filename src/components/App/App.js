import React from "react";
import "./App.css";
import Header from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";
import axios from "axios";
import TaskList from "../TaskLits/TaskList";

class App extends React.Component {
  state = {
    newTask: {
      task: "",
    },
    taskList: [],
  };

  componentDidMount() {
    console.log("Component App Did Mount");
    this.getTasks();
  }

  enterNewTask = (event) => {
    this.setState(
      {
        newTask: {
          task: event.target.value,
        },
      },
      () => {
        console.log(this.state.newTask);
      }
    );
  };

  clickDeleteButton = (event, taskId) => {
    console.log("Delete Button Clicked: ", taskId);
    // delete task
    axios({
      method: "DELETE",
      url: `/tasks/${taskId}`,
    })
      .then((response) => {
        console.log("Server DELETE Response: ", response.data);
        this.getTasks();
      })
      .catch((error) => {
        console.log(`DELETE ERROR: ${error}`);
      });
  };

  clickCompleteButton = (event, taskId) => {
    console.log("Complete Button Clicked: ", taskId);
    // put/update complete status
    axios({
      method: "PUT",
      url: `/tasks/${taskId}`,
    })
      .then((response) => {
        console.log("Server PUT Response: ", response.date);
        this.getTasks();
      })
      .catch((error) => {
        console.log(`PUT ERROR: ${error}`);
      });
  };

  clickAddButton = (event, newTask) => {
    console.log("Clicked Added Button: ", this.state.newTask);
    // post task to server
    axios({
      method: "POST",
      url: "/tasks",
      data: newTask,
    })
      .then((response) => {
        console.log("Server POST Response: ", response.data);
        this.getTasks();
      })
      .catch((error) => {
        console.log(`POST ERROR: ${error}`);
      });
  };

  getTasks() {
    axios({
      method: "GET",
      url: "/tasks",
    })
      .then((response) => {
        console.log("Server GET Response: ", response.data);
        this.setState({
          taskList: [...response.data],
        });
      })
      .catch((error) => {
        console.log(`GET ERROR: ${error}`);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <TaskForm
          newTask={this.state.newTask}
          enterNewTask={this.enterNewTask}
          clickAddButton={this.clickAddButton}
        />
        <TaskList
          taskList={this.state.taskList}
          clickCompleteButton={this.clickCompleteButton}
          clickDeleteButton={this.clickDeleteButton}
        />
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
