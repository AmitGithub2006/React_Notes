import React, { Component } from "react";
import { PureComp } from "./PureComp";
import { RegularComp } from "./RegularComp";

export class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "amit",
    };
  }

  render() {
    console.log("----Parent component-----");
    return (
      <>
        <p>Parent component</p>
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
        <button onClick={() => this.setState({ name: "vasanth" })}>
          change name
        </button>
        <button onClick={() => this.forceUpdate()}>force update</button>
        {/* If state or props is changing then only our page will refresh but if we are not changing any of these and want to refresh our page manually the we can use this forceUpdate() method. But it is not suggested to use. */}
      </>
    );
  }
}
