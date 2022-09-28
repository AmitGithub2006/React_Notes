import React, {Component} from "react";

class Header extends Component {
    render (){
        return (
            <div className="header">
                <p className="fw-bold">{this.props.name}</p>
                <p>{this.props.learn}</p>
            </div>
        )
    }
}

export default Header;