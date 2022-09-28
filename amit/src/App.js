import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WelcomeFn } from "./components/WelcomeFn";
import { WelcomeClass } from "./components/WelcomeClass";
import { Toggle } from "./components/Toggle";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Amit" };
  }

  // Named export
  // export function App() {
  render() {
    return (
      <>
        {/* <h1 className='welcome'>This is my heading</h1>
    <p>Welcome to react</p>
      <WelcomeClass name="sameer" age="20" />
      <WelcomeClass name="anjali" age="17" />
      <WelcomeClass name="amit" age="19" /> */}
    {/* <WelcomeFn /> */}
    {/* <Toggle /> */}
    {/* <WelcomeClass /> */}
        {/* <Header name={this.state.name} learn="Let's learn React" /> */}
        {/* <Footer name={this.state.name} /> */}
        
      </>
    );
  }
}

export default App;
