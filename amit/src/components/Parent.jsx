import React from 'react';
import { Child } from "./Child"

export class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentText: "parent default"
        }
    }

    parentTextChange = () => {
        this.setState({
            parentText: "parent changed"
        })
    }

    changeParentText = () => {
        this.setState({
            parentText: "parent changed by child"
        })
    }
    render() {
        return (
            <>
            <h2>This is a parent component - {this.state.parentText}</h2>
            <button onClick={this.parentTextChange}>parent</button>
            <Child changeParentText = {this.changeParentText} />
            </>
        )
    }
}