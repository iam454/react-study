import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super();
    console.log("constructor");
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }

  tick() {
    console.log("tick");
    this.setState({ date: new Date() });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
