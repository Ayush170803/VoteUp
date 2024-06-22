import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/Homepage/Homepage';
import ElectionNews from "./components/News/ElectionNews";
import './App.css';

let root = ReactDOM.createRoot(document.querySelector("#root"));

const Container = () => {
    return (
      <div id="container">
        <ElectionNews/>
      </div>
    );
  };

  root.render(<Container/>)