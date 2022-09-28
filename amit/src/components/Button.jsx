import React, { PureComponent } from 'react';

export class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "Submit",
      count: 0,
    };
  }
//   increment = async () => {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count,
//       };
//     });

//   await this.setState(
//       {
//           count: this.state.count + 1,
//       },
//       () => console.log("first", this.state.count)
//   )
//   console.log("between", this.state.count)
//   await this.setState(
//       {
//           count: this.state.count + 1,
//       },
//       () => console.log("second", this.state.count),
//       this.state.count
//   );
//   }

  // Firstly see the console without writing async here, it is clear that the first setState is not executed, the value of count increases only at the second setState. Reason :- When the first setState is executed, the value of count increases i.e the state is changed so rendering will happen but as wkt js doesn't wait for anyone so it will not wait for rendering and move to the next setState.
  // By make it asynchronous, we forcefully let the js wait till the first setState is executed and rendering will happen completely.But it is not the right way to do this. We will do this by prevState.

  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count,
      };
    });

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log("between", this.state.count);
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        {this.state.text}
        <button onClick={this.increment}>increment</button>
      </>
    );
  }
}