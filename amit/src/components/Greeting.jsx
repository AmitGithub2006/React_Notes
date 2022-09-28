import React, {Component} from "react";

export class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    getWelcomeMsg = () => {
        let welcomeMessege = <p>Please login</p>
        if (this.state.isLoggedIn) {
            welcomeMessege = (
                <>
                <h2>Hi user!</h2>
                <p>Welcome admin</p>
                </>
            )
        }
        return welcomeMessege;
    }


    render() {
        // if (this.state.isLoggedIn) {
        //     return <p>Welcome admin</p>
        // } else {
        //     return <p>Please login</p>
        // }

        // OR

        // return (
        //     <>
        //     <h2>Hi user!</h2>
        //     {this.state.isLoggedIn ? <p>Welcome admin</p> : <p>Please Login</p>}
        //     </>
        //     )

        // OR

        // let welcomeMessege;
        // if(this.state.isLoggedIn) {
        //     welcomeMessege = <p>Welcome admin</p>;
        // } else {
        //     welcomeMessege = <p>Please login</p>;
        // }

        // return (
        //     <>
        //     <h2>Hi user!</h2>
        //     {welcomeMessege}
        //     </>
        // )

        // OR

        return(
            <>
            {this.getWelcomeMsg()}
            </>
        )

    }
}