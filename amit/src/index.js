import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Main } from "./components/Main"
import { Parent } from "./components/Parent"
import { Child } from "./components/Child"
import reportWebVitals from './reportWebVitals';
import { Greeting } from "./components/Greeting";
import { EvenOdd } from './components/EvenOdd';
import { Names } from "./components/Names";
import { Insta } from "./components/Insta"
import { LifeCycle } from './components/LifeCycle';
import { Functional } from './components/Functional';
import { Form } from './components/Form';
import { Button } from "./components/Button"
import { Primary } from "./components/Primary"
import { ErrorBoundary } from './components/ErrorBoundary';
import { CounterHooks } from './components/CounterHooks';
import { StateWithObject } from './components/StateWithObject';
import { StateWithArray } from './components/StateWithArray';
import { TitleChangeClass } from './components/TitleChangeClass';
import { TitleChangeHooks } from "./components/TitleChangeHooks"
import { Check } from './components/Check';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
    {/* <Main /> */}
    {/* <Parent /> */}
    {/* <Child /> */}
    {/* <Greeting /> */}
    {/* <EvenOdd /> */}
    {/* <Names /> */}
    {/* <Insta /> */}
    {/* <LifeCycle /> */}
    {/* <Functional name={["amit", "ketan", "vasanth"]}/> */}
    {/* <Form /> */}
    {/* <Button /> */}
    {/* <Primary /> */}
    {/* <ErrorBoundary /> */}
    {/* <CounterHooks /> */}
    {/* <StateWithObject /> */}
    {/* <StateWithArray /> */}
    {/* <TitleChangeClass /> */}
    {/* <TitleChangeHooks /> */}
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();