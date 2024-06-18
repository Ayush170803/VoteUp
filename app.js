import React from "react";
import ReactDOM from "react-dom";


let root = ReactDOM.createRoot(document.querySelector("#root"));

const Container = () => {
    return (
      <div id="container">
        <Homepage/>
        <AboutUs/>
        <ElectionNews />
        <Rules/>
        <SignUp/>
      </div>
    );
  };

  root.render(<Container/>)