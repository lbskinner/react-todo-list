import React from "react";
import "./App.css";
import Header from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";
import axios from "axios";
import TaskList from "../TaskLits/TaskList";

class App extends React.Component {
  state = {
    taskList: [],
  };

  componentDidMount() {
    console.log("Component App Did Mount");
    this.getTasks();
  }

  getTasks() {
    axios({
      method: "GET",
      url: "/tasks",
    })
      .then((response) => {
        console.log(`Server GET Response: ${response.data}`);
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
        <TaskForm />
        <TaskList taskList={this.state.taskList} />
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
