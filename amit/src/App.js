import React, { useState } from "react";
// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { WelcomeFn } from "./components/WelcomeFn";
// import { WelcomeClass } from "./components/WelcomeClass";
// import { Toggle } from "./components/Toggle";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Check } from "./components/Check";
// import { RefExample } from "./components/RefExample";
// import { DataFetch } from "./components/DataFetch";
import { ComponentA } from "./components/ComponentA";
import { CounterOne } from "./components/CounterOne";
import { CounterTwo } from "./components/CounterTwo";
import { DocTitleOne } from "./components/DocTitleOne";
import { DocTitleTwo } from "./components/DocTitleTwo";
import { MemoCounter } from "./components/MemoCounter";
// import GitAPI from "./components/GitAPI";
import { ReducerCounter } from "./components/ReducerCounter";
// import Weather from "./components/Weather";

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Amit" };
//   }
  // Named export
  // export function App() {
  // render() {
  //   return (
  //     <>
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
        
//       </>
//     );
//   }
// }

export function App () {
  // const [valid, setValid] = useState(0)
  const [name, setName] = useState("amit")
  const [age, setAge] = useState("10")
  return (
    <>
      {/* {(valid < 10 || valid > 15) && <Check />}
    <button onClick={() => setValid((prev) => prev + 1)}>click = {valid}</button> */}
      {/* <RefExample /> */}
      {/* <DataFetch /> */}
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
          <ComponentA />
        </AgeContext.Provider>
      </NameContext.Provider>
      {/* <Weather /> */}
      {/* <GitAPI /> */}
      {/* <ReducerCounter /> */}
      {/* <MemoCounter /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
    </>
  );
}

export default App;
