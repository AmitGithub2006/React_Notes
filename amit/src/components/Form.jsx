import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      country: "",
    };
  }

  handleEmail = (event) => {
    this.setState(
      {
        email: event.target.value,
      },
      () => {
        console.log("email ->", this.state.email);
      }
    );
  };
  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value,
      },
      () => {
        console.log("password ->", this.state.password);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  handleSelect = (event) => {
    console.log(event.target.value);
    this.setState({
      country: event.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <div>
            <label htmlFor="pwd">Password: </label>
            <input
              type="text"
              name="password"
              id="pwd"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <select
            onChange={this.handleSelect}
            value={this.state.country}
            name="countries"
            id="countries"
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

// If we control a form element using react then component is known as controlled component.
// If we directly use a form element then it is known as uncontrolled component.