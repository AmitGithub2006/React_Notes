import React from 'react';

export class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("initialization")
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    // lifecycle methods
    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    shouldComponentUpdate() {
        console.log("should component update");
        return true;
    }

    componentWillUpdate() {
        console.log("component will update");
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        // this.setState({ count: this.state.count + 1}); // wrong method
        console.log("rendering");
        return(
            <>
            <h1>count = {this.state.count}</h1>
            <button onClick={this.incrementCount}>increment</button>
            </>
        )
    }
}
