import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childText: "child default",
    };
  }

  childTextChange = () => {
    this.setState({
        childText: "child changed"
    })
  }


  render(){
    console.log("child");
    console.log("child props", this.props);
    return (
        <>
        <h2>This is a child component - {this.state.childText}</h2>
        <button onClick={this.childTextChange}>child</button>
        <button onClick={this.props.changeParentText}>change parent from child</button>
        </>
    )
  }
}
