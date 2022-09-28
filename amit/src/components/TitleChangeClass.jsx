import React, { Component } from 'react';

export class TitleChangeClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("did mount")
    document.title = `${this.state.count} times clicked`;
  }

  componentDidUpdate() {
    console.log("did update")
    document.title = `${this.state.count} times clicked`;
  }

  // Mounting phase will be called only for the first time loading.
  // Changing the state will only call updation phase.

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Count = {this.state.count}</button>
      </>
    );
  }
}