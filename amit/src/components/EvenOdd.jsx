import React, {Component} from "react";

export class EvenOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    clickBtn = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }


    render() {
        return (
            <>
            <h2>Count={this.state.count}</h2>
            {this.state.count % 2 === 0 ? "Even" : "Odd"} <br />
            <button onClick={this.clickBtn}>Click</button>
            
            </>
        )
    }
}
