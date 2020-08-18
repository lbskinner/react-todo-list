import React from "react";
import "./App.css";

// star ratings example, below is the answer I submitted for the timed code assessment, needs to be refactored
// Ethan has a better version
class App extends React.Component {
  state = {
    class: [],
  };

  handleClick = (event, index) => {
    let stars = ["active", "active", "active", "active", "active"];
    stars.splice(index, stars.length);
    console.log(stars);
    this.setState({
      class: [...stars],
    });
  };

  render() {
    return (
      <div id="rating">
        <span
          className={this.state.class[0]}
          onClick={(event) => this.handleClick(event, 1)}
        >
          *
        </span>
        <span
          className={this.state.class[1]}
          onClick={(event) => this.handleClick(event, 2)}
        >
          *
        </span>
        <span
          className={this.state.class[2]}
          onClick={(event) => this.handleClick(event, 3)}
        >
          *
        </span>
        <span
          className={this.state.class[3]}
          onClick={(event) => this.handleClick(event, 4)}
        >
          *
        </span>
        <span
          className={this.state.class[4]}
          onClick={(event) => this.handleClick(event, 5)}
        >
          *
        </span>
      </div>
    );
  }
}

export default App;
