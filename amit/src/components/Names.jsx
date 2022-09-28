import React, { Component } from "react";

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["aarush", "aditya", "amit", "ashish"],
    };
  }

  render() {
    let namesTag = this.state.names.map((name) => <p key={name}>{name}</p>);
    // return (
    //     <>
    //     <p>{this.state.names[0]}</p>
    //     <p>{this.state.names[1]}</p>
    //     <p>{this.state.names[2]}</p>
    //     <p>{this.state.names[3]}</p>
    //     </>
    // )

    // OR

    // return (
    //     this.state.names.map(name => <p key={name}>{name}</p>)
    // )

    // OR

    return namesTag;
  }
}
