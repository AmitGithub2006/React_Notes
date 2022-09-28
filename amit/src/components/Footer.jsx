import React, {Component} from "react";

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <p>&copy; {this.props.name} </p>
                <p>This is the footer</p>
            </div>
        )
    }
}

export default Footer;