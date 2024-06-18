import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/Homepage';
import './App.css';

let root = ReactDOM.createRoot(document.querySelector("#root"));

const Container = () => {
    return (
      <div id="container">
        <HomePage/>
        <AboutUs/>
        <ElectionNews />
        <Rules/>
        <SignUp/>
      </div>
    );
  };

  root.render(<Container/>)