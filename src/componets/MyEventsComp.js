import React, { Component } from "react";

class MyEventsComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  greeting = () => {
    window.alert("How Are You All");
  };
  welcome = (myName) => {
    window.alert(`Hello EveryOne , I am ${myName}`);
  };
  incrementCounter = () => {
    // this.setState({count:this.state.count+1});
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h2>This is MyEvent class Component</h2>
        <button type="button" onClick={this.greeting}>
          Greet
        </button>{" "}
        <button type="button" onClick={() => this.welcome("Panchashil")}>
          Welcome
        </button>
        <h2 onMouseOver={() => this.welcome("Panchashil")}>
          Hover On Me To Call welcome
        </h2>
        <hr />
        <p>
          Counter value is : <strong>{this.state.count}</strong>
        </p>
        <button type="button" onClick={this.incrementCounter}>
          Count++
        </button>
      </div>
    );
  }
}

export default MyEventsComp;
