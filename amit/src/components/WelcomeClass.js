import React, { Component } from 'react';
import { Child } from './Child';

// export class WelcomeClass extends Component {
//     render() {
//         return <h1>Welcome to class based component.</h1>
//     }
// }

export class WelcomeClass extends Component {
    render() {
        const { name,age } = this.props;
        // this.props.name = "vasanth"; This will throw an error as props are read-only data.
        return (
            <div>
                <Child />
            <h1>
                Welcome to AirCampus {name}. My age is {age}.
            </h1>
            </div>
        )
    }
}